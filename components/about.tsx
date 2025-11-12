import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Cloud, BarChart3, Shield, TrendingUp, Users } from "lucide-react"

export function About() {
  // --- UPDATED HIGHLIGHTS TO MATCH OUR STORY ---
  const highlights = [
    {
      icon: Database,
      title: "Data Pipeline Development",
      description:
        "Building scalable data pipelines using PySpark, SQL, and modern ETL frameworks for reliable data processing.",
    },
    {
      icon: Cloud,
      // UPDATED: Title is now Azure-specific
      title: "Azure Cloud Solutions", 
      description:
        // UPDATED: Description now names Azure, not AWS
        "Implementing cloud-based data architectures with Azure (ADF, ADLS) and Databricks for enterprise-scale solutions.",
    },
    {
      icon: BarChart3,
      // UPDATED: Title is now specific to our project's goal
      title: "Automated Audit & Analytics",
      description:
        // UPDATED: Description links analytics to our SOX story
        "Automating SOX controls and data quality checks to provide real-time compliance insights.",
    },
    {
      icon: Shield,
      title: "Compliance & Risk Analysis",
      description:
        "Leveraging a 2-year SOX background to build robust, secure, and auditable data engineering solutions.",
    },
  ]
  // --- END OF UPDATES ---

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          {/* This text is perfect, it matches the resume. DO NOT CHANGE. */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Databricks Certified Data Engineer with 2 years of professional experience in data integrity, IT controls, and automated compliance.</p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
Proven ability to leverage PySpark, SQL, and Python to build robust ETL pipelines, enforce data quality, and secure critical data. Eager to apply a unique blend of technical and analytical 
skills to build, optimize, and secure high-performance data platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {/* This card is perfect. DO NOT CHANGE. */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">Career Journey</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">SOX Analyst</span>
                    <span className="text-sm text-muted-foreground">→ Compliance & Risk Expert</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">Data Engineer</span>
                    <span className="text-sm text-muted-foreground">→ Building Data Solutions</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* This card is perfect. DO NOT CHANGE. */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">What I Bring</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                    <span>Strong analytical thinking from compliance background</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                    <span>Attention to detail and data governance expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                    <span>Problem-solving mindset for complex data challenges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                    <span>Focus on reliable, scalable data infrastructure</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* --- UPDATED TECHNOLOGY BADGES --- */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Technology Focus</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">PySpark</Badge>
                <Badge variant="secondary">SQL</Badge>
                <Badge variant="secondary">Databricks</Badge>
                {/* UPDATED: Changed "Cloud Platforms" to our specific stack */}
                <Badge variant="secondary">Azure (ADF & ADLS)</Badge>
                <Badge variant="secondary">ETL Pipelines</Badge>
                {/* UPDATED: Changed "Data Governance" to our specific domain */}
                <Badge variant="secondary">SOX Compliance</Badge>
              </div>
            </div>
            {/* --- END OF UPDATES --- */}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}