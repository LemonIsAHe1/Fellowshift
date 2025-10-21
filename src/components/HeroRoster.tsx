import { useState } from 'react';
import { Shield, Heart, Sword, Filter } from 'lucide-react';
import { heroes } from '../data/heroes';
import { HeroRole } from '../types';

const roleIcons = {
  Tank: Shield,
  Healer: Heart,
  DPS: Sword,
};

const roleColors = {
  Tank: '#3b82f6',
  Healer: '#10b981',
  DPS: '#ef4444',
};

function HeroRoster() {
  const [selectedRole, setSelectedRole] = useState<HeroRole | 'All'>('All');
  const [selectedHero, setSelectedHero] = useState(heroes[0]);

  const filteredHeroes = selectedRole === 'All' 
    ? heroes 
    : heroes.filter(h => h.role === selectedRole);

  return (
    <div className="hero-roster">
      <div className="content-header">
        <h2>Hero Roster</h2>
        <div className="filter-group">
          <Filter size={18} />
          <button
            className={`filter-btn ${selectedRole === 'All' ? 'active' : ''}`}
            onClick={() => setSelectedRole('All')}
          >
            All
          </button>
          <button
            className={`filter-btn ${selectedRole === 'Tank' ? 'active' : ''}`}
            onClick={() => setSelectedRole('Tank')}
            style={{ '--role-color': roleColors.Tank } as any}
          >
            <Shield size={16} /> Tank
          </button>
          <button
            className={`filter-btn ${selectedRole === 'Healer' ? 'active' : ''}`}
            onClick={() => setSelectedRole('Healer')}
            style={{ '--role-color': roleColors.Healer } as any}
          >
            <Heart size={16} /> Healer
          </button>
          <button
            className={`filter-btn ${selectedRole === 'DPS' ? 'active' : ''}`}
            onClick={() => setSelectedRole('DPS')}
            style={{ '--role-color': roleColors.DPS } as any}
          >
            <Sword size={16} /> DPS
          </button>
        </div>
      </div>

      <div className="roster-layout">
        <div className="hero-list">
          {filteredHeroes.map(hero => {
            const RoleIcon = roleIcons[hero.role];
            return (
              <button
                key={hero.id}
                className={`hero-card ${selectedHero.id === hero.id ? 'selected' : ''}`}
                onClick={() => setSelectedHero(hero)}
              >
                <div className="hero-card-header">
                  <div 
                    className="hero-role-icon"
                    style={{ backgroundColor: roleColors[hero.role] }}
                  >
                    <RoleIcon size={20} />
                  </div>
                  <div>
                    <h3 className="hero-name">{hero.name}</h3>
                    <span className="hero-role" style={{ color: roleColors[hero.role] }}>
                      {hero.role}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="hero-details">
          <div className="hero-details-header">
            <div 
              className="hero-role-icon large"
              style={{ backgroundColor: roleColors[selectedHero.role] }}
            >
              {(() => {
                const Icon = roleIcons[selectedHero.role];
                return <Icon size={32} />;
              })()}
            </div>
            <div>
              <h2>{selectedHero.name}</h2>
              <span 
                className="hero-role large"
                style={{ color: roleColors[selectedHero.role] }}
              >
                {selectedHero.role}
              </span>
            </div>
          </div>

          <p className="hero-description">{selectedHero.description}</p>

          <div className="hero-section">
            <h3>Key Abilities</h3>
            <ul className="ability-list">
              {selectedHero.abilities.map((ability, idx) => (
                <li key={idx} className="ability-item">{ability}</li>
              ))}
            </ul>
          </div>

          <div className="hero-section">
            <h3>Tips & Strategy</h3>
            <ul className="tips-list">
              {selectedHero.tips.map((tip, idx) => (
                <li key={idx} className="tip-item">{tip}</li>
              ))}
            </ul>
          </div>

          <a 
            href={`https://www.method.gg/fellowship/${selectedHero.name.toLowerCase()}-guide`}
            target="_blank"
            rel="noopener noreferrer"
            className="guide-link"
          >
            View Full Guide on Method.gg →
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroRoster;

