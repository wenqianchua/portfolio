import type { Metadata } from 'next'
import { Lora, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
})

const mono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://wenqianchua.com'),
  title: {
    template: '%s · Wen Qian Chua',
    default: 'Wen Qian Chua — UX Researcher & Product Designer',
  },
  description:
    'I design with people, not just for them. UX Research, Product Design, AI. Based in Malaysia.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wenqianchua.com',
    siteName: 'Wen Qian Chua',
    title: 'Wen Qian Chua — UX Researcher & Product Designer',
    description:
      'I design with people, not just for them. UX Research, Product Design, AI. Based in Malaysia.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Wen Qian Chua — UX Researcher & Product Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wen Qian Chua — UX Researcher & Product Designer',
    description:
      'I design with people, not just for them. UX Research, Product Design, AI. Based in Malaysia.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>☁️</text></svg>",
        type: 'image/svg+xml',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
