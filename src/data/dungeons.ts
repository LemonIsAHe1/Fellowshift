import { Dungeon } from '../types';

export const dungeons: Dungeon[] = [
  {
    id: 'cithrels-fall',
    name: "Cithrel's Fall",
    difficulty: 'Medium',
    recommendedComposition: { tanks: 1, healers: 1, dps: 3 },
    bosses: ['Ancient Guardian', 'Corrupted Spirit', 'Cithrel the Fallen'],
    tips: [
      'Watch for ground AoE effects',
      'Interrupt corrupted spirit casts',
      'Final boss requires tank swap mechanic'
    ]
  },
  {
    id: 'ransack-of-drakheim',
    name: 'Ransack of Drakheim',
    difficulty: 'Hard',
    recommendedComposition: { tanks: 1, healers: 1, dps: 3 },
    bosses: ['Dragonkin Raider', 'Drake Overlord', 'Drakheim Warlord'],
    tips: [
      'Bring AoE for trash packs',
      'Dispel fire debuffs quickly',
      'Save cooldowns for final boss burn phase'
    ]
  },
  {
    id: 'heart-of-tuzari',
    name: 'The Heart of Tuzari',
    difficulty: 'Very Hard',
    recommendedComposition: { tanks: 1, healers: 1, dps: 3 },
    bosses: ['Desert Sentinel', 'Sand Elemental', 'Heart of Tuzari'],
    tips: [
      'Sandstorms require tight grouping',
      'Use defensive cooldowns on sand blast',
      'Avoid standing in quicksand zones'
    ]
  },
  {
    id: 'wraithtide-vault',
    name: 'Wraithtide Vault',
    difficulty: 'Medium',
    recommendedComposition: { tanks: 1, healers: 1, dps: 3 },
    bosses: ['Vault Guardian', 'Spectral Warden', 'The Wraithlord'],
    tips: [
      'Holy damage is effective against undead',
      'Watch for fear mechanics',
      'Tank positioning is crucial for breath attacks'
    ]
  },
  {
    id: 'empyrean-sands',
    name: 'Empyrean Sands',
    difficulty: 'Easy',
    recommendedComposition: { tanks: 1, healers: 1, dps: 3 },
    bosses: ['Sun Priest', 'Mirage Assassin', 'Empyrean Phoenix'],
    tips: [
      'Great starter dungeon for new players',
      'Watch for mirages during second boss',
      'Phoenix requires interrupts on heal cast'
    ]
  },
  {
    id: 'everdawn-grove',
    name: 'Everdawn Grove',
    difficulty: 'Easy',
    recommendedComposition: { tanks: 1, healers: 1, dps: 3 },
    bosses: ['Treant Elder', 'Fae Trickster', 'The Eternal Oak'],
    tips: [
      'Nature damage is strong here',
      'Dodge trickster illusions',
      'Final boss roots players periodically'
    ]
  },
  {
    id: 'godfall-quarry',
    name: 'Godfall Quarry',
    difficulty: 'Hard',
    recommendedComposition: { tanks: 1, healers: 1, dps: 3 },
    bosses: ['Stone Colossus', 'Crystal Golem', 'Earthshaker Titan'],
    tips: [
      'High physical damage - bring mitigation',
      'Break crystal shields on golem',
      'Titan earthquake requires movement'
    ]
  },
  {
    id: 'sailors-abyss',
    name: "Sailor's Abyss",
    difficulty: 'Medium',
    recommendedComposition: { tanks: 1, healers: 1, dps: 3 },
    bosses: ['Captain Blacktide', 'Kraken Spawn', 'The Drowned One'],
    tips: [
      'Underwater sections require breath management',
      'Kill tentacles during Kraken fight',
      'Avoid whirlpools in final encounter'
    ]
  },
  {
    id: 'silken-hollow',
    name: 'Silken Hollow',
    difficulty: 'Medium',
    recommendedComposition: { tanks: 1, healers: 1, dps: 3 },
    bosses: ['Spider Matriarch', 'Web Weaver', 'Queen Arachnia'],
    tips: [
      'Clear web cocoons to free trapped allies',
      'Watch for poison DoT effects',
      'AoE helpful for spider adds'
    ]
  },
  {
    id: 'stormwatch',
    name: 'Stormwatch',
    difficulty: 'Hard',
    recommendedComposition: { tanks: 1, healers: 1, dps: 3 },
    bosses: ['Tempest Herald', 'Lightning Wyrm', 'Storm King'],
    tips: [
      'Spread out for lightning mechanics',
      'Ground effects deal heavy damage',
      'Use heroism on storm king phase 2'
    ]
  },
  {
    id: 'urrak-markets',
    name: 'Urrak Markets',
    difficulty: 'Easy',
    recommendedComposition: { tanks: 1, healers: 1, dps: 3 },
    bosses: ['Merchant Lord', 'Coin Golem', 'Market Overlord'],
    tips: [
      'Good for farming gold and gear',
      'Watch for charm effects from merchant',
      'Destroy gold piles to reduce golem power'
    ]
  },
  {
    id: 'wyrmheart',
    name: 'Wyrmheart',
    difficulty: 'Very Hard',
    recommendedComposition: { tanks: 1, healers: 1, dps: 3 },
    bosses: ['Drake Guardian', 'Wyrmkin Sorcerer', 'Ancient Wyrm'],
    tips: [
      'Endgame dungeon with high gear requirements',
      'Master all mechanics before attempting',
      'Coordinate cooldowns for final boss phases',
      'Dragon breath requires tank positioning'
    ]
  }
];

