import React, { useState } from 'react';
import { Target, BarChart2, Zap, Battery, AlertTriangle } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './scenes/footer';
import Hero from './components/Hero';
import Services from './components/Services';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover3D?: boolean;
}

const GlassCard: React.FC<CardProps> = ({ children, className = "", hover3D = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`p-6 backdrop-blur-md rounded-xl border border-white/10 shadow-xl transform-gpu overflow-hidden ${className} ${
        isHovered ? 'bg-white/10' : 'bg-white/5'
      } transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

const ProblemCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="text-center">
    <div className="w-12 h-12 mx-auto mb-4 bg-red-500/10 rounded-full flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
