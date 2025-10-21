import { useState } from 'react';
import { Map, Shield, Heart, Sword, AlertCircle } from 'lucide-react';
import { dungeons } from '../data/dungeons';

const difficultyColors = {
  'Easy': '#10b981',
  'Medium': '#f59e0b',
  'Hard': '#ef4444',
  'Very Hard': '#dc2626',
};

function DungeonGuide() {
  const [selectedDungeon, setSelectedDungeon] = useState(dungeons[0]);

  return (
    <div className="dungeon-guide">
      <div className="content-header">
        <h2>Dungeon Guides</h2>
        <p className="header-subtitle">Strategies and tips for all 12 dungeons</p>
      </div>

      <div className="dungeon-layout">
        <div className="dungeon-list">
          {dungeons.map(dungeon => (
            <button
              key={dungeon.id}
              className={`dungeon-card ${selectedDungeon.id === dungeon.id ? 'selected' : ''}`}
              onClick={() => setSelectedDungeon(dungeon)}
            >
              <div className="dungeon-card-header">
                <Map size={20} />
                <h3 className="dungeon-name">{dungeon.name}</h3>
              </div>
              <span 
                className="difficulty-badge"
                style={{ backgroundColor: difficultyColors[dungeon.difficulty] }}
              >
                {dungeon.difficulty}
              </span>
            </button>
          ))}
        </div>

        <div className="dungeon-details">
          <div className="dungeon-details-header">
            <Map size={32} />
            <div>
              <h2>{selectedDungeon.name}</h2>
              <span 
                className="difficulty-badge large"
                style={{ backgroundColor: difficultyColors[selectedDungeon.difficulty] }}
              >
                {selectedDungeon.difficulty}
              </span>
            </div>
          </div>

          <div className="dungeon-section">
            <h3>Recommended Composition</h3>
            <div className="composition-display">
              <div className="comp-item">
                <Shield size={20} style={{ color: '#3b82f6' }} />
                <span>{selectedDungeon.recommendedComposition.tanks} Tank{selectedDungeon.recommendedComposition.tanks > 1 ? 's' : ''}</span>
              </div>
              <div className="comp-item">
                <Heart size={20} style={{ color: '#10b981' }} />
                <span>{selectedDungeon.recommendedComposition.healers} Healer{selectedDungeon.recommendedComposition.healers > 1 ? 's' : ''}</span>
              </div>
              <div className="comp-item">
                <Sword size={20} style={{ color: '#ef4444' }} />
                <span>{selectedDungeon.recommendedComposition.dps} DPS</span>
              </div>
            </div>
          </div>

          <div className="dungeon-section">
            <h3>Boss Encounters</h3>
            <ol className="boss-list">
              {selectedDungeon.bosses.map((boss, idx) => (
                <li key={idx} className="boss-item">
                  <span className="boss-number">{idx + 1}</span>
                  <span className="boss-name">{boss}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="dungeon-section">
            <h3>
              <AlertCircle size={20} />
              Strategy & Tips
            </h3>
            <ul className="tips-list">
              {selectedDungeon.tips.map((tip, idx) => (
                <li key={idx} className="tip-item">{tip}</li>
              ))}
            </ul>
          </div>

          <a 
            href={`https://www.method.gg/fellowship/dungeon-guides`}
            target="_blank"
            rel="noopener noreferrer"
            className="guide-link"
          >
            View Full Dungeon Guides on Method.gg →
          </a>
        </div>
      </div>
    </div>
  );
}

export default DungeonGuide;

