
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// --- Types ---
type AppView = 'home' | 'instruments' | 'sheets';

interface Instrument {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

interface SheetMusic {
  id: string;
  title: string;
  etapa?: 'Precatecumenado' | 'Liturgia' | 'Catecumenado' | 'Elección';
  indice?: 'Adviento' | 'Navidad' | 'Pascua/Pentecostés' | 'Cantos a la Virgen';
  eucaristia?: 'Entrada' | 'Paz' | 'Fracción del Pan' | 'Comunión con el Cáliz' | 'Final';
}

// --- Constants ---
const INSTRUMENTS: Instrument[] = [
  { id: '1', name: 'Guitarra', description: 'El alma rítmica de la asamblea.', imageUrl: 'https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&q=80&w=800' },
  { id: '2', name: 'Charango', description: 'Sonoridad alegre y brillante.', imageUrl: 'https://images.unsplash.com/photo-1628108429314-87729864273f?auto=format&fit=crop&q=80&w=800' },
  { id: '3', name: 'Castañuelas', description: 'Acento festivo para la danza.', imageUrl: 'https://images.unsplash.com/photo-1628527302488-422849927909?auto=format&fit=crop&q=80&w=800' },
  { id: '4', name: 'Percusión', description: 'El latido del corazón comunitario.', imageUrl: 'https://images.unsplash.com/photo-1543443258-92b04ad5ecf5?auto=format&fit=crop&q=80&w=800' }
];

const SALMOS: SheetMusic[] = [
  { id: 's1', title: 'Hacia ti levanto mis ojos', etapa: 'Precatecumenado', eucaristia: 'Entrada' },
  { id: 's2', title: 'El Señor es mi pastor', etapa: 'Precatecumenado', eucaristia: 'Comunión con el Cáliz' },
  { id: 's3', title: 'Misericordia mío, Dios mío', etapa: 'Liturgia', indice: 'Adviento' },
  { id: 's4', title: 'Día de reposo', etapa: 'Catecumenado', eucaristia: 'Paz' },
  { id: 's5', title: 'María, pequeña María', etapa: 'Elección', indice: 'Cantos a la Virgen', eucaristia: 'Final' },
  { id: 's6', title: 'Secuencia de Pascua', etapa: 'Elección', indice: 'Pascua/Pentecostés', eucaristia: 'Entrada' },
  { id: 's7', title: 'A ti levanto mi alma', etapa: 'Precatecumenado', indice: 'Adviento', eucaristia: 'Entrada' },
  { id: 's8', title: 'Bendeciré al Señor', etapa: 'Liturgia', eucaristia: 'Paz' },
  { id: 's9', title: 'Gloria a Dios en lo alto del cielo', indice: 'Navidad', eucaristia: 'Entrada' },
  { id: 's10', title: 'Cordero de Dios', eucaristia: 'Fracción del Pan' },
];

// --- Components ---

const Home = () => (
  <div className="min-h-[calc(100vh-96px)] flex flex-col items-center justify-center px-8 relative">
    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-teal-200/30 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-200/30 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '10s' }}></div>
    
    <div className="max-w-4xl text-center space-y-10 animate-fade-in relative z-10">
      <blockquote className="text-3xl md:text-5xl font-light text-teal-900 leading-snug tracking-tight">
        "No hagáis nada por ambición o vanagloria, sino con humildad, considerando a los demás superiores a uno mismo"
      </blockquote>
      <div className="flex flex-col items-center space-y-2">
        <div className="w-1 h-1 rounded-full bg-teal-400 mb-2"></div>
        <cite className="block text-teal-600/50 text-xs md:text-sm font-bold tracking-[0.5em] uppercase not-italic">
          Filipenses 2, 3
        </cite>
      </div>
    </div>
  </div>
);

const Instruments = () => (
  <div className="max-w-6xl mx-auto px-8 py-16 animate-fade-in">
    <div className="mb-10">
      <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-14 px-8 rounded-[2.5rem] transition-all shadow-xl shadow-teal-900/10 flex flex-col items-center justify-center space-y-3 group">
        <span className="text-3xl font-bold tracking-tight">Bases Musicales</span>
        <p className="text-teal-100 font-light text-xs tracking-[0.3em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">Acompañamientos para la oración</p>
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {INSTRUMENTS.map((inst) => (
        <div key={inst.id} className="relative h-64 w-full rounded-[2.5rem] overflow-hidden group shadow-md transition-all">
          <img src={inst.imageUrl} alt={inst.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
          <div className="absolute inset-0 bg-teal-950/50 group-hover:bg-teal-950/40 transition-colors"></div>
          <div className="absolute inset-0 p-10 flex flex-col justify-end">
            <h4 className="text-2xl font-bold text-white mb-2">{inst.name}</h4>
            <p className="text-teal-50/80 font-light text-sm line-clamp-2 leading-relaxed">{inst.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SheetMusic = () => {
  const [filter, setFilter] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [activeEtapa, setActiveEtapa] = useState('');
  const [activeIndice, setActiveIndice] = useState('');
  const [activeEucaristia, setActiveEucaristia] = useState('');

  const filtered = SALMOS.filter(s => {
    const matchesText = s.title.toLowerCase().includes(filter.toLowerCase());
    const matchesEtapa = activeEtapa === '' || s.etapa === activeEtapa;
    const matchesIndice = activeIndice === '' || s.indice === activeIndice;
    const matchesEucaristia = activeEucaristia === '' || s.eucaristia === activeEucaristia;
    return matchesText && matchesEtapa && matchesIndice && matchesEucaristia;
  });

  return (
    <div className="max-w-5xl mx-auto px-8 py-16 animate-fade-in">
      <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <h2 className="text-4xl font-bold text-teal-900 tracking-tight">Partituras</h2>
        <div className="flex items-center gap-3">
          <input 
            type="text" placeholder="Buscar salmo..." value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-white border border-teal-100 rounded-full py-2.5 px-6 text-teal-900 placeholder-teal-200 focus:ring-4 focus:ring-teal-500/5 outline-none transition-all w-64 text-sm"
          />
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className={`px-6 py-2.5 rounded-full border text-[10px] uppercase tracking-widest font-bold transition-all ${
              showFilters ? 'bg-teal-600 border-teal-600 text-white shadow-lg' : 'border-teal-200 text-teal-600 hover:bg-teal-50'
            }`}
          >
            {showFilters ? 'Ocultar' : 'Filtros'}
          </button>
        </div>
      </header>

      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 animate-fade-in bg-white/40 backdrop-blur-md p-8 rounded-[2rem] border border-white">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-teal-400 ml-2">Etapa</label>
            <select value={activeEtapa} onChange={(e) => setActiveEtapa(e.target.value)} className="w-full bg-white border border-teal-50 rounded-2xl py-3 px-4 text-sm text-teal-800 outline-none focus:border-teal-400 transition-colors shadow-sm">
              <option value="">Cualquier Etapa</option>
              {['Precatecumenado', 'Liturgia', 'Catecumenado', 'Elección'].map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-teal-400 ml-2">Índice Litúrgico</label>
            <select value={activeIndice} onChange={(e) => setActiveIndice(e.target.value)} className="w-full bg-white border border-teal-50 rounded-2xl py-3 px-4 text-sm text-teal-800 outline-none focus:border-teal-400 transition-colors shadow-sm">
              <option value="">Todo el Año</option>
              {['Adviento', 'Navidad', 'Pascua/Pentecostés', 'Cantos a la Virgen'].map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-teal-400 ml-2">Eucaristía</label>
            <select value={activeEucaristia} onChange={(e) => setActiveEucaristia(e.target.value)} className="w-full bg-white border border-teal-50 rounded-2xl py-3 px-4 text-sm text-teal-800 outline-none focus:border-teal-400 transition-colors shadow-sm">
              <option value="">Cualquier Momento</option>
              {['Entrada', 'Paz', 'Fracción del Pan', 'Comunión con el Cáliz', 'Final'].map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
        </div>
      )}

      <div className="bg-white rounded-[2.5rem] shadow-xl shadow-teal-900/5 border border-teal-50 overflow-hidden">
        {filtered.length > 0 ? (
          <div className="divide-y divide-teal-50">
            {filtered.map((s) => (
              <div key={s.id} className="group flex items-center justify-between py-8 px-10 hover:bg-teal-50/30 transition-all cursor-pointer">
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-teal-900 group-hover:text-teal-600 transition-colors tracking-tight">{s.title}</h4>
                  <div className="flex flex-wrap gap-2 items-center">
                    {s.etapa && <span className="text-[9px] text-teal-500 font-bold uppercase tracking-widest">{s.etapa}</span>}
                    {s.indice && <span className="text-[9px] text-teal-200 font-bold">• {s.indice}</span>}
                    {s.eucaristia && <span className="text-[9px] text-teal-200 font-bold">• {s.eucaristia}</span>}
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                   <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-32 text-center text-teal-200 font-bold tracking-[0.2em] uppercase">No hay resultados</div>
        )}
      </div>
    </div>
  );
};

const App = () => {
  const [view, setView] = useState<AppView>('home');

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="h-24 flex items-center sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-teal-50/50">
        <div className="max-w-7xl mx-auto w-full px-8 flex justify-between items-center">
          <div className="cursor-pointer group flex items-center space-x-4" onClick={() => setView('home')}>
            <div className="w-3 h-3 rounded-full bg-teal-500 group-hover:scale-125 transition-transform"></div>
            <span className="text-2xl font-bold tracking-[0.25em] uppercase text-teal-900">Kénosis</span>
          </div>
          <div className="flex space-x-10">
            <button onClick={() => setView('instruments')} className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all ${view === 'instruments' ? 'text-teal-600' : 'text-stone-400 hover:text-teal-500'}`}>Instrumentos</button>
            <button onClick={() => setView('sheets')} className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all ${view === 'sheets' ? 'text-teal-600' : 'text-stone-400 hover:text-teal-500'}`}>Partituras</button>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {view === 'home' && <Home />}
        {view === 'instruments' && <Instruments />}
        {view === 'sheets' && <SheetMusic />}
      </main>

      <footer className="py-12 border-t border-teal-50/50">
        <div className="max-w-7xl mx-auto px-8 flex flex-col items-center space-y-4">
          <div className="w-8 h-[1px] bg-teal-100"></div>
          <p className="text-[9px] uppercase tracking-[0.5em] text-teal-800 opacity-30 font-bold">Kénosis © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
