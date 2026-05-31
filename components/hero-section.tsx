"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowDown, Download, Shield, Target, Award, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedCounter } from "./animated-counter"

const stats = [
  { icon: Target, value: 382, suffix: "+", label: "Targets Compromised" },
  { icon: Shield, value: 380, suffix: "+", label: "Hands-On Labs" },
  { icon: Award, value: 50, suffix: "+", label: "Security Modules" },
  { icon: TrendingUp, value: 1, suffix: "%", label: "Top Ranking", prefix: "Top " },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-primary font-mono text-sm tracking-wider"
              >
                CYBERSECURITY PROFESSIONAL
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
              >
                <span className="text-balance">Mohammad Elhajj Ali</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted-foreground"
              >
                Penetration Tester | SOC Analyst | IT Support Specialist
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground leading-relaxed max-w-xl"
            >
              Cybersecurity professional with extensive hands-on experience across offensive security, 
              Active Directory security assessments, web application testing, Windows and Linux environments, 
              and security monitoring.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="gap-2">
                <Link href="#htb-journey">
                  View HTB Journey
                  <ArrowDown className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="gap-2">
                <Link href="#contact">
                  Contact Me
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full bg-primary/20 blur-xl" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-border shadow-2xl">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/profile.png`}
                  alt="Mohammad Elhajj Ali"
                  className="object-cover object-top absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-xl blur-xl group-hover:bg-primary/10 transition-colors" />
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
                <stat.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                  {stat.prefix}
                  <AnimatedCounter value={stat.value} />
                  {stat.suffix}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-muted-foreground"
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}
