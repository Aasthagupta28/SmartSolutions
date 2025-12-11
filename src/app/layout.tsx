import type { Metadata } from 'next'
import { Lato, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'SMART IT CORE SOLUTIONS - Intelligent IT Services & Technology Solutions',
  description: 'Premier IT solutions provider specializing in web development, mobile apps, AI automation, cloud services, and digital transformation. Transform your business today!',
  keywords: 'IT solutions, web development, mobile development, AI automation, cloud services, digital transformation, React, Python, Django, smart technology',
  authors: [{ name: 'SMART IT CORE SOLUTIONS' }],
  openGraph: {
    title: 'SMART IT CORE SOLUTIONS - Intelligent IT Services & Technology Solutions',
    description: 'Premier IT solutions provider specializing in web development, mobile apps, AI automation, and digital transformation.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SMART IT CORE SOLUTIONS - Intelligent IT Services & Technology Solutions',
    description: 'Premier IT solutions provider specializing in web development, mobile apps, AI automation, and digital transformation.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lato.variable} ${montserrat.variable}`}>
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
