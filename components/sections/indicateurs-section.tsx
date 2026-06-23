"use client"

import { BarChart3, Target, TrendingUp, Activity, CheckCircle2, ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const INDICATOR_TYPES = [
  {
    icon: Target,
    color: "bg-primary/10 text-primary",
    title: "Indicateurs de résultats",
    description:
      "Mesure des livrables directs et immédiats produits par vos activités : nombre de bénéficiaires atteints, formations dispensées, infrastructures construites.",
    examples: ["Nb de bénéficiaires formés", "Taux de couverture", "Nb d'activités réalisées"],
  },
  {
    icon: TrendingUp,
    color: "bg-emerald-500/10 text-emerald-600",
    title: "Indicateurs d'impact",
    description:
      "Évaluation des changements à long terme générés par vos programmes sur les populations cibles et leur environnement.",
    examples: ["Réduction de la pauvreté", "Amélioration des revenus", "Accès aux services"],
  },
  {
    icon: Activity,
    color: "bg-blue-500/10 text-blue-600",
    title: "Indicateurs de processus",
    description:
      "Suivi de la mise en œuvre opérationnelle de vos activités : respect des délais, qualité des livrables et efficience des ressources.",
    examples: ["Taux d'exécution budgétaire", "Délais de livraison", "Qualité des prestations"],
  },
  {
    icon: BarChart3,
    color: "bg-violet-500/10 text-violet-600",
    title: "Indicateurs SMART",
    description:
      "Construction d'indicateurs Spécifiques, Mesurables, Atteignables, Réalistes et Temporellement définis pour un suivi rigoureux.",
    examples: ["Baseline & cible définis", "Sources vérifiables", "Fréquence de collecte"],
  },
]

const STEPS = [
  "Analyse des théories du changement",
  "Identification des indicateurs clés",
  "Définition des valeurs de référence (baseline)",
  "Mise en place des outils de collecte",
  "Suivi périodique et tableaux de bord",
  "Analyse des écarts et recommandations",
]

export function IndicateursSection() {
  return (
    <section id="indicateurs" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <AnimatedSection animation="fade-up">
          <div className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Cadre d'indicateurs
            </span>
            <h2 className="text-3xl font-bold text-foreground font-[var(--font-heading)] md:text-4xl mb-4">
              Indicateurs de performance
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
              Nous concevons et gérons des cadres d'indicateurs robustes pour mesurer avec précision
              l'efficacité et l'impact de vos projets de développement.
            </p>
          </div>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {INDICATOR_TYPES.map((item, i) => {
            const Icon = item.icon
            return (
              <AnimatedSection key={i} animation="fade-up" delay={i * 80}>
                <div className="group flex flex-col h-full rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-base font-bold text-foreground">{item.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed flex-1">
                    {item.description}
                  </p>
                  <ul className="space-y-1.5">
                    {item.examples.map((ex, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Process */}
        <AnimatedSection animation="fade-up">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
            <h3 className="mb-6 text-xl font-bold text-foreground font-[var(--font-heading)]">
              Notre démarche de construction d'indicateurs
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {STEPS.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="text-sm text-muted-foreground">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
