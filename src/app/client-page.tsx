'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowDownCircle, Heart, Brain, Dumbbell, Apple, Target, ChevronRight, Activity, Leaf, Lightbulb } from 'lucide-react'

export default function ClientPage() {
  return (
    <div className="bg-hcor-black min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-hcor-black/50 to-hcor-black/80" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-helvetica-bold text-white mb-6">
              HCOR
            </h1>
            <h4 className="text-2xl md:text-3xl text-white mb-12 font-helvetica-light">
              Where Health Meets Heart
            </h4>
            <Link 
              href="#features"
              className="bg-hcor-red hover:bg-hcor-red-dark text-white px-8 py-4 rounded-lg inline-block transition-all duration-300 transform hover:scale-105 font-helvetica-bold"
            >
              Leistungen entdecken
            </Link>
          </motion.div>
        </div>
        {/* Scroll Down Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Link href="#features">
            <ArrowDownCircle className="w-12 h-12 text-white hover:text-hcor-red transition-colors duration-300" />
          </Link>
        </motion.div>
      </section>

      {/* Quote Section */}
      <section className="py-bloc-lg" id="features">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <CardContent className="text-center py-12">
                <blockquote className="text-2xl md:text-3xl text-white mb-6 font-helvetica-light italic">
                  „Wer sich keine Zeit für seine Gesundheit nimmt, wird später viel Zeit für seine Krankheit opfern müssen."
                </blockquote>
                <cite className="text-hcor-gray-light text-xl">
                  – Sebastian Kneipp
                </cite>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-bloc-lg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Dumbbell className="h-6 w-6 text-hcor-red" />,
                title: "Fitness & Training",
                description: "Finden Sie ein Bewegungsprogramm, das zu Ihrem Lebensstil passt."
              },
              {
                icon: <Apple className="h-6 w-6 text-hcor-red" />,
                title: "Ernährungsberatung",
                description: "Entdecken Sie Ihre ideale Ernährungsweise."
              },
              {
                icon: <Heart className="h-6 w-6 text-hcor-red" />,
                title: "Ganzheitliche Betreuung",
                description: "Nutzen Sie modernste Methoden zur Gesundheitsoptimierung."
              },
              {
                icon: <Activity className="h-6 w-6 text-hcor-red" />,
                title: "Haltungskorrektur & Manuelle Therapie",
                description: "Verbessern Sie Ihre Haltung und reduzieren Sie Beschwerden."
              },
              {
                icon: <Leaf className="h-6 w-6 text-hcor-red" />,
                title: "Nahrungsergänzung",
                description: "Erhalten Sie auf Sie abgestimmte Empfehlungen."
              },
              {
                icon: <Lightbulb className="h-6 w-6 text-hcor-red" />,
                title: "Modernste Ansätze",
                description: "Sie profitieren von einer Kombination aus wissenschaftlichen Erkenntnissen und bewährten ganzheitlichen Methoden."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-hcor-red/10 flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-hcor-gray-light mb-6">
                      {service.description}
                    </p>
                    <Link 
                      href={`/leistungen#${service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="text-hcor-red hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      Mehr erfahren
                      <ChevronRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-bloc-lg bg-hcor-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "„Wer sich keine Zeit für seine Gesundheit nimmt, wird später viel Zeit für seine Krankheit opfern müssen."",
                author: "Sebastian Kneipp"
              },
              {
                quote: "Der Keim ist nichts, das Milleu ist alles!",
                author: "Claude Bernard"
              },
              {
                quote: "Bevor du jemanden heilst, frage ihn ob er bereit ist die Dinge aufzugeben, die ihn krank machen.",
                author: "Hippokrates"
              }
            ].map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card>
                  <CardContent className="text-center py-8">
                    <blockquote className="text-xl md:text-2xl text-white mb-4 font-helvetica-light italic">
                      {quote.quote}
                    </blockquote>
                    <cite className="text-hcor-gray-light">
                      {quote.author}
                    </cite>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
