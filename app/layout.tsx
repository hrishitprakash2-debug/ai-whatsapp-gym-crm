"use client"

import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { useState } from "react"
import { Menu, X } from "lucide-react"

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

        <div className="min-h-screen">

          {/* Mobile Overlay */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Sidebar */}
          <div
            className={`
              fixed inset-y-0 left-0 z-50
              w-[280px] md:w-64
              transform transition-transform duration-300 ease-in-out

              ${
                sidebarOpen
                  ? "translate-x-0"
                  : "-translate-x-full"
              }

              md:translate-x-0
            `}
          >
            <Sidebar />
          </div>

          {/* Main Layout */}
          <div className="md:ml-64 flex min-h-screen flex-col">

            {/* Top Navbar */}
            <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-md">

              <div className="flex items-center gap-4 px-4 py-3 md:px-6">

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="
                    rounded-lg p-2 transition-colors
                    hover:bg-secondary
                    md:hidden
                  "
                >
                  {sidebarOpen ? (
                    <X className="h-6 w-6 text-white" />
                  ) : (
                    <Menu className="h-6 w-6 text-white" />
                  )}
                </button>

                {/* Navbar */}
                <div className="flex-1">
                  <Navbar />
                </div>

              </div>

            </header>

            {/* Page Content */}
            <main className="flex-1 p-4 md:p-6 overflow-x-hidden">
              {children}
            </main>

          </div>

        </div>

        {process.env.NODE_ENV === "production" && <Analytics />}

      </body>
    </html>
  )
}