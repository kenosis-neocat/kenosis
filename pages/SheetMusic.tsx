
import React, { useState } from 'react';
import { SALMOS } from '../constants';

const SheetMusic: React.FC = () => {
  const [filter, setFilter] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [activeEtapa, setActiveEtapa] = useState('');
  const [activeIndice, setActiveIndice] = useState('');
  const [activeEucaristia, setActiveEucaristia] = useState('');

  const filteredSalmos = SALMOS.filter(s => {
    const matchesText = s.title.toLowerCase().includes(filter.toLowerCase());
    const matchesEtapa = activeEtapa === '' || s.etapa === activeEtapa;
    const matchesIndice = activeIndice === '' || s.indice === activeIndice;
    const matchesEucaristia = activeEucaristia === '' || s.eucaristia === activeEucaristia;
    return matchesText && matchesEtapa && matchesIndice && matchesEucaristia;
  });

  const stages = ['Precatecumenado', 'Liturgia', 'Catecumenado', 'Elección'];
  const liturgicalIndex = ['Adviento', 'Navidad', 'Pascua/Pentecostés', 'Cantos a la Virgen'];
  const eucharistMoments = ['Entrada', 'Paz', 'Fracción del Pan', 'Comunión con el Cáliz', 'Final'];

  return (
    <div className="max-w-5xl mx-auto px-8 py-20 animate-fade-in">
      <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <h2 className="text-4xl font-bold text-teal-900">Partituras</h2>
        
        <div className="flex items-center gap-4">
          <input 
            type="text" 
            placeholder="Buscar..." 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-white border border-teal-100 rounded-full py-2 px-6 text-teal-900 placeholder-teal-200 focus:ring-2 focus:ring-teal-500/10 outline-none transition-all w-64"
          />
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className={`px-6 py-2 rounded-full border text-[11px] uppercase tracking-widest font-bold transition-all ${
              showFilters ? 'bg-teal-600 border-teal-600 text-white' : 'border-teal-200 text-teal-600 hover:bg-teal-50'
            }`}
          >
            {showFilters ? 'Ocultar Filtros' : 'Filtros'}
          </button>
        </div>
      </header>

      {/* Animated Filters Section */}
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in bg-teal-50/30 p-8 rounded-3xl border border-teal-50">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-teal-400">Etapa</label>
            <select 
              value={activeEtapa} 
              onChange={(e) => setActiveEtapa(e.target.value)}
              className="w-full bg-white border border-teal-100 rounded-xl py-2.5 px-4 text-sm text-teal-800 outline-none focus:border-teal-400 transition-colors"
            >
              <option value="">Todas las etapas</option>
              {stages.map(stage => <option key={stage} value={stage}>{stage}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-teal-400">Índice Litúrgico</label>
            <select 
              value={activeIndice} 
              onChange={(e) => setActiveIndice(e.target.value)}
              className="w-full bg-white border border-teal-100 rounded-xl py-2.5 px-4 text-sm text-teal-800 outline-none focus:border-teal-400 transition-colors"
            >
              <option value="">Todos los tiempos</option>
              {liturgicalIndex.map(idx => <option key={idx} value={idx}>{idx}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-teal-400">Eucaristía</label>
            <select 
              value={activeEucaristia} 
              onChange={(e) => setActiveEucaristia(e.target.value)}
              className="w-full bg-white border border-teal-100 rounded-xl py-2.5 px-4 text-sm text-teal-800 outline-none focus:border-teal-400 transition-colors"
            >
              <option value="">Cualquier momento</option>
              {eucharistMoments.map(moment => <option key={moment} value={moment}>{moment}</option>)}
            </select>
          </div>
        </div>
      )}

      {/* Results List */}
      <div className="bg-white rounded-[2rem] shadow-sm border border-teal-50 overflow-hidden">
        {filteredSalmos.length > 0 ? (
          <div className="divide-y divide-teal-50">
            {filteredSalmos.map((salmo) => (
              <div 
                key={salmo.id} 
                className="group flex flex-col md:flex-row md:items-center justify-between py-8 px-10 hover:bg-teal-50/20 transition-all cursor-pointer"
              >
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-teal-900 group-hover:text-teal-600 transition-colors tracking-tight">{salmo.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {salmo.etapa && <span className="text-[9px] text-teal-500 font-bold uppercase tracking-wider">{salmo.etapa}</span>}
                    {salmo.indice && <span className="text-[9px] text-teal-300 font-bold uppercase tracking-wider">• {salmo.indice}</span>}
                    {salmo.eucaristia && <span className="text-[9px] text-teal-300 font-bold uppercase tracking-wider">• {salmo.eucaristia}</span>}
                  </div>
                </div>
                {/* Visual arrow indicator instead of download */}
                <div className="opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                   <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                   </svg>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-32 text-center">
            <p className="text-teal-200 font-bold text-lg tracking-widest uppercase">
              Sin resultados
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SheetMusic;
