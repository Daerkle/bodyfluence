import React, { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Trophy, Target, Brain, Heart } from 'lucide-react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "framer-motion";

interface HeroProps {
  image: string;
  title: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ image, title, description }) => {
  const [textIndex, setTextIndex] = useState(0);
  const rotatingTexts = [
    "optimaler Gesundheit",
    "maximaler Leistung",
    "mentalem Peak-Zustand",
    "deinem Traumkörper"
  ];

  const achievements = [
    { icon: Trophy, text: "10+ Jahre Erfahrung" },
    { icon: Target, text: "500+ zufriedene Kunden" },
    { icon: Brain, text: "Ganzheitlicher Ansatz" },
    { icon: Heart, text: "Nachhaltige Resultate" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 4000); // Längere Anzeigezeit für jeden Text

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-24 pb-16 px-4 relative overflow-hidden">
      <motion.div 
        className="absolute top-0 right-0 w-1/2 h-96 bg-[#90D5FF]/20 blur-3xl rounded-full"
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <motion.div 
              className="flex gap-2 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {["Fitness", "Nutrition", "Health"].map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                >
                  <HoverCard>
                    <HoverCardTrigger>
                      <Badge variant={category.toLowerCase() as any} className="cursor-pointer">
                        {category}
                      </Badge>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">{category} Expertise</h4>
                        <p className="text-sm">
                          {category === "Fitness" && "Personalisierte Trainingspläne und Übungen für deine Ziele"}
                          {category === "Nutrition" && "Ausgewogene Ernährungsberatung für optimale Resultate"}
                          {category === "Health" && "Ganzheitliche Gesundheitsoptimierung für Körper und Geist"}
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </motion.div>
              ))}
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              Dein Weg zu{' '}
              <AnimatePresence mode="wait">
                <motion.span 
                  key={rotatingTexts[textIndex]}
                  className="text-[#90D5FF] font-semibold inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ 
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                >
                  {rotatingTexts[textIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              {description}
            </motion.p>
            <motion.div 
              className="flex gap-4 flex-wrap mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1 }}
            >
              <a
                href="https://wa.me/+491234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#90D5FF] hover:bg-[#90D5FF]/80 text-[#1E1E1E] px-8 py-3 rounded-full transition-all duration-500 text-base font-medium"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Kostenlose Beratung
              </a>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.2 + index * 0.2 }}
                >
                  <achievement.icon className="w-5 h-5 text-[#90D5FF]" />
                  <span className="text-sm text-gray-300">{achievement.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <img 
              src={image}
              alt="Marco Gottle Training" 
              className="rounded-2xl w-full shadow-xl" 
            />
            <motion.div 
              className="absolute inset-0 border-2 border-[#90D5FF]/30 rounded-2xl transform translate-x-4 translate-y-4 -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
