import Layout from "@/components/layout/Layout";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Calendar,
  FileText,
  Download,
  BarChart3,
  TrendingUp,
  Users,
  Target
} from "lucide-react";
import { useState } from "react";

const tiposRelatorio = [
  {
    titulo: "Relatório Semanal",
    descricao: "Análise completa da semana de treinos",
    icone: Calendar,
    cor: "success"
  },
  {
    titulo: "Relatório Individual", 
    descricao: "Desempenho específico por atleta",
    icone: Users,
    cor: "info"
  },
  {
    titulo: "Relatório de Carga",
    descricao: "Análise de carga e risco de lesões", 
    icone: BarChart3,
    cor: "warning"
  },
  {
    titulo: "Relatório Técnico-Tático",
    descricao: "Estatísticas de jogos e scout",
    icone: Target,
    cor: "destructive"
  }
];

export default function Relatorios() {
  const [dataInicio, setDataInicio] = useState("21/07/2024");
  const [dataFim, setDataFim] = useState("27/07/2024");

  const atualizarPeriodo = () => {
    console.log("Atualizar período", { dataInicio, dataFim });
  };

  const agendarRelatorio = () => {
    console.log("Agendar relatório");
  };

  const baixarRelatorio = (tipo: string, formato: string) => {
    console.log(`Baixar ${tipo} em ${formato}`);
  };

  return (
    <Layout>
      <Header 
        title="Relatórios" 
        subtitle="Sistema de Gestão Esportiva - CAD Futsal"
      >
        <Button 
          variant="outline" 
          className="bg-white/20 hover:bg-white/30 text-white border-white/30"
          onClick={agendarRelatorio}
        >
          <Calendar className="mr-2 h-4 w-4" />
          Agendar Relatório
        </Button>
      </Header>
      
      <div className="p-6 space-y-6">
        {/* Título da Seção */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground">
              Relatórios e Análises
            </CardTitle>
            <p className="text-muted-foreground">
              Geração de documentos para acompanhamento
            </p>
          </CardHeader>
        </Card>

        {/* Seleção de Período */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-end space-x-4">
              <div className="flex-1">
                <Label htmlFor="dataInicio">Data Início</Label>
                <Input
                  id="dataInicio"
                  type="text"
                  value={dataInicio}
                  onChange={(e) => setDataInicio(e.target.value)}
                  placeholder="DD/MM/AAAA"
                />
              </div>
              <div className="flex-1">
                <Label htmlFor="dataFim">Data Fim</Label>
                <Input
                  id="dataFim"
                  type="text"
                  value={dataFim}
                  onChange={(e) => setDataFim(e.target.value)}
                  placeholder="DD/MM/AAAA"
                />
              </div>
              <Button onClick={atualizarPeriodo}>
                Atualizar Período
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Cards de Relatórios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tiposRelatorio.map((relatorio, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className={`p-2 rounded-lg mr-3 bg-${relatorio.cor}/10`}>
                    <relatorio.icone className={`h-6 w-6 text-${relatorio.cor}`} />
                  </div>
                  {relatorio.titulo}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {relatorio.descricao}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => baixarRelatorio(relatorio.titulo, "PDF")}
                  >
                    <Download className="mr-1 h-3 w-3" />
                    PDF
                  </Button>
                  <Button 
                    variant="success" 
                    size="sm"
                    onClick={() => baixarRelatorio(relatorio.titulo, "Excel")}
                  >
                    <Download className="mr-1 h-3 w-3" />
                    Excel
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Seções de Visualização */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Evolução Semanal da Carga */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                Evolução Semanal da Carga
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Período: 2024-07-21 a 2024-07-27
              </p>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Gráfico de evolução da carga</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Indicadores de Risco */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-2 h-5 w-5 text-primary" />
                Indicadores de Risco
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Monotonia e Strain por atleta
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-success text-success-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      EV
                    </div>
                    <div>
                      <p className="font-medium">EVINHO</p>
                      <p className="text-sm text-muted-foreground">Carga: 1230</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="bg-info text-info-foreground px-2 py-1 rounded text-xs">
                      M: 1.8
                    </div>
                    <div className="bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs">
                      S: 2214
                    </div>
                    <div className="bg-success text-success-foreground px-2 py-1 rounded text-xs">
                      baixo
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-warning/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-warning text-warning-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      RY
                    </div>
                    <div>
                      <p className="font-medium">RYAN</p>
                      <p className="text-sm text-muted-foreground">Carga: 1368</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="bg-info text-info-foreground px-2 py-1 rounded text-xs">
                      M: 2.1
                    </div>
                    <div className="bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs">
                      S: 2873
                    </div>
                    <div className="bg-warning text-warning-foreground px-2 py-1 rounded text-xs">
                      médio
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-success text-success-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      GU
                    </div>
                    <div>
                      <p className="font-medium">GUI</p>
                      <p className="text-sm text-muted-foreground">Carga: 834</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="bg-info text-info-foreground px-2 py-1 rounded text-xs">
                      M: 1.4
                    </div>
                    <div className="bg-success text-success-foreground px-2 py-1 rounded text-xs">
                      S: 1168
                    </div>
                    <div className="bg-success text-success-foreground px-2 py-1 rounded text-xs">
                      baixo
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-success text-success-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      KE
                    </div>
                    <div>
                      <p className="font-medium">KELVEN</p>
                      <p className="text-sm text-muted-foreground">Carga: 1086</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="bg-info text-info-foreground px-2 py-1 rounded text-xs">
                      M: 1.6
                    </div>
                    <div className="bg-success text-success-foreground px-2 py-1 rounded text-xs">
                      S: 1738
                    </div>
                    <div className="bg-success text-success-foreground px-2 py-1 rounded text-xs">
                      baixo
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-success text-success-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      AR
                    </div>
                    <div>
                      <p className="font-medium">ARTUR</p>
                      <p className="text-sm text-muted-foreground">Carga: 795</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="bg-info text-info-foreground px-2 py-1 rounded text-xs">
                      M: 1.5
                    </div>
                    <div className="bg-success text-success-foreground px-2 py-1 rounded text-xs">
                      S: 1193
                    </div>
                    <div className="bg-success text-success-foreground px-2 py-1 rounded text-xs">
                      baixo
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}