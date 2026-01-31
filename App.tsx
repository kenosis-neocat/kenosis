
import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Instruments from './pages/Instruments';
import SheetMusic from './pages/SheetMusic';
import { AppView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('home');

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <Home />;
      case 'instruments':
        return <Instruments />;
      case 'sheets':
        return <SheetMusic />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout currentView={currentView} onViewChange={setCurrentView}>
      {renderContent()}
    </Layout>
  );
};

export default App;
