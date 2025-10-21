export type HeroRole = 'Tank' | 'Healer' | 'DPS';

export interface Hero {
  id: string;
  name: string;
  role: HeroRole;
  description: string;
  abilities: string[];
  tips: string[];
}

export interface Dungeon {
  id: string;
  name: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Very Hard';
  recommendedComposition: {
    tanks: number;
    healers: number;
    dps: number;
  };
  bosses: string[];
  tips: string[];
}

export interface GearSlot {
  slot: string;
  item: string;
  gemSlots: number;
  gems: Gem[];
}

export interface Gem {
  name: string;
  power: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
}

export interface PartyComposition {
  id: string;
  name: string;
  heroes: Hero[];
  targetDungeon?: string;
  notes: string;
}

