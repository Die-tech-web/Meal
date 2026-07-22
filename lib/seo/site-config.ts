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
  title: "Cabinet MEAL Sénégal | Suivi-évaluation, formation et conseil",
  description:
    "Cabinet MEAL est un cabinet de suivi-évaluation basé à Dakar, au Sénégal. Nous accompagnons les ONG et organisations en Afrique par le conseil, la formation, la collecte de données et les tableaux de bord.",
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
  socialLinks: {
    facebook: "https://www.facebook.com/profile.php?id=61590527114185",
    linkedin:
      "https://www.linkedin.com/in/mansour-niang-88353923b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    tiktok: "https://www.tiktok.com/@formateur_meal?_r=1&_t=ZS-97VK8qJdyVe",
    youtube: "https://www.youtube.com/@CABINETMEAL",
  },
  keywords: [
    "cabinet MEAL Sénégal",
    "Cabinet MEAL Dakar",
    "cabinet de suivi-évaluation Sénégal",
    "cabinet suivi évaluation Dakar",
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
