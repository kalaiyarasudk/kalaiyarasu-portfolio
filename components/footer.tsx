import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Kalaiyarasu D</h3>
            {/* --- UPDATED BRAND NARRATIVE --- */}
            <p className="text-muted-foreground">
              Databricks Certified Data Engineer | SOX Compliance Automation
            </p>
            {/* --- END OF UPDATE --- */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" asChild>
                {/* --- UPDATED GITHUB LINK --- */}
                <a href="https://github.com/kalaiyarasudk" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                {/* --- UPDATED LINKEDIN LINK --- */}
                <a href="https://www.linkedin.com/in/kalaiyarasu-d/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="mailto:kalaiyarasu210@gmail.com">
                  <Mail className="w-5 h-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* --- UPDATED EXPERTISE SECTION --- */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Expertise</h4>
            <nav className="flex flex-col space-y-2">
              {/* These now match your resume keywords */}
              <span className="text-muted-foreground">Data Pipeline Development (PySpark)</span>
              <span className="text-muted-foreground">Databricks & Delta Lake</span>
              <span className="text-muted-foreground">Azure Cloud Architecture (ADF, ADLS)</span>
              <span className="text-muted-foreground">Data Integrity & SOX Automation</span>
            </nav>
          </div>
          {/* --- END OF UPDATE --- */}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-muted-foreground text-sm">© {currentYear} Kalaiyarasu D. All rights reserved.</p>
          <p className="text-muted-foreground text-sm flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}