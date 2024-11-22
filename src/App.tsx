import React, { useEffect, useState } from 'react';
import { AlertTriangle, Clock, Battery, Zap, BatteryCharging, Target, Brain, Dumbbell, Heart, Instagram, MessageCircle, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '/logo.png';
import hero from '/hero.png';

const App = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const rotatingTexts = [
    "maximaler Leistungsfähigkeit",
    "mentalem Peak-Zustand",
    "deinem Traumkörper",
    "optimaler Gesundheit"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-red-500/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="h-12">
            <img src={logo} alt="Marco Fischer" className="h-full" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <a href="#benefits" className="hover:text-red-500 transition-colors">Vorteile</a>
              <a href="#approach" className="hover:text-red-500 transition-colors">Vorgehen</a>
              <a href="#offers" className="hover:text-red-500 transition-colors">Angebote</a>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://instagram.com/bodyfluence" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://tiktok.com/@bodyfluence" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <svg 
                  className="w-5 h-5" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
                </svg>
              </a>
            </div>
            <button className="bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity flex items-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-red-500 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black/95 backdrop-blur-lg border-t border-red-500/20`}>
          <div className="container mx-auto px-4 py-6 space-y-6">
            <div className="flex flex-col space-y-4">
              <a href="#benefits" className="text-lg hover:text-red-500 transition-colors" onClick={toggleMenu}>Vorteile</a>
              <a href="#approach" className="text-lg hover:text-red-500 transition-colors" onClick={toggleMenu}>Vorgehen</a>
              <a href="#offers" className="text-lg hover:text-red-500 transition-colors" onClick={toggleMenu}>Angebote</a>
            </div>
            
            {/* WhatsApp Button in Mobile Menu */}
            <div className="flex justify-center pt-4">
              <button className="bg-gradient-to-r from-red-500 to-red-700 text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity flex items-center space-x-2 w-full max-w-xs">
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </button>
            </div>

            <div className="flex justify-center space-x-6 pt-4 border-t border-red-500/20">
              <a 
                href="https://instagram.com/bodyfluence" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://tiktok.com/@bodyfluence" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <svg 
                  className="w-6 h-6" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-96 bg-red-500/10 blur-3xl rounded-full"></div>
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Deine Reise zu{' '}
                <span className="text-red-500 transition-colors duration-500">
                  {rotatingTexts[textIndex]}
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Es wird Zeit, dass du dich gesund fühlst, viel Energie hast, deinen fitten Traumkörper aufbaust & all deine Ziele schneller erreichst & eine hohe Lebensfreude aufbaust.
              </p>
              <button className="bg-gradient-to-r from-red-500 to-red-700 text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
                Mehr erfahren
              </button>
            </div>
            <div className="relative">
              <img src={hero} alt="Training" className="rounded-2xl w-full" />
              <div className="absolute inset-0 border-2 border-red-500/20 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="benefits" className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Sieht dein Leben<br />aktuell so aus?
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Viele Menschen fühlen sich als wäre die Luft raus. Keine Energie um schnelle Fortschritte im Leben zu machen. 
            Und ständige Lustlosigkeit & Unzufriedenheit.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProblemCard
              icon={<Battery className="w-6 h-6" />}
              title="Ständig Müde?"
              description="Du fühlst dich 3 Stunden nach dem Aufstehen, als könntest du direkt wieder ins Bett gehen & kannst dich schlecht konzentrieren & fokussieren?"
            />
            <ProblemCard
              icon={<AlertTriangle className="w-6 h-6" />}
              title="Nicht stolz auf deinen Körper?"
              description="Zieh das T-Shirt aus. Stell dich vor den Spiegel. Sei ehrlich zu dir. Bist du stolz darauf, was du siehst?"
            />
            <ProblemCard
              icon={<Zap className="w-6 h-6" />}
              title="Wenig Energie?"
              description="Fühlst du dich schnell gestresst? Hast du das Gefühl, mehr Potenzial zu haben, es aber nicht nutzen zu können?"
            />
          </div>
        </div>
      </section>

      {/* Core Elements */}
      <section id="approach" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Ich optimiere dein<br />gesamtes Leben
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Es ist nicht nur eine Sache die dich glücklicher, leistungsfähiger & erfolgreicher macht.
            Es ist genau die Summe aus folgenden Kernelementen.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="w-6 h-6" />}
              title="Optimierte Hormone"
              description="Optimierte Hormone sind die Grundlage für ein glückliches und erfolgreiches Leben."
            />
            <FeatureCard
              icon={<Heart className="w-6 h-6" />}
              title="Supplementprotokoll"
              description="Maximale Gehirnleistung, Energie, Muskelaufbau & Gesundheit"
            />
            <FeatureCard
              icon={<Clock className="w-6 h-6" />}
              title="Routinen"
              description="Wichtige Routinen die deinem Erfolg eine ganz neue Dimension geben"
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="Inspiration"
              description="Denke größer, bringe frischen Wind & Motivation in dein Leben"
            />
            <FeatureCard
              icon={<Dumbbell className="w-6 h-6" />}
              title="Trainingsplan"
              description="Schnellerer Muskelaufbau als jemals zuvor"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="offers" className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center">Dein Weg zum Erfolg</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-red-500/20 hover:border-red-500/40 transition-colors">
              <div className="bg-gradient-to-r from-red-500 to-red-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1:1 Coaching</h3>
              <p className="text-gray-400">
                Starte jetzt mit personalisierten Coaching-Sessions und erreiche deine Ziele schneller und effizienter als je zuvor.
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-red-500/20 hover:border-red-500/40 transition-colors">
              <div className="bg-gradient-to-r from-red-500 to-red-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bodytransformation Mentoring</h3>
              <p className="text-gray-400">
                Allumfassendes Mentoring um deinen Traumkörper zu erreichen, maximal gesund, leistungsfähig und erfolgreich zu werden.
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-red-500/20 hover:border-red-500/40 transition-colors">
              <div className="bg-gradient-to-r from-red-500 to-red-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Meine E-Books</h3>
              <p className="text-gray-400">
                Die einzigen E-Books die du über Biohacking lesen musst um die Prozesse zu verstehen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black/90 backdrop-blur-sm border-t border-red-500/20">
        <div className="container mx-auto max-w-6xl flex justify-between items-center">
          <div className="text-sm text-gray-400">
            2024 OAKMIND. Alle Rechte vorbehalten.
          </div>
          <div className="flex space-x-4">
            <Link to="/impressum" className="text-sm text-gray-400 hover:text-red-500 transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-sm text-gray-400 hover:text-red-500 transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

const ProblemCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-red-500/20 hover:bg-white/10 transition-colors">
    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-700 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-red-500/20 hover:bg-white/10 transition-colors">
    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-700 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const ServiceCard = ({ title, description, comingSoon }: { title: string; description: string; comingSoon?: boolean }) => (
  <div className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-red-500/20 hover:bg-white/10 transition-colors">
    {comingSoon && (
      <span className="text-sm text-red-500 mb-2 block">Coming soon</span>
    )}
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <button className="bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity w-full">
      Mehr erfahren
    </button>
  </div>
);

export default App;
