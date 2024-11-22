import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '/logo.png';

const Impressum = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-red-500/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="h-12">
            <img src={logo} alt="Bodyfluence" className="h-full" />
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white hover:text-red-500 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black/95 backdrop-blur-lg border-t border-red-500/20`}>
          <div className="container mx-auto px-4 py-6 space-y-4">
            <Link to="/" className="block text-lg hover:text-red-500 transition-colors" onClick={toggleMenu}>
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-red-500 to-red-700 inline-block text-transparent bg-clip-text">Impressum</h1>
        
        <div className="space-y-6 max-w-3xl">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
            <p>Bodyfluence</p>
            <p>Marco Fischer</p>
            <p>[Straße]</p>
            <p>[PLZ] [Stadt]</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
            <p>Telefon: [Ihre Telefonnummer]</p>
            <p>E-Mail: [Ihre E-Mail]</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
            <p>[Ihre USt-IdNr.]</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Streitschlichtung</h2>
            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:</p>
            <p><a href="https://ec.europa.eu/consumers/odr/" className="text-red-500 hover:text-red-400">https://ec.europa.eu/consumers/odr/</a></p>
            <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
