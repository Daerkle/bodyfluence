'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, ChevronDown, Carrot } from 'lucide-react';
import Navbar from './Navbar';

export default function MainContent() {
  return (
    <main className="min-h-screen bg-hcor-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-gradient-to-b from-hcor-black/30 to-hcor-black/70" />
        <Navbar />
        <div className="container mx-auto px-4">
          {/* Hero Content */}
          <motion.div 
            className="text-center mt-20"
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

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Link href="#features">
              <ChevronDown className="w-12 h-12 text-white hover:text-hcor-red transition-colors duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-hcor-black" id="vision">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-hcor-red text-sm uppercase tracking-wider font-bold">Vision</span>
              <h2 className="text-3xl md:text-4xl text-white font-bold mt-4 mb-8">
                Als Gründer von Health Consulting Rieger sehe ich meine Berufung darin, Menschen auf ihrem individuellen Weg zu echter Gesundheit zu begleiten.
              </h2>
            </div>
            <div className="space-y-8">
              {[
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
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Check className="w-6 h-6 text-hcor-red flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl text-white font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-hcor-black" id="features">
        <div className="container mx-auto px-4">
          <span className="text-hcor-red text-sm uppercase tracking-wider font-bold">Leistungen</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Carrot className="w-8 h-8" />,
                title: "Ernährungsberatung",
                description: "Entdecken Sie Ihre ideale Ernährungsweise."
              },
              {
                icon: <Carrot className="w-8 h-8" />,
                title: "Biohacking",
                description: "Nutzen Sie modernste Methoden zur Gesundheitsoptimierung."
              },
              {
                icon: <Carrot className="w-8 h-8" />,
                title: "Fitness & Training",
                description: "Finden Sie ein Bewegungsprogramm, das zu Ihrem Lebensstil passt."
              },
              {
                icon: <Carrot className="w-8 h-8" />,
                title: "Haltungskorrektur & Manuelle Therapie",
                description: "Verbessern Sie Ihre Haltung und reduzieren Sie Beschwerden."
              },
              {
                icon: <Carrot className="w-8 h-8" />,
                title: "Nahrungsergänzung",
                description: "Erhalten Sie auf Sie abgestimmte Empfehlungen."
              },
              {
                icon: <Carrot className="w-8 h-8" />,
                title: "Modernste Ansätze",
                description: "Sie profitieren von einer Kombination aus wissenschaftlichen Erkenntnissen und bewährten ganzheitlichen Methoden."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-hcor-black/50 p-6 rounded-lg border border-gray-800 hover:border-hcor-red transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-hcor-red/10 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl text-white font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
