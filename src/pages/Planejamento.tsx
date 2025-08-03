import Layout from "@/components/layout/Layout";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Copy, 
  Save, 
  ChevronLeft, 
  ChevronRight,
  Calendar,
  Clock,
  MapPin,
  User
} from "lucide-react";
import { useState } from "react";

const diasSemana = [
  { data: "21/07", dia: "SEGUNDA", treinos: [
    { horario: "MANHÃ", tipo: "ACADEMIA", pse: "7H/8H/9H/10H", local: "Usina XV", responsavel: "Joaquim" },
    { horario: "TARDE", tipo: "PISTA", pse: "16H", local: "Joaquim", responsavel: "Joaquim" }
  ]},
  { data: "22/07", dia: "TERÇA", treinos: [
    { horario: "MANHÃ", tipo: "FÍSICO", pse: "9H", local: "Joaquim", responsavel: "Joaquim" },
    { horario: "TARDE", tipo: "TÉCNICO TÁTICO", pse: "16H", local: "Joaquim", responsavel: "Joaquim" }
  ]},
  { data: "23/07", dia: "QUARTA", treinos: [
    { horario: "MANHÃ", tipo: "ACADEMIA", pse: "7H/8H/9H/10H", local: "Usina XV", responsavel: "Joaquim" },
    { horario: "TARDE", tipo: "TÉCNICO TÁTICO", pse: "16H", local: "Joaquim", responsavel: "Joaquim" }
  ]},
  { data: "24/07", dia: "QUINTA", treinos: [
    { horario: "MANHÃ", tipo: "FOLGA", pse: "Horário", local: "Local", responsavel: "Responsável" },
    { horario: "TARDE", tipo: "FOLGA", pse: "Horário", local: "Local", responsavel: "Responsável" }
  ]},
  { data: "25/07", dia: "SEXTA", treinos: [
    { horario: "MANHÃ", tipo: "TÉCNICO TÁTICO", pse: "9H", local: "Joaquim", responsavel: "Joaquim" },
    { horario: "TARDE", tipo: "TÉCNICO TÁTICO", pse: "16H", local: "Joaquim", responsavel: "Joaquim" }
  ]},
  { data: "26/07", dia: "SÁBADO", treinos: [
    { horario: "MANHÃ", tipo: "FOLGA", pse: "Horário", local: "Local", responsavel: "Responsável" },
    { horario: "TARDE", tipo: "FOLGA", pse: "Horário", local: "Local", responsavel: "Responsável" }
  ]},
  { data: "27/07", dia: "DOMINGO", treinos: [
    { horario: "MANHÃ", tipo: "FOLGA", pse: "Horário", local: "Local", responsavel: "Responsável" },
    { horario: "TARDE", tipo: "FOLGA", pse: "Horário", local: "Local", responsavel: "Responsável" }
  ]}
];

const getTipoColor = (tipo: string) => {
  switch (tipo) {
    case "ACADEMIA": return "success";
    case "FÍSICO": return "info";
    case "TÉCNICO TÁTICO": return "warning";
    case "PISTA": return "destructive";
    case "FOLGA": return "muted";
    default: return "muted";
  }
};

const getPeriodoColor = (periodo: string) => {
  switch (periodo) {
    case "MANHÃ": return "bg-green-100 text-green-800";
    case "TARDE": return "bg-yellow-100 text-yellow-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

export default function Planejamento() {
  const [semanaAtual, setSemanaAtual] = useState("21/07 - 27/07");
  const [microciclo] = useState("MICROCICLO COMPETITIVO");

  const proximaSemana = () => {
    // Lógica para navegar para próxima semana
    console.log("Próxima semana");
  };

  const semanaAnterior = () => {
    // Lógica para navegar para semana anterior
    console.log("Semana anterior");
  };

  const duplicarSemana = () => {
    console.log("Duplicar semana");
  };

  const salvarPlanejamento = () => {
    console.log("Salvar planejamento");
  };

  return (
    <Layout>
      <Header 
        title="Planejamento Semanal" 
        subtitle="Sistema de Gestão Esportiva - CAD Futsal"
      >
        <Button 
          variant="outline" 
          className="bg-white/20 hover:bg-white/30 text-white border-white/30"
          onClick={duplicarSemana}
        >
          <Copy className="mr-2 h-4 w-4" />
          Duplicar Semana
        </Button>
        <Button 
          className="bg-white/20 hover:bg-white/30 text-white border-white/30"
          onClick={salvarPlanejamento}
        >
          <Save className="mr-2 h-4 w-4" />
          Salvar
        </Button>
      </Header>
      
      <div className="p-6 space-y-6">
        {/* Cabeçalho do Planejamento */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Planejamento Semanal de Treinos
                </CardTitle>
                <p className="text-muted-foreground mt-1">{microciclo}</p>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Navegação da Semana */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-center space-x-6">
              <Button variant="ghost" onClick={semanaAnterior}>
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="text-center">
                <h2 className="text-xl font-bold text-foreground">
                  PERÍODO - {semanaAtual}
                </h2>
                <p className="text-sm text-success uppercase font-medium mt-1">
                  {microciclo}
                </p>
              </div>
              <Button variant="ghost" onClick={proximaSemana}>
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Grid dos Dias da Semana */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
          {diasSemana.map((dia, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="text-center">
                  <h3 className="font-bold text-lg">{dia.data}</h3>
                  <Badge 
                    variant={
                      dia.dia === "SEGUNDA" ? "success" :
                      dia.dia === "TERÇA" ? "info" :
                      dia.dia === "QUARTA" ? "success" :
                      dia.dia === "QUINTA" ? "warning" :
                      dia.dia === "SEXTA" ? "info" :
                      dia.dia === "SÁBADO" ? "muted" :
                      "muted"
                    }
                    className="text-xs"
                  >
                    {dia.dia}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {dia.treinos.map((treino, treinoIndex) => (
                  <div key={treinoIndex} className="space-y-3">
                    {/* Período */}
                    <div className={`text-center py-1 px-3 rounded-full text-xs font-medium ${getPeriodoColor(treino.horario)}`}>
                      {treino.horario}
                    </div>
                    
                    {/* Tipo de Treino */}
                    <div className="text-center">
                      <Badge 
                        variant={getTipoColor(treino.tipo) as any}
                        className="text-xs px-3 py-1"
                      >
                        {treino.tipo}
                      </Badge>
                    </div>

                    {/* Detalhes do Treino */}
                    {treino.tipo !== "FOLGA" && (
                      <div className="space-y-2 text-xs text-center">
                        <div className="flex items-center justify-center space-x-1">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span>{treino.pse}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-1">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          <span>{treino.local}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-1">
                          <User className="h-3 w-3 text-muted-foreground" />
                          <span>{treino.responsavel}</span>
                        </div>
                      </div>
                    )}

                    {treino.tipo === "FOLGA" && (
                      <div className="text-center text-xs text-muted-foreground">
                        <div>{treino.pse}</div>
                        <div>{treino.local}</div>
                        <div>{treino.responsavel}</div>
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Resumo da Semana */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-primary" />
              Resumo da Semana
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-success/10 rounded-lg">
                <div className="text-2xl font-bold text-success">6</div>
                <div className="text-sm text-muted-foreground">Sessões de Treino</div>
              </div>
              <div className="text-center p-4 bg-info/10 rounded-lg">
                <div className="text-2xl font-bold text-info">3</div>
                <div className="text-sm text-muted-foreground">Técnico-Tático</div>
              </div>
              <div className="text-center p-4 bg-warning/10 rounded-lg">
                <div className="text-2xl font-bold text-warning">2</div>
                <div className="text-sm text-muted-foreground">Academia</div>
              </div>
              <div className="text-center p-4 bg-destructive/10 rounded-lg">
                <div className="text-2xl font-bold text-destructive">1</div>
                <div className="text-sm text-muted-foreground">Físico</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}