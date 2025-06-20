import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { MapPin, Link2, Calendar, Users, Building } from "lucide-react";

const Profile = () => {
  const userPosts = [
    {
      id: 1,
      content: "Compartilhando minha jornada empreendedora: dos primeiros R$ 100 aos R$ 100k mensais. O que aprendi no caminho...",
      date: "2 dias atrás",
      likes: 156,
      comments: 23
    },
    {
      id: 2,
      content: "5 ferramentas essenciais que todo empreendedor deveria conhecer. Thread com links nos comentários! 🧵",
      date: "1 semana atrás",
      likes: 89,
      comments: 15
    }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <SidebarTrigger />
        <h1 className="text-2xl font-bold">Perfil</h1>
      </div>

      {/* Profile Header */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col items-center md:items-start">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src="" />
                <AvatarFallback className="text-2xl">JS</AvatarFallback>
              </Avatar>
              <Button variant="outline" className="w-full md:w-auto">
                Editar Perfil
              </Button>
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold">João Silva</h1>
                  <p className="text-muted-foreground">@joaosilva</p>
                </div>
                <Badge variant="secondary" className="w-fit">
                  Premium
                </Badge>
              </div>
              
              <p className="text-foreground mb-4">
                Fundador & CEO da TechStart Brasil. Ajudo empreendedores a escalarem seus negócios através de tecnologia e inovação. 
                Mentor de startups e palestrante.
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  São Paulo, Brasil
                </div>
                <div className="flex items-center gap-1">
                  <Link2 className="w-4 h-4" />
                  techstart.com.br
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Membro desde Jan 2023
                </div>
                <div className="flex items-center gap-1">
                  <Building className="w-4 h-4" />
                  TechStart Brasil
                </div>
              </div>
              
              <div className="flex gap-6 text-sm">
                <div>
                  <span className="font-bold">1,234</span>
                  <span className="text-muted-foreground"> Seguindo</span>
                </div>
                <div>
                  <span className="font-bold">5,678</span>
                  <span className="text-muted-foreground"> Seguidores</span>
                </div>
                <div>
                  <span className="font-bold">89</span>
                  <span className="text-muted-foreground"> Posts</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Tabs */}
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="about">Sobre</TabsTrigger>
          <TabsTrigger value="connections">Conexões</TabsTrigger>
        </TabsList>
        
        <TabsContent value="posts" className="space-y-4">
          {userPosts.map((post) => (
            <Card key={post.id}>
              <CardContent className="pt-6">
                <p className="mb-3">{post.content}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <div className="flex gap-4">
                    <span>{post.likes} likes</span>
                    <span>{post.comments} comentários</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="about">
          <Card>
            <CardHeader>
              <CardTitle>Sobre João Silva</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Experiência</h3>
                <p>10+ anos de experiência em tecnologia e empreendedorismo, com foco em startups B2B.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Especialidades</h3>
                <div className="flex flex-wrap gap-2">
                  {["Startups", "Tecnologia", "Inovação", "Mentoria", "Palestras"].map((skill) => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="connections">
          <Card>
            <CardHeader>
              <CardTitle>Conexões Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {["Maria Santos", "Carlos Oliveira", "Ana Costa"].map((name) => (
                  <div key={name} className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium">{name}</p>
                      <p className="text-sm text-muted-foreground">Empreendedor</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Ver Perfil
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
