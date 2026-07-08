"use client"

import { useState } from "react"
import Image from "next/image"
import { Target, Eye, Shield, BookOpen, Star, Users, Gem, ChevronRight } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"

const TABS = ["Qui sommes-nous", "Vision", "Mission", "Valeurs", "Expertise"] as const
type Tab = typeof TABS[number]

const VALUES = [
  { icon: Star, title: "Excellence", description: "Nous visons les plus hauts standards de qualité dans chaque livrable et chaque intervention." },
  { icon: Shield, title: "Intégrité", description: "Transparence, honnêteté et éthique professionnelle sont au cœur de notre pratique." },
  { icon: Users, title: "Inclusivité", description: "Nous intégrons toutes les voix, notamment celles des bénéficiaires, dans nos processus." },
  { icon: Gem, title: "Innovation", description: "Nous adoptons les outils et méthodes les plus modernes pour améliorer nos services." },
  { icon: BookOpen, title: "Apprentissage", description: "Nous capitalisons sur chaque expérience pour améliorer nos pratiques et partager les savoirs." },
  { icon: Target, title: "Impact", description: "Chaque action est orientée vers des résultats mesurables et durables pour les communautés." },
]

const EXPERTISE_DOMAINS = [
  { sector: "Santé & Nutrition", color: "bg-rose-500/10 text-rose-600 border-rose-200" },
  { sector: "Éducation & Formation", color: "bg-blue-500/10 text-blue-600 border-blue-200" },
  { sector: "Agriculture & Environnement", color: "bg-emerald-500/10 text-emerald-600 border-emerald-200" },
  { sector: "Gouvernance & Droits", color: "bg-violet-500/10 text-violet-600 border-violet-200" },
  { sector: "Genre & Protection", color: "bg-orange-500/10 text-orange-600 border-orange-200" },
  { sector: "Urgence & Résilience", color: "bg-primary/10 text-primary border-primary/20" },
]

const MEAL_PILLARS = [
  { icon: Target, title: "Monitoring", description: "Suivi continu et systématique des indicateurs de performance pour mesurer les progrès des projets." },
  { icon: Eye, title: "Evaluation", description: "Analyses rigoureuses de l'impact et de l'efficacité des programmes de développement." },
  { icon: Shield, title: "Accountability", description: "Transparence et redevabilité envers les bénéficiaires, partenaires et bailleurs de fonds." },
  { icon: BookOpen, title: "Learning", description: "Capitalisation des leçons apprises pour améliorer les interventions futures." },
]

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Qui sommes-nous")
  const [selectedCard, setSelectedCard] = useState<string | null>(null)

  return (
    <section id="apropos" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <AnimatedSection animation="fade-up">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              À propos
            </span>
            <h2 className="text-3xl font-bold text-foreground font-[var(--font-heading)] md:text-4xl">
              Découvrez MEAL
            </h2>
          </div>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all duration-200",
                  activeTab === tab
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "border border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Tab Content */}
        <AnimatedSection animation="fade-up" delay={150}>
          {activeTab === "Qui sommes-nous" && (
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <Image src="/images/about-team.jpg" alt="Équipe MEAL" fill className="object-cover" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/10" />
              </div>
              <div className="space-y-5">
                <h3 className="text-2xl font-bold text-foreground font-[var(--font-heading)]">
                  Une expertise reconnue en Afrique de l'Ouest
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  MEAL est une plateforme digitale spécialisée dans les services de Monitoring,
                  Evaluation, Accountability & Learning. Nous accompagnons les organisations dans
                  la conception et la mise en œuvre de systèmes MEAL robustes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Notre approche intègre les meilleures pratiques internationales adaptées au
                  contexte africain, avec une équipe pluridisciplinaire de consultants chevronnés.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {["Projets évalués", "Pays couverts", "Professionnels formés", "Années d'expérience"].map((lbl) => (
                    <button
                      key={lbl}
                      type="button"
                      onClick={() => setSelectedCard(lbl)}
                      className={cn(
                        "rounded-xl border px-5 py-5 text-center shadow-sm backdrop-blur-xl transition-all duration-200",
                        selectedCard === lbl
                          ? "border-primary bg-primary text-primary-foreground shadow-md"
                          : "border-white/60 bg-white/35 hover:bg-white/50 dark:border-white/10 dark:bg-white/5"
                      )}
                    >
                      <p className={cn(
                        "mt-1 text-xs",
                        selectedCard === lbl ? "font-medium text-primary-foreground" : "text-muted-foreground"
                      )}>
                        {lbl}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "Vision" && (
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground font-[var(--font-heading)]">Notre Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-primary pl-5 italic">
                  "Être la plateforme de référence en Afrique pour le suivi-évaluation, la redevabilité
                  et l'apprentissage organisationnel, en contribuant à un développement durable et équitable."
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nous aspirons à un monde où chaque investissement de développement est mesuré,
                  documenté et optimisé pour maximiser son impact sur les populations les plus vulnérables.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <Image src="/images/fieldwork.jpg" alt="Vision MEAL" fill className="object-cover" />
                <div className="absolute inset-0 bg-secondary/50" />
              </div>
            </div>
          )}

          {activeTab === "Mission" && (
            <div className="space-y-8">
              <div className="text-center max-w-2xl mx-auto">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground font-[var(--font-heading)] mb-3">Notre Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Développer une plateforme digitale professionnelle permettant de promouvoir et
                  fournir des services MEAL de qualité à destination des acteurs du développement.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Consultance en S&E", desc: "Services d'évaluation et de suivi de projets et programmes de développement." },
                  { title: "Ressources techniques", desc: "Mise à disposition de ressources méthodologiques et d'outils pratiques." },
                  { title: "Publications", desc: "Publication de rapports d'évaluation et d'études de cas." },
                  { title: "Tableaux de bord", desc: "Intégration d'outils analytiques et de visualisations interactives." },
                  { title: "Formations", desc: "Renforcement des capacités des équipes MEAL et des professionnels." },
                  { title: "Prise de contact", desc: "Faciliter les demandes de devis et prestations en ligne." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 rounded-xl border border-border bg-card p-5">
                    <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">{item.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Valeurs" && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {VALUES.map((v, i) => {
                const Icon = v.icon
                return (
                  <div key={i} className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="mb-2 text-base font-bold text-foreground">{v.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                  </div>
                )
              })}
            </div>
          )}

          {activeTab === "Expertise" && (
            <div className="space-y-8">
              {/* MEAL Pillars */}
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {MEAL_PILLARS.map((p, i) => {
                  const Icon = p.icon
                  return (
                    <div key={i} className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h4 className="text-base font-bold text-foreground mb-2">{p.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                    </div>
                  )
                })}
              </div>
              {/* Sectors */}
              <div>
                <h4 className="mb-5 text-base font-bold text-foreground">Secteurs d'intervention</h4>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {EXPERTISE_DOMAINS.map((d, i) => (
                    <div key={i} className={`flex items-center justify-between rounded-xl border px-5 py-4 ${d.color}`}>
                      <span className="font-medium text-sm">{d.sector}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </AnimatedSection>
      </div>
    </section>
  )
}
