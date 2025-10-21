import { useState } from 'react';
import { Plus, X, Shield, Heart, Sword, Save, Trash2 } from 'lucide-react';
import { heroes } from '../data/heroes';
import { dungeons } from '../data/dungeons';
import { Hero, PartyComposition } from '../types';

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

function PartyPlanner() {
  const [selectedHeroes, setSelectedHeroes] = useState<Hero[]>([]);
  const [targetDungeon, setTargetDungeon] = useState<string>('');
  const [notes, setNotes] = useState('');
  const [savedCompositions, setSavedCompositions] = useState<PartyComposition[]>([]);

  const addHero = (hero: Hero) => {
    if (selectedHeroes.length < 5 && !selectedHeroes.find(h => h.id === hero.id)) {
      setSelectedHeroes([...selectedHeroes, hero]);
    }
  };

  const removeHero = (heroId: string) => {
    setSelectedHeroes(selectedHeroes.filter(h => h.id !== heroId));
  };

  const saveComposition = () => {
    if (selectedHeroes.length === 0) return;
    
    const newComp: PartyComposition = {
      id: Date.now().toString(),
      name: targetDungeon 
        ? dungeons.find(d => d.id === targetDungeon)?.name || 'Custom Party'
        : 'Custom Party',
      heroes: selectedHeroes,
      targetDungeon,
      notes,
    };
    
    setSavedCompositions([...savedCompositions, newComp]);
    setSelectedHeroes([]);
    setTargetDungeon('');
    setNotes('');
  };

  const loadComposition = (comp: PartyComposition) => {
    setSelectedHeroes(comp.heroes);
    setTargetDungeon(comp.targetDungeon || '');
    setNotes(comp.notes);
  };

  const deleteComposition = (id: string) => {
    setSavedCompositions(savedCompositions.filter(c => c.id !== id));
  };

  const roleCount = {
    Tank: selectedHeroes.filter(h => h.role === 'Tank').length,
    Healer: selectedHeroes.filter(h => h.role === 'Healer').length,
    DPS: selectedHeroes.filter(h => h.role === 'DPS').length,
  };

  const selectedDungeonData = dungeons.find(d => d.id === targetDungeon);
  const compositionValid = selectedDungeonData 
    ? roleCount.Tank === selectedDungeonData.recommendedComposition.tanks &&
      roleCount.Healer === selectedDungeonData.recommendedComposition.healers &&
      roleCount.DPS === selectedDungeonData.recommendedComposition.dps
    : selectedHeroes.length === 5;

  return (
    <div className="party-planner">
      <div className="content-header">
        <h2>Party Composition Planner</h2>
        <p className="header-subtitle">Build and save your ideal party compositions</p>
      </div>

      <div className="planner-layout">
        <div className="planner-main">
          <div className="section-card">
            <h3>Target Dungeon (Optional)</h3>
            <select 
              className="dungeon-select"
              value={targetDungeon}
              onChange={(e) => setTargetDungeon(e.target.value)}
            >
              <option value="">-- Select Dungeon --</option>
              {dungeons.map(dungeon => (
                <option key={dungeon.id} value={dungeon.id}>
                  {dungeon.name} ({dungeon.difficulty})
                </option>
              ))}
            </select>
            
            {selectedDungeonData && (
              <div className="recommended-comp">
                <p>Recommended:</p>
                <div className="comp-badges">
                  <span className="comp-badge tank">
                    <Shield size={14} /> {selectedDungeonData.recommendedComposition.tanks}
                  </span>
                  <span className="comp-badge healer">
                    <Heart size={14} /> {selectedDungeonData.recommendedComposition.healers}
                  </span>
                  <span className="comp-badge dps">
                    <Sword size={14} /> {selectedDungeonData.recommendedComposition.dps}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="section-card">
            <h3>Current Party ({selectedHeroes.length}/5)</h3>
            <div className="party-composition">
              <div className="role-summary">
                <span className="role-count tank">
                  <Shield size={16} /> {roleCount.Tank} Tank{roleCount.Tank !== 1 ? 's' : ''}
                </span>
                <span className="role-count healer">
                  <Heart size={16} /> {roleCount.Healer} Healer{roleCount.Healer !== 1 ? 's' : ''}
                </span>
                <span className="role-count dps">
                  <Sword size={16} /> {roleCount.DPS} DPS
                </span>
              </div>

              <div className="selected-heroes">
                {selectedHeroes.map(hero => {
                  const RoleIcon = roleIcons[hero.role];
                  return (
                    <div key={hero.id} className="selected-hero">
                      <div 
                        className="hero-role-icon small"
                        style={{ backgroundColor: roleColors[hero.role] }}
                      >
                        <RoleIcon size={16} />
                      </div>
                      <span className="hero-name">{hero.name}</span>
                      <button 
                        className="remove-btn"
                        onClick={() => removeHero(hero.id)}
                        title="Remove from party"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  );
                })}
                {selectedHeroes.length === 0 && (
                  <p className="empty-state">Select heroes from the list below to build your party</p>
                )}
              </div>

              {compositionValid && (
                <div className="valid-indicator">✓ Valid composition!</div>
              )}
            </div>
          </div>

          <div className="section-card">
            <h3>Notes</h3>
            <textarea
              className="notes-input"
              placeholder="Add strategy notes, ability rotations, or reminders..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
            />
          </div>

          <button 
            className="save-btn"
            onClick={saveComposition}
            disabled={selectedHeroes.length === 0}
          >
            <Save size={18} />
            Save Composition
          </button>

          <div className="section-card">
            <h3>Available Heroes</h3>
            <div className="hero-grid">
              {heroes.map(hero => {
                const RoleIcon = roleIcons[hero.role];
                const isSelected = selectedHeroes.find(h => h.id === hero.id);
                const canAdd = selectedHeroes.length < 5;
                
                return (
                  <button
                    key={hero.id}
                    className={`hero-option ${isSelected ? 'selected' : ''} ${!canAdd && !isSelected ? 'disabled' : ''}`}
                    onClick={() => addHero(hero)}
                    disabled={!!isSelected || !canAdd}
                  >
                    <div 
                      className="hero-role-icon small"
                      style={{ backgroundColor: roleColors[hero.role] }}
                    >
                      <RoleIcon size={16} />
                    </div>
                    <span>{hero.name}</span>
                    {!isSelected && canAdd && <Plus size={16} className="add-icon" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="saved-compositions">
          <h3>Saved Compositions</h3>
          {savedCompositions.length === 0 ? (
            <p className="empty-state">No saved compositions yet</p>
          ) : (
            <div className="saved-list">
              {savedCompositions.map(comp => (
                <div key={comp.id} className="saved-comp-card">
                  <div className="saved-comp-header">
                    <h4>{comp.name}</h4>
                    <div className="saved-comp-actions">
                      <button 
                        className="icon-btn"
                        onClick={() => loadComposition(comp)}
                        title="Load composition"
                      >
                        Load
                      </button>
                      <button 
                        className="icon-btn danger"
                        onClick={() => deleteComposition(comp.id)}
                        title="Delete composition"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="saved-comp-heroes">
                    {comp.heroes.map(hero => {
                      const RoleIcon = roleIcons[hero.role];
                      return (
                        <div key={hero.id} className="saved-hero">
                          <div 
                            className="hero-role-icon mini"
                            style={{ backgroundColor: roleColors[hero.role] }}
                          >
                            <RoleIcon size={12} />
                          </div>
                          <span>{hero.name}</span>
                        </div>
                      );
                    })}
                  </div>
                  {comp.notes && (
                    <p className="saved-comp-notes">{comp.notes}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PartyPlanner;

