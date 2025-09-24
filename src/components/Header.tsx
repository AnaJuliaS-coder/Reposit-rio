import { Button } from "./ui/button";
import { Mail, Phone, Linkedin, Github, Download } from "lucide-react";

export function Header() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold">João Silva</h1>
            <div className="hidden md:flex items-center space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span className="text-sm">joao.silva@email.com</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+55 11 99999-9999</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <nav className="hidden md:flex space-x-1">
              <Button variant="ghost" onClick={() => scrollToSection('about')}>
                Sobre
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('experience')}>
                Experiência
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('projects')}>
                Projetos
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('education')}>
                Educação
              </Button>
            </nav>
            
            <div className="flex items-center space-x-2">
              <Button size="icon" variant="outline">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Github className="w-4 h-4" />
              </Button>
              <Button className="hidden md:flex">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}