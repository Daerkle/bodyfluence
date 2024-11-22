import React from 'react';
import { Target, BarChart2, Zap } from 'lucide-react';

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meine Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professionelles Coaching für deine persönliche und berufliche Entwicklung
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Target className="w-6 h-6 text-white" />}
            title="Zielentwicklung"
            description="Gemeinsam entwickeln wir klare und erreichbare Ziele für deine persönliche Entwicklung."
          />
          <ServiceCard
            icon={<BarChart2 className="w-6 h-6 text-white" />}
            title="Performance Optimierung"
            description="Identifiziere und optimiere deine Leistungsfähigkeit durch bewährte Coaching-Methoden."
          />
          <ServiceCard
            icon={<Zap className="w-6 h-6 text-white" />}
            title="Mentales Training"
            description="Stärke deine mentale Fitness und entwickle eine positive Grundhaltung."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
