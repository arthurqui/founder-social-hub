
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Star, Zap } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Premium = () => {
  const plans = [
    {
      name: "Gratuito",
      price: "R$ 0",
      period: "/mês",
      description: "Perfeito para começar sua jornada",
      features: [
        "Até 10 posts por mês",
        "Perfil básico",
        "Conexão com até 100 pessoas",
        "Mensagens básicas",
        "Acesso ao feed público"
      ],
      buttonText: "Plano Atual",
      buttonVariant: "outline" as const,
      popular: false,
      icon: Crown
    },
    {
      name: "Premium",
      price: "R$ 29",
      period: "/mês",
      description: "Para empreendedores em crescimento",
      features: [
        "Posts ilimitados",
        "Perfil destacado",
        "Conexões ilimitadas",
        "Chat privado avançado",
        "Analytics detalhados",
        "Badge Premium",
        "Suporte prioritário",
        "Acesso a eventos exclusivos"
      ],
      buttonText: "Assinar Premium",
      buttonVariant: "default" as const,
      popular: true,
      icon: Star
    },
    {
      name: "Business",
      price: "R$ 99",
      period: "/mês",
      description: "Para empresas e organizações",
      features: [
        "Tudo do Premium",
        "Páginas de empresa",
        "Múltiplos administradores",
        "API avançada",
        "Relatórios customizados",
        "Integração com CRM",
        "Gerente de conta dedicado",
        "Treinamento personalizado",
        "SLA garantido"
      ],
      buttonText: "Assinar Business",
      buttonVariant: "default" as const,
      popular: false,
      icon: Zap
    }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <SidebarTrigger />
        <h1 className="text-2xl font-bold">Planos Premium</h1>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Escolha o plano ideal para você</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Desbloqueie todo o potencial da nossa rede social para empreendedores. 
          Conecte-se com mais pessoas e faça seu negócio crescer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {plans.map((plan) => (
          <Card key={plan.name} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
            {plan.popular && (
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                Mais Popular
              </Badge>
            )}
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  plan.popular ? 'bg-primary text-primary-foreground' : 'bg-secondary'
                }`}>
                  <plan.icon className="w-6 h-6" />
                </div>
              </div>
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <div className="flex items-baseline justify-center">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <CardDescription className="mt-2">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full" 
                variant={plan.buttonVariant}
                disabled={plan.name === "Gratuito"}
              >
                {plan.buttonText}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-primary" />
              Benefícios Premium
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Visibilidade aumentada nos feeds</li>
              <li>• Acesso a ferramentas exclusivas de networking</li>
              <li>• Participação em grupos premium</li>
              <li>• Mentoria com especialistas</li>
              <li>• Certificado digital de membro premium</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Perguntas Frequentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium">Posso cancelar a qualquer momento?</p>
                <p className="text-muted-foreground">Sim, você pode cancelar sua assinatura a qualquer momento.</p>
              </div>
              <div>
                <p className="font-medium">Há desconto para pagamento anual?</p>
                <p className="text-muted-foreground">Sim, oferecemos 20% de desconto para assinaturas anuais.</p>
              </div>
              <div>
                <p className="font-medium">Posso fazer upgrade do meu plano?</p>
                <p className="text-muted-foreground">Sim, você pode fazer upgrade a qualquer momento.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Premium;
