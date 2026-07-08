import { absoluteUrl, siteConfig } from "@/lib/seo/site-config"

export function createHomePageStructuredData() {
  const homeUrl = absoluteUrl("/")
  const organizationId = absoluteUrl("/#organization")
  const websiteId = absoluteUrl("/#website")
  const webpageId = absoluteUrl("/#webpage")

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        url: homeUrl,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl(siteConfig.logo),
          contentUrl: absoluteUrl(siteConfig.logo),
          width: 1100,
          height: 400,
        },
        description: siteConfig.description,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.address.locality,
          addressCountry: siteConfig.address.country,
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: siteConfig.email,
          telephone: siteConfig.phone,
          availableLanguage: ["fr", "en"],
        },
        areaServed: {
          "@type": "Place",
          name: "Afrique de l'Ouest",
        },
        knowsAbout: [
          "Monitoring",
          "Evaluation",
          "Accountability",
          "Learning",
          "Suivi-évaluation de projets",
          "Collecte et analyse de données",
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        publisher: { "@id": organizationId },
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: homeUrl,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
      },
    ],
  }
}
