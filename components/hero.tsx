"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"

export function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "CV_Kalaiyarasu__2025.pdf"
    link.download = "Kalaiyarasu_D_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 animate-fade-in-up">
          <div className="flex justify-center">
            <Avatar className="w-32 h-32 border-4 border-primary/20 animate-float">
              <AvatarImage src="/professional-headshot-business-portrait.jpg" alt="Kalaiyarasu D" />
              <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">KD</AvatarFallback>
            </Avatar>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Hi, I'm <span className="brand-monogram">Kalaiyarasu D</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Databricks Certified Data Engineer | SOX Compliance Automation
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={handleDownloadResume} className="cta-button text-white font-semibold px-8 py-3">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button size="lg" variant="outline" asChild className="hover-accent bg-transparent">
              <a href="#contact">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/kalaiyarasudk" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://www.linkedin.com/in/kalaiyarasu-d/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="mailto:kalaiyarasu210@gmail.com">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>

          <div className="pt-8">
            <Button variant="ghost" size="sm" asChild className="animate-bounce">
              <a href="#about">
                <ArrowDown className="w-6 h-6" />
                <span className="sr-only">Scroll down</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
