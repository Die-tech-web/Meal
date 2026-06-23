"use client"

import Image from "next/image"
import { FileText, BarChart2, ClipboardList, BookOpen, Download, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import Link from "next/link"

const REPORT_TYPES = [
  {
    icon: ClipboardList,
    title: "Rapport de démarrage",
    description: "Cadrage initial du projet, plan de travail, matrice des indicateurs et outils de collecte de données.",
    badge: "Démarrage",
    badgeColor: "bg-blue-500/10 text-blue-600 border-blue-200",
  },
  {
    icon: BarChart2,
    title: "Rapport de suivi (trimestriel)",
    description: "Avancement des activités, analyse des indicateurs, taux d'exécution budgétaire et mesures correctives.",
    badge: "Suivi",
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
  },
  {
    icon: FileText,
    title: "Rapport d'évaluation",
    description: "Analyse approfondie de la pertinence, efficacité, efficience, impact et durabilité de votre programme.",
    badge: "Évaluation",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
  },
  {
    icon: BookOpen,
    title: "Rapport d'impact",
    description: "Démonstration des changements réels et mesurables produits par le programme sur les bénéficiaires.",
    badge: "Impact",
    badgeColor: "bg-violet-500/10 text-violet-600 border-violet-200",
  },
]

const FEATURES = [
  "Narration visuelle des données (data storytelling)",
  "Visualisations interactives et graphiques",
  "Recommandations pratiques et priorisées",
  "Format adapté aux exigences des bailleurs",
  "Versions exécutive et technique",
  "Livrables en français, anglais ou wolof",
]

export function RapportsSection() {
  return (
    <section id="rapports" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <AnimatedSection animation="fade-up">
          <div className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Documentation &amp; Livrables
            </span>
            <h2 className="text-3xl font-bold text-foreground font-[var(--font-heading)] md:text-4xl mb-4">
              Rapports professionnels
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
              Nous produisons des rapports clairs, rigoureux et visuellement impactants
              qui répondent aux standards internationaux des bailleurs de fonds.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Left - Report cards */}
          <div className="space-y-4">
            {REPORT_TYPES.map((report, i) => {
              const Icon = report.icon
              return (
                <AnimatedSection key={i} animation="fade-up" delay={i * 80}>
                  <div className="group flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted">
                      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="mb-1 flex items-center gap-2 flex-wrap">
                        <h3 className="text-sm font-bold text-foreground">{report.title}</h3>
                        <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${report.badgeColor}`}>
                          {report.badge}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {report.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>

          {/* Right - Image + features */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="space-y-6">
              {/* Image */}
              <div className="relative h-52 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/reports.jpg"
                  alt="Rapports d'évaluation professionnels"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/70 to-transparent flex items-end p-6">
                  <p className="text-secondary-foreground font-semibold text-lg max-w-xs leading-snug">
                    Des rapports qui parlent aux décideurs
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="mb-4 font-bold text-foreground">Ce qui différencie nos rapports</h3>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {FEATURES.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-3">
                  <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="#contact">
                      Commander un rapport
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="#ressources">
                      <Download className="mr-1.5 h-4 w-4" />
                      Voir des exemples
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
