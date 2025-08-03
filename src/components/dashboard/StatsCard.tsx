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
  color?: "success" | "warning" | "info" | "destructive";
}

export default function StatsCard({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  color = "success" 
}: StatsCardProps) {
  const colorClasses = {
    success: "text-success",
    warning: "text-warning", 
    info: "text-info",
    destructive: "text-destructive"
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground">{value}</p>
            {trend && (
              <p className={`text-xs ${trend.isPositive ? 'text-success' : 'text-destructive'}`}>
                {trend.isPositive ? '+' : ''}{trend.value}% vs semana anterior
              </p>
            )}
          </div>
          <div className={`p-3 rounded-full bg-primary/10 ${colorClasses[color]}`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}