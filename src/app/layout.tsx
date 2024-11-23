import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'HCOR - Tim Rieger',
  description: 'Health Consulting Rieger - Where Health Meets Heart',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
