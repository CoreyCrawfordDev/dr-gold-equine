import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Providers from './providers'
import './globals.css'
import JsonLd from './components/JsonLd'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2C5282',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://drgoldequine.com'),
  title: 'Dr. Jenifer Gold, DVM | Equine Internal Medicine Specialist',
  description: 'Dr. Jenifer Gold, DVM, is a board-certified specialist in equine internal medicine and emergency/critical care. Serving horses, cattle, camelids, and small ruminants in Montana.',
  keywords: 'equine veterinarian, horse doctor, internal medicine specialist, emergency care, critical care, Montana veterinarian, equine specialist, Missoula veterinarian, large animal vet, horse specialist, equine internal medicine, emergency critical care, horse emergency, equine emergency',
  authors: [{ name: 'Dr. Jenifer Gold' }],
  openGraph: {
    title: 'Dr. Jenifer Gold, DVM | Equine Internal Medicine Specialist',
    description: 'Board-certified specialist in equine internal medicine and emergency/critical care. Serving horses and large animals in Montana.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Dr. Jenifer Gold, DVM',
    images: [
      {
        url: '/images/dr-gold-caring.JPG',
        width: 1200,
        height: 630,
        alt: 'Dr. Jenifer Gold providing care to a horse',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Jenifer Gold, DVM | Equine Internal Medicine Specialist',
    description: 'Board-certified specialist in equine internal medicine and emergency/critical care.',
    images: ['/images/dr-gold-caring.JPG'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://drgoldequine.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
} 