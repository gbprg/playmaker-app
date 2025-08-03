import Layout from "@/components/layout/Layout";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Vote, 
  FileSpreadsheet, 
  Save,
  BarChart3,
  TrendingUp,
  Users,
  User
} from "lucide-react";

const atletasData = [
  { 
    nome: "EVINHO", 
    grupo: "CJ", 
    avatar: "EV",
    quartaFeira: { vol: "60min", pse: 7, carga: 420 },
    quintaFeira: { vol: "72min", pse: 8, carga: 576 },
    sextaFeira: { vol: "39min", pse: 6, carga: 234 },
    totalSemanal: 1230
  },
  { 
    nome: "INDIO", 
    grupo: "CJ", 
    avatar: "IN",
    quartaFeira: { vol: "60min", pse: 6, carga: 360 },
    quintaFeira: { vol: "72min", pse: 7, carga: 504 },
    sextaFeira: { vol: "39min", pse: 5, carga: 195 },
    totalSemanal: 1059
  },
  { 
    nome: "RYAN", 
    grupo: "CJ", 
    avatar: "RY",
    quartaFeira: { vol: "60min", pse: 8, carga: 480 },
    quintaFeira: { vol: "72min", pse: 8, carga: 576 },
    sextaFeira: { vol: "39min", pse: 8, carga: 312 },
    totalSemanal: 1368
  },
  { 
    nome: "GUI", 
    grupo: "CJ", 
    avatar: "GU",
    quartaFeira: { vol: "60min", pse: 4, carga: 240 },
    quintaFeira: { vol: "72min", pse: 5, carga: 360 },
    sextaFeira: { vol: "39min", pse: 6, carga: 234 },
    totalSemanal: 834
  },
  { 
    nome: "ARTUR", 
    grupo: "S", 
    avatar: "AR",
    quartaFeira: { vol: "60min", pse: 4, carga: 240 },
    quintaFeira: { vol: "72min", pse: 5, carga: 360 },
    sextaFeira: { vol: "39min", pse: 5, carga: 195 },
    totalSemanal: 795
  },
  { 
    nome: "KELVEN", 
    grupo: "CJ", 
    avatar: "KE",
    quartaFeira: { vol: "60min", pse: 7, carga: 420 },
    quintaFeira: { vol: "72min", pse: 6, carga: 432 },
    sextaFeira: { vol: "39min", pse: 6, carga: 234 },
    totalSemanal: 1086
  }
];

const getPseColor = (pse: number) => {
  if (pse <= 3) return "bg-green-500 text-white";
  if (pse <= 5) return "bg-green-400 text-white";
  if (pse <= 6) return "bg-yellow-500 text-white";
  if (pse <= 8) return "bg-orange-500 text-white";
  return "bg-red-500 text-white";
};

const getGrupoColor = (grupo: string) => {
  switch (grupo) {
    case "CJ": return "success";
    case "S": return "warning";
    default: return "muted";
  }
};

export default function CargaTreino() {
  const votarPSE = () => {
    console.log("Abrir votação PSE");
  };

  const exportarDados = () => {
    console.log("Exportar dados");
  };

  const salvarRegistros = () => {
    console.log("Salvar registros");
  };

  return (
    <Layout>
      <Header 
        title="Carga de Treino" 
        subtitle="Sistema de Gestão Esportiva - CAD Futsal"
      >
        <Button 
          variant="info"
          onClick={votarPSE}
        >
          <Vote className="mr-2 h-4 w-4" />
          Votação PSE
        </Button>
        <Button 
          variant="outline" 
          className="bg-white/20 hover:bg-white/30 text-white border-white/30"
          onClick={exportarDados}
        >
          <FileSpreadsheet className="mr-2 h-4 w-4" />
          Exportar Dados
        </Button>
        <Button 
          className="bg-white/20 hover:bg-white/30 text-white border-white/30"
          onClick={salvarRegistros}
        >
          <Save className="mr-2 h-4 w-4" />
          Salvar Registros
        </Button>
      </Header>
      
      <div className="p-6 space-y-6">
        {/* Controle de Carga de Treino */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground">
              Controle de Carga de Treino
            </CardTitle>
            <p className="text-muted-foreground">
              Percepção Subjetiva de Esforço (PSE) x Volume
            </p>
          </CardHeader>
        </Card>

        {/* Tabs para diferentes visões */}
        <Tabs defaultValue="todos" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="todos" className="bg-success text-success-foreground data-[state=active]:bg-success">
              Todos
            </TabsTrigger>
            <TabsTrigger value="convocados">Convocados (CJ)</TabsTrigger>
            <TabsTrigger value="suplentes">Suplentes (S)</TabsTrigger>
            <TabsTrigger value="nao-convocados">Não Convocados (NC)</TabsTrigger>
          </TabsList>

          <TabsContent value="todos" className="space-y-6">
            {/* Registro Diário de Carga */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5 text-primary" />
                  Registro Diário de Carga
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Volume (minutos) x PSE (0-10) = Carga Total
                </p>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4 font-medium">Atleta</th>
                        <th className="text-left p-4 font-medium">Grupo</th>
                        <th className="text-center p-4 font-medium">Quarta-feira</th>
                        <th className="text-center p-4 font-medium">Quinta-feira</th>
                        <th className="text-center p-4 font-medium">Sexta-feira</th>
                        <th className="text-center p-4 font-medium">Total Semanal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {atletasData.map((atleta, index) => (
                        <tr key={index} className="border-b hover:bg-muted/20">
                          <td className="p-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-success text-success-foreground rounded-full flex items-center justify-center font-bold text-sm">
                                {atleta.avatar}
                              </div>
                              <span className="font-medium">{atleta.nome}</span>
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge variant={getGrupoColor(atleta.grupo) as any}>
                              {atleta.grupo}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <div className="text-center space-y-1">
                              <div className="text-xs text-muted-foreground">Vol: {atleta.quartaFeira.vol}</div>
                              <div className={`inline-flex items-center justify-center w-8 h-6 rounded text-xs font-bold ${getPseColor(atleta.quartaFeira.pse)}`}>
                                PSE: {atleta.quartaFeira.pse}
                              </div>
                              <div className="text-sm font-medium">= {atleta.quartaFeira.carga}</div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="text-center space-y-1">
                              <div className="text-xs text-muted-foreground">Vol: {atleta.quintaFeira.vol}</div>
                              <div className={`inline-flex items-center justify-center w-8 h-6 rounded text-xs font-bold ${getPseColor(atleta.quintaFeira.pse)}`}>
                                PSE: {atleta.quintaFeira.pse}
                              </div>
                              <div className="text-sm font-medium">= {atleta.quintaFeira.carga}</div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="text-center space-y-1">
                              <div className="text-xs text-muted-foreground">Vol: {atleta.sextaFeira.vol}</div>
                              <div className={`inline-flex items-center justify-center w-8 h-6 rounded text-xs font-bold ${getPseColor(atleta.sextaFeira.pse)}`}>
                                PSE: {atleta.sextaFeira.pse}
                              </div>
                              <div className="text-sm font-medium">= {atleta.sextaFeira.carga}</div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="text-center">
                              <div className="text-lg font-bold text-foreground">{atleta.totalSemanal}</div>
                              <div className="text-xs text-muted-foreground">pontos</div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Gráficos e Indicadores */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Evolução da Carga Semanal */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                    Evolução da Carga Semanal
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Comparação entre atletas principais
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
                    <p className="text-muted-foreground">Gráfico de evolução da carga</p>
                  </div>
                </CardContent>
              </Card>

              {/* Indicadores de Risco */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-primary" />
                    Indicadores de Risco
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Monotonia e Strain por atleta
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {atletasData.slice(0, 4).map((atleta, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-success text-success-foreground rounded-full flex items-center justify-center font-bold text-sm">
                            {atleta.avatar}
                          </div>
                          <div>
                            <p className="font-medium">{atleta.nome}</p>
                            <p className="text-sm text-muted-foreground">Grupo: {atleta.grupo}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="text-center">
                            <p className="text-xs text-muted-foreground">Monotonia</p>
                            <Badge variant="success" className="text-xs">
                              {index < 2 ? "1.8" : "1.5"}
                            </Badge>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-muted-foreground">Strain</p>
                            <Badge variant={index === 0 ? "destructive" : index === 2 ? "destructive" : "warning"} className="text-xs">
                              {index === 0 ? "2224" : index === 1 ? "1382" : index === 2 ? "2512" : "1276"}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="convocados">
            <Card>
              <CardContent className="p-6">
                <p className="text-center text-muted-foreground">
                  Dados filtrados para atletas convocados (CJ)
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="suplentes">
            <Card>
              <CardContent className="p-6">
                <p className="text-center text-muted-foreground">
                  Dados filtrados para atletas suplentes (S)
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="nao-convocados">
            <Card>
              <CardContent className="p-6">
                <p className="text-center text-muted-foreground">
                  Dados filtrados para atletas não convocados (NC)
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}