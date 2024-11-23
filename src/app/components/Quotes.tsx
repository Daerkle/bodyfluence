'use client'

import { motion } from 'framer-motion'
import { Quote as QuoteIcon } from 'lucide-react'
import type { FC } from 'react'

interface Quote {
  quote: string
  author: string
}

const quotes: Quote[] = [
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
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 }
}

const Quotes: FC = () => {
  return (
    <section className="py-bloc-lg bg-gradient-to-b from-hcor-gray to-hcor-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-helvetica-bold text-white mb-6 tracking-tight">
            Inspirierende Worte
          </h2>
          <p className="text-xl text-hcor-gray-light max-w-2xl mx-auto font-helvetica-light">
            Lassen Sie sich von zeitlosen Weisheiten inspirieren.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group"
            >
              <div className="rounded-lg border border-hcor-gray bg-hcor-black/50 hover:border-hcor-red transition-all duration-300 h-full relative overflow-hidden p-8">
                <QuoteIcon className="absolute top-4 right-4 h-8 w-8 text-hcor-red/20 group-hover:text-hcor-red/30 transition-colors duration-300" />
                <blockquote className="text-xl md:text-2xl text-white mb-6 font-helvetica-light italic relative z-10">
                  {quote.quote}
                </blockquote>
                <cite className="text-hcor-gray-light font-helvetica-bold not-italic block text-lg">
                  {quote.author}
                </cite>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Quotes
