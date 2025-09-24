import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "São Paulo, SP",
    period: "Jan 2022 - Presente",
    description: "Lidero uma equipe de 4 desenvolvedores na criação de aplicações web escaláveis. Responsável pela arquitetura técnica e implementação de features críticas que atendem +50k usuários mensais.",
    achievements: [
      "Reduziu tempo de carregamento em 40% otimizando queries SQL",
      "Implementou sistema de cache que diminuiu custos de infra em 30%",
      "Mentoreou 3 desenvolvedores juniores"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "TypeScript"]
  },
  {
    title: "Full Stack Developer",
    company: "Startup Inovadora",
    location: "São Paulo, SP", 
    period: "Mar 2020 - Dez 2021",
    description: "Desenvolvimento de MVP e features para plataforma de e-commerce B2B. Participei ativamente das decisões técnicas e arquiteturais do produto.",
    achievements: [
      "Desenvolvi sistema de pagamentos integrado com múltiplos gateways",
      "Criei dashboard analytics com visualizações em tempo real",
      "Automatizei deploy reduzindo tempo de release em 60%"
    ],
    technologies: ["Vue.js", "Express.js", "MongoDB", "Redis", "Stripe API"]
  },
  {
    title: "Desenvolvedor Frontend",
    company: "AgênciaWeb Digital",
    location: "São Paulo, SP",
    period: "Jun 2019 - Feb 2020", 
    description: "Desenvolvimento de websites e aplicações web para clientes diversos. Foco em performance, acessibilidade e experiência do usuário.",
    achievements: [
      "Entregou +15 projetos web responsivos",
      "Melhorou score Lighthouse médio dos projetos para 95+",
      "Implementou sistema de CMS headless"
    ],
    technologies: ["React", "Next.js", "Styled Components", "Contentful", "Vercel"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Experiência Profissional</h2>
            <p className="text-muted-foreground">
              Minha trajetória profissional construindo soluções digitais impactantes
            </p>
          </div>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-base font-medium text-primary">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{exp.description}</p>
                  
                  <div>
                    <h4 className="font-medium mb-2">Principais conquistas:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Tecnologias utilizadas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}