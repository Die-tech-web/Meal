import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

const FOOTER_LINKS = {
  services: [
    { label: "Evaluation de projets", href: "#services" },
    { label: "Conception MEAL", href: "#services" },
    { label: "Collecte de donnees", href: "#services" },
    { label: "Tableaux de bord", href: "#dashboard" },
    { label: "Renforcement des capacites", href: "#services" },
  ],
  resources: [
    { label: "Rapports", href: "#ressources" },
    { label: "Base d'indicateurs", href: "#ressources" },
    { label: "Guides pratiques", href: "#ressources" },
    { label: "Methodologie", href: "#methodologie" },
  ],
  about: [
    { label: "A propos", href: "#apropos" },
    { label: "Notre equipe", href: "#apropos" },
    { label: "Contact", href: "#contact" },
  ],
} as const

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary border-t border-secondary-foreground/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#accueil">
              <Image
                src="/images/meal-sn-logo-full.svg"
                alt="MEAL.sn"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary-foreground/60">
              Plateforme digitale professionnelle de services MEAL au service
              du developpement en Afrique.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="mailto:contact@meal.sn"
                className="flex items-center gap-2 text-sm text-secondary-foreground/60 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                contact@meal.sn
              </a>
              <a
                href="tel:+221330000000"
                className="flex items-center gap-2 text-sm text-secondary-foreground/60 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                +221 33 XXX XX XX
              </a>
              <span className="flex items-center gap-2 text-sm text-secondary-foreground/60">
                <MapPin className="h-4 w-4" />
                Dakar, Senegal
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground font-[var(--font-heading)]">
              Services
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/60 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground font-[var(--font-heading)]">
              Ressources
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/60 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground font-[var(--font-heading)]">
              A propos
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {FOOTER_LINKS.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/60 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-secondary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-secondary-foreground/40">
            {currentYear} MEAL.sn. Tous droits reserves.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-secondary-foreground/40 transition-colors hover:text-primary"
            >
              Politique de confidentialite
            </Link>
            <Link
              href="#"
              className="text-xs text-secondary-foreground/40 transition-colors hover:text-primary"
            >
              Mentions legales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
