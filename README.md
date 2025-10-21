# Fellowship Rotation Assistant

[![Deploy to GitHub Pages](https://github.com/LemonIsAHe1/Fellowshift/actions/workflows/deploy.yml/badge.svg)](https://github.com/LemonIsAHe1/Fellowshift/actions/workflows/deploy.yml)

🎮 **[Launch App](https://lemonisahe1.github.io/Fellowshift/)** | 📚 [Game Guide](https://www.method.gg/fellowship)

A comprehensive companion app for Fellowship - the dungeon-crawling RPG. This tool helps players plan party compositions, track heroes, explore dungeon strategies, and manage their gear and gems.

## Features

### 🛡️ Hero Roster
- Browse all 9 playable heroes (Helena, Meiko, Sylvie, Vigour, Ardeos, Elarion, Mara, Rime, Tariq)
- Filter by role (Tank, Healer, DPS)
- View hero abilities and gameplay tips
- Links to detailed guides on [Method.gg](https://www.method.gg/fellowship)

### 🗺️ Dungeon Guides
- Complete information on all 12 dungeons
- Difficulty ratings from Easy to Very Hard
- Recommended party compositions for each dungeon
- Boss encounter lists
- Strategy tips and mechanics guidance
- Quick reference for:
  - Empyrean Sands
  - Everdawn Grove
  - Urrak Markets
  - Cithrel's Fall
  - Silken Hollow
  - Sailor's Abyss
  - Wraithtide Vault
  - Ransack of Drakheim
  - Godfall Quarry
  - Stormwatch
  - The Heart of Tuzari
  - Wyrmheart

### 📋 Party Composition Planner
- Build custom 5-player party compositions
- Visual role indicators (Tank/Healer/DPS)
- Optional dungeon targeting with composition validation
- Add strategy notes for each composition
- Save and load multiple party setups
- Real-time composition validation against dungeon requirements

### 💎 Gear & Gem Tracker
- Track all 16 gear slots
- Record item levels for average iLvl calculation
- Manage gem sockets (up to 3 per item)
- Track 8 different gem types:
  - Ruby - Increased Damage
  - Sapphire - Increased Defense
  - Emerald - Increased Healing
  - Topaz - Increased Speed
  - Diamond - All Stats
  - Onyx - Critical Chance
  - Amethyst - Ability Power
  - Aquamarine - Mana Regeneration
- Links to official gem and gear upgrade guides

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library
- **CSS3** - Styling with modern gradients and animations

## Game Information

All game data and strategies are based on information from [Method.gg's Fellowship Hub](https://www.method.gg/fellowship).

## Features in Detail

### Party Planner Usage
1. Optionally select a target dungeon to see recommended composition
2. Add heroes to your party (max 5)
3. System validates composition against dungeon requirements
4. Add custom notes for strategy and rotation planning
5. Save compositions for future reference

### Gear Tracker Usage
1. Click "Add Item" on any gear slot
2. Enter item name and level
3. Select number of gem sockets (0-3)
4. Choose gems for each socket
5. Track your average item level and total gems

## Contributing

Contributions are welcome! Feel free to:
- Report bugs or issues
- Suggest new features
- Submit pull requests
- Share feedback

## Deployment

The app is automatically deployed to GitHub Pages on every push to main. See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed setup instructions.

## Repository

- **GitHub**: https://github.com/LemonIsAHe1/Fellowshift
- **Live App**: https://lemonisahe1.github.io/Fellowshift/

## License

This is a fan-made tool for Fellowship and is not officially affiliated with the game developers.

---

Made with ❤️ for the Fellowship community

---

**Quick Links:**
- [Fellowship on Method.gg](https://www.method.gg/fellowship)
- [Hero Guides](https://www.method.gg/fellowship/hero-guides)
- [Dungeon Guides](https://www.method.gg/fellowship/dungeon-guides)
- [Gems Guide](https://www.method.gg/fellowship/gems-in-fellowship-how-they-work-how-to-get-them-all-gem-powers)
- [Gear Upgrade Guide](https://www.method.gg/fellowship/how-to-upgrade-reforge-scrap-your-gear-in-fellowship)

