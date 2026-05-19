"use client"

import { useEffect, useMemo, useState } from "react"
import { LeadsTable } from "@/components/dashboard/leads-table"

export default function LeadsPage() {
  const [leads, setLeads] = useState<any[]>([])
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [goalFilter, setGoalFilter] = useState("all")

  useEffect(() => {
    async function fetchLeads() {
      const res = await fetch("https://sheetdb.io/api/v1/23em6aeab08hh")
      const data = await res.json()

      const sorted = data.reverse()

      setLeads(sorted)
    }

    fetchLeads()
  }, [])

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesSearch =
        lead.name?.toLowerCase().includes(search.toLowerCase()) ||
        lead.phone?.includes(search)

      const matchesStatus =
        statusFilter === "all" ||
        lead.state === statusFilter

      const matchesGoal =
        goalFilter === "all" ||
        lead.goal?.toLowerCase() === goalFilter.toLowerCase()

      return matchesSearch && matchesStatus && matchesGoal
    })
  }, [leads, search, statusFilter, goalFilter])

  return (
    <div className="min-h-screen bg-background text-white p-6 md:pl-72">
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        
        <h1 className="text-3xl font-bold">
          All Leads
        </h1>

        <input
          type="text"
          placeholder="Search name or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-card border border-border rounded-lg px-4 py-2 text-white outline-none"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-card border border-border rounded-lg px-4 py-2"
        >
          <option value="all">All States</option>
          <option value="awaiting_name">Awaiting Name</option>
          <option value="awaiting_goal">Awaiting Goal</option>
          <option value="awaiting_level">Awaiting Level</option>
          <option value="awaiting_trial">Awaiting Trial</option>
          <option value="completed">Completed</option>
          <option value="human_support">Human Support</option>
          <option value="trial_declined">Trial Declined</option>
        </select>

        <select
          value={goalFilter}
          onChange={(e) => setGoalFilter(e.target.value)}
          className="bg-card border border-border rounded-lg px-4 py-2"
        >
          <option value="all">All Goals</option>
          <option value="Fat Loss">Fat Loss</option>
          <option value="muscle gain">Muscle Gain</option>
          <option value="Strength">Strength</option>
          <option value="General Fitness">General Fitness</option>
        </select>

      </div>

      <LeadsTable leads={filteredLeads} />
    </div>
  )
}