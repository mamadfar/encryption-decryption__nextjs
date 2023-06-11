import './globals.scss'
import { Inter } from 'next/font/google'
import {ReactNode} from "react";
import {Footer, Header} from "@/components";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Encryption & Decryption',
  description: 'A small app to use encryption and decryption methods.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`relative flex flex-col min-h-screen bg-gray-50 ${inter.className}`}>
      <Header/>
      <main className="my-auto">
        {children}
      </main>
      <Footer/>
      </body>
    </html>
  )
}
