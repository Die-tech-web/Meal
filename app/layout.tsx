import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'MEAL.sn | Monitoring, Evaluation, Accountability & Learning',
  description:
    'Plateforme digitale professionnelle de services MEAL : consultance, suivi-evaluation, tableaux de bord interactifs et ressources methodologiques pour le developpement en Afrique.',
  keywords: [
    'MEAL',
    'suivi-evaluation',
    'monitoring',
    'evaluation',
    'accountability',
    'learning',
    'ONG',
    'Senegal',
    'Afrique',
  ],
  generator: 'v0.app',
  icons: {
    icon: '/images/meal-sn-icon.svg',
    shortcut: '/images/meal-sn-icon.svg',
    apple: '/images/meal-sn-icon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d9488',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
