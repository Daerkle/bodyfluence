import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Marco Gottle
            <span className="block text-3xl sm:text-4xl md:text-5xl mt-2 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Performance Coach
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Erreiche deine persönlichen Ziele und maximiere dein Potenzial mit professionellem Coaching
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Jetzt Termin vereinbaren
            </a>
          </div>
        </div>
      </div>
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
