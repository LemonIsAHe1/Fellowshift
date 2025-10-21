import { useState } from 'react';
import { Gem, Info, ExternalLink } from 'lucide-react';

interface TrackedGear {
  slot: string;
  item: string;
  level: number;
  gemSlots: number;
  gems: string[];
}

const gearSlots = [
  'Head', 'Neck', 'Shoulders', 'Back', 'Chest',
  'Wrist', 'Hands', 'Waist', 'Legs', 'Feet',
  'Ring 1', 'Ring 2', 'Trinket 1', 'Trinket 2', 'Weapon', 'Off-hand'
];

const gemTypes = [
  'Ruby - Increased Damage',
  'Sapphire - Increased Defense',
  'Emerald - Increased Healing',
  'Topaz - Increased Speed',
  'Diamond - All Stats',
  'Onyx - Critical Chance',
  'Amethyst - Ability Power',
  'Aquamarine - Mana Regeneration'
];

function GearTracker() {
  const [gear, setGear] = useState<TrackedGear[]>([]);
  const [editingSlot, setEditingSlot] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    item: '',
    level: 1,
    gemSlots: 0,
    gems: [] as string[]
  });

  const addOrUpdateGear = (slot: string) => {
    const newGear = gear.filter(g => g.slot !== slot);
    newGear.push({
      slot,
      ...formData
    });
    setGear(newGear.sort((a, b) => 
      gearSlots.indexOf(a.slot) - gearSlots.indexOf(b.slot)
    ));
    setEditingSlot(null);
    setFormData({ item: '', level: 1, gemSlots: 0, gems: [] });
  };

  const startEdit = (slot: string) => {
    const existing = gear.find(g => g.slot === slot);
    if (existing) {
      setFormData({
        item: existing.item,
        level: existing.level,
        gemSlots: existing.gemSlots,
        gems: existing.gems
      });
    }
    setEditingSlot(slot);
  };

  const removeGear = (slot: string) => {
    setGear(gear.filter(g => g.slot !== slot));
  };

  const averageItemLevel = gear.length > 0
    ? Math.round(gear.reduce((sum, g) => sum + g.level, 0) / gear.length)
    : 0;

  const totalGems = gear.reduce((sum, g) => sum + g.gems.length, 0);

  return (
    <div className="gear-tracker">
      <div className="content-header">
        <h2>Gear & Gem Tracker</h2>
        <p className="header-subtitle">Track your equipment and gem socketing</p>
      </div>

      <div className="gear-stats">
        <div className="stat-card">
          <div className="stat-value">{gear.length}/{gearSlots.length}</div>
          <div className="stat-label">Slots Filled</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{averageItemLevel}</div>
          <div className="stat-label">Avg Item Level</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{totalGems}</div>
          <div className="stat-label">Gems Socketed</div>
        </div>
      </div>

      <div className="gear-info-banner">
        <Info size={18} />
        <div>
          <p>Learn more about the gear system, upgrades, reforging, and gem powers:</p>
          <a 
            href="https://www.method.gg/fellowship/gems-in-fellowship-how-they-work-how-to-get-them-all-gem-powers"
            target="_blank"
            rel="noopener noreferrer"
            className="info-link"
          >
            Gems Guide <ExternalLink size={14} />
          </a>
          {' | '}
          <a 
            href="https://www.method.gg/fellowship/how-to-upgrade-reforge-scrap-your-gear-in-fellowship"
            target="_blank"
            rel="noopener noreferrer"
            className="info-link"
          >
            Gear Upgrade Guide <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <div className="gear-grid">
        {gearSlots.map(slot => {
          const equipped = gear.find(g => g.slot === slot);
          const isEditing = editingSlot === slot;

          return (
            <div key={slot} className="gear-slot-card">
              <div className="gear-slot-header">
                <h4>{slot}</h4>
                {equipped && !isEditing && (
                  <div className="gear-slot-actions">
                    <button 
                      className="icon-btn"
                      onClick={() => startEdit(slot)}
                    >
                      Edit
                    </button>
                    <button 
                      className="icon-btn danger"
                      onClick={() => removeGear(slot)}
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>

              {!equipped && !isEditing && (
                <button 
                  className="add-gear-btn"
                  onClick={() => setEditingSlot(slot)}
                >
                  + Add Item
                </button>
              )}

              {equipped && !isEditing && (
                <div className="gear-info">
                  <p className="gear-item-name">{equipped.item}</p>
                  <p className="gear-level">Item Level: {equipped.level}</p>
                  {equipped.gems.length > 0 && (
                    <div className="gem-list">
                      <Gem size={14} />
                      <div className="gem-items">
                        {equipped.gems.map((gem, idx) => (
                          <span key={idx} className="gem-badge">{gem.split(' - ')[0]}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {isEditing && (
                <div className="gear-form">
                  <input
                    type="text"
                    placeholder="Item name"
                    value={formData.item}
                    onChange={(e) => setFormData({...formData, item: e.target.value})}
                    className="gear-input"
                  />
                  <input
                    type="number"
                    placeholder="Item level"
                    min="1"
                    max="999"
                    value={formData.level}
                    onChange={(e) => setFormData({...formData, level: parseInt(e.target.value) || 1})}
                    className="gear-input"
                  />
                  <select
                    value={formData.gemSlots}
                    onChange={(e) => {
                      const slots = parseInt(e.target.value);
                      setFormData({
                        ...formData, 
                        gemSlots: slots,
                        gems: formData.gems.slice(0, slots)
                      });
                    }}
                    className="gear-input"
                  >
                    <option value="0">No gem slots</option>
                    <option value="1">1 gem slot</option>
                    <option value="2">2 gem slots</option>
                    <option value="3">3 gem slots</option>
                  </select>

                  {formData.gemSlots > 0 && (
                    <div className="gem-selectors">
                      {Array.from({ length: formData.gemSlots }).map((_, idx) => (
                        <select
                          key={idx}
                          value={formData.gems[idx] || ''}
                          onChange={(e) => {
                            const newGems = [...formData.gems];
                            newGems[idx] = e.target.value;
                            setFormData({...formData, gems: newGems});
                          }}
                          className="gear-input small"
                        >
                          <option value="">Socket {idx + 1}: Empty</option>
                          {gemTypes.map(gem => (
                            <option key={gem} value={gem}>{gem}</option>
                          ))}
                        </select>
                      ))}
                    </div>
                  )}

                  <div className="form-actions">
                    <button 
                      className="save-btn small"
                      onClick={() => addOrUpdateGear(slot)}
                      disabled={!formData.item}
                    >
                      Save
                    </button>
                    <button 
                      className="cancel-btn"
                      onClick={() => {
                        setEditingSlot(null);
                        setFormData({ item: '', level: 1, gemSlots: 0, gems: [] });
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GearTracker;

