import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Vamos Conversar?</h2>
            <p className="text-muted-foreground">
              Estou sempre aberto a novas oportunidades e projetos interessantes
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>
                <p className="text-muted-foreground mb-6">
                  Entre em contato comigo através dos meios abaixo ou envie uma mensagem diretamente pelo formulário.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">joao.silva@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-muted-foreground">+55 11 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Localização</p>
                    <p className="text-muted-foreground">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <h4 className="font-medium mb-3">Redes Sociais</h4>
                <div className="flex gap-3">
                  <Button size="icon" variant="outline">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <Card className="mt-6">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Disponível para novos projetos</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Atualmente aceitando projetos freelance e oportunidades full-time
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Formulário de Contato */}
            <Card>
              <CardHeader>
                <CardTitle>Enviar Mensagem</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input id="subject" placeholder="Assunto da mensagem" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Conte-me sobre seu projeto ou oportunidade..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Respondo todas as mensagens em até 24 horas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}