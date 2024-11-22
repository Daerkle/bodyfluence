import React from "react";
import { Link } from "react-router-dom";

const Impressum = () => {
  return (
    <section className="mx-auto min-h-full w-5/6 py-20">
      <h1 className="text-3xl font-bold mb-8">Impressum</h1>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
          <p>Bodyfluence</p>
          <p>[Straße Nr.]</p>
          <p>[PLZ] [Stadt]</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
          <p>Telefon: [Ihre Telefonnummer]</p>
          <p>E-Mail: [Ihre E-Mail]</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>[Name]</p>
          <p>[Straße Nr.]</p>
          <p>[PLZ] [Stadt]</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Streitschlichtung</h2>
          <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr</p>
          <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
          <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
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

export default Impressum;
