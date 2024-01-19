import type { Metadata } from 'next'
import {Inconsolata} from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inconsolata = Inconsolata({ subsets: ['latin'] })

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
    <html className={inconsolata.className}>
      <body className='lg:px-32 md:px-14 sm:px-6'>
        <Navbar />
          <main>
            {children}
          </main>
      </body>
    </html>
  )
}
