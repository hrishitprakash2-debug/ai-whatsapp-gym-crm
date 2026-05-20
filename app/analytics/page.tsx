"use client"

import { useEffect, useState } from "react"

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

import {
  Users,
  CalendarCheck,
  Headphones,
  UserCheck,
} from "lucide-react"

const COLORS = [
  "#22c55e",
  "#3b82f6",
  "#ef4444",
  "#f59e0b",
]

export default function AnalyticsPage() {

  const [leads, setLeads] = useState<any[]>([])

  useEffect(() => {
    async function fetchLeads() {

      const res = await fetch("https://sheetdb.io/api/v1/23em6aeab08hh")

      const data = await res.json()

      setLeads(data)
    }

    fetchLeads()
  }, [])

  const completed = leads.filter(
    (lead) => lead.state === "completed"
  ).length

  const awaitingTrial = leads.filter(
    (lead) => lead.state === "awaiting_trial"
  ).length

  const support = leads.filter(
    (lead) => lead.state === "human_support"
  ).length

  const declined = leads.filter(
    (lead) => lead.state === "trial_declined"
  ).length

  const totalLeads = leads.length

  const conversionRate =
    totalLeads > 0
      ? ((completed / totalLeads) * 100).toFixed(1)
      : 0

  const chartData = [
    {
      name: "Completed",
      value: completed,
    },
    {
      name: "Trial Pending",
      value: awaitingTrial,
    },
    {
      name: "Support",
      value: support,
    },
    {
      name: "Declined",
      value: declined,
    },
  ]

  return (
    <div className="text-white">

      <h1 className="text-3xl font-bold mb-8">
        Analytics
      </h1>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-muted-foreground">
              Total Leads
            </h2>

            <Users className="text-blue-400" />
          </div>

          <p className="text-4xl font-bold">
            {totalLeads}
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-muted-foreground">
              Trial Booked
            </h2>

            <CalendarCheck className="text-purple-400" />
          </div>

          <p className="text-4xl font-bold">
            {completed}
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-muted-foreground">
              Support Requests
            </h2>

            <Headphones className="text-red-400" />
          </div>

          <p className="text-4xl font-bold">
            {support}
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-muted-foreground">
              Conversion Rate
            </h2>

            <UserCheck className="text-green-400" />
          </div>

          <p className="text-4xl font-bold">
            {conversionRate}%
          </p>
        </div>

      </div>

      {/* CHART */}
      <div className="bg-card border border-border rounded-2xl p-6 h-[500px]">

        <h2 className="text-2xl font-semibold mb-8">
          Lead Distribution
        </h2>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>

            <Pie
              data={chartData}
              dataKey="value"
              outerRadius={160}
              label
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />

          </PieChart>
        </ResponsiveContainer>

      </div>

    </div>
  )
}