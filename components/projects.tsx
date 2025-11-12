import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
const prefix = process.env.NODE_ENV === 'production' ? '/kalaiyarasu-portfolio' : ''

export function Projects() { 

  // --- UPDATED PROJECTS ARRAY ---
  // All old projects removed. Only the Keystone Project remains.
  const projects = [
    {
      title: "SOX Control Transaction Quality Pipeline",
      description:
        "Designed and implemented an end-to-end ETL pipeline on Databricks to audit and enforce SOX financial controls. This project involved engineering complex data-cleaning transformations in PySpark, loading validated data into a managed Delta Lake table for ACID compliance, and developing automated SQL queries to detect high-risk anomalies like weekend transactions. This reusable framework reduced manual compliance testing time from hours to minutes.",
      // TODO: Add a relevant image for this project to your /public folder
      image: `${prefix}/databricks-sox-pipeline.jpg`, 
      technologies: ["Databricks", "PySpark", "Spark SQL", "Delta Lake", "Azure", "SOX Controls"],
      liveUrl: "#", // You can link to your GitHub README here if no live demo
      githubUrl: "https://github.com/kalaiyarasudk/SOX-Control-Transaction-Quality-Pipeline",
      featured: true,
    },
  ]
  // --- END OF UPDATE ---

  const featuredProjects = projects.filter((project) => project.featured)
  // 'otherProjects' is no longer needed

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* --- UPDATED HEADER --- */}
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Keystone Project</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            This project demonstrates my ability to bridge my SOX compliance background
            with modern data engineering to build automated, auditable pipelines.
          </p>
          {/* --- END OF UPDATE --- */}
        </div>

        {/* --- UPDATED FEATURED SECTION --- */}
        {/* Now centers your single, most important project */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-16 max-w-4xl mx-auto">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                  <Badge variant="secondary">Featured</Badge>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* --- END OF UPDATE --- */}

        {/* --- "OTHER PROJECTS" SECTION REMOVED --- */}

      </div>
    </section>
  )
}