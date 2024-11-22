import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Dumbbell, Brain, Sparkles, Trophy } from 'lucide-react';

const services = [
  {
    icon: <Users />,
    title: "1:1 Coaching",
    description: "Individuell auf dich abgestimmtes Training und Ernährungsplan mit regelmäßigem Feedback und Anpassungen."
  },
  {
    icon: <Target />,
    title: "Zielgerichtete Planung",
    description: "Gemeinsam entwickeln wir eine klare Strategie, um deine persönlichen Fitness- und Gesundheitsziele zu erreichen."
  },
  {
    icon: <Dumbbell />,
    title: "Krafttraining",
    description: "Professionelle Anleitung für effektives Krafttraining, das dich stärker und leistungsfähiger macht."
  },
  {
    icon: <Brain />,
    title: "Mentales Training",
    description: "Stärke deinen Geist und entwickle die richtige Einstellung für langfristigen Erfolg."
  },
  {
    icon: <Sparkles />,
    title: "Lifestyle Optimierung",
    description: "Ganzheitliche Betreuung für einen gesunden und energiegeladenen Lebensstil."
  },
  {
    icon: <Trophy />,
    title: "Erfolgstracking",
    description: "Regelmäßige Fortschrittsmessung und Anpassung deines Programms für optimale Ergebnisse."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meine <span className="text-red-500">Dienstleistungen</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professionelle Betreuung auf dem Weg zu deinem Traumkörper und einem gesünderen Lebensstil.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-red-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
                {React.cloneElement(service.icon, { className: "w-8 h-8 text-red-500" })}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-red-500 hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
          >
            Jetzt Beratungsgespräch vereinbaren
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
