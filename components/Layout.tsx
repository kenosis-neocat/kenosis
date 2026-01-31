
import React from 'react';
import { AppView } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentView: AppView;
  onViewChange: (view: AppView) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, onViewChange }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="h-24 flex items-center bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto w-full px-8 flex justify-between items-center">
          {/* Logo Section */}
          <div 
            className="cursor-pointer group flex items-center space-x-3" 
            onClick={() => onViewChange('home')}
          >
            <div className="w-3 h-3 rounded-full bg-teal-500 shadow-sm animate-pulse"></div>
            <span className="text-2xl font-bold tracking-[0.2em] uppercase text-teal-900">Kénosis</span>
          </div>

          {/* Menu Items */}
          <div className="flex space-x-8 md:space-x-12">
            <button 
              onClick={() => onViewChange('instruments')}
              className={`text-[11px] uppercase tracking-[0.25em] font-bold transition-all duration-300 ${
                currentView === 'instruments' ? 'text-teal-600 scale-105' : 'text-stone-400 hover:text-teal-500'
              }`}
            >
              Instrumentos
            </button>
            <button 
              onClick={() => onViewChange('sheets')}
              className={`text-[11px] uppercase tracking-[0.25em] font-bold transition-all duration-300 ${
                currentView === 'sheets' ? 'text-teal-600 scale-105' : 'text-stone-400 hover:text-teal-500'
              }`}
            >
              Partituras
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Simplified Footer */}
      <footer className="py-12 border-t border-teal-50/50">
        <div className="max-w-7xl mx-auto px-8 flex justify-center items-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-teal-800 opacity-40 font-bold">
            © {new Date().getFullYear()} Kénosis
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
