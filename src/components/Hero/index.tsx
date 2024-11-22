import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Brain, Heart, Zap, ChevronRight } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D, Center } from '@react-three/drei';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Animated Background Lines */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-px h-32 bg-red-500/20 animate-pulse"></div>
        <div className="absolute top-40 left-1/3 w-px h-48 bg-red-500/20 animate-pulse delay-75"></div>
        <div className="absolute top-60 left-2/3 w-px h-64 bg-red-500/20 animate-pulse delay-150"></div>
        <div className="absolute top-20 right-1/4 w-px h-32 bg-red-500/20 animate-pulse delay-200"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Deine Reise zu
              <span className="text-red-500 block mt-2">maximaler Leistungsfähigkeit</span>
              <span className="block mt-2">&amp; deinem Traumkörper</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Es wird Zeit, dass du dich gesund fühlst, viel Energie hast, deinen fitten Traumkörper aufbaust & all deine Ziele schneller erreichst & eine hohe Lebensfreude aufbaust.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-red-500 hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
              >
                Jetzt durchstarten
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#learn-more"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                Mehr erfahren
              </a>
            </motion.div>
          </div>

          {/* 3D Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 h-[500px] w-full max-w-[600px]"
          >
            <div className="w-full h-full relative">
              <Canvas>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Center>
                  <Text3D
                    font="/fonts/helvetiker_regular.typeface.json"
                    size={1.5}
                    height={0.2}
                    curveSegments={12}
                  >
                    POWER
                    <meshStandardMaterial color="red" />
                  </Text3D>
                </Center>
              </Canvas>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {[
            { icon: <Dumbbell className="w-8 h-8" />, title: "Körperliche Stärke" },
            { icon: <Brain className="w-8 h-8" />, title: "Mentale Fitness" },
            { icon: <Heart className="w-8 h-8" />, title: "Gesundheit" },
            { icon: <Zap className="w-8 h-8" />, title: "Energie" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-red-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                {React.cloneElement(feature.icon, { className: "w-8 h-8 text-red-500" })}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">Bring deinen Körper auf Höchstperformance</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
