import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import path from "path"

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  organization?: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    const { firstName, lastName, email, organization, subject, message } = body

    // Validation basique
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis." },
        { status: 400 }
      )
    }

    // 1. Sauvegarder le message dans JSON Server
    const jsonServerUrl = process.env.JSON_SERVER_URL || "http://localhost:3001"
    try {
      await fetch(`${jsonServerUrl}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          organization: organization || "",
          subject,
          message,
          createdAt: new Date().toISOString(),
          status: "non_lu",
        }),
      })
    } catch {
      // JSON Server optionnel en phase de test - on continue même si indisponible
      console.warn("JSON Server non disponible, message non sauvegardé en base locale.")
    }

    // 2. Envoyer l'email en arrière-plan (ne bloque pas la réponse)
    const now = new Date()
    const dateStr = now.toLocaleDateString("fr-FR", { dateStyle: "full" })
    const timeStr = now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">

        <!-- En-tête avec logo PNG -->
        <div style="background: linear-gradient(135deg, #0A5C8E 0%, #0E8C6A 100%); padding: 24px 32px; text-align: center;">
          <img src="cid:meal-logo@meal.sn" alt="MEAL" style="height: 70px; width: auto; display: inline-block;" />
        </div>

        <!-- Bandeau titre -->
        <div style="background: #f4a800; padding: 12px 32px;">
          <p style="margin: 0; font-size: 13px; font-weight: 600; color: #1a1a1a; letter-spacing: 1px; text-transform: uppercase;">
            Nouveau message de contact
          </p>
        </div>

        <!-- Corps -->
        <div style="padding: 32px;">

          <!-- Introduction personnalisée -->
          <p style="font-size: 15px; color: #374151; line-height: 1.7; margin: 0 0 24px;">
            Vous avez reçu une nouvelle demande de la part de
            <strong style="color: #0A5C8E;">${firstName} ${lastName}</strong>
            ${organization ? `(<em>${organization}</em>) ` : ""}
            concernant : <strong style="color: #0E8C6A;">${subject}</strong>.
          </p>

          <!-- Tableau des infos -->
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; border-radius: 8px; overflow: hidden;">
            <tr>
              <td style="padding: 12px 16px; font-weight: 600; font-size: 13px; background: #f1f5f9; color: #475569; width: 32%; border-bottom: 1px solid #e2e8f0;">Nom complet</td>
              <td style="padding: 12px 16px; font-size: 14px; color: #1e293b; background: #ffffff; border-bottom: 1px solid #e2e8f0; border-left: 3px solid #0A5C8E;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: 600; font-size: 13px; background: #f1f5f9; color: #475569; border-bottom: 1px solid #e2e8f0;">Email</td>
              <td style="padding: 12px 16px; font-size: 14px; background: #ffffff; border-bottom: 1px solid #e2e8f0; border-left: 3px solid #0A5C8E;">
                <a href="mailto:${email}" style="color: #0A5C8E; text-decoration: none;">${email}</a>
              </td>
            </tr>
            ${organization ? `
            <tr>
              <td style="padding: 12px 16px; font-weight: 600; font-size: 13px; background: #f1f5f9; color: #475569; border-bottom: 1px solid #e2e8f0;">Organisation</td>
              <td style="padding: 12px 16px; font-size: 14px; color: #1e293b; background: #ffffff; border-bottom: 1px solid #e2e8f0; border-left: 3px solid #0A5C8E;">${organization}</td>
            </tr>
            ` : ""}
            <tr>
              <td style="padding: 12px 16px; font-weight: 600; font-size: 13px; background: #f1f5f9; color: #475569;">Objet</td>
              <td style="padding: 12px 16px; font-size: 14px; color: #1e293b; background: #ffffff; border-left: 3px solid #0A5C8E;">${subject}</td>
            </tr>
          </table>

          <!-- Message -->
          <div style="background: #f8fafc; border-left: 4px solid #0E8C6A; border-radius: 0 8px 8px 0; padding: 20px 24px; margin-bottom: 24px;">
            <p style="margin: 0 0 10px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #64748b;">Message :</p>
            <p style="margin: 0; font-size: 14px; line-height: 1.8; color: #334155; white-space: pre-wrap;">${message}</p>
          </div>

          <!-- Bouton répondre -->
          <div style="text-align: center; margin-bottom: 8px;">
            <a href="mailto:${email}?subject=Re: ${subject}"
               style="display: inline-block; background: linear-gradient(135deg, #0A5C8E 0%, #0E8C6A 100%); color: white; text-decoration: none; padding: 12px 32px; border-radius: 8px; font-size: 14px; font-weight: 600; letter-spacing: 0.5px;">
              ↩ Répondre à ${firstName}
            </a>
          </div>

        </div>

        <!-- Pied de page -->
        <div style="background: #f1f5f9; padding: 16px 32px; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0; font-size: 12px; color: #94a3b8; text-align: center;">
            Message reçu le <strong>${dateStr}</strong> à <strong>${timeStr}</strong> — Cabinet MEAL · Dakar, Sénégal
          </p>
        </div>

      </div>
    `

    // Fire & forget : on n'attend pas l'email pour répondre au client
    nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    }).sendMail({
      from: `"MEAL - Formulaire de contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL_TO || "cabinet.meal@gmail.com",
      replyTo: email,
      subject: `[MEAL Contact] ${subject}`,
      html: htmlBody,
      attachments: [
        {
          filename: "meal-logo.png",
          path: path.join(process.cwd(), "public", "images", "meal-sn-logo.png"),
          cid: "meal-logo@meal.sn",
        },
      ],
    }).catch((err: unknown) => {
      console.error("Erreur envoi email (non bloquant):", err)
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Erreur envoi email:", error)
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    )
  }
}
