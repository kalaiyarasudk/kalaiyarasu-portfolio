import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Code2,
  Database,
  Cloud,
  Shield,
  Server,
  Zap,
  GitBranch,
  BarChart3,
  CheckCircle2,
} from "lucide-react"

export function Skills() {
  // --- UPDATED SKILL CATEGORIES TO MATCH RESUME ---
  const skillCategories = [
    {
      title: "Data Engineering",
      icon: Database,
      skills: [
        { name: "Databricks & PySpark", level: 90 },
        { name: "SQL (Advanced)", level: 95 },
        { name: "Python (Pandas)", level: 85 },
        { name: "ETL/ELT Pipelines", level: 88 },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Cloud,
      skills: [
        // UPDATED: This is our core cloud stack
        { name: "Azure (ADF, ADLS Gen2)", level: 85 },
        { name: "Delta Lake", level: 80 },
        { name: "Git & GitHub", level: 90 },
      ],
    },
    {
      title: "Compliance & Domain",
      icon: Shield,
      skills: [
        // UPDATED: These are your "secret weapon" skills
        { name: "SOX Compliance", level: 95 },
        { name: "Data Integrity & Validation", level: 92 },
        { name: "IT General Controls (ITGC)", level: 90 },
        { name: "Role-Based Access Control (RBAC)", level: 88 },
      ],
    },
  ]
  // --- END OF UPDATES ---

  // --- UPDATED & FOCUSED TECHNOLOGIES LIST ---
  // All AWS and generic/filler tech has been REMOVED.
  const technologies = [
    { name: "Databricks", icon: BarChart3, desc: "Analytics platform" },
    { name: "PySpark", icon: Zap, desc: "Big data processing" },
    { name: "Python", icon: Code2, desc: "Data processing & automation" },
    { name: "SQL", icon: Database, desc: "Data querying & analysis" },
    { name: "Azure Data Factory", icon: Server, desc: "ETL/ELT Orchestration" },
    { name: "Azure Data Lake", icon: Cloud, desc: "Cloud data storage" },
    { name: "Delta Lake", icon: Database, desc: "Data lake storage (ACID)" },
    { name: "Git", icon: GitBranch, desc: "Version control" },
    { name: "GitHub", icon: GitBranch, desc: "Code collaboration" },
    { name: "SOX Controls", icon: Shield, desc: "Compliance framework" },
    { name: "Data Validation", icon: CheckCircle2, desc: "Quality assurance" },
    { name: "ETL Pipelines", icon: Server, desc: "Data transformation" },
  ]
  // --- END OF UPDATES ---

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-header mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A focused stack for building robust, secure, and compliant data solutions.
          </p>
        </div>

        {/* Skill Categories with Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="card-elevated border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground flex items-center gap-2">
                    <IconComponent className="h-5 w-5 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="skill-bar h-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Technologies Badge Cloud */}
        <div className="text-center space-y-8">
          <h3 className="text-2xl font-bold text-foreground">My Core Tech Stack</h3>
          {/* UPDATED: Changed grid columns for a tighter, more focused list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon
              return (
                <div
                  key={index}
                  className="tech-card flex items-center gap-3 p-4 rounded-lg bg-card hover:bg-muted/50 transition-colors"
                >
                  <IconComponent className="tech-icon h-5 w-5 text-primary flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-medium text-foreground text-sm">{tech.name}</div>
                    <div className="text-xs text-muted-foreground">{tech.desc}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="card-elevated max-w-2xl mx-auto border-border">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Always Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                {/* This section is fine as-is. It shows good forward-looking ambition. */}
                I'm constantly exploring new technologies and improving my data engineering skills. Currently, I'm
                diving deeper into advanced PySpark optimizations, real-time streaming with Kafka, and MLOps practices.
                I believe in continuous learning and staying up-to-date with the latest big data and cloud technologies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}