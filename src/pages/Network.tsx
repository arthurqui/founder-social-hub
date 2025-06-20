
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, UserPlus, MessageSquare } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Network = () => {
  const suggestions = [
    { name: "Maria Santos", role: "CEO - EcoTech", location: "Rio de Janeiro", mutualConnections: 5 },
    { name: "Carlos Oliveira", role: "Founder - StartupLab", location: "São Paulo", mutualConnections: 12 },
    { name: "Ana Costa", role: "CMO - DigitalFirst", location: "Belo Horizonte", mutualConnections: 8 },
    { name: "Pedro Lima", role: "CTO - TechSolutions", location: "Porto Alegre", mutualConnections: 3 },
  ];

  const recentConnections = [
    { name: "Julia Almeida", role: "Product Manager", time: "Conectou há 2 dias" },
    { name: "Roberto Silva", role: "Marketing Director", time: "Conectou há 1 semana" },
    { name: "Camila Torres", role: "UX Designer", time: "Conectou há 2 semanas" },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <SidebarTrigger />
        <h1 className="text-2xl font-bold">Rede de Contatos</h1>
      </div>

      {/* Search */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Encontrar Pessoas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Buscar por nome, empresa, ou área..." className="pl-10" />
            </div>
            <Button>Buscar</Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Suggestions */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Pessoas que você pode conhecer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {suggestions.map((person, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback>{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold">{person.name}</h3>
                      <p className="text-sm text-muted-foreground">{person.role}</p>
                      <p className="text-sm text-muted-foreground">{person.location}</p>
                      <p className="text-xs text-primary">{person.mutualConnections} conexões em comum</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">
                        <UserPlus className="w-4 h-4 mr-2" />
                        Conectar
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageSquare className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Suas Estatísticas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Conexões</span>
                  <span className="font-semibold">1,234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Seguidores</span>
                  <span className="font-semibold">5,678</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Visualizações do perfil</span>
                  <span className="font-semibold">892</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Conexões Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentConnections.map((connection, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="text-xs">
                        {connection.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{connection.name}</p>
                      <p className="text-xs text-muted-foreground">{connection.role}</p>
                      <p className="text-xs text-muted-foreground">{connection.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Grupos Sugeridos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium text-sm">Empreendedores Tech</h4>
                  <p className="text-xs text-muted-foreground">2,345 membros</p>
                  <Button size="sm" className="w-full mt-2">Participar</Button>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium text-sm">Startups Brasil</h4>
                  <p className="text-xs text-muted-foreground">1,890 membros</p>
                  <Button size="sm" className="w-full mt-2">Participar</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Network;
