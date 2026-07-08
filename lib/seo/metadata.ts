import type { Metadata } from "next"
import { absoluteUrl, siteConfig } from "@/lib/seo/site-config"

export function createSiteMetadata(): Metadata {
  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim()

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    applicationName: siteConfig.name,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "Consultance et suivi-évaluation",
    alternates: {
      canonical: "/",
      languages: {
        "fr-SN": "/",
      },
    },
    openGraph: {
      type: "website",
      url: "/",
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      title: siteConfig.title,
      description: siteConfig.description,
      images: [
        {
          url: siteConfig.socialImage,
          width: 1024,
          height: 1024,
          alt: `${siteConfig.name} — plateforme de services MEAL en Afrique`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
      images: [siteConfig.socialImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: siteConfig.icon,
      shortcut: siteConfig.icon,
      apple: siteConfig.icon,
    },
    manifest: absoluteUrl("/manifest.webmanifest"),
    ...(googleVerification
      ? { verification: { google: googleVerification } }
      : {}),
  }
}
