import Layout from "@/components/layout/Layout";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  RotateCcw, 
  FileText,
  Target,
  Play,
  Pause,
  Square
} from "lucide-react";
import { useState } from "react";

const jogadores = [
  { numero: 6, nome: "EVINHO", posicao: "Goleiro", ativo: true },
  { numero: 3, nome: "INDIO", posicao: "Fixo", ativo: false },
  { numero: 15, nome: "RYAN", posicao: "Ala", ativo: false },
  { numero: 16, nome: "GUI", posicao: "Pivô", ativo: false },
  { numero: 4, nome: "ARTUR", posicao: "Ala", ativo: false },
  { numero: 12, nome: "KELVEN", posicao: "Fixo", ativo: false },
  { numero: 23, nome: "CAIO", posicao: "Ala", ativo: false },
  { numero: 11, nome: "TIAGO", posicao: "Goleiro", ativo: false }
];

const acoesTecnicas = [
  { nome: "GOL", cor: "bg-green-500", icon: "⚽" },
  { nome: "FINALIZAÇÃO NO GOL", cor: "bg-green-400", icon: "🎯" },
  { nome: "FINALIZAÇÃO FORA", cor: "bg-red-500", icon: "❌" },
  { nome: "ASSISTÊNCIA", cor: "bg-blue-500", icon: "🅰️" },
  { nome: "PASSE CERTO", cor: "bg-green-300", icon: "✅" },
  { nome: "PASSE ERRADO", cor: "bg-red-400", icon: "❌" },
  { nome: "DESARME", cor: "bg-orange-500", icon: "🛡️" },
  { nome: "INTERCEPTAÇÃO", cor: "bg-purple-500", icon: "🚫" },
  { nome: "FALTA COMETIDA", cor: "bg-orange-600", icon: "⚠️" },
  { nome: "FALTA SOFRIDA", cor: "bg-blue-400", icon: "💔" }
];

const estatisticasJogadores = [
  { 
    numero: 6, nome: "EVINHO", posicao: "Goleiro",
    passes: "0/0", precisao: "0%", finalizacoes: 0, desarmes: 0, gols: 0, assistencias: 0
  },
  { 
    numero: 3, nome: "INDIO", posicao: "Fixo",
    passes: "0/0", precisao: "0%", finalizacoes: 0, desarmes: 0, gols: 0, assistencias: 0
  },
  { 
    numero: 15, nome: "RYAN", posicao: "Ala", 
    passes: "0/0", precisao: "0%", finalizacoes: 0, desarmes: 0, gols: 0, assistencias: 0
  },
  { 
    numero: 16, nome: "GUI", posicao: "Pivô",
    passes: "0/0", precisao: "0%", finalizacoes: 0, desarmes: 0, gols: 0, assistencias: 0
  },
  { 
    numero: 4, nome: "ARTUR", posicao: "Ala",
    passes: "0/0", precisao: "0%", finalizacoes: 0, desarmes: 0, gols: 0, assistencias: 0
  },
  { 
    numero: 12, nome: "KELVEN", posicao: "Fixo",
    passes: "0/0", precisao: "0%", finalizacoes: 0, desarmes: 0, gols: 0, assistencias: 0
  },
  { 
    numero: 23, nome: "CAIO", posicao: "Ala",
    passes: "2/3", precisao: "67%", finalizacoes: 2, desarmes: 1, gols: 1, assistencias: 1
  },
  { 
    numero: 11, nome: "TIAGO", posicao: "Goleiro",
    passes: "2/3", precisao: "67%", finalizacoes: 2, desarmes: 1, gols: 1, assistencias: 1
  }
];

export default function Scout() {
  const [jogadorAtivo, setJogadorAtivo] = useState(6);
  const [partidaIniciada, setPartidaIniciada] = useState(false);

  const resetar = () => {
    console.log("Resetar scout");
  };

  const gerarRelatorio = () => {
    console.log("Gerar relatório");
  };

  const iniciarPartida = () => {
    setPartidaIniciada(true);
  };

  const pausarPartida = () => {
    setPartidaIniciada(false);
  };

  const pararPartida = () => {
    setPartidaIniciada(false);
  };

  const registrarAcao = (acao: string) => {
    console.log(`Registrar ação: ${acao} para jogador ${jogadorAtivo}`);
  };

  return (
    <Layout>
      <Header 
        title="Scout Técnico-Tático" 
        subtitle="Sistema de Gestão Esportiva - CAD Futsal"
      >
        <Button 
          variant="outline" 
          className="bg-white/20 hover:bg-white/30 text-white border-white/30"
          onClick={resetar}
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Resetar
        </Button>
        <Button 
          className="bg-white/20 hover:bg-white/30 text-white border-white/30"
          onClick={gerarRelatorio}
        >
          <FileText className="mr-2 h-4 w-4" />
          Gerar Relatório
        </Button>
      </Header>
      
      <div className="p-6 space-y-6">
        {/* Título da Seção */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground">
              Scout Técnico-Tático
            </CardTitle>
            <p className="text-muted-foreground">
              Registro de ações durante a partida
            </p>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Painel de Controle */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-2 h-5 w-5 text-primary" />
                Painel de Controle
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Selecione jogador e registre ações
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Controles da Partida */}
              <div className="flex justify-center space-x-4">
                <Button 
                  variant={partidaIniciada ? "secondary" : "success"}
                  onClick={iniciarPartida}
                  disabled={partidaIniciada}
                >
                  <Play className="mr-2 h-4 w-4" />
                  Iniciar
                </Button>
                <Button 
                  variant="warning"
                  onClick={pausarPartida}
                  disabled={!partidaIniciada}
                >
                  <Pause className="mr-2 h-4 w-4" />
                  Pausar
                </Button>
                <Button 
                  variant="destructive"
                  onClick={pararPartida}
                  disabled={!partidaIniciada}
                >
                  <Square className="mr-2 h-4 w-4" />
                  Parar
                </Button>
              </div>

              {/* Seleção de Jogador */}
              <div>
                <h3 className="font-medium mb-3">Jogador Ativo:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {jogadores.map((jogador) => (
                    <Button
                      key={jogador.numero}
                      variant={jogadorAtivo === jogador.numero ? "default" : "outline"}
                      className={`text-xs ${jogadorAtivo === jogador.numero ? 'bg-primary text-primary-foreground' : ''}`}
                      onClick={() => setJogadorAtivo(jogador.numero)}
                    >
                      <span className="bg-success text-success-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">
                        {jogador.numero}
                      </span>
                      {jogador.nome}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Registrar Ação */}
              <div>
                <h3 className="font-medium mb-3">Registrar Ação:</h3>
                <div className="grid grid-cols-1 gap-2">
                  {acoesTecnicas.map((acao, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className={`${acao.cor} text-white hover:opacity-80 border-none justify-start`}
                      onClick={() => registrarAcao(acao.nome)}
                      disabled={!partidaIniciada}
                    >
                      <span className="mr-2 text-lg">{acao.icon}</span>
                      {acao.nome}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Estatísticas da Partida */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5 text-primary" />
                Estatísticas da Partida
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Desempenho individual dos jogadores
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {estatisticasJogadores.map((jogador, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-muted/20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-success text-success-foreground rounded-full flex items-center justify-center font-bold text-sm">
                          {jogador.numero}
                        </div>
                        <div>
                          <p className="font-medium">{jogador.nome}</p>
                          <p className="text-sm text-muted-foreground">{jogador.posicao}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Passes:</p>
                        <p className="font-medium">{jogador.passes}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Precisão:</p>
                        <p className="font-medium">{jogador.precisao}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Finalizações:</p>
                        <p className="font-medium">{jogador.finalizacoes}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Desarmes:</p>
                        <p className="font-medium">{jogador.desarmes}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Gols:</p>
                        <p className="font-medium">{jogador.gols}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Assistências:</p>
                        <p className="font-medium">{jogador.assistencias}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Resumo da Partida */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="mr-2 h-5 w-5 text-primary" />
              Resumo da Partida
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Principais estatísticas consolidadas
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              <div className="text-center p-4 bg-success/10 rounded-lg">
                <div className="text-2xl font-bold text-success">2</div>
                <div className="text-sm text-muted-foreground">Gols</div>
              </div>
              <div className="text-center p-4 bg-info/10 rounded-lg">
                <div className="text-2xl font-bold text-info">1</div>
                <div className="text-sm text-muted-foreground">Assistências</div>
              </div>
              <div className="text-center p-4 bg-warning/10 rounded-lg">
                <div className="text-2xl font-bold text-warning">1</div>
                <div className="text-sm text-muted-foreground">Desarmes</div>
              </div>
              <div className="text-center p-4 bg-destructive/10 rounded-lg">
                <div className="text-2xl font-bold text-destructive">3</div>
                <div className="text-sm text-muted-foreground">Finalizações</div>
              </div>
              <div className="text-center p-4 bg-success/10 rounded-lg">
                <div className="text-2xl font-bold text-success">2</div>
                <div className="text-sm text-muted-foreground">Passes Certos</div>
              </div>
              <div className="text-center p-4 bg-destructive/10 rounded-lg">
                <div className="text-2xl font-bold text-destructive">1</div>
                <div className="text-sm text-muted-foreground">Passes Errados</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}