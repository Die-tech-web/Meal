"use client"

import { useEffect, useCallback, useState } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const SLIDES = [
  {
    image: "/images/fieldwork.jpg",
    tag: "Collecte de données terrain",
    title: "Des enquêtes de terrain rigoureuses",
    description:
      "Nos équipes déploient des protocoles de collecte standardisés pour garantir des données fiables et exploitables sur le terrain.",
  },
  {
    image: "/images/methodology.jpg",
    tag: "Cadre méthodologique",
    title: "Une approche MEAL structurée",
    description:
      "Nous appliquons les meilleures pratiques internationales de suivi-évaluation pour mesurer l'impact réel de vos programmes.",
  },
  {
    image: "/images/reports.jpg",
    tag: "Rapports d'impact",
    title: "Des rapports clairs et actionnables",
    description:
      "Nos livrables transforment les données complexes en insights décisionnels compréhensibles par toutes les parties prenantes.",
  },
  {
    image: "/images/dashboard-preview.jpg",
    tag: "Tableau de bord interactif",
    title: "Visualisez vos indicateurs en temps réel",
    description:
      "Notre plateforme digitale centralise tous vos KPIs et vous offre une visibilité complète sur l'avancement de vos projets.",
  },
  {
    image: "/images/about-team.jpg",
    tag: "Expertise locale",
    title: "Une équipe ancrée en Afrique",
    description:
      "Forts d'une connaissance approfondie du contexte africain, nos experts accompagnent les ONG, bailleurs et gouvernements.",
  },
]

export function CarouselSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    return () => { emblaApi.off("select", onSelect) }
  }, [emblaApi])

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => emblaApi.scrollNext(), 5000)
    return () => clearInterval(interval)
  }, [emblaApi])

  return (
    <section className="relative bg-secondary overflow-hidden py-0">
      {/* Header */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
          Nos réalisations
        </span>
        <h2 className="text-3xl font-bold text-secondary-foreground font-[var(--font-heading)] md:text-4xl">
          Projets &amp; Missions en vedette
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {SLIDES.map((slide, i) => (
              <div
                key={i}
                className="relative min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 px-3"
              >
                <div className="group relative h-[420px] overflow-hidden rounded-2xl shadow-xl cursor-pointer">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="mb-2 inline-block w-fit rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground">
                      {slide.tag}
                    </span>
                    <h3 className="mb-2 text-lg font-bold text-secondary-foreground leading-snug">
                      {slide.title}
                    </h3>
                    <p className="text-sm text-secondary-foreground/70 leading-relaxed line-clamp-3 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-card/90 shadow-lg border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 backdrop-blur-sm"
          aria-label="Slide précédent"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-card/90 shadow-lg border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 backdrop-blur-sm"
          aria-label="Slide suivant"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 py-8">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Aller au slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              selectedIndex === i
                ? "w-8 h-2.5 bg-primary"
                : "w-2.5 h-2.5 bg-secondary-foreground/20 hover:bg-secondary-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
