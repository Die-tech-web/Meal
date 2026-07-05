"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowDown, ChevronRight, CheckCircle2, Users, Globe2, Award, TrendingUp, Lightbulb, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"

const PRESENTATION_ITEMS = [
  {
    icon: Globe2,
    title: "Services de consultance",
    description: "Accompagnement sur mesure en suivi-évaluation pour les ONG, bailleurs et institutions.",
  },
  {
    icon: TrendingUp,
    title: "Outils analytiques interactifs",
    description: "Tableaux de bord et visualisations pour piloter vos projets en temps réel.",
  },
  {
    icon: Lightbulb,
    title: "Ressources méthodologiques",
    description: "Publications, guides, modèles et formations accessibles en ligne.",
  },
  {
    icon: Users,
    title: "Renforcement des capacités",
    description: "Formations certifiantes pour les professionnels du développement.",
  },
]

const DIFF_ITEMS = [
  { label: "Expertise ancrée dans le contexte africain et sénégalais" },
  { label: "Approche participative et centrée sur les bénéficiaires" },
  { label: "Maîtrise des standards internationaux (OCDE, USAID, UE)" },
  { label: "Équipe pluridisciplinaire (statisticiens, sociologues, développeurs)" },
  { label: "Outils digitaux de pointe pour la collecte et l'analyse" },
  { label: "Livrables en français, anglais et langues locales" },
  { label: "Disponibilité et réactivité pour les situations d'urgence" },
  { label: "Tarification transparente et adaptée aux budgets ONG" },
]

const STATS = [
  { label: "Projets évalués" },
  { label: "Pays d'intervention" },
  { label: "Professionnels formés" },
  { label: "Clients satisfaits" },
]

export function HeroSection() {
  return (
    <>
      {/* ─── MESSAGE ─────────────────────────────────────────────── */}
      <section
        id="message"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Vue aerienne professionnelle representant le monitoring et evaluation"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-secondary/65" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/80" />
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center lg:py-40">
          <AnimatedSection animation="fade-in">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary-foreground/90">
                Plateforme MEAL de référence en Afrique
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-secondary-foreground font-[var(--font-heading)] md:text-6xl lg:text-7xl text-balance">
              Monitoring, Evaluation,{" "}
              <span className="text-primary">Accountability</span> & Learning
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/70 md:text-xl text-pretty">
              Des solutions innovantes de suivi-évaluation pour optimiser l'impact
              de vos projets et programmes de développement en Afrique.
            </p>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection animation="fade-up" delay={280}>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-secondary-foreground/10 bg-secondary-foreground/5 backdrop-blur-sm px-4 py-3 text-center">
                  <p className="text-xs text-secondary-foreground/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={350}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold"
              >
                <Link href="#reservation">
                  Réserver une formation
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-secondary-foreground/20 bg-transparent text-secondary-foreground hover:bg-secondary-foreground/10 px-8 py-6 text-base"
              >
                <Link href="#presentation">Découvrir nos services</Link>
              </Button>
            </div>
          </AnimatedSection>

          {/* Scroll indicator */}
          <AnimatedSection animation="fade-in" delay={600}>
            <div className="mt-20 flex flex-col items-center gap-2">
              <span className="text-xs font-medium uppercase tracking-widest text-secondary-foreground/40">
                Défiler
              </span>
              <ArrowDown className="h-5 w-5 text-secondary-foreground/40 animate-bounce" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── PRÉSENTATION ────────────────────────────────────────── */}
      <section id="presentation" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection animation="fade-up">
            <div className="mb-14 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                Qui sommes-nous
              </span>
              <h2 className="text-3xl font-bold text-foreground font-[var(--font-heading)] md:text-4xl mb-4">
                MEAL, une plateforme digitale complète
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
                MEAL est une plateforme digitale spécialisée dans les services de
                Monitoring, Evaluation, Accountability & Learning, au service des ONG,
                bailleurs, chercheurs et professionnels du développement.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRESENTATION_ITEMS.map((item, i) => {
              const Icon = item.icon
              return (
                <AnimatedSection key={i} animation="fade-up" delay={(i * 100) as 0 | 100 | 200 | 300}>
                  <div className="group flex flex-col h-full rounded-2xl border border-border bg-card p-7 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-base font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>

          {/* Public cible */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="mt-12 rounded-2xl border border-border bg-muted/30 p-8 text-center">
              <h3 className="mb-4 text-lg font-bold text-foreground">Notre public cible</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {["ONG & Associations", "Bailleurs de fonds", "Institutions publiques", "Chercheurs & Universitaires", "Étudiants en S&E", "Consultants indépendants"].map((target) => (
                  <span key={target} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm">
                    {target}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── DIFFÉRENCIATION ─────────────────────────────────────── */}
      <section id="differenciation" className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left */}
            <AnimatedSection animation="slide-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                Pourquoi nous choisir
              </span>
              <h2 className="text-3xl font-bold text-secondary-foreground font-[var(--font-heading)] md:text-4xl mb-6">
                Ce qui nous différencie
              </h2>
              <ul className="space-y-3">
                {DIFF_ITEMS.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-secondary-foreground/80 text-sm leading-relaxed">{item.label}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="#contact">Discuter de votre projet <ChevronRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
            </AnimatedSection>

            {/* Right - Image */}
            <AnimatedSection animation="slide-right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/about-team.jpg"
                  alt="Équipe MEAL en intervention terrain"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 rounded-xl bg-card/90 backdrop-blur-sm p-4 shadow-lg">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary shrink-0">
                      <Award className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">Certification internationale</p>
                      <p className="text-xs text-muted-foreground">Standards OCDE & USAID respectés</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
