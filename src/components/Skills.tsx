import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Code, Database, Cloud, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code className="w-5 h-5" />,
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Vue.js", level: 75 },
      { name: "Tailwind CSS", level: 90 }
    ]
  },
  {
    title: "Backend", 
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 70 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5" />,
    skills: [
      { name: "AWS", level: 75 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 70 },
      { name: "Vercel", level: 90 }
    ]
  },
  {
    title: "Ferramentas",
    icon: <Wrench className="w-5 h-5" />,
    skills: [
      { name: "Git", level: 90 },
      { name: "Figma", level: 80 },
      { name: "Postman", level: 85 },
      { name: "Jira", level: 75 }
    ]
  }
];

const softSkills = [
  "Liderança Técnica",
  "Comunicação",
  "Resolução de Problemas", 
  "Trabalho em Equipe",
  "Mentoria",
  "Gestão de Projetos",
  "Pensamento Crítico",
  "Adaptabilidade"
];

export function Skills() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Habilidades & Competências</h2>
            <p className="text-muted-foreground">
              Tecnologias e ferramentas que domino para criar soluções eficazes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    {category.icon}
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Soft Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}