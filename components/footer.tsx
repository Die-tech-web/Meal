import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react"
import { siteConfig } from "@/lib/seo/site-config"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2-2.76V9.4a6.33 6.33 0 1 0 5.43 6.27V8.73a8.16 8.16 0 0 0 4.77 1.52V6.81c-.33 0-.66-.04-.98-.12Z" />
    </svg>
  )
}

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
} as const

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61590527114185",
    icon: Facebook,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mansour-niang-88353923b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: Linkedin,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@formateur_meal?_r=1&_t=ZS-97VK8qJdyVe",
    icon: TikTokIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@CABINETMEAL",
    icon: Youtube,
  },
] as const

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
                src="/images/new-logo.png"
                alt={siteConfig.name}
                width={154}
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
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm text-secondary-foreground/60 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 text-sm text-secondary-foreground/60 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phoneDisplay}
              </a>
              <span className="flex items-center gap-2 text-sm text-secondary-foreground/60">
                <MapPin className="h-4 w-4" />
                {siteConfig.address.label}
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

          {/* Social networks */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground font-[var(--font-heading)]">
              Réseaux sociaux
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon

                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-secondary-foreground/60 transition-colors hover:text-primary"
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {link.label}
                    </a>
                  </li>
                )
              })}
              <li>
                <Link
                  href="#contact"
                  className="flex items-center gap-2 text-sm text-secondary-foreground/60 transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-secondary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-secondary-foreground/40">
            {currentYear}{" "}
            <a
              href={siteConfig.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              {siteConfig.url}
            </a>{" "}
            Tous droits reserves.
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
