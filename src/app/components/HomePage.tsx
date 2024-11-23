'use client'

import { motion } from 'framer-motion'
import { ArrowDownCircle } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

const HomePage: FC = () => {
  return (
    <div className="bg-hcor-black min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-gradient-to-b from-hcor-black/30 to-hcor-black/70" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-7xl md:text-8xl font-helvetica-bold text-white mb-6 tracking-tight"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              HCOR
            </motion.h1>
            <motion.h4 
              className="text-2xl md:text-3xl text-white mb-12 font-helvetica-light tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Where Health Meets Heart
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link 
                href="#features"
                className="bg-hcor-red hover:bg-hcor-red-dark text-white px-10 py-4 rounded-lg inline-block transition-all duration-300 transform hover:scale-105 font-helvetica-bold text-lg tracking-wide shadow-lg hover:shadow-xl"
              >
                Leistungen entdecken
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Link href="#features">
            <ArrowDownCircle className="w-12 h-12 text-white hover:text-hcor-red transition-colors duration-300" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default HomePage
