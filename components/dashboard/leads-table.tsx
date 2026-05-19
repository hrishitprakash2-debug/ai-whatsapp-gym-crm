import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface Lead {
  id: string;
  name: string;
  phone: string;
  goal: string;
  level: "Beginner" | "Intermediate" | "Advanced";
 state:
  | "awaiting_name"
  | "awaiting_goal"
  | "awaiting_level"
  | "awaiting_trial"
  | "completed"
  | "human_support"
  | "trial_declined"
}

interface LeadsTableProps {
  leads: Lead[];
}

const stateColors: Record<Lead["state"], string> = {
  awaiting_name: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  awaiting_goal: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  awaiting_level: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  awaiting_trial: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  completed: "bg-green-500/20 text-green-400 border-green-500/30",
  human_support: "bg-red-500/20 text-red-400 border-red-500/30",
  trial_declined: "bg-gray-500/20 text-gray-400 border-gray-500/30",
}


const levelColors: Record<Lead["level"], string> = {
  Beginner: "bg-sky-500/20 text-sky-400 border-sky-500/30",
  Intermediate: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  Advanced: "bg-rose-500/20 text-rose-400 border-rose-500/30",
};

export function LeadsTable({ leads }: LeadsTableProps) {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground">Recent Leads</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-muted-foreground">Name</TableHead>
              <TableHead className="text-muted-foreground">Phone</TableHead>
              <TableHead className="text-muted-foreground">Goal</TableHead>
              <TableHead className="text-muted-foreground">Level</TableHead>
              <TableHead className="text-muted-foreground">State</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((lead) => (
              <TableRow
                key={lead.phone}
                className="border-border hover:bg-secondary/50"
              >
                <TableCell className="font-medium text-card-foreground">
                  {lead.name}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {lead.phone}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {lead.goal}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={`${stateColors[lead.state?.trim() as Lead["state"]]} border`}
                  >
                    {lead.level}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={`${stateColors[lead.state]} border`}
                  >
                    {lead.state?.trim()}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
