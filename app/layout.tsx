import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sastra Network Solutions Inc.',
  description: 'Powering you for tomorrow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className='px-32'>
        <Navbar />
          <main>
            {children}
          </main>
      </body>
    </html>
  )
}
