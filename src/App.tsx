import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from "@/scenes/footer";
import { AlertTriangle, Clock, Battery, Zap, BatteryCharging, Target, Brain, Dumbbell, Heart, ChevronRight } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import HolisticSphere from '@/components/3d/HolisticSphere';

const App = () => {
  return (
    <main className="min-h-screen bg-[#1E1E1E] text-gray-100">
      <Navbar />
      <Hero 
        image="/hero.png"
        title="MARCO GOTTLE"
        description="Dein Partner für ganzheitliche Gesundheit und optimale Performance."
      />
      
      {/* Herausforderungen Section */}
      <section id="herausforderungen" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#90D5FF] mb-2"
            >
              Herausforderungen die wir meistern
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Häufige Herausforderungen
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 max-w-3xl mx-auto"
            >
              Die meisten Menschen stehen vor ähnlichen Herausforderungen wenn es um ihre Gesundheit und Leistungsfähigkeit geht.
              Hier sind die häufigsten Herausforderungen, die wir gemeinsam meistern können.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <HerausforderungCard
              icon={<AlertTriangle className="w-6 h-6 text-[#90D5FF]" />}
              title="Energiemangel"
              description="Ständige Müdigkeit und Erschöpfung, die dich davon abhält, dein volles Potenzial zu entfalten."
            />
            <HerausforderungCard
              icon={<Clock className="w-6 h-6 text-[#90D5FF]" />}
              title="Zeitmangel"
              description="Keine Zeit für regelmäßiges Training und gesunde Ernährung durch einen stressigen Alltag."
            />
            <HerausforderungCard
              icon={<Battery className="w-6 h-6 text-[#90D5FF]" />}
              title="Leistungsabfall"
              description="Nachlassende kognitive und körperliche Leistungsfähigkeit, die sich auf alle Lebensbereiche auswirkt."
            />
          </div>
        </div>
      </section>

      {/* Core Elements Section */}
      <section id="core-elements" className="py-16 px-4 relative overflow-hidden">
        <HolisticSphere />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#90D5FF] mb-2"
            >
              Kernelemente
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Ganzheitlicher Ansatz
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 max-w-3xl mx-auto mb-12"
            >
              Unser Ansatz basiert auf wissenschaftlichen Erkenntnissen und jahrelanger Praxiserfahrung.
              Wir kombinieren verschiedene Elemente für optimale Ergebnisse.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group"
            >
              <div className="relative p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-[#90D5FF]/20 h-full transition-all duration-300 hover:bg-white/10 hover:border-[#90D5FF]/40">
                <div className="absolute -top-6 left-6 w-12 h-12 bg-[#90D5FF]/10 rounded-xl flex items-center justify-center backdrop-blur-lg border border-[#90D5FF]/20">
                  <Zap className="w-6 h-6 text-[#90D5FF]" />
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#90D5FF]">Energie-Optimierung</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-[#90D5FF] rounded-full"></div>
                      <span>Optimierte Ernährung</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-[#90D5FF] rounded-full"></div>
                      <span>Gezielte Supplementierung</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-[#90D5FF] rounded-full"></div>
                      <span>Energiemanagement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group"
            >
              <div className="relative p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-[#90D5FF]/20 h-full transition-all duration-300 hover:bg-white/10 hover:border-[#90D5FF]/40">
                <div className="absolute -top-6 left-6 w-12 h-12 bg-[#90D5FF]/10 rounded-xl flex items-center justify-center backdrop-blur-lg border border-[#90D5FF]/20">
                  <BatteryCharging className="w-6 h-6 text-[#90D5FF]" />
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#90D5FF]">Regeneration</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-[#90D5FF] rounded-full"></div>
                      <span>Schlafoptimierung</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-[#90D5FF] rounded-full"></div>
                      <span>Stressmanagement</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-[#90D5FF] rounded-full"></div>
                      <span>Recovery-Methoden</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="group"
            >
              <div className="relative p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-[#90D5FF]/20 h-full transition-all duration-300 hover:bg-white/10 hover:border-[#90D5FF]/40">
                <div className="absolute -top-6 left-6 w-12 h-12 bg-[#90D5FF]/10 rounded-xl flex items-center justify-center backdrop-blur-lg border border-[#90D5FF]/20">
                  <Brain className="w-6 h-6 text-[#90D5FF]" />
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#90D5FF]">Mentaler Fokus</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-[#90D5FF] rounded-full"></div>
                      <span>Mentales Training</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-[#90D5FF] rounded-full"></div>
                      <span>Konzentrationssteigerung</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-[#90D5FF] rounded-full"></div>
                      <span>Stressresistenz</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#90D5FF] mb-2"
            >
              Angebote
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Coaching Programme
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 max-w-3xl mx-auto mb-8"
            >
              Wähle das Programm, das am besten zu deinen Zielen und Bedürfnissen passt.
              Alle Programme sind individuell auf dich abgestimmt.
            </motion.p>
          </div>
          
          <ScrollArea className="h-[500px] w-full rounded-md border border-white/10 p-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="health" className="border-white/10">
                <AccordionTrigger className="text-white hover:no-underline hover:text-[#90D5FF]">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5" />
                    <span>Health Coaching</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p className="text-gray-400">
                      Optimiere deine Gesundheit und Energie durch personalisierte Ernährung und Lifestyle-Strategien.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <ChevronRight className="w-4 h-4 text-[#90D5FF]" />
                        <span>Individuelle Ernährungsberatung</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <ChevronRight className="w-4 h-4 text-[#90D5FF]" />
                        <span>Stressmanagement</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <ChevronRight className="w-4 h-4 text-[#90D5FF]" />
                        <span>Schlafoptimierung</span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="performance" className="border-white/10">
                <AccordionTrigger className="text-white hover:no-underline hover:text-[#90D5FF]">
                  <div className="flex items-center gap-3">
                    <Dumbbell className="w-5 h-5" />
                    <span>Performance Coaching</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p className="text-gray-400">
                      Steigere deine körperliche und mentale Leistungsfähigkeit für maximalen Erfolg.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <ChevronRight className="w-4 h-4 text-[#90D5FF]" />
                        <span>Individueller Trainingsplan</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <ChevronRight className="w-4 h-4 text-[#90D5FF]" />
                        <span>Leistungsdiagnostik</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <ChevronRight className="w-4 h-4 text-[#90D5FF]" />
                        <span>Mentales Training</span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="transformation" className="border-white/10">
                <AccordionTrigger className="text-white hover:no-underline hover:text-[#90D5FF]">
                  <div className="flex items-center gap-3">
                    <Brain className="w-5 h-5" />
                    <span>Transformation Coaching</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p className="text-gray-400">
                      Erreiche eine komplette körperliche und mentale Transformation.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <ChevronRight className="w-4 h-4 text-[#90D5FF]" />
                        <span>Ganzheitliche Betreuung</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <ChevronRight className="w-4 h-4 text-[#90D5FF]" />
                        <span>Verhaltensänderung</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <ChevronRight className="w-4 h-4 text-[#90D5FF]" />
                        <span>Lifestyle Design</span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollArea>
        </div>
      </section>

      {/* Expertise & Qualifications Section */}
      <section id="expertise" className="py-16 px-4 bg-[#1E1E1E]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Expertise & Qualifikation</h2>
              <div>
                <h3 className="text-xl font-semibold text-[#90D5FF] mb-4">Spezialisierung</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-3">
                  <li>1:1 Coaching</li>
                  <li>Bluttests & Analyse</li>
                  <li>Körpertransformation</li>
                </ul>
              </div>
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <img 
                src="/bodybuilding.jpg" 
                alt="Marco Gottle Bodybuilding Expertise" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

// Helper Components
const HerausforderungCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-[#90D5FF]/30">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-[#90D5FF]/30">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const ServiceCard = ({ title, description, comingSoon }: { title: string; description: string; comingSoon?: boolean }) => (
  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-[#90D5FF]/30 relative">
    {comingSoon && (
      <div className="absolute top-4 right-4">
        <span className="bg-[#90D5FF] text-[#1E1E1E] text-xs font-semibold px-2 py-1 rounded">Coming Soon</span>
      </div>
    )}
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default App;
