"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { AnimatedSection } from "@/components/animated-section"

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "cabinet.meal@gmail.com",
    href: "mailto:cabinet.meal@gmail.com",
  },
  {
    icon: Phone,
    label: "Telephone",
    value: "+221 77 840 98 32",
    href: "tel:+221778409832",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Dakar, Senegal",
    href: "#",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun - Ven : 8h - 18h",
    href: "#",
  },
] as const

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      organization: (form.elements.namedItem("organization") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const result = await response.json()
        throw new Error(result.error || "Une erreur est survenue.")
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="flex flex-col items-center text-center">
            <span className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Contact
            </span>
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-secondary-foreground font-[var(--font-heading)] md:text-5xl text-balance">
              Parlons de votre projet
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/70 text-pretty">
              Vous avez un projet de suivi-evaluation ? Contactez-nous
              pour une consultation gratuite et un devis personnalise.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <AnimatedSection animation="slide-left" className="lg:col-span-2">
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-bold text-secondary-foreground font-[var(--font-heading)]">
                Nos coordonnees
              </h3>

              <div className="flex flex-col gap-5">
                {CONTACT_INFO.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="group flex items-start gap-4 rounded-xl p-4 transition-colors hover:bg-secondary-foreground/5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wider text-secondary-foreground/50">
                        {info.label}
                      </span>
                      <p className="mt-0.5 text-base font-medium text-secondary-foreground">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="slide-right" className="lg:col-span-3">
            <div className="rounded-2xl border border-secondary-foreground/10 bg-card p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground font-[var(--font-heading)]">
                    Message envoye !
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground">
                    Merci pour votre message. Notre equipe vous repondra sous 24h.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="mt-6"
                  >
                    Envoyer un autre message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="firstName" className="text-card-foreground">
                        Prenom
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Votre prenom"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="lastName" className="text-card-foreground">
                        Nom
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Votre nom"
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email" className="text-card-foreground">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="organization" className="text-card-foreground">
                        Organisation
                      </Label>
                      <Input
                        id="organization"
                        placeholder="Votre organisation"
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="subject" className="text-card-foreground">
                      Objet
                    </Label>
                    <Input
                      id="subject"
                      placeholder="Sujet de votre message"
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message" className="text-card-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Decrivez votre projet ou besoin en suivi-evaluation..."
                      rows={5}
                      required
                      className="bg-background resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-destructive bg-destructive/10 px-4 py-3 rounded-lg">
                      {error}
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base font-semibold sm:w-auto sm:px-12"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                        Envoi en cours...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Envoyer le message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
