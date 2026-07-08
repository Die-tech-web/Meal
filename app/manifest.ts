import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo/site-config"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0d9488",
    lang: siteConfig.language,
    icons: [
      {
        src: siteConfig.icon,
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  }
}
