import { MetadataRoute } from 'next'
import { works } from '@/data/works'

const BASE = 'https://wenqianchua.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,          lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/work`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]

  const workRoutes: MetadataRoute.Sitemap = works.map(w => ({
    url: `${BASE}/work/${w.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...workRoutes]
}
