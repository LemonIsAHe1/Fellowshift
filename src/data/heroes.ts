import { Hero } from '../types';

export const heroes: Hero[] = [
  {
    id: 'helena',
    name: 'Helena',
    role: 'Tank',
    description: 'A stalwart defender who protects the party with shield and courage.',
    abilities: ['Shield Wall', 'Taunt', 'Guardian Strike', 'Protective Barrier'],
    tips: [
      'Use Shield Wall to mitigate large incoming damage',
      'Maintain aggro on priority targets',
      'Save defensive cooldowns for boss mechanics'
    ]
  },
  {
    id: 'meiko',
    name: 'Meiko',
    role: 'Tank',
    description: 'An agile tank who uses mobility and counterattacks to control enemies.',
    abilities: ['Evasive Roll', 'Counter Strike', 'Challenge', 'Fortify'],
    tips: [
      'Use mobility to reposition and gather adds',
      'Counter Strike provides both damage and mitigation',
      'Good for high-movement fights'
    ]
  },
  {
    id: 'sylvie',
    name: 'Sylvie',
    role: 'Healer',
    description: 'A divine healer who mends wounds with holy magic and protective spells.',
    abilities: ['Holy Light', 'Mass Heal', 'Divine Shield', 'Resurrection'],
    tips: [
      'Use Mass Heal for group-wide damage',
      'Divine Shield can save allies from fatal blows',
      'Keep HoTs running on the tank'
    ]
  },
  {
    id: 'vigour',
    name: 'Vigour',
    role: 'Healer',
    description: 'A nature-focused healer who uses restoration magic and heal-over-time effects.',
    abilities: ['Rejuvenation', 'Wild Growth', 'Nature\'s Swiftness', 'Tranquility'],
    tips: [
      'Excel at sustained healing with HoTs',
      'Pre-cast rejuvenation before damage spikes',
      'Tranquility is powerful for emergency healing'
    ]
  },
  {
    id: 'ardeos',
    name: 'Ardeos',
    role: 'DPS',
    description: 'A fierce warrior who deals devastating melee damage with two-handed weapons.',
    abilities: ['Mortal Strike', 'Whirlwind', 'Execute', 'Bladestorm'],
    tips: [
      'Use Execute on low-health enemies',
      'Whirlwind excels in AoE situations',
      'Build rage for powerful finishing moves'
    ]
  },
  {
    id: 'elarion',
    name: 'Elarion',
    role: 'DPS',
    description: 'An arcane mage who unleashes powerful spells from range.',
    abilities: ['Arcane Blast', 'Arcane Missiles', 'Arcane Barrage', 'Time Warp'],
    tips: [
      'Manage mana carefully during long fights',
      'Use Time Warp on priority burn phases',
      'Position carefully to maximize cast time'
    ]
  },
  {
    id: 'mara',
    name: 'Mara',
    role: 'DPS',
    description: 'A deadly assassin who strikes from the shadows with precision.',
    abilities: ['Backstab', 'Shadowstep', 'Eviscerate', 'Stealth'],
    tips: [
      'Use Stealth to avoid trash or reposition',
      'Build combo points for Eviscerate finishers',
      'Attack from behind for bonus damage'
    ]
  },
  {
    id: 'rime',
    name: 'Rime',
    role: 'DPS',
    description: 'A frost mage who controls the battlefield with ice and cold.',
    abilities: ['Frostbolt', 'Frozen Orb', 'Ice Nova', 'Blizzard'],
    tips: [
      'Use crowd control to slow dangerous enemies',
      'Blizzard excels in AoE situations',
      'Frozen Orb provides strong sustained damage'
    ]
  },
  {
    id: 'tariq',
    name: 'Tariq',
    role: 'DPS',
    description: 'A marksman who deals precise ranged damage with bow and arrow.',
    abilities: ['Aimed Shot', 'Multi-Shot', 'Rapid Fire', 'Hunter\'s Mark'],
    tips: [
      'Use Hunter\'s Mark on priority targets',
      'Multi-Shot for groups of enemies',
      'Maintain range for maximum effectiveness'
    ]
  }
];

