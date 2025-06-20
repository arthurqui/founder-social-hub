
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageSquare, Share2, MoreHorizontal, Plus } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Dashboard = () => {
  const [newPost, setNewPost] = useState("");

  const posts = [
    {
      id: 1,
      author: "Maria Santos",
      avatar: "",
      time: "2h",
      content: "Acabei de lançar minha nova startup! Focada em soluções sustentáveis para pequenos negócios. Quem mais está trabalhando com sustentabilidade?",
      likes: 24,
      comments: 8,
      shares: 3
    },
    {
      id: 2,
      author: "Carlos Oliveira",
      avatar: "",
      time: "4h",
      content: "Networking é tudo! Acabei de fechar uma parceria incrível que começou com uma conversa casual. Nunca subestimem o poder de uma boa conversa.",
      likes: 45,
      comments: 12,
      shares: 7
    },
    {
      id: 3,
      author: "Ana Costa",
      avatar: "",
      time: "6h",
      content: "Compartilhando minha experiência: como aumentei meu faturamento em 200% em 6 meses. Thread com dicas práticas nos comentários! 🚀",
      likes: 89,
      comments: 23,
      shares: 15
    }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <SidebarTrigger />
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      {/* Create Post */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Compartilhe sua experiência</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="O que está acontecendo no seu negócio?"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className="min-h-[100px]"
          />
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Foto
              </Button>
            </div>
            <Button>Publicar</Button>
          </div>
        </CardContent>
      </Card>

      {/* Timeline */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Avatar>
                  <AvatarImage src={post.avatar} />
                  <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-semibold">{post.author}</h3>
                      <p className="text-sm text-muted-foreground">{post.time}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="mb-4 text-foreground">{post.content}</p>
                  <div className="flex items-center gap-6 pt-2 border-t">
                    <Button variant="ghost" size="sm" className="flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      {post.comments}
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center gap-2">
                      <Share2 className="w-4 h-4" />
                      {post.shares}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
