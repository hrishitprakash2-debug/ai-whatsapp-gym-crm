import { LeadsTable } from "@/components/dashboard/leads-table"

async function getLeads() {
  const res = await fetch("https://sheetdb.io/api/v1/23em6aeab08hh", {
    next: { revalidate: 10 },
  })

  return res.json()
}

export default async function NewLeadsPage() {
  const leads = await getLeads()

  const newLeads = leads.filter(
    (lead: any) => lead.lead_status === "new_lead"
  )

  return (
    <div className="min-h-screen bg-background p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">New Leads</h1>

      <LeadsTable leads={newLeads} />
    </div>
  )
}