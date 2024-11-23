'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/img/Logo_weiß_weiß.png"
              alt="HCOR Logo"
              width={150}
              height={59}
              className="h-auto w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-nav-link hover:text-nav-link-hover transition-colors duration-200">
              home
            </Link>
            <Link href="/about" className="text-nav-link hover:text-nav-link-hover transition-colors duration-200">
              Über mich
            </Link>
            <Link href="mailto:info@healthconsultingrieger.de" className="text-nav-link hover:text-nav-link-hover transition-colors duration-200">
              Kontakt
            </Link>
            <Link href="/anamnesebogen" className="text-nav-link hover:text-nav-link-hover transition-colors duration-200">
              Anamnesebogen
            </Link>
            <Link 
              href="https://blog.healthconsultingrieger.de" 
              className="bg-blog-button hover:bg-blog-button-hover text-white px-6 py-2 rounded transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-body-bg/95 backdrop-blur-sm py-4">
            <div className="flex flex-col space-y-4 px-4">
              <Link 
                href="/" 
                className="text-nav-link hover:text-nav-link-hover transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                home
              </Link>
              <Link 
                href="/about" 
                className="text-nav-link hover:text-nav-link-hover transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Über mich
              </Link>
              <Link 
                href="mailto:info@healthconsultingrieger.de" 
                className="text-nav-link hover:text-nav-link-hover transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
              <Link 
                href="/anamnesebogen" 
                className="text-nav-link hover:text-nav-link-hover transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Anamnesebogen
              </Link>
              <Link 
                href="https://blog.healthconsultingrieger.de" 
                className="bg-blog-button hover:bg-blog-button-hover text-white px-6 py-2 rounded inline-block text-center transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
