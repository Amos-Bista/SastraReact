import type { Metadata } from 'next'
import {Montserrat} from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sastra Network Solutions Inc.',
  description: 'Powerining you for tomorrow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={montserrat.className}>
      <body className='lg:px-32 md:px-14 sm:px-6'>
        <Navbar />
          <main>
            {children}
          </main>
      </body>
    </html>
  )
}
