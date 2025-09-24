import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Bacharelado em Ciência da Computação",
    institution: "Universidade de São Paulo (USP)",
    location: "São Paulo, SP",
    period: "2015 - 2019",
    status: "Concluído",
    description: "Formação sólida em fundamentos da computação, algoritmos, estruturas de dados e engenharia de software.",
    highlights: [
      "Trabalho de Conclusão: Sistema de Recomendação com ML",
      "Monitor de Estruturas de Dados (2017-2018)",
      "Participação em projetos de extensão"
    ]
  }
];

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-SAA-2023-001",
    badge: "cloud"
  },
  {
    title: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "2022",
    credentialId: "PSM-I-2022-456",
    badge: "agile"
  },
  {
    title: "React Developer Certification",
    issuer: "Meta",
    date: "2021",
    credentialId: "META-REACT-2021-789",
    badge: "frontend"
  },
  {
    title: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2021",
    credentialId: "MONGO-DEV-2021-123",
    badge: "database"
  }
];

const courses = [
  {
    title: "Advanced React Patterns",
    provider: "Frontend Masters",
    date: "2023",
    duration: "40h"
  },
  {
    title: "System Design Fundamentals",
    provider: "Educative",
    date: "2023",
    duration: "30h"
  },
  {
    title: "Docker & Kubernetes Mastery",
    provider: "Udemy",
    date: "2022",
    duration: "50h"
  },
  {
    title: "GraphQL with Node.js",
    provider: "Pluralsight", 
    date: "2022",
    duration: "25h"
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Formação & Certificações</h2>
            <p className="text-muted-foreground">
              Minha jornada de aprendizado contínuo e desenvolvimento profissional
            </p>
          </div>
          
          {/* Formação Acadêmica */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Formação Acadêmica
            </h3>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <CardDescription className="text-base font-medium text-primary">
                          {edu.institution}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col md:items-end gap-1">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.period}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-1" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{edu.description}</p>
                    
                    <div>
                      <h4 className="font-medium mb-2">Destaques:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <Badge variant="secondary">{edu.status}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Certificações */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Certificações Profissionais
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Data de emissão:</span>
                      <span className="text-sm font-medium">{cert.date}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">ID da credencial:</span>
                      <span className="text-xs font-mono bg-muted px-2 py-1 rounded">{cert.credentialId}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Cursos Complementares */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Cursos Complementares</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {courses.map((course, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-medium">{course.title}</h4>
                        <p className="text-sm text-muted-foreground">{course.provider}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-sm font-medium">{course.date}</span>
                        <Badge variant="outline" className="text-xs">{course.duration}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}