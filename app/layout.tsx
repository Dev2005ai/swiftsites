import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SwiftSites – Professionelle Webseiten für Hamburger Unternehmen",
  description:
    "SwiftSites – Professionelle Webseiten für kleine und mittlere Unternehmen in Hamburg. Schnell, persönlich, wirkungsvoll. 14 Tage bis zum Launch.",
  keywords:
    "Webdesign Hamburg, Website erstellen lassen, Webdesign Agentur Hamburg, professionelle Website KMU",
  openGraph: {
    title: "SwiftSites – Professionelle Webseiten für Ihr Unternehmen",
    description:
      "Webdesign-Agentur aus Hamburg. Wir erstellen professionelle Webseiten für KMUs – schnell, persönlich, zu fairen Preisen.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
