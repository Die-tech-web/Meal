"use client"

import {
  BarChart3,
  ClipboardCheck,
  Database,
  FileText,
  LineChart,
  Users,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"

const SERVICES = [
  {
    icon: ClipboardCheck,
    title: "Evaluation de projets et programmes",
    description:
      "Evaluations a mi-parcours, finales et ex-post de vos programmes de developpement selon les normes internationales.",
    features: ["Evaluation d'impact", "Evaluation de processus", "Revue a mi-parcours"],
  },
  {
    icon: LineChart,
    title: "Conception de systemes MEAL",
    description:
      "Mise en place de cadres de suivi-evaluation adaptes a vos besoins, avec indicateurs et outils de collecte.",
    features: ["Cadre logique", "Theorie du changement", "Plan de S&E"],
  },
  {
    icon: Database,
    title: "Collecte et analyse de donnees",
    description:
      "Enquetes quantitatives et qualitatives, analyses statistiques avancees et visualisation des resultats.",
    features: ["Enquetes terrain", "Focus groups", "Analyse statistique"],
  },
  {
    icon: BarChart3,
    title: "Tableaux de bord interactifs",
    description:
      "Creation de dashboards sur mesure pour un suivi en temps reel de vos indicateurs cles de performance.",
    features: ["Visualisations KPI", "Rapports automatises", "Suivi en temps reel"],
  },
  {
    icon: Users,
    title: "Renforcement des capacites",
    description:
      "Formations et ateliers pratiques en suivi-evaluation pour vos equipes et partenaires.",
    features: ["Formations sur mesure", "Ateliers pratiques", "Coaching individuel"],
  },
  {
    icon: FileText,
    title: "Rapports et documentation",
    description:
      "Redaction de rapports d'evaluation, capitalisation des lecons apprises et diffusion des resultats.",
    features: ["Rapports d'evaluation", "Notes de synthese", "Capitalisation"],
  },
] as const

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-secondary">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="flex flex-col items-center text-center">
            <span className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Nos services
            </span>
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-secondary-foreground font-[var(--font-heading)] md:text-5xl text-balance">
              Des solutions completes de suivi-evaluation
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/70 text-pretty">
              Nous proposons une gamme complete de services MEAL pour accompagner
              les organisations dans l{"'"}optimisation de leurs interventions.
            </p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const delayValue = ((index % 3) * 100 + 100) as 100 | 200 | 300
            return (
              <AnimatedSection
                key={service.title}
                animation="fade-up"
                delay={delayValue}
              >
                <div className="group relative flex h-full flex-col rounded-2xl border border-secondary-foreground/10 bg-secondary-foreground/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-xl hover:shadow-primary/5">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-bold text-secondary-foreground group-hover:text-card-foreground font-[var(--font-heading)]">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-secondary-foreground/60 group-hover:text-muted-foreground">
                    {service.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    En savoir plus <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
