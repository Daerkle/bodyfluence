'use client'

import { motion } from 'framer-motion'
import { Dumbbell, Apple, Heart, Activity, Leaf, Lightbulb, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { FC, ReactElement } from 'react'

interface Service {
  icon: ReactElement
  title: string
  description: string
}

const services: Service[] = [
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
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const Services: FC = () => {
  return (
    <section className="py-bloc-lg bg-gradient-to-b from-hcor-black to-hcor-gray" id="features">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-helvetica-bold text-white mb-6 tracking-tight">
            Unsere Leistungen
          </h2>
          <p className="text-xl text-hcor-gray-light max-w-2xl mx-auto font-helvetica-light">
            Entdecken Sie unsere vielfältigen Angebote für Ihre Gesundheit und Ihr Wohlbefinden.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group"
            >
              <Card className="bg-hcor-black/50 border-hcor-gray hover:border-hcor-red transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-hcor-gray rounded-lg group-hover:bg-hcor-red/10 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl text-white font-helvetica-bold">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-hcor-gray-light font-helvetica-light">
                    {service.description}
                  </p>
                  <Link 
                    href="#contact" 
                    className="inline-flex items-center mt-4 text-hcor-red hover:text-white transition-colors duration-300"
                  >
                    Mehr erfahren
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
