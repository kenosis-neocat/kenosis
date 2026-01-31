
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-96px)] flex flex-col items-center justify-center px-8 relative overflow-hidden">
      {/* Subtle organic background movement */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-teal-100/40 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-100/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl text-center space-y-12 animate-fade-in relative z-10">
        <blockquote className="text-3xl md:text-5xl font-light text-teal-900 leading-snug tracking-tight">
          "No hagáis nada por ambición o vanagloria, sino con humildad, considerando a los demás superiores a uno mismo"
        </blockquote>
        <div className="flex flex-col items-center space-y-4">
          <div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div>
          <cite className="block text-teal-600/50 text-sm md:text-base font-medium tracking-[0.4em] uppercase">
            Filipenses 2, 3
          </cite>
        </div>
      </div>
    </div>
  );
};

export default Home;
