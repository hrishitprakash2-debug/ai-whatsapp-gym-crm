"use client"

import {
  Users,
  UserCheck,
  CalendarCheck,
  UserPlus,
  HeadphonesIcon,
  RefreshCw,
} from "lucide-react"

import { useEffect, useState } from "react"

import { StatsCard } from "@/components/dashboard/stats-card"
import { LeadsTable } from "@/components/dashboard/leads-table"

export default function DashboardPage() {

  const [leads, setLeads] = useState<any[]>([])
  const [search, setSearch] = useState("")

  async function fetchLeads() {

    try {

      const res = await fetch(
        "https://sheetdb.io/api/v1/23em6aeab08hh"
      )

      const data = await res.json()

      setLeads(data)

    } catch (error) {

      console.error("Failed to fetch leads")

    }
  }

  useEffect(() => {

    fetchLeads()

  }, [])

  const filteredLeads = leads.filter((lead: any) => {

    const query = search.toLowerCase()

    return (
      lead.name?.toLowerCase().includes(query) ||
      lead.phone?.includes(query)
    )
  })

  const totalLeads = filteredLeads.length

  const interestedLeads = filteredLeads.filter(
    (lead: any) => lead.lead_status === "interested"
  ).length

  const trialBooked = filteredLeads.filter(
    (lead: any) => lead.lead_status === "trial_booked"
  ).length

  const convertedMembers = filteredLeads.filter(
    (lead: any) => lead.converted === "yes"
  ).length

  const supportRequests = filteredLeads.filter(
    (lead: any) => lead.human_support === "yes"
  ).length

  return (
    <div className="min-h-screen bg-background">

      <main className="flex-1 p-4 md:p-6 overflow-x-hidden w-full">

        {/* Header */}
        <div
          className="
            mb-8
            flex flex-col gap-4
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          {/* Left */}
          <div>

            <h1 className="text-3xl font-bold text-white">
              Dashboard
            </h1>

            <p className="mt-2 text-muted-foreground">
              Live Gym CRM Overview
            </p>

          </div>

          {/* Right */}
          <div className="flex items-center gap-3">

            {/* Search */}
            <input
              type="text"
              placeholder="Search leads..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                md:w-[260px]
                rounded-xl
                border border-border
                bg-card
                px-4 py-2.5
                text-sm text-white
                outline-none
                transition-all
                focus:border-blue-500
              "
            />

            {/* Refresh */}
            <button
              onClick={fetchLeads}
              className="
                flex items-center gap-2
                rounded-xl
                border border-border
                bg-card
                px-4 py-2.5
                text-sm text-white
                transition-all
                hover:bg-secondary
              "
            >

              <RefreshCw className="h-4 w-4" />

              Refresh

            </button>

          </div>

        </div>

        {/* Stats */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-5
            gap-4
            md:gap-6
            w-full
            mb-8
          "
        >

          <StatsCard
            title="Total Leads"
            value={totalLeads}
            icon={Users}
            iconColor="text-blue-400"
            iconBgColor="bg-blue-500/20"
          />

          <StatsCard
            title="Interested Leads"
            value={interestedLeads}
            icon={UserCheck}
            iconColor="text-amber-400"
            iconBgColor="bg-amber-500/20"
          />

          <StatsCard
            title="Trial Booked"
            value={trialBooked}
            icon={CalendarCheck}
            iconColor="text-purple-400"
            iconBgColor="bg-purple-500/20"
          />

          <StatsCard
            title="Converted Members"
            value={convertedMembers}
            icon={UserPlus}
            iconColor="text-emerald-400"
            iconBgColor="bg-emerald-500/20"
          />

          <StatsCard
            title="Support Requests"
            value={supportRequests}
            icon={HeadphonesIcon}
            iconColor="text-rose-400"
            iconBgColor="bg-rose-500/20"
          />

        </div>

        {/* Leads Table */}
        <LeadsTable leads={filteredLeads} />

      </main>

    </div>
  )
}