import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://drgoldequinemed.com'),
  title: {
    default: 'Dr. Jenifer Gold - Expert Equine Veterinary Services',
    template: '%s | Dr. Jenifer Gold'
  },
  description: 'Expert equine veterinary services by Dr. Jenifer Gold, DVM, Diplomate ACVIM (Large Animal), Diplomate ACVECC (Large Animal). Specializing in sports medicine, lameness, emergency care, and performance horse consultations.',
  keywords: [
    'equine veterinarian',
    'horse veterinary services',
    'equine sports medicine',
    'horse lameness',
    'performance horse care',
    'emergency equine care',
    'veterinary consultation',
    'equine internal medicine',
    'horse health',
    'veterinary telemedicine',
    'Montana veterinarian',
    'equine specialist'
  ],
  authors: [{ name: 'Dr. Jenifer Gold' }],
  creator: 'Dr. Jenifer Gold',
  publisher: 'Dr. Gold Equine Medicine',
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
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  verification: {
    google: 'uWXjVh6knuVsUP9AlB4PbqeVEfJkgxj54ast0NqP2VY'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://drgoldequinemed.com',
    siteName: 'Dr. Gold Equine Medicine',
    title: 'Dr. Jenifer Gold - Expert Equine Veterinary Services',
    description: 'Expert equine veterinary services specializing in sports medicine, lameness, and performance horse care. Board-certified in internal medicine and emergency critical care.',
    images: [
      {
        url: '/images/og-image.jpg', // We'll need to create this
        width: 1200,
        height: 630,
        alt: 'Dr. Gold Equine Medicine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Jenifer Gold - Expert Equine Veterinary Services',
    description: 'Expert equine veterinary services specializing in sports medicine, lameness, and performance horse care.',
    images: ['/images/og-image.jpg'], // Same as OpenGraph image
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
        <link rel="canonical" href="https://drgoldequinemed.com" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
} 