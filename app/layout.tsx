"use client"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { useState } from "react"
import { Menu } from "lucide-react"

import "./globals.css"

import { Sidebar } from "@/components/dashboard/sidebar"
import { Navbar } from "@/components/dashboard/navbar"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  
})





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <html lang="en" className="dark">
      <body
        className={`
          ${geist.variable}
          ${geistMono.variable}
          min-h-screen
          bg-background
          text-foreground
          antialiased
          overflow-x-hidden
        `}
      >
        <div className="flex min-h-screen">

          {/* Sidebar */}
          <div
  className={`
    fixed inset-y-0 left-0 z-50 transform transition-transform duration-300
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0
  `}
>
  <Sidebar />
</div>
{sidebarOpen && (
  <div
    className="fixed inset-0 bg-black/50 z-40 md:hidden"
    onClick={() => setSidebarOpen(false)}
  />
)}

          {/* Main Content */}
          <div className="flex flex-1 flex-col md:pl-64">

            {/* Top Navbar */}
            <div className="flex items-center justify-between border-b border-border px-4 py-3 md:px-6">

  <button
    onClick={() => setSidebarOpen(true)}
    className="md:hidden"
  >
    <Menu className="h-6 w-6 text-white" />
  </button>

  <div className="flex-1">
    <Navbar />
  </div>

</div>

            {/* Page Content */}
            <main className="flex-1 p-4 md:p-6">
              {children}
            </main>

          </div>

        </div>

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}