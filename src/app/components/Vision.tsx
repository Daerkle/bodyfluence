'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import type { FC } from 'react'

interface VisionPoint {
  title: string
  description: string
}

const visionPoints: VisionPoint[] = [
  {
    title: "Gesundheitsberatung mit Tiefgang",
    description: "In unserem Zentrum begegne ich dir auf Augenhöhe. Hier praktizieren wir Health Consulting, das über oberflächliche Ratschläge hinausgeht und deine individuelle Situation ganzheitlich erfasst."
  },
  {
    title: "Holistisch-Integrative Medizin",
    description: "Wir verbinden modernste wissenschaftliche Erkenntnisse mit bewährten ganzheitlichen Ansätzen. Unser Ziel ist es, Körper, Geist und Seele in Einklang zu bringen."
  },
  {
    title: "Wirkliche Gesundheitsvorsorge",
    description: "Gemeinsam entwickeln wir Strategien, die nicht nur Symptome behandeln, sondern echte Prävention ermöglichen. Wir setzen auf Ursachenbehandlung, um langfristige Gesundheit zu fördern."
  },
  {
    title: "Individualbetreuung & Therapie",
    description: "Jeder Mensch ist einzigartig. Deshalb bieten wir maßgeschneiderte Betreuung und Therapieansätze, die genau auf deine Bedürfnisse zugeschnitten sind."
  }
]

const Vision: FC = () => {
  return (
    <section className="py-bloc-lg bg-hcor-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-hcor-red font-helvetica-bold text-sm tracking-wider uppercase mb-4 block">
              Vision
            </span>
            <h2 className="text-3xl md:text-4xl text-white font-helvetica-bold leading-tight mb-6">
              Als Gründer von Health Consulting Rieger sehe ich meine Berufung darin, Menschen auf ihrem individuellen Weg zu echter Gesundheit zu begleiten.
            </h2>
          </motion.div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-8">
              {visionPoints.map((point, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex flex-col items-center">
                      <CheckCircle className="w-8 h-8 text-hcor-red" />
                      {index !== visionPoints.length - 1 && (
                        <div className="h-full w-px bg-hcor-red/20 my-2" />
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl text-white font-helvetica-bold mb-2">
                      {point.title}
                    </h4>
                    <p className="text-hcor-gray-light">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision
