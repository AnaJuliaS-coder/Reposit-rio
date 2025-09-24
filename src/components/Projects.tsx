import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce B2B com sistema de pagamentos, gestão de estoque e dashboard analytics. Atende +10k usuários mensais.",
    image: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzU4Njg2NTE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    features: [
      "Sistema de pagamentos integrado",
      "Dashboard de analytics em tempo real", 
      "Gestão avançada de inventário",
      "API RESTful completa"
    ],
    period: "2023",
    status: "Em produção",
    metrics: {
      users: "10k+",
      performance: "98%",
      uptime: "99.9%"
    }
  },
  {
    title: "Task Management App",
    description: "Aplicativo mobile de gestão de tarefas com sincronização em tempo real, colaboração em equipe e sistema de notificações push.",
    image: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4NjQ5MjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    features: [
      "Sincronização em tempo real",
      "Colaboração em equipe",
      "Notificações push",
      "Interface intuitiva"
    ],
    period: "2022",
    status: "Concluído",
    metrics: {
      users: "5k+",
      rating: "4.8/5",
      downloads: "15k+"
    }
  },
  {
    title: "Analytics Dashboard",
    description: "Dashboard interativo para visualização de dados empresariais com gráficos customizáveis, relatórios automatizados e integração com múltiplas fontes.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTg2MzQ4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["Vue.js", "D3.js", "Python", "MongoDB", "Docker"],
    features: [
      "Visualizações interativas",
      "Relatórios automatizados",
      "Integração com APIs externas",
      "Exportação de dados"
    ],
    period: "2021",
    status: "Concluído",
    metrics: {
      dataPoints: "1M+",
      charts: "25+",
      clients: "50+"
    }
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Projetos em Destaque</h2>
            <p className="text-muted-foreground">
              Alguns dos principais projetos que desenvolvi e impactos gerados
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <Button size="sm" variant="secondary">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Demo
                    </Button>
                    <Button size="sm" variant="secondary">
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{project.period}</span>
                    </div>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Principais funcionalidades:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Métricas de impacto:</h4>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                        <Badge key={metricIndex} variant="outline" className="text-xs">
                          {value}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <Badge 
                      variant={project.status === "Em produção" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline">
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="px-8">
              Ver Todos os Projetos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}