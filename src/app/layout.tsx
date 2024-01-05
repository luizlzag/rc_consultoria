import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import BannerContat from './components/banner-header'
import Header from './components/header'
import WaContact from './components/wa-contact'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RC Consultoria',
  description: 'Landig page Rc Consultoria',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <WaContact/>
        {children}
        </body>
    </html>
  )
}
