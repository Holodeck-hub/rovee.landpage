import type { MetadataRoute } from "next"
import { SITE } from "../lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: `${SITE.url}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/contadores`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/termos`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/privacidade`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ]
}
