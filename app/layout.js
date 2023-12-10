import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Link from 'next/link'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FashinBuzz',
  description: 'A platform for fashion innovation and quality textiles.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className='pt-[60px] pb-[30px] background-color'>
          {children}
        </div>

        <Footer />
      </body>
    </html>
  )
}
