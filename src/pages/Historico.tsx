import Layout from "@/components/layout/Layout";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  RotateCcw,
  Download,
  TrendingUp,
  BarChart3,
  Users,
  Activity
} from "lucide-react";

export default function Historico() {
  const resetarHistorico = () => {
    console.log("Resetar histórico");
  };

  const exportarHistorico = () => {
    console.log("Exportar histórico");
  };

  return (
    <Layout>
      <Header 
        title="Histórico de Evolução" 
        subtitle="Sistema de Gestão Esportiva - CAD Futsal"
      >
        <Button 
          variant="outline" 
          className="bg-white/20 hover:bg-white/30 text-white border-white/30"
          onClick={resetarHistorico}
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Resetar
        </Button>
        <Button 
          className="bg-white/20 hover:bg-white/30 text-white border-white/30"
          onClick={exportarHistorico}
        >
          <Download className="mr-2 h-4 w-4" />
          Exportar
        </Button>
      </Header>
      
      <div className="p-6 space-y-6">
        {/* Título da Seção */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground">
              Histórico de Evolução
            </CardTitle>
            <p className="text-muted-foreground">
              Acompanhamento longitudinal do desempenho dos atletas
            </p>
          </CardHeader>
        </Card>

        {/* Métricas Principais */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Carga Aguda (7 dias)</p>
                  <p className="text-2xl font-bold text-foreground">1.285</p>
                  <p className="text-xs text-success">+8% vs semana anterior</p>
                </div>
                <div className="p-3 rounded-full bg-success/10">
                  <Activity className="h-6 w-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Carga Crônica (21 dias)</p>
                  <p className="text-2xl font-bold text-foreground">3.842</p>
                  <p className="text-xs text-info">+3% vs período anterior</p>
                </div>
                <div className="p-3 rounded-full bg-info/10">
                  <TrendingUp className="h-6 w-6 text-info" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Ratio Aguda:Crônica</p>
                  <p className="text-2xl font-bold text-foreground">0.83</p>
                  <p className="text-xs text-warning">Zona de risco moderado</p>
                </div>
                <div className="p-3 rounded-full bg-warning/10">
                  <BarChart3 className="h-6 w-6 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Atletas Monitorados</p>
                  <p className="text-2xl font-bold text-foreground">8</p>
                  <p className="text-xs text-muted-foreground">Total ativo</p>
                </div>
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Gráficos de Evolução */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Evolução Individual */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                Evolução Individual - EVINHO
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Carga individual ao longo da semana
              </p>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Gráfico de evolução individual</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comparação Grupal */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="mr-2 h-5 w-5 text-primary" />
                Evolução do Grupo
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Comparação entre atletas principais
              </p>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Gráfico de comparação grupal</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Histórico Longitudinal */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="mr-2 h-5 w-5 text-primary" />
              Histórico Longitudinal (Últimas 3 Semanas)
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Análise da carga aguda vs crônica para prevenção de lesões
            </p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-medium">Atleta</th>
                    <th className="text-center p-4 font-medium">Semana 1</th>
                    <th className="text-center p-4 font-medium">Semana 2</th>
                    <th className="text-center p-4 font-medium">Semana 3</th>
                    <th className="text-center p-4 font-medium">Carga Aguda</th>
                    <th className="text-center p-4 font-medium">Carga Crônica</th>
                    <th className="text-center p-4 font-medium">Ratio A:C</th>
                    <th className="text-center p-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-muted/20">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-success text-success-foreground rounded-full flex items-center justify-center font-bold text-sm">
                          EV
                        </div>
                        <span className="font-medium">EVINHO</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">1.180</td>
                    <td className="p-4 text-center">1.245</td>
                    <td className="p-4 text-center">1.230</td>
                    <td className="p-4 text-center font-bold">1.230</td>
                    <td className="p-4 text-center">3.655</td>
                    <td className="p-4 text-center">0.84</td>
                    <td className="p-4 text-center">
                      <span className="bg-success text-success-foreground px-2 py-1 rounded text-xs">
                        Baixo
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/20">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-success text-success-foreground rounded-full flex items-center justify-center font-bold text-sm">
                          RY
                        </div>
                        <span className="font-medium">RYAN</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">1.320</td>
                    <td className="p-4 text-center">1.410</td>
                    <td className="p-4 text-center">1.368</td>
                    <td className="p-4 text-center font-bold">1.368</td>
                    <td className="p-4 text-center">4.098</td>
                    <td className="p-4 text-center">0.89</td>
                    <td className="p-4 text-center">
                      <span className="bg-warning text-warning-foreground px-2 py-1 rounded text-xs">
                        Médio
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/20">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-success text-success-foreground rounded-full flex items-center justify-center font-bold text-sm">
                          GU
                        </div>
                        <span className="font-medium">GUI</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">890</td>
                    <td className="p-4 text-center">920</td>
                    <td className="p-4 text-center">834</td>
                    <td className="p-4 text-center font-bold">834</td>
                    <td className="p-4 text-center">2.644</td>
                    <td className="p-4 text-center">0.76</td>
                    <td className="p-4 text-center">
                      <span className="bg-success text-success-foreground px-2 py-1 rounded text-xs">
                        Baixo
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/20">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-success text-success-foreground rounded-full flex items-center justify-center font-bold text-sm">
                          KE
                        </div>
                        <span className="font-medium">KELVEN</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">1.050</td>
                    <td className="p-4 text-center">1.120</td>
                    <td className="p-4 text-center">1.086</td>
                    <td className="p-4 text-center font-bold">1.086</td>
                    <td className="p-4 text-center">3.256</td>
                    <td className="p-4 text-center">0.81</td>
                    <td className="p-4 text-center">
                      <span className="bg-success text-success-foreground px-2 py-1 rounded text-xs">
                        Baixo
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Indicadores de Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5 text-primary" />
              Indicadores de Performance
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Métricas avançadas de monitoramento
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-success/10 rounded-lg">
                <h4 className="font-medium text-success mb-2">Zona Segura (0.8-1.3)</h4>
                <p className="text-2xl font-bold text-success">75%</p>
                <p className="text-sm text-muted-foreground">dos atletas</p>
              </div>
              <div className="p-4 bg-warning/10 rounded-lg">
                <h4 className="font-medium text-warning mb-2">Zona de Atenção (1.3-1.5)</h4>
                <p className="text-2xl font-bold text-warning">25%</p>
                <p className="text-sm text-muted-foreground">dos atletas</p>
              </div>
              <div className="p-4 bg-destructive/10 rounded-lg">
                <h4 className="font-medium text-destructive mb-2">Zona de Risco (&gt;1.5)</h4>
                <p className="text-2xl font-bold text-destructive">0%</p>
                <p className="text-sm text-muted-foreground">dos atletas</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}