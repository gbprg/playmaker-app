import Layout from "@/components/layout/Layout";
import Header from "@/components/layout/Header";
import StatsCard from "@/components/dashboard/StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar, 
  Users, 
  Target, 
  TrendingUp, 
  Activity,
  AlertTriangle
} from "lucide-react";

export default function Dashboard() {
  return (
    <Layout>
      <Header 
        title="Dashboard Geral" 
        subtitle="Visão geral do sistema de gestão esportiva - CAD Futsal"
      />
      
      <div className="p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Atletas Convocados"
            value="8"
            icon={Users}
            trend={{ value: 12, isPositive: true }}
            color="success"
          />
          <StatsCard
            title="Carga Semanal Total"
            value="1.230"
            icon={Activity}
            trend={{ value: 5, isPositive: true }}
            color="info"
          />
          <StatsCard
            title="Treinos da Semana"
            value="6"
            icon={Calendar}
            color="warning"
          />
          <StatsCard
            title="Indicadores de Risco"
            value="2"
            icon={AlertTriangle}
            trend={{ value: -15, isPositive: false }}
            color="destructive"
          />
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-primary" />
                Próximos Treinos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                  <div>
                    <p className="font-medium">Hoje - ACADEMIA</p>
                    <p className="text-sm text-muted-foreground">16:00 - Joaquim</p>
                  </div>
                  <span className="bg-success text-success-foreground px-2 py-1 rounded text-xs">
                    Manhã
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-info/10 rounded-lg">
                  <div>
                    <p className="font-medium">Amanhã - FÍSICO</p>
                    <p className="text-sm text-muted-foreground">09:00 - Joaquim</p>
                  </div>
                  <span className="bg-info text-info-foreground px-2 py-1 rounded text-xs">
                    Manhã
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-warning/10 rounded-lg">
                  <div>
                    <p className="font-medium">Quarta - TÉCNICO TÁTICO</p>
                    <p className="text-sm text-muted-foreground">16:00 - Joaquim</p>
                  </div>
                  <span className="bg-warning text-warning-foreground px-2 py-1 rounded text-xs">
                    Tarde
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                Atletas em Destaque
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-success text-success-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      EV
                    </div>
                    <div>
                      <p className="font-medium">EVINHO</p>
                      <p className="text-sm text-muted-foreground">Carga: 1230 pontos</p>
                    </div>
                  </div>
                  <span className="bg-success text-success-foreground px-2 py-1 rounded text-xs">
                    Baixo Risco
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-warning/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-warning text-warning-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      RY
                    </div>
                    <div>
                      <p className="font-medium">RYAN</p>
                      <p className="text-sm text-muted-foreground">Carga: 1368 pontos</p>
                    </div>
                  </div>
                  <span className="bg-warning text-warning-foreground px-2 py-1 rounded text-xs">
                    Médio Risco
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-info/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-info text-info-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      GU
                    </div>
                    <div>
                      <p className="font-medium">GUI</p>
                      <p className="text-sm text-muted-foreground">Carga: 834 pontos</p>
                    </div>
                  </div>
                  <span className="bg-success text-success-foreground px-2 py-1 rounded text-xs">
                    Baixo Risco
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="mr-2 h-5 w-5 text-primary" />
              Atividade Recente
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-muted/50 rounded-lg">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium">EVINHO</span> completou votação PSE do treino de ontem
                  </p>
                  <p className="text-xs text-muted-foreground">Há 2 horas</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-muted/50 rounded-lg">
                <div className="w-2 h-2 bg-info rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm">
                    Scout técnico-tático registrado para <span className="font-medium">TIAGO</span>
                  </p>
                  <p className="text-xs text-muted-foreground">Há 4 horas</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-muted/50 rounded-lg">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm">
                    Planejamento semanal atualizado para o período 21/07 - 27/07
                  </p>
                  <p className="text-xs text-muted-foreground">Há 6 horas</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}