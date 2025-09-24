import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Linkedin, Github, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Informações Principais */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-3">João Silva</h3>
              <p className="text-muted-foreground mb-4">
                Desenvolvedor Full Stack apaixonado por criar soluções digitais inovadoras 
                e impactantes. Especializado em React, Node.js e TypeScript.
              </p>
              <div className="flex gap-2">
                <Button size="icon" variant="outline">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <Github className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            {/* Links Rápidos */}
            <div>
              <h4 className="font-medium mb-3">Navegação</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button className="hover:text-foreground transition-colors">
                    Sobre
                  </button>
                </li>
                <li>
                  <button className="hover:text-foreground transition-colors">
                    Experiência
                  </button>
                </li>
                <li>
                  <button className="hover:text-foreground transition-colors">
                    Projetos
                  </button>
                </li>
                <li>
                  <button className="hover:text-foreground transition-colors">
                    Educação
                  </button>
                </li>
              </ul>
            </div>
            
            {/* Contato */}
            <div>
              <h4 className="font-medium mb-3">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>joao.silva@email.com</li>
                <li>+55 11 99999-9999</li>
                <li>São Paulo, SP</li>
                <li>
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Disponível para projetos
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="mb-6" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} João Silva. Todos os direitos reservados.
            </p>
            
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-red-500 fill-current" /> em São Paulo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}