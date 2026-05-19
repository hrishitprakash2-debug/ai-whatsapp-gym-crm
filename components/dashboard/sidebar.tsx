"use client";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  UserPlus,
  CalendarCheck,
  MessageSquare,
  Settings,
  BarChart3,
  Dumbbell,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
const navigation = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/", current: true },
  { name: "All Leads", icon: Users, href: "/leads", current: false },
  { name: "New Leads", icon: UserPlus, href: "/new-leads", current: false },
  { name: "Trials", icon: CalendarCheck, href: "/trials", current: false },
  { name: "Support", icon: MessageSquare, href: "/support", current: false },
  { name: "Analytics", icon: BarChart3, href: "/analytics", current: false },
  { name: "Settings", icon: Settings, href: "/settings", current: false },
];
export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className=" inset-y-0 left-0 z-50 w-64 bg-sidebar border-r border-sidebar-border">
      <div className="flex h-16 items-center gap-2 px-6 border-b border-sidebar-border">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500">
          <Dumbbell className="h-5 w-5 text-white" />
        </div>
        <span className="text-lg font-semibold text-sidebar-foreground">GymCRM</span>
      </div>
      <nav className="flex flex-col gap-1 p-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
              pathname === item.href
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            )}
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
