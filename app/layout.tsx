import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dr. Jenifer Gold - Consulting Services',
  description: 'Professional consulting services by Dr. Jenifer Gold, specializing in organizational development and leadership.',
  keywords: 'consulting, organizational development, leadership, Dr. Gold, Montana',
  openGraph: {
    title: 'Dr. Jenifer Gold - Consulting Services',
    description: 'Professional consulting services by Dr. Jenifer Gold, specializing in organizational development and leadership.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
} 