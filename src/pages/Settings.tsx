
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Settings = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <SidebarTrigger />
        <h1 className="text-2xl font-bold">Configurações</h1>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Perfil</TabsTrigger>
          <TabsTrigger value="account">Conta</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
          <TabsTrigger value="privacy">Privacidade</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações do Perfil</CardTitle>
              <CardDescription>Atualize suas informações pessoais</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nome</Label>
                  <Input id="firstName" defaultValue="João" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Sobrenome</Label>
                  <Input id="lastName" defaultValue="Silva" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Nome de usuário</Label>
                <Input id="username" defaultValue="joaosilva" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea 
                  id="bio" 
                  defaultValue="Fundador & CEO da TechStart Brasil. Ajudo empreendedores a escalarem seus negócios."
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" defaultValue="https://techstart.com.br" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Localização</Label>
                <Input id="location" defaultValue="São Paulo, Brasil" />
              </div>
              <Button>Salvar Alterações</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configurações da Conta</CardTitle>
              <CardDescription>Gerencie sua conta e segurança</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="joao@exemplo.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Senha Atual</Label>
                <Input id="currentPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">Nova Senha</Label>
                <Input id="newPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar Nova Senha</Label>
                <Input id="confirmPassword" type="password" />
              </div>
              <div className="flex gap-2">
                <Button>Atualizar Email</Button>
                <Button variant="outline">Alterar Senha</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notificações</CardTitle>
              <CardDescription>Configure como deseja receber notificações</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="emailNotifications">Notificações por email</Label>
                  <p className="text-sm text-muted-foreground">Receba notificações importantes por email</p>
                </div>
                <Switch id="emailNotifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="pushNotifications">Notificações push</Label>
                  <p className="text-sm text-muted-foreground">Receba notificações em tempo real</p>
                </div>
                <Switch id="pushNotifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="newFollowers">Novos seguidores</Label>
                  <p className="text-sm text-muted-foreground">Ser notificado quando alguém começar a te seguir</p>
                </div>
                <Switch id="newFollowers" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="mentions">Menções</Label>
                  <p className="text-sm text-muted-foreground">Ser notificado quando te mencionarem</p>
                </div>
                <Switch id="mentions" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="comments">Comentários</Label>
                  <p className="text-sm text-muted-foreground">Ser notificado sobre comentários em seus posts</p>
                </div>
                <Switch id="comments" defaultChecked />
              </div>
              <Button>Salvar Preferências</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configurações de Privacidade</CardTitle>
              <CardDescription>Controle quem pode ver seu conteúdo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="profileVisibility">Perfil público</Label>
                  <p className="text-sm text-muted-foreground">Permitir que qualquer pessoa veja seu perfil</p>
                </div>
                <Switch id="profileVisibility" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="searchable">Aparecer nos resultados de busca</Label>
                  <p className="text-sm text-muted-foreground">Permitir que outros te encontrem por busca</p>
                </div>
                <Switch id="searchable" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="activityStatus">Status de atividade</Label>
                  <p className="text-sm text-muted-foreground">Mostrar quando você esteve online pela última vez</p>
                </div>
                <Switch id="activityStatus" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="readReceipts">Confirmação de leitura</Label>
                  <p className="text-sm text-muted-foreground">Mostrar quando você leu mensagens</p>
                </div>
                <Switch id="readReceipts" defaultChecked />
              </div>
              <Button>Salvar Configurações</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
