import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <main className="bg-body-bg">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-hero-pattern bg-cover bg-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-helvetica-bold text-white mb-4">
              Über mich
            </h1>
            <h4 className="text-xl text-white font-helvetica-light max-w-2xl mx-auto">
              Erfahren Sie mehr über meine Philosophie und meinen Weg im Bereich Gesundheit und Fitness
            </h4>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-bloc-lg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px]">
              <Image
                src="/img/tim-portrait.jpg"
                alt="Tim Rieger Portrait"
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="text-text-primary">
              <h2 className="text-3xl font-helvetica-bold mb-6">
                Tim Rieger
              </h2>
              <p className="mb-6">
                Als zertifizierter Personal Trainer und Ernährungsberater ist es meine Leidenschaft, Menschen dabei zu unterstützen, ihre persönlichen Gesundheits- und Fitnessziele zu erreichen.
              </p>
              <p className="mb-6">
                Mein Weg in die Fitnessbranche begann mit meiner eigenen Transformation. Diese Erfahrung hat mich gelehrt, wie wichtig ein ganzheitlicher Ansatz für nachhaltige Veränderungen ist.
              </p>
              <p className="mb-6">
                Heute kombiniere ich mein Fachwissen aus verschiedenen Bereichen, um maßgeschneiderte Lösungen für meine Klienten zu entwickeln. Dabei steht für mich der Mensch als Ganzes im Mittelpunkt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-bloc-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-helvetica-bold text-text-primary mb-12 text-center">
            Qualifikationen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-text-primary/20 rounded">
              <h3 className="text-xl font-helvetica-bold text-text-primary mb-4">
                Ausbildungen
              </h3>
              <ul className="text-text-primary space-y-2">
                <li>• Zertifizierter Personal Trainer</li>
                <li>• Ernährungsberater</li>
                <li>• Functional Training Spezialist</li>
                <li>• Rehabilitationstrainer</li>
              </ul>
            </div>
            <div className="p-6 border border-text-primary/20 rounded">
              <h3 className="text-xl font-helvetica-bold text-text-primary mb-4">
                Spezialisierungen
              </h3>
              <ul className="text-text-primary space-y-2">
                <li>• Gewichtsmanagement</li>
                <li>• Athletiktraining</li>
                <li>• Beweglichkeitstraining</li>
                <li>• Präventives Training</li>
              </ul>
            </div>
            <div className="p-6 border border-text-primary/20 rounded">
              <h3 className="text-xl font-helvetica-bold text-text-primary mb-4">
                Zusatzqualifikationen
              </h3>
              <ul className="text-text-primary space-y-2">
                <li>• Stressmanagement</li>
                <li>• Mentales Training</li>
                <li>• Erste Hilfe</li>
                <li>• Rückengesundheit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-bloc-lg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-helvetica-bold text-text-primary mb-8 text-center">
              Meine Philosophie
            </h2>
            <div className="text-text-primary space-y-6">
              <p>
                Meine Philosophie basiert auf dem Grundsatz, dass jeder Mensch einzigartig ist und individuelle Bedürfnisse hat. Deshalb entwickle ich für jeden Klienten ein maßgeschneidertes Konzept, das auf seine persönlichen Ziele und Lebensumstände abgestimmt ist.
              </p>
              <p>
                Ich glaube fest daran, dass nachhaltige Veränderungen nur durch eine ganzheitliche Herangehensweise möglich sind. Training, Ernährung und mentale Gesundheit sind dabei untrennbar miteinander verbunden.
              </p>
              <p>
                Mein Ziel ist es, Sie nicht nur bei der Erreichung Ihrer Fitnessziele zu unterstützen, sondern Ihnen auch das Wissen und die Werkzeuge an die Hand zu geben, um langfristig ein gesundes und aktives Leben führen zu können.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-bloc-lg bg-hero-pattern bg-cover bg-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-helvetica-bold text-white mb-6">
              Lassen Sie uns zusammenarbeiten
            </h2>
            <p className="text-xl text-white mb-8">
              Vereinbaren Sie ein kostenloses Erstgespräch und lassen Sie uns Ihre Ziele besprechen.
            </p>
            <Link 
              href="mailto:info@healthconsultingrieger.de"
              className="bg-blog-button hover:bg-blog-button-hover text-white px-8 py-3 rounded inline-block transition-colors duration-200"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
