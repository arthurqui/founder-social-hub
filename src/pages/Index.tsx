
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, MessageSquare, Crown } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Users,
      title: "Rede de Contatos",
      description: "Conecte-se com empreendedores do Brasil inteiro e expanda sua rede de negócios."
    },
    {
      icon: TrendingUp,
      title: "Oportunidades de Negócio",
      description: "Descubra parcerias, investimentos e oportunidades de crescimento."
    },
    {
      icon: MessageSquare,
      title: "Comunidade Ativa",
      description: "Participe de discussões, compartilhe experiências e aprenda com outros empreendedores."
    },
    {
      icon: Crown,
      title: "Recursos Premium",
      description: "Acesse ferramentas avançadas de networking e analytics para impulsionar seu negócio."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Users className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-lg">Rede Social Teste</h1>
              <p className="text-xs text-muted-foreground">Para Empreendedores</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to="/login">Entrar</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/login">Começar Agora</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            A Rede Social dos{" "}
            <span className="text-primary">Empreendedores</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Conecte-se com outros empreendedores, compartilhe experiências, 
            encontre parceiros de negócio e faça sua empresa crescer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/login">Começar Gratuitamente</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/premium">Ver Planos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Por que escolher nossa plataforma?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma plataforma completa desenvolvida especialmente para atender as necessidades 
            dos empreendedores brasileiros.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para expandir sua rede de negócios?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a mais de 10.000 empreendedores que já fazem parte da nossa comunidade.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/login">Criar Conta Gratuita</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Users className="w-3 h-3 text-primary-foreground" />
                </div>
                <span className="font-bold">Rede Social Teste</span>
              </div>
              <p className="text-sm text-muted-foreground">
                A plataforma que conecta empreendedores e impulsiona negócios.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Produto</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/premium" className="hover:underline">Planos</Link></li>
                <li><a href="#" className="hover:underline">Recursos</a></li>
                <li><a href="#" className="hover:underline">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Empresa</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:underline">Sobre</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Suporte</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:underline">Ajuda</a></li>
                <li><a href="#" className="hover:underline">Contato</a></li>
                <li><a href="#" className="hover:underline">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Rede Social Teste. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
