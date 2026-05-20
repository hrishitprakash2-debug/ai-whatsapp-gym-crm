"use client"

interface LeadDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  lead: any
}

export function LeadDrawer({
  open,
  onOpenChange,
  lead,
}: LeadDrawerProps) {

  if (!open || !lead) return null

  return (
    <div
      className="
        fixed top-0 right-0 z-[100]
        h-full w-[350px]
        bg-[#0B0B0B]
        border-l border-border
        p-6
        overflow-y-auto
      "
    >

      <button
        onClick={() => onOpenChange(false)}
        className="
          mb-6 rounded-lg border border-border
          px-3 py-2 text-sm
          hover:bg-secondary
        "
      >
        Close
      </button>

      <h2 className="text-2xl font-bold text-white mb-8">
        {lead.name}
      </h2>

      <div className="space-y-6">

        <div>
          <p className="text-sm text-muted-foreground">
            Phone
          </p>

          <p className="text-lg font-medium text-white">
            {lead.phone}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Goal
          </p>

          <p className="text-lg font-medium text-white">
            {lead.goal}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Level
          </p>

          <p className="text-lg font-medium text-white">
            {lead.level}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            State
          </p>

          <p className="text-lg font-medium text-white">
            {lead.state}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Membership
          </p>

          <p className="text-lg font-medium text-white">
            {lead.membership || "Not Assigned"}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Source
          </p>

          <p className="text-lg font-medium text-white">
            {lead.source}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Lead Status
          </p>

          <p className="text-lg font-medium text-white">
            {lead.lead_status}
          </p>
        </div>

      </div>

    </div>
  )
}