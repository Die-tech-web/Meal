const DEFAULT_SITE_URL = "https://www.cabinet-meal.com"

function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()

  try {
    return new URL(configuredUrl || DEFAULT_SITE_URL).origin
  } catch {
    return DEFAULT_SITE_URL
  }
}

export const siteConfig = {
  name: "Cabinet MEAL",
  shortName: "MEAL",
  title: "Cabinet MEAL Sénégal | Suivi-évaluation et conseil",
  description:
    "Cabinet MEAL accompagne les ONG et organisations en Afrique : suivi-évaluation, consultance, formation, tableaux de bord et ressources méthodologiques.",
  url: getSiteUrl(),
  locale: "fr_SN",
  language: "fr",
  email: "cabinet.meal@gmail.com",
  phone: "+221778409832",
  phoneDisplay: "+221 77 840 98 32",
  address: {
    locality: "Dakar",
    country: "SN",
    label: "Dakar, Sénégal",
  },
  logo: "/images/meal-sn-logo.png",
  icon: "/images/meal-sn-icon.svg",
  socialImage: "/images/hero-bg.jpg",
  keywords: [
    "cabinet MEAL Sénégal",
    "suivi-évaluation Sénégal",
    "Monitoring Evaluation Accountability Learning",
    "consultant MEAL Afrique",
    "formation MEAL",
    "système de suivi-évaluation",
    "tableau de bord MEAL",
    "évaluation de projets ONG",
    "collecte de données",
    "Dakar Sénégal",
  ],
} as const

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString()
}
