import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Phone } from 'lucide-react';
import { TikTok } from '../Icons';
import './styles.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const linkVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "Über mich" },
    { href: "#services", label: "Leistungen" },
    { href: "#contact", label: "Kontakt" },
  ];

  const socialLinks = [
    {
      href: "https://www.tiktok.com/@marcotrainer",
      icon: <TikTok className="w-6 h-6" />,
      label: "TikTok"
    },
    {
      href: "https://www.instagram.com/marco.trainer",
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram"
    },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-black/80 backdrop-blur-lg' : 'py-4 bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="text-2xl font-bold">
              Marco<span className="text-red-500">.Trainer</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-red-500 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Social Links */}
            <div className="hidden lg:flex items-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
              <a
                href="https://wa.me/+491234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white focus:outline-none"
            >
              <Menu className={`w-8 h-8 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-lg z-40 lg:hidden"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-gray-900 z-50 lg:hidden"
      >
        <div className="relative h-full p-8">
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-white focus:outline-none"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-6 mt-16">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                custom={i}
                variants={linkVariants}
                onClick={toggleMenu}
                className="text-2xl font-semibold text-white hover:text-red-500 transition-colors duration-300"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Social Links */}
          <div className="absolute bottom-12 left-8 right-8">
            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={i + navLinks.length}
                  variants={linkVariants}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-red-500/20 transition-colors duration-300"
                >
                  {link.icon}
                </motion.a>
              ))}
              <motion.a
                href="https://wa.me/+491234567890"
                target="_blank"
                rel="noopener noreferrer"
                custom={socialLinks.length + navLinks.length}
                variants={linkVariants}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 hover:bg-green-500/30 text-green-500 transition-colors duration-300"
              >
                <Phone className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
