"use client"

import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kalaiyarasu210@gmail.com",
      href: "mailto:kalaiyarasu210@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to work
            together!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 text-center">
                Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear
                from you. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 justify-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{item.label}</p>
                    {item.href !== "#" ? (
                      <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="font-semibold text-foreground mb-4 text-center">Preferred Contact Methods</h4>
              <ul className="space-y-2 text-muted-foreground max-w-md mx-auto">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                  <span>Email for project inquiries and detailed discussions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                  <span>LinkedIn for professional networking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
