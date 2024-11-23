import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/services-hero.jpg"
            alt="Fitness Training"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-30"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Unsere Leistungen</h1>
            <p className="text-xl mb-8">
              Entdecken Sie unsere ganzheitlichen Gesundheits- und Fitnessangebote,
              die individuell auf Ihre Bedürfnisse zugeschnitten sind.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Personal Training */}
          <div id="personal-training" className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/img/personal-training.jpg"
                  alt="Personal Training"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Personal Training</h2>
                <p className="text-gray-600 mb-6">
                  Unser Personal Training ist mehr als nur Fitness. Es ist ein maßgeschneidertes
                  Programm, das Ihre individuellen Ziele, Ihren Fitnesslevel und Ihre zeitlichen
                  Möglichkeiten berücksichtigt.
                </p>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li>• Individuelles Trainingskonzept</li>
                  <li>• Regelmäßige Fortschrittskontrolle</li>
                  <li>• Flexible Terminvereinbarung</li>
                  <li>• Training zu Hause oder im Studio</li>
                </ul>
                <Link href="/kontakt" className="btn-primary">
                  Jetzt anfragen
                </Link>
              </div>
            </div>
          </div>

          {/* Ernährungsberatung */}
          <div id="ernaehrung" className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6">Ernährungsberatung</h2>
                <p className="text-gray-600 mb-6">
                  Eine ausgewogene Ernährung ist der Schlüssel zu langfristigem Wohlbefinden.
                  Unsere Ernährungsberatung hilft Ihnen dabei, Ihre Ernährung zu optimieren
                  und Ihre Ziele zu erreichen.
                </p>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li>• Analyse des Essverhaltens</li>
                  <li>• Personalisierte Ernährungspläne</li>
                  <li>• Einkaufslisten und Rezepte</li>
                  <li>• Regelmäßige Beratungsgespräche</li>
                </ul>
                <Link href="/kontakt" className="btn-primary">
                  Beratung vereinbaren
                </Link>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="/img/ernaehrung.jpg"
                  alt="Ernährungsberatung"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Ganzheitliche Betreuung */}
          <div id="ganzheitlich">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/img/ganzheitlich.jpg"
                  alt="Ganzheitliche Betreuung"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Ganzheitliche Betreuung</h2>
                <p className="text-gray-600 mb-6">
                  Unsere ganzheitliche Betreuung verbindet Training, Ernährung und mentales
                  Wohlbefinden zu einem umfassenden Gesundheitskonzept.
                </p>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li>• Kombiniertes Training und Ernährungskonzept</li>
                  <li>• Stressmanagement</li>
                  <li>• Work-Life-Balance Coaching</li>
                  <li>• Regelmäßige Check-ups</li>
                </ul>
                <Link href="/kontakt" className="btn-primary">
                  Mehr erfahren
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Unsere Pakete</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Basis Paket</h3>
              <p className="text-3xl font-bold mb-6">89€ <span className="text-sm text-gray-600">/Monat</span></p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>• 1x Personal Training pro Woche</li>
                <li>• Basis Ernährungsberatung</li>
                <li>• Monatliche Fortschrittskontrolle</li>
              </ul>
              <Link href="/kontakt" className="btn-primary block text-center">
                Auswählen
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transform scale-105 border-2 border-blue-600">
              <h3 className="text-xl font-bold mb-4">Premium Paket</h3>
              <p className="text-3xl font-bold mb-6">169€ <span className="text-sm text-gray-600">/Monat</span></p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>• 2x Personal Training pro Woche</li>
                <li>• Umfassende Ernährungsberatung</li>
                <li>• Wöchentliche Fortschrittskontrolle</li>
                <li>• Individueller Trainingsplan</li>
              </ul>
              <Link href="/kontakt" className="btn-primary block text-center">
                Auswählen
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Business Paket</h3>
              <p className="text-3xl font-bold mb-6">299€ <span className="text-sm text-gray-600">/Monat</span></p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>• 3x Personal Training pro Woche</li>
                <li>• VIP Ernährungsberatung</li>
                <li>• 24/7 Support</li>
                <li>• Ganzheitliches Coaching</li>
              </ul>
              <Link href="/kontakt" className="btn-primary block text-center">
                Auswählen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Bereit für Ihre Transformation?</h2>
          <p className="text-xl mb-8">
            Vereinbaren Sie jetzt ein kostenloses Erstgespräch und lassen Sie uns
            gemeinsam Ihre Ziele erreichen.
          </p>
          <Link href="/kontakt" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
            Jetzt starten
          </Link>
        </div>
      </section>
    </>
  )
}
