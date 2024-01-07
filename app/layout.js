import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gemma Accesorios',
  description: 'Pagina web de accesorios',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        
      <body className="container mx-auto h-screen flex justify-center">
        {children}
      </body>

    </html>
  )
}
