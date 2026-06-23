"use client"

import { useState } from "react"
import { GraduationCap, ClipboardCheck, BarChart3, ChevronRight, CheckCircle2, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"

const TABS = ["Formations", "Évaluation de projet", "Enquête / Sondage"] as const
type Tab = typeof TABS[number]

const FORMATIONS = [
  { id: "collecte", label: "Formation en collecte de données", duration: "3 jours", price: "Sur devis" },
  { id: "traitement", label: "Formation en traitement de données", duration: "3 jours", price: "Sur devis" },
  { id: "analyse", label: "Formation en analyse de données", duration: "4 jours", price: "Sur devis" },
  { id: "gestion_projet", label: "Formation en gestion de projet / programme", duration: "5 jours", price: "Sur devis" },
  { id: "gaf", label: "Formation de GAF (Gestion Administrative et Financière)", duration: "4 jours", price: "Sur devis" },
  { id: "gar", label: "Formation en Gestion Axée sur les Résultats (GAR)", duration: "3 jours", price: "Sur devis" },
  { id: "planification", label: "Formation en planification stratégique", duration: "3 jours", price: "Sur devis" },
  { id: "risques", label: "Formation en gestion des risques", duration: "2 jours", price: "Sur devis" },
  { id: "meal_system", label: "Mise en place d'un système MEAL", duration: "5 jours", price: "Sur devis" },
]

export function ReservationSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Formations")
  const [selectedFormation, setSelectedFormation] = useState<string | null>(null)
  const [formData, setFormData] = useState({ nom: "", email: "", organisation: "", telephone: "", message: "", format: "presentiel" })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="reservation" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <AnimatedSection animation="fade-up">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Nos prestations
            </span>
            <h2 className="text-3xl font-bold text-foreground font-[var(--font-heading)] md:text-4xl mb-4">
              Réservation & Demandes de service
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
              Choisissez le service qui correspond à vos besoins et soumettez votre demande.
              Notre équipe vous recontacte sous 48h.
            </p>
          </div>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {TABS.map((tab) => {
              const Icon = tab === "Formations" ? GraduationCap : tab === "Évaluation de projet" ? ClipboardCheck : BarChart3
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => { setActiveTab(tab); setSubmitted(false); setSelectedFormation(null) }}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200",
                    activeTab === tab
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "border border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {tab}
                </button>
              )
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={150}>
          {submitted ? (
            <div className="mx-auto max-w-lg rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">Demande envoyée !</h3>
              <p className="text-muted-foreground">
                Merci pour votre demande. Notre équipe vous contactera sous 48h pour confirmer votre réservation.
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Nouvelle demande
              </Button>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-5">
              {/* Left panel */}
              <div className="lg:col-span-2 space-y-3">
                {activeTab === "Formations" && (
                  <>
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-muted-foreground">
                      Choisissez une formation
                    </h3>
                    {FORMATIONS.map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setSelectedFormation(f.id)}
                        className={cn(
                          "w-full rounded-xl border p-4 text-left transition-all duration-200",
                          selectedFormation === f.id
                            ? "border-primary bg-primary/5 shadow-sm"
                            : "border-border bg-card hover:border-primary/30"
                        )}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-medium text-foreground leading-snug">{f.label}</p>
                          {selectedFormation === f.id && (
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          )}
                        </div>
                        <div className="mt-1.5 flex items-center gap-2">
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" /> {f.duration}
                          </span>
                          <span className="text-xs text-muted-foreground">·</span>
                          <span className="text-xs text-primary font-medium">{f.price}</span>
                        </div>
                      </button>
                    ))}
                  </>
                )}

                {activeTab === "Évaluation de projet" && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">Services d'évaluation</h3>
                    {[
                      { title: "Évaluation à mi-parcours", desc: "Analyse des progrès et ajustements stratégiques en cours de programme." },
                      { title: "Évaluation finale", desc: "Mesure complète de l'atteinte des objectifs et des effets du programme." },
                      { title: "Évaluation d'impact", desc: "Analyse causale des changements durables produits par votre intervention." },
                      { title: "Revue annuelle", desc: "Bilan périodique des résultats et réorientations opérationnelles." },
                    ].map((item, i) => (
                      <div key={i} className="rounded-xl border border-border bg-card p-4">
                        <p className="text-sm font-semibold text-foreground mb-1">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "Enquête / Sondage" && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">Types d'enquêtes</h3>
                    {[
                      { title: "Enquête baseline / endline", desc: "Collecte de données de référence et mesure des changements finaux." },
                      { title: "Enquête de satisfaction", desc: "Mesure de la satisfaction des bénéficiaires et parties prenantes." },
                      { title: "Sondage d'opinion", desc: "Recueil des perceptions et attentes des populations cibles." },
                      { title: "Étude KAP", desc: "Analyse des Connaissances, Attitudes et Pratiques des bénéficiaires." },
                    ].map((item, i) => (
                      <div key={i} className="rounded-xl border border-border bg-card p-4">
                        <p className="text-sm font-semibold text-foreground mb-1">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right - Form */}
              <form onSubmit={handleSubmit} className="lg:col-span-3 rounded-2xl border border-border bg-card p-7 shadow-sm space-y-5">
                <h3 className="text-lg font-bold text-foreground">
                  {activeTab === "Formations" ? "Réserver une formation" : activeTab === "Évaluation de projet" ? "Demander une évaluation" : "Commander une enquête"}
                </h3>

                {activeTab === "Formations" && selectedFormation && (
                  <div className="rounded-lg border border-primary/30 bg-primary/5 px-4 py-2.5 text-sm text-primary font-medium">
                    Formation sélectionnée : {FORMATIONS.find(f => f.id === selectedFormation)?.label}
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-foreground">Nom complet *</label>
                    <input
                      type="text"
                      required
                      value={formData.nom}
                      onChange={e => setFormData({ ...formData, nom: e.target.value })}
                      placeholder="Votre nom et prénom"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-foreground">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="votre@email.com"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-foreground">Organisation</label>
                    <input
                      type="text"
                      value={formData.organisation}
                      onChange={e => setFormData({ ...formData, organisation: e.target.value })}
                      placeholder="Nom de votre organisation"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-foreground">Téléphone</label>
                    <input
                      type="tel"
                      value={formData.telephone}
                      onChange={e => setFormData({ ...formData, telephone: e.target.value })}
                      placeholder="+221 XX XXX XX XX"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    />
                  </div>
                </div>

                {activeTab === "Formations" && (
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-foreground">Format souhaité</label>
                    <div className="flex gap-4">
                      {[["presentiel", "Présentiel"], ["enligne", "En ligne"], ["hybride", "Hybride"]].map(([val, lbl]) => (
                        <label key={val} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="format"
                            value={val}
                            checked={formData.format === val}
                            onChange={e => setFormData({ ...formData, format: e.target.value })}
                            className="accent-primary"
                          />
                          <span className="text-sm text-foreground">{lbl}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-foreground">Message / Précisions</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Décrivez vos besoins, le contexte du projet, la période souhaitée..."
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 font-semibold">
                  Envoyer la demande <ChevronRight className="ml-1 h-4 w-4" />
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Notre équipe vous recontacte sous 48h ouvrées. Zéro engagement.
                </p>
              </form>
            </div>
          )}
        </AnimatedSection>
      </div>
    </section>
  )
}
