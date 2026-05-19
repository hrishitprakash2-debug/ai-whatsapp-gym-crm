import {
  Users,
  UserCheck,
  CalendarCheck,
  UserPlus,
  HeadphonesIcon,
} from "lucide-react";
import { StatsCard } from "@/components/dashboard/stats-card";
import { LeadsTable } from "@/components/dashboard/leads-table";

async function getLeads() {
  const res = await fetch("https://sheetdb.io/api/v1/23em6aeab08hh", {
    cache: "no-store",
  })

  return res.json()
}


export default async function DashboardPage() {
const leads = await getLeads()
const totalLeads = leads.length

const interestedLeads = leads.filter(
  (lead: any) => lead.lead_status === "interested"
).length

const trialBooked = leads.filter(
  (lead: any) => lead.lead_status === "trial_booked"
).length

const convertedMembers = leads.filter(
  (lead: any) => lead.converted === "yes"
).length

const supportRequests = leads.filter(
  (lead: any) => lead.human_support === "yes"
).length

  return (
    <div className="min-h-screen bg-background">
      <div className="pl-64">
        <main className="p-6">
          {/* Analytics Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mb-8">
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
          <LeadsTable leads={leads} />
        </main>
      </div>
    </div>
  );
}
