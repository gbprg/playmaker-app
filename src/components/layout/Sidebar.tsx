import { 
  BarChart3, 
  Calendar, 
  ClipboardList, 
  FileText, 
  Home, 
  TrendingUp, 
  Users, 
  Target 
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard Geral", href: "/", icon: Home },
  { name: "Elenco", href: "/elenco", icon: Users },
  { name: "Planejamento Semanal", href: "/planejamento", icon: Calendar },
  { name: "Carga de Treino", href: "/carga-treino", icon: BarChart3 },
  { name: "Scout Técnico-Tático", href: "/scout", icon: Target },
  { name: "Relatórios", href: "/relatorios", icon: FileText },
  { name: "Histórico de Evolução", href: "/historico", icon: TrendingUp },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex h-full w-64 flex-col fixed inset-y-0 z-50">
      {/* Logo Section */}
      <div className="flex items-center justify-center h-16 px-4 bg-gradient-to-r from-primary to-secondary">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
            <Target className="w-5 h-5 text-primary" />
          </div>
          <div className="text-white">
            <div className="font-bold text-sm">CAD Futsal</div>
            <div className="text-xs opacity-90">Sistema de Gestão</div>
          </div>
        </div>
      </div>

      {/* Season Badge */}
      <div className="px-4 py-3 bg-gradient-to-r from-accent to-warning">
        <div className="text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-primary">
            Temporada 2024/25
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 bg-card">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={cn(
                    "group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-foreground hover:bg-primary/5 hover:text-primary"
                  )}
                >
                  <item.icon 
                    className={cn(
                      "mr-3 h-5 w-5 transition-colors",
                      isActive ? "text-primary-foreground" : "text-primary"
                    )} 
                  />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}