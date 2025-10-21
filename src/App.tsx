import { useState } from 'react';
import { Shield, Users, Map, Gem, BookOpen } from 'lucide-react';
import HeroRoster from './components/HeroRoster';
import DungeonGuide from './components/DungeonGuide';
import PartyPlanner from './components/PartyPlanner';
import GearTracker from './components/GearTracker';
import './App.css';

type Tab = 'heroes' | 'dungeons' | 'party' | 'gear';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('heroes');

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="title">
            <Shield className="title-icon" />
            Fellowship Rotation Assistant
          </h1>
          <p className="subtitle">Your companion for mastering dungeons and heroes</p>
        </div>
      </header>

      <nav className="nav">
        <button
          className={`nav-btn ${activeTab === 'heroes' ? 'active' : ''}`}
          onClick={() => setActiveTab('heroes')}
        >
          <Users size={20} />
          <span>Heroes</span>
        </button>
        <button
          className={`nav-btn ${activeTab === 'dungeons' ? 'active' : ''}`}
          onClick={() => setActiveTab('dungeons')}
        >
          <Map size={20} />
          <span>Dungeons</span>
        </button>
        <button
          className={`nav-btn ${activeTab === 'party' ? 'active' : ''}`}
          onClick={() => setActiveTab('party')}
        >
          <BookOpen size={20} />
          <span>Party Planner</span>
        </button>
        <button
          className={`nav-btn ${activeTab === 'gear' ? 'active' : ''}`}
          onClick={() => setActiveTab('gear')}
        >
          <Gem size={20} />
          <span>Gear Tracker</span>
        </button>
      </nav>

      <main className="main">
        {activeTab === 'heroes' && <HeroRoster />}
        {activeTab === 'dungeons' && <DungeonGuide />}
        {activeTab === 'party' && <PartyPlanner />}
        {activeTab === 'gear' && <GearTracker />}
      </main>

      <footer className="footer">
        <p>
          Game information from{' '}
          <a href="https://www.method.gg/fellowship" target="_blank" rel="noopener noreferrer">
            Method.gg
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;

