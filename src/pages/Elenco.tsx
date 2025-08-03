import Layout from "@/components/layout/Layout";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Edit, BarChart3 } from "lucide-react";

const atletas = [
  { id: 1, nome: "EVINHO", posicao: "Goleiro", idade: 28, peso: "75 kg", altura: "180 cm", status: "Convocado", avatar: "EV" },
  { id: 2, nome: "INDIO", posicao: "Fixo", idade: 25, peso: "70 kg", altura: "175 cm", status: "Convocado", avatar: "IN" },
  { id: 3, nome: "RYAN", posicao: "Ala", idade: 23, peso: "68 kg", altura: "172 cm", status: "Convocado", avatar: "RY" },
  { id: 4, nome: "GUI", posicao: "Pivô", idade: 26, peso: "72 kg", altura: "178 cm", status: "Convocado", avatar: "GU" },
  { id: 5, nome: "ARTUR", posicao: "Ala", idade: 24, peso: "69 kg", altura: "174 cm", status: "Suplente", avatar: "AR" },
  { id: 6, nome: "KELVEN", posicao: "Fixo", idade: 27, peso: "73 kg", altura: "176 cm", status: "Convocado", avatar: "KE" },
  { id: 7, nome: "CAIO", posicao: "Ala", idade: 22, peso: "67 kg", altura: "170 cm", status: "Suplente", avatar: "CA" },
  { id: 8, nome: "MECIN", posicao: "Pivô", idade: 29, peso: "74 kg", altura: "179 cm", status: "Não Convocado", avatar: "ME" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Convocado": return "success";
    case "Suplente": return "warning";
    case "Não Convocado": return "destructive";
    default: return "muted";
  }
};

export default function Elenco() {
  return (
    <Layout>
      <Header 
        title="Gerenciamento do Elenco" 
        subtitle="Total de 10 atletas cadastrados"
      >
        <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30">
          <Plus className="mr-2 h-4 w-4" />
          Novo Atleta
        </Button>
      </Header>
      
      <div className="p-6 space-y-6">
        {/* Search and Filters */}
        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Buscar atleta..."
              className="pl-10"
            />
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" className="bg-success text-success-foreground">
              Todos
            </Button>
            <Button variant="outline">Convocados</Button>
            <Button variant="outline">Suplentes</Button>
            <Button variant="outline">Não Convocados</Button>
          </div>
        </div>

        {/* Athletes Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/30">
                    <th className="text-left p-4 font-medium">Nome</th>
                    <th className="text-left p-4 font-medium">Posição</th>
                    <th className="text-left p-4 font-medium">Idade</th>
                    <th className="text-left p-4 font-medium">Peso</th>
                    <th className="text-left p-4 font-medium">Altura</th>
                    <th className="text-left p-4 font-medium">Status</th>
                    <th className="text-left p-4 font-medium">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {atletas.map((atleta) => (
                    <tr key={atleta.id} className="border-b hover:bg-muted/20 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-success text-success-foreground rounded-full flex items-center justify-center font-bold text-sm">
                            {atleta.avatar}
                          </div>
                          <span className="font-medium">{atleta.nome}</span>
                        </div>
                      </td>
                      <td className="p-4 text-muted-foreground">{atleta.posicao}</td>
                      <td className="p-4 text-muted-foreground">{atleta.idade} anos</td>
                      <td className="p-4 text-muted-foreground">{atleta.peso}</td>
                      <td className="p-4 text-muted-foreground">{atleta.altura}</td>
                      <td className="p-4">
                        <Badge variant={getStatusColor(atleta.status) as any}>
                          {atleta.status}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                            Editar
                          </Button>
                          <Button variant="ghost" size="sm">
                            <BarChart3 className="h-4 w-4" />
                            Histórico
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}