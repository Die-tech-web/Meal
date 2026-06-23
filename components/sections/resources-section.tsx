"use client"

import { useState } from "react"
import Image from "next/image"
import {
  FileText, Download, Calendar, BookOpen, Layers, Wrench,
  GraduationCap, ExternalLink, FileDown, Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"

const TABS = ["Outils MEAL", "Publications", "Formations", "Modèles téléchargeables"] as const
type Tab = typeof TABS[number]

const OUTILS = [
  { icon: Wrench, title: "KoboToolbox / ODK", description: "Collecte de données mobile sur terrain, même hors connexion. Idéal pour les enquêtes.", tag: "Collecte" },
  { icon: Layers, title: "Cadre logique interactif", description: "Outil de conception du cadre logique avec indicateurs SMART et théorie du changement.", tag: "Planification" },
  { icon: FileText, title: "Tableau de suivi des indicateurs", description: "Fichier Excel structuré pour le suivi mensuel de vos indicateurs de performance.", tag: "Suivi" },
  { icon: Search, title: "Guide d'évaluation participative", description: "Protocoles et outils pour mener des évaluations inclusives avec les communautés.", tag: "Évaluation" },
  { icon: BookOpen, title: "Manuel MEAL complet", description: "Guide complet pour la mise en place d'un système MEAL dans une organisation.", tag: "Guide" },
  { icon: Layers, title: "Dashboard Power BI template", description: "Modèle de tableau de bord prêt à l'emploi pour la visualisation de vos données.", tag: "Visualisation" },
]

const PUBLICATIONS = [
  { title: "Évaluation du Programme Santé Communautaire", category: "Évaluation finale", date: "Janvier 2026", description: "Évaluation de l'impact du programme de santé communautaire dans les régions rurales du Sénégal.", image: "/images/reports.jpg" },
  { title: "Revue à mi-parcours — Projet Éducation pour Tous", category: "Revue mi-parcours", date: "Décembre 2025", description: "Analyse des progrès du projet d'accès à l'éducation de qualité dans les zones défavorisées.", image: "/images/fieldwork.jpg" },
  { title: "Capitalisation — Programme Résilience Agricole", category: "Capitalisation", date: "Novembre 2025", description: "Leçons apprises du programme de renforcement de la résilience des communautés agricoles.", image: "/images/methodology.jpg" },
  { title: "Rapport annuel MEAL 2025", category: "Rapport annuel", date: "Octobre 2025", description: "Bilan des activités et impact des interventions MEAL sur les populations bénéficiaires.", image: "/images/about-team.jpg" },
]

const FORMATIONS_LIST = [
  { icon: GraduationCap, title: "Formation en collecte de données", duration: "3 jours", level: "Débutant", format: "Présentiel / En ligne" },
  { icon: GraduationCap, title: "Formation en traitement de données", duration: "3 jours", level: "Intermédiaire", format: "Présentiel / En ligne" },
  { icon: GraduationCap, title: "Formation en analyse de données", duration: "4 jours", level: "Avancé", format: "Présentiel / En ligne" },
  { icon: GraduationCap, title: "Gestion de projet / programme", duration: "5 jours", level: "Intermédiaire", format: "Présentiel" },
  { icon: GraduationCap, title: "GAF — Gestion Administrative et Financière", duration: "4 jours", level: "Débutant", format: "Présentiel / En ligne" },
  { icon: GraduationCap, title: "Gestion Axée sur les Résultats (GAR)", duration: "3 jours", level: "Intermédiaire", format: "Présentiel / En ligne" },
  { icon: GraduationCap, title: "Planification stratégique", duration: "3 jours", level: "Avancé", format: "Présentiel" },
  { icon: GraduationCap, title: "Gestion des risques", duration: "2 jours", level: "Intermédiaire", format: "Présentiel / En ligne" },
  { icon: GraduationCap, title: "Système MEAL — mise en place complète", duration: "5 jours", level: "Avancé", format: "Présentiel" },
]

const MODELES = [
  { icon: FileDown, title: "Cadre logique (Excel)", description: "Modèle structuré avec formules automatiques pour indicateurs SMART.", format: "Excel (.xlsx)" },
  { icon: FileDown, title: "Plan de suivi-évaluation", description: "Template complet de plan S&E avec indicateurs, sources et responsables.", format: "Word (.docx)" },
  { icon: FileDown, title: "Fiche de collecte de données", description: "Formulaires pré-formatés pour enquêtes quantitatives et qualitatives.", format: "PDF / Word" },
  { icon: FileDown, title: "Rapport d'évaluation type", description: "Structure standard pour rédiger vos rapports d'évaluation finale.", format: "Word (.docx)" },
  { icon: FileDown, title: "Dashboard indicateurs (Power BI)", description: "Tableau de bord interactif prêt à connecter à vos données.", format: "Power BI (.pbix)" },
  { icon: FileDown, title: "Registre des parties prenantes", description: "Outil de cartographie et suivi des parties prenantes du projet.", format: "Excel (.xlsx)" },
]

export function ResourcesSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Outils MEAL")

  return (
    <section id="ressources" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <AnimatedSection animation="fade-up">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Base de connaissances
            </span>
            <h2 className="text-3xl font-bold text-foreground font-[var(--font-heading)] md:text-4xl mb-4">
              Ressources MEAL
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
              Accédez à nos outils, publications, formations et modèles téléchargeables
              pour renforcer vos pratiques de suivi-évaluation.
            </p>
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
          {activeTab === "Outils MEAL" && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {OUTILS.map((outil, i) => {
                const Icon = outil.icon
                return (
                  <div key={i} className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">{outil.tag}</span>
                    </div>
                    <h4 className="mb-2 text-sm font-bold text-foreground">{outil.title}</h4>
                    <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{outil.description}</p>
                    <button type="button" className="mt-4 flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                      <ExternalLink className="h-4 w-4" /> Accéder à l'outil
                    </button>
                  </div>
                )
              })}
            </div>
          )}

          {activeTab === "Publications" && (
            <div className="grid gap-6 md:grid-cols-2">
              {PUBLICATIONS.map((pub, i) => (
                <div key={i} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                  <div className="relative h-40 overflow-hidden">
                    <Image src={pub.image} alt={pub.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-secondary/50" />
                    <span className="absolute top-3 left-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground">
                      {pub.category}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <h4 className="mb-2 font-bold text-foreground leading-snug">{pub.title}</h4>
                    <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{pub.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" /> {pub.date}
                      </span>
                      <button type="button" className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                        <Download className="h-4 w-4" /> Télécharger PDF
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Formations" && (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {FORMATIONS_LIST.map((f, i) => {
                  const Icon = f.icon
                  return (
                    <div key={i} className="group flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="mb-1.5 text-sm font-bold text-foreground leading-snug">{f.title}</h4>
                        <div className="flex flex-wrap gap-1.5">
                          <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">{f.duration}</span>
                          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">{f.level}</span>
                          <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">{f.format}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="flex justify-center pt-4">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="#reservation">Réserver une formation <GraduationCap className="ml-2 h-4 w-4" /></a>
                </Button>
              </div>
            </div>
          )}

          {activeTab === "Modèles téléchargeables" && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {MODELES.map((m, i) => {
                const Icon = m.icon
                return (
                  <div key={i} className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="mb-1 text-sm font-bold text-foreground">{m.title}</h4>
                      <p className="mb-2 text-xs text-muted-foreground leading-relaxed">{m.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">{m.format}</span>
                        <button type="button" className="flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors">
                          <Download className="h-3.5 w-3.5" /> Télécharger
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </AnimatedSection>

        {/* CTA Banner */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="relative mt-16 overflow-hidden rounded-2xl">
            <Image src="/images/fieldwork.jpg" alt="Terrain MEAL" width={1200} height={300} className="h-52 w-full object-cover lg:h-64" />
            <div className="absolute inset-0 bg-secondary/75" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <h3 className="text-2xl font-bold text-secondary-foreground font-[var(--font-heading)] md:text-3xl">
                Besoin d'une ressource sur mesure ?
              </h3>
              <p className="mt-2 max-w-lg text-sm text-secondary-foreground/70">
                Contactez-nous pour des outils et formations adaptés à votre contexte spécifique.
              </p>
              <Button asChild className="mt-5 bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                <a href="#contact">Nous contacter</a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
