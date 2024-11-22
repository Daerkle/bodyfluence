import React from "react";
import { Link } from "react-router-dom";

const Datenschutz = () => {
  return (
    <section className="mx-auto min-h-full w-5/6 py-20">
      <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Datenschutz auf einen Blick</h2>
          <h3 className="text-lg font-medium mb-2">Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
            wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
            werden können.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. Datenerfassung auf dieser Website</h2>
          <h3 className="text-lg font-medium mb-2">Cookies</h3>
          <p>
            Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. 
            Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Analyse-Tools und Tools von Drittanbietern</h2>
          <p>
            Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit 
            Cookies und mit sogenannten Analyseprogrammen.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Plugins und Tools</h2>
          <h3 className="text-lg font-medium mb-2">Google Web Fonts</h3>
          <p>
            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts. Beim Aufruf einer Seite 
            lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
          </p>
        </div>

        <div className="mt-8">
          <Link to="/" className="text-primary-500 hover:text-primary-300 transition duration-300">
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Datenschutz;
