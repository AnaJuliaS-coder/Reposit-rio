import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NTg3MTY0NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="João Silva"
                    className="w-48 h-48 rounded-full object-cover border-4 border-primary/10"
                  />
                  <div className="absolute -bottom-2 -right-2">
                    <Badge variant="secondary" className="px-3 py-1">
                      Disponível
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h1 className="text-3xl md:text-4xl mb-2">João Silva</h1>
                  <h2 className="text-xl text-muted-foreground mb-4">Desenvolvedor Full Stack</h2>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      São Paulo, SP
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      5+ anos de experiência
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Desenvolvedor Full Stack apaixonado por criar soluções digitais inovadoras. 
                  Especializado em React, Node.js e TypeScript, com experiência em arquitetura 
                  de sistemas e liderança técnica. Focado em entregar produtos de alta qualidade 
                  que geram impacto real para usuários e negócios.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>AWS</Badge>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button>
                    Entre em Contato
                  </Button>
                  <Button variant="outline">
                    Ver Projetos
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}