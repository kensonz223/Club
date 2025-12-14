import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';
import { Home } from './pages/Home';
import { Facilities } from './pages/Facilities';
import { Services } from './pages/Services';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-gray-900">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </HashRouter>
  );
};

export default App;
