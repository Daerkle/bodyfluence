import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <nav className="absolute top-0 left-0 right-0 p-6">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
              <Image
                src="/img/Logo_weiß_weiß.png"
                alt="HCOR Logo"
                width={150}
                height={59}
                className="cursor-pointer"
              />
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/about" className="nav-link">Über mich</Link>
              <Link href="mailto:info@healthconsultingrieger.de" className="nav-link">Kontakt</Link>
              <Link href="/anamnesebogen" className="nav-link">Anamnesebogen</Link>
              <Link href="https://blog.healthconsultingrieger.de" className="btn-primary">
                Blog
              </Link>
            </div>
          </div>
        </nav>

        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">HCOR</h1>
          <h2 className="text-2xl mb-8">Where Health Meets Heart</h2>
          <button className="btn-primary">
            Leistungen
          </button>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl font-light italic mb-8">
              „Wer sich keine Zeit für seine Gesundheit nimmt, wird später viel Zeit für seine Krankheit opfern müssen."
            </blockquote>
            <cite className="text-gray-600">– Sebastian Kneipp</cite>
          </div>
        </div>
      </section>
    </main>
  )
}
