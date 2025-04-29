import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import { Dancing_Script } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "next-themes"
import { cn } from "@/lib/utils"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Karan Mehndi Art - Timeless Henna, Crafted with Love",
  description:
    "Professional mehendi artist in Mumbai offering bridal, festive, and custom henna designs with natural ingredients and intricate patterns.",
  keywords: "mehandi, henna, bridal mehendi, henna artist, Mumbai, Karan Mehndi Art",
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/k.jpg',
        type: 'image/jpg',
        sizes: '32x32',
      },
      {
        url: '/k.jpg',
        type: 'image/jpg',
      },
    ],
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body className={cn(
        playfair.variable,
        dancingScript.variable,
        "relative min-h-screen w-screen max-w-[100vw] overflow-x-hidden bg-background font-sans antialiased"
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen w-full flex-col overflow-hidden">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}