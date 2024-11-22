import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '/logo.png';

const Datenschutz = () => {
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
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-red-500 to-red-700 inline-block text-transparent bg-clip-text">Datenschutzerklärung</h1>
        
        <div className="space-y-6 max-w-3xl">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-semibold mb-2">Allgemeine Hinweise</h3>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Verantwortlicher</h2>
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
            <p>Bodyfluence</p>
            <p>Marco Fischer</p>
            <p>[Straße]</p>
            <p>[PLZ] [Stadt]</p>
            <p>Telefon: [Telefonnummer]</p>
            <p>E-Mail: [E-Mail]</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO)</li>
              <li>Die Berichtigung unrichtiger personenbezogener Daten zu verlangen (Art. 16 DSGVO)</li>
              <li>Die Löschung Ihrer gespeicherten personenbezogenen Daten zu verlangen (Art. 17 DSGVO)</li>
              <li>Die Einschränkung der Datenverarbeitung zu verlangen (Art. 18 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen (Art. 21 DSGVO)</li>
              <li>Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten (Art. 20 DSGVO)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Datenerfassung auf dieser Website</h2>
            <h3 className="text-xl font-semibold mb-2">Cookies</h3>
            <p>Diese Website verwendet keine Tracking-Cookies. Technisch notwendige Cookies können zum Einsatz kommen, um die Funktionalität der Website zu gewährleisten.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Analyse-Tools und Werbung</h2>
            <p>Diese Website verzichtet auf den Einsatz von Tracking-Tools.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Newsletter</h2>
            <p>Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Plugins und Tools</h2>
            <h3 className="text-xl font-semibold mb-2">Google Web Fonts</h3>
            <p>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
