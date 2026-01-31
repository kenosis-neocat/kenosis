
import React from 'react';
import { INSTRUMENTS } from '../constants';

const Instruments: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-8 py-20 animate-fade-in">
      {/* Top Main Section - Full Width */}
      <div className="mb-12">
        <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-14 px-8 rounded-3xl transition-all shadow-lg hover:shadow-teal-100 flex flex-col items-center justify-center space-y-3 group">
          <span className="text-3xl font-bold tracking-wide">Bases Musicales</span>
          <p className="text-teal-100 font-light text-sm tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">Acompañamientos para la oración</p>
        </button>
      </div>

      {/* Instruments Grid - Double Column */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {INSTRUMENTS.map((inst) => (
          <div 
            key={inst.id} 
            className="relative h-60 w-full rounded-3xl overflow-hidden group shadow-sm hover:shadow-md transition-all cursor-default"
          >
            <img 
              src={inst.imageUrl} 
              alt={inst.name} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-teal-900/50 group-hover:bg-teal-900/40 transition-colors"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h4 className="text-2xl font-bold text-white mb-1">{inst.name}</h4>
              <p className="text-teal-50/80 font-light text-sm line-clamp-2">{inst.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instruments;
