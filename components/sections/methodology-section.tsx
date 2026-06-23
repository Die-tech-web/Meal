"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const METHODOLOGY_STEPS = [
  {
    number: "01",
    title: "Cadrage et conception",
    description:
      "Definition du cadre conceptuel, theorie du changement, identification des indicateurs cles et elaboration du plan de suivi-evaluation.",
  },
  {
    number: "02",
    title: "Collecte de donnees",
    description:
      "Deploiement d'outils de collecte adaptes : enquetes terrain, entretiens, focus groups, observation directe et revue documentaire.",
  },
  {
    number: "03",
    title: "Analyse et traitement",
    description:
      "Analyse statistique et qualitative des donnees collectees avec des outils modernes de traitement et de visualisation.",
  },
  {
    number: "04",
    title: "Rapports et recommandations",
    description:
      "Production de rapports d'evaluation detailles, tableaux de bord interactifs et recommandations operationnelles.",
  },
  {
    number: "05",
    title: "Apprentissage et capitalisation",
    description:
      "Diffusion des resultats, capitalisation des lecons apprises et integration dans les futures interventions.",
  },
] as const

const APPROACHES = [
  "Approche participative et inclusive",
  "Methodes mixtes (quantitatives & qualitatives)",
  "Respect des normes ethiques internationales",
  "Sensibilite au genre et a l'equite",
  "Adaptation au contexte local",
  "Outils numeriques de derniere generation",
] as const

export function MethodologySection() {
  return (
    <section id="methodologie" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="flex flex-col items-center text-center">
            <span className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Methodologie
            </span>
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-foreground font-[var(--font-heading)] md:text-5xl text-balance">
              Une approche rigoureuse et eprouvee
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Notre methodologie s{"'"}appuie sur les meilleures pratiques
              internationales en matiere de suivi-evaluation, adaptees au contexte africain.
            </p>
          </div>
        </AnimatedSection>

        {/* Steps */}
        <div className="mt-20 grid gap-12 lg:grid-cols-5">
          {METHODOLOGY_STEPS.map((step, index) => (
            <AnimatedSection
              key={step.number}
              animation="fade-up"
              delay={(index * 100 + 100) as 100 | 200 | 300 | 400 | 500}
            >
              <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                {/* Connector line */}
                {index < METHODOLOGY_STEPS.length - 1 && (
                  <div className="absolute top-6 left-1/2 hidden h-px w-full bg-border lg:block" />
                )}

                <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold font-[var(--font-heading)]">
                  {step.number}
                </div>

                <h4 className="text-base font-bold text-foreground font-[var(--font-heading)]">
                  {step.title}
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Approach & Image */}
        <div className="mt-24 grid gap-16 lg:grid-cols-2 items-center">
          <AnimatedSection animation="slide-left">
            <div>
              <h3 className="text-2xl font-bold text-foreground font-[var(--font-heading)]">
                Nos principes directeurs
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Chaque mission est conduite selon des principes qui garantissent
                la qualite, la fiabilite et la pertinence de nos travaux.
              </p>

              <ul className="mt-8 flex flex-col gap-4">
                {APPROACHES.map((approach) => (
                  <li key={approach} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-base text-foreground">{approach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-right">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/methodology.jpg"
                alt="Tableau blanc avec cadre methodologique de suivi-evaluation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/10" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
