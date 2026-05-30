"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const contactLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mohammad-elhajj-ali-4816471a3",
    icon: Linkedin,
    description: "Connect professionally",
  },
  {
    name: "GitHub",
    href: "https://github.com/mo-haj",
    icon: Github,
    description: "View my repositories",
  },
  {
    name: "Hack The Box",
    href: "https://profile.hackthebox.com/profile/019c90a4-b78e-7284-b5a4-94d796e82055",
    icon: ExternalLink,
    description: "View my HTB profile",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            {"I'm always interested in hearing about new opportunities, collaborations, or just having a conversation about cybersecurity."}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {contactLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                    <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <link.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{link.name}</h3>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-6">
              Prefer email? Feel free to reach out directly.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link href="mailto:mohajj2011@gmail.com">
                <Mail className="h-5 w-5" />
                Send Email
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
