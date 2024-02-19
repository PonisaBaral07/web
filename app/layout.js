
import { Inter } from 'next/font/google'
import './globals.css'
import NextAuthSessionProvider from './nextauth/nextauthsessionprovider'


const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
        </body>
    </html>
  )
}
