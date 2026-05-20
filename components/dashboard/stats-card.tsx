import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  iconColor: string;
  iconBgColor: string;
}

export function StatsCard({
  title,
  value,
  icon: Icon,
  trend,
  iconColor,
  iconBgColor,
}: StatsCardProps) {
  return (
    <Card className="bg-card border-border rounded-2xl">
      <CardContent className="p-4 md:p-6">

        <div className="flex items-center justify-between gap-4">

          {/* Text Content */}
          <div className="space-y-1 min-w-0">

            <p className="text-xs md:text-sm font-medium text-muted-foreground">
              {title}
            </p>

            <p className="text-3xl md:text-4xl font-bold text-card-foreground">
              {value}
            </p>

            {trend && (
              <p
                className={`
                  text-xs md:text-sm font-medium
                  ${
                    trend.isPositive
                      ? "text-emerald-500"
                      : "text-red-500"
                  }
                `}
              >
                {trend.isPositive ? "+" : ""}
                {trend.value}% from last month
              </p>
            )}

          </div>

          {/* Icon */}
          <div
            className={`
              flex h-10 w-10 md:h-12 md:w-12
              shrink-0
              items-center justify-center
              rounded-xl
              ${iconBgColor}
            `}
          >
            <Icon
              className={`
                h-5 w-5 md:h-6 md:w-6
                ${iconColor}
              `}
            />
          </div>

        </div>

      </CardContent>
    </Card>
  );
}