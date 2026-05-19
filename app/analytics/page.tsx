"use client"

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { name: "Completed", value: 2 },
  { name: "Support", value: 0 },
  { name: "Trial", value: 2 },
]

const COLORS = ["#22c55e", "#ef4444", "#3b82f6"]

export default function AnalyticsPage() {
  return (
    <div className="text-white">

      <h1 className="text-3xl font-bold mb-8">
        Analytics
      </h1>

      <div className="bg-card border border-border rounded-2xl p-6 h-[400px]">

        <h2 className="text-xl font-semibold mb-6">
          Lead Distribution
        </h2>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={120}
              label
            >
              {data.map((entry, index) => (
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