"use client"

import { Bell, Search, User } from "lucide-react"

interface NavbarProps {
  title: string
  search?: string
  setSearch?: (value: string) => void
}

export function Navbar({
  title,
  search,
  setSearch,
}: NavbarProps) {

  return (
    <div
      className="
        flex
        flex-col
        gap-4
        md:flex-row
        md:items-center
        md:justify-between
        border-b
        border-border
        pb-5
        mb-8
      "
    >

      {/* Left */}
      <div>

        <h1 className="text-3xl font-bold text-white">
          {title}
        </h1>

      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Search */}
        {setSearch && (
          <div className="relative">

            <Search
              className="
                absolute
                left-3
                top-1/2
                h-4
                w-4
                -translate-y-1/2
                text-muted-foreground
              "
            />

            <input
              type="text"
              placeholder="Search leads..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                md:w-[300px]
                rounded-xl
                border border-border
                bg-card
                py-2.5 pl-10 pr-4
                text-sm text-white
                outline-none
                transition-all
                focus:border-blue-500
              "
            />

          </div>
        )}

        {/* Bell */}
        <button
          className="
            hidden md:flex
            rounded-full
            border border-border
            p-2
            hover:bg-card
            transition-colors
          "
        >
          <Bell className="h-5 w-5 text-white" />
        </button>

        {/* Avatar */}
        <div
          className="
            hidden md:flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-emerald-500
          "
        >
          <User className="h-5 w-5 text-white" />
        </div>

      </div>

    </div>
  )
}