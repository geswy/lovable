
// Import game backgrounds
import fifaBg from '@/assets/fifa-bg.jpg';
import fortniteBg from '@/assets/fortnite-bg.jpg';
import codBg from '@/assets/cod-bg.jpg';
import rocketLeagueBg from '@/assets/rocket-league-bg.jpg';
import FREEFIRE from '@/assets/FF.jpg';
import clashofclans from '@/assets/coc.jpg';
import valo from '@/assets/valo.png';
import pes from '@/assets/pes.png';
import mc from '@/assets/mc.jpg';
import rx from '@/assets/rx.jpg';
// Import icons



// fifa
import fifaCoinImg from '@/assets/fccoin.png'; 
import fifaPointsImg from '@/assets/fcpoint.png'; 
import playerCardImg from '@/assets/fccard.png';
// rl
import rlc from '@/assets/rlc.png'; 
import rlb from '@/assets/rlb.png'; 
import rlt from '@/assets/rlt.png';
// cod
import codp from '@/assets/codp.png'; 
import codbp from '@/assets/codbp.png'; 
import codxp from '@/assets/codxp.png';
//fn
import fnv from '@/assets/fnv.png'; 
import fnstar from '@/assets/fnstar.png'; 
import fncm from '@/assets/fncm.png';



const gameData = {
  Roblox: {
    title: "Roblox",
    subtitle: "Ultimate Team Economy",
    image: rx,
    description:
      "FIFA Ultimate Team features one of the most complex in-game economies in sports gaming, with multiple currency types and marketplace dynamics.",
    coins: [
      {
        name: "FUT Coins",
        icon: fifaCoinImg,
        label: "Most Popular",
        price: "$12.99",
        quickPrice: "Complete at least 3 offers to claim the offer",
        quickLabel: "514,000",
        description:
          "Primary currency for player transfers and packs",
        options: [
          { name: "Galaxy", price: "$12.99" },
          { name: "Renega", price: "$15.99" },
          { name: "Travis", price: "$19.99" },
        ],
      },
      {
        name: "FIFA Points",
        icon: fifaPointsImg,
        label: "Most Popular",
        price: "$2",
        quickPrice: "Complete at least 3 offers to claim the offer",
        quickLabel: "514,000",
        description: "Premium currency for special packs",
        options: [
          { name: "Galaxy", price: "$12.99" },
          { name: "Renega", price: "$15.99" },
          { name: "Travis", price: "$19.99" },
        ],
      },
      {
        name: "Player Cards",
        icon: playerCardImg,
        label: "Most Popular",
        price: "$3",
        quickPrice: "Complete at least 3 offers to claim the offer",
        quickLabel: "514,000",
        description:
          "Individual player items currency for player",
        options: [
          { name: "Galaxy", price: "$12.99" },
          { name: "Renega", price: "$15.99" },
          { name: "Travis", price: "$19.99" },
        ],
      },
    ],
    stats: { players: "50M+", transactions: "1B+", revenue: "$1.8B" },
  },

  Minecraft: {
    title: "Minecraft",
    subtitle: "Ultimate Team Economy",
    image: mc,
    description:
      "FIFA Ultimate Team features one of the most complex in-game economies in sports gaming, with multiple currency types and marketplace dynamics.",
    coins: [
      {
        name: "FUT Coins",
        icon: fifaCoinImg,
        label: "Most Popular",
        price: "$12.99",
        quickPrice: "Complete at least 3 offers to claim the offer",
        quickLabel: "514,000",
        description:
          "Primary currency for player transfers and packs",
        options: [
          { name: "Galaxy", price: "$12.99" },
          { name: "Renega", price: "$15.99" },
          { name: "Travis", price: "$19.99" },
        ],
      },
      {
        name: "FIFA Points",
        icon: fifaPointsImg,
        label: "Most Popular",
        price: "$2",
        quickPrice: "Complete at least 3 offers to claim the offer",
        quickLabel: "514,000",
        description: "Premium currency for special packs",
        options: [
          { name: "Galaxy", price: "$12.99" },
          { name: "Renega", price: "$15.99" },
          { name: "Travis", price: "$19.99" },
        ],
      },
      {
        name: "Player Cards",
        icon: playerCardImg,
        label: "Most Popular",
        price: "$3",
        quickPrice: "Complete at least 3 offers to claim the offer",
        quickLabel: "514,000",
        description:
          "Individual player items currency for player",
        options: [
          { name: "Galaxy", price: "$12.99" },
          { name: "Renega", price: "$15.99" },
          { name: "Travis", price: "$19.99" },
        ],
      },
    ],
    stats: { players: "50M+", transactions: "1B+", revenue: "$1.8B" },
  },

    eFootbal: {
    title: 'eFootbal',
    subtitle: 'Ultimate Team Economy',
    image: pes,
    description: 'FIFA Ultimate Team features one of the most complex in-game economies in sports gaming, with multiple currency types and marketplace dynamics.',
    coins: [
  { name: 'FUT Coins', icon: fifaCoinImg, label: 'Most Popular', price: '$12.99', quickPrice: 'Complete at least 3 offers to claim the offer',quickLabel: '514,000', description: 'Primary currency for player transfers and packs',
        options: [
    { name: "Galaxy", price: "$12.99" },
    { name: "Renega", price: "$15.99" },
    { name: "Travis", price: "$19.99" }
  ]},
  { name: 'FIFA Points', icon: fifaPointsImg, label: 'Most Popular', price: '$2', quickPrice: 'Complete at least 3 offers to claim the offer',quickLabel: '514,000', description: 'Premium currency for special packs',
        options: [
    { name: "Galaxy", price: "$12.99" },
    { name: "Renega", price: "$15.99" },
    { name: "Travis", price: "$19.99" }
  ]
  },
  { name: 'Player Cards', icon: playerCardImg, label: 'Most Popular', price: '$3', quickPrice: 'Complete at least 3 offers to claim the offer',quickLabel: '514,000', description: 'Individual player items currency for player',
        options: [
    { name: "Galaxy", price: "$12.99" },
    { name: "Renega", price: "$15.99" },
    { name: "Travis", price: "$19.99" }
  ]
  }
],
    stats: { players: '50M+', transactions: '1B+', revenue: '$1.8B' }
  },





    valorant: {
    title: 'VALORANT',
    subtitle: 'Ultimate Team Economy',
    image: valo,
    description: 'FIFA Ultimate Team features one of the most complex in-game economies in sports gaming, with multiple currency types and marketplace dynamics.',
    coins: [
  { name: 'FUT Coins', icon: fifaCoinImg, label: 'Most Popular', price: '$12.99', quickPrice: 'Complete at least 3 offers to claim the offer',quickLabel: '514,000', description: 'Primary currency for player transfers and packs',
        options: [
    { name: "Galaxy", price: "$12.99" },
    { name: "Renega", price: "$15.99" },
    { name: "Travis", price: "$19.99" }
  ]},
  { name: 'FIFA Points', icon: fifaPointsImg, label: 'Most Popular', price: '$2', quickPrice: 'Complete at least 3 offers to claim the offer',quickLabel: '514,000', description: 'Premium currency for special packs',
        options: [
    { name: "Galaxy", price: "$12.99" },
    { name: "Renega", price: "$15.99" },
    { name: "Travis", price: "$19.99" }
  ]
  },
  { name: 'Player Cards', icon: playerCardImg, label: 'Most Popular', price: '$3', quickPrice: 'Complete at least 3 offers to claim the offer',quickLabel: '514,000', description: 'Individual player items currency for player',
        options: [
    { name: "Galaxy", price: "$12.99" },
    { name: "Renega", price: "$15.99" },
    { name: "Travis", price: "$19.99" }
  ]
  }
],
    stats: { players: '50M+', transactions: '1B+', revenue: '$1.8B' }
  },





    clashofclans: {
    title: 'CLASH OF CLANS',
    subtitle: 'Ultimate Team Economy',
    image: clashofclans,
    description: 'FIFA Ultimate Team features one of the most complex in-game economies in sports gaming, with multiple currency types and marketplace dynamics.',
    coins: [
  { name: 'FUT Coins', icon: fifaCoinImg, label: 'Most Popular', price: '$12.99', quickPrice: 'Complete at least 3 offers to claim the offer',quickLabel: '514,000', description: 'Primary currency for player transfers and packs',
        options: [
    { name: "Galaxy", price: "$12.99" },
    { name: "Renega", price: "$15.99" },
    { name: "Travis", price: "$19.99" }
  ]},
  { name: 'FIFA Points', icon: fifaPointsImg, label: 'Most Popular', price: '$2', quickPrice: 'Complete at least 3 offers to claim the offer',quickLabel: '514,000', description: 'Premium currency for special packs',
        options: [
    { name: "Galaxy", price: "$12.99" },
    { name: "Renega", price: "$15.99" },
    { name: "Travis", price: "$19.99" }
  ]
  },
  { name: 'Player Cards', icon: playerCardImg, label: 'Most Popular', price: '$3', quickPrice: 'Complete at least 3 offers to claim the offer',quickLabel: '514,000', description: 'Individual player items currency for player',
        options: [
    { name: "Galaxy", price: "$12.99" },
    { name: "Renega", price: "$15.99" },
    { name: "Travis", price: "$19.99" }
  ]
  }
],
    stats: { players: '50M+', transactions: '1B+', revenue: '$1.8B' }
  },
  
  





  fifa: {
    title: 'FIFA 24',
    subtitle: 'Ultimate Team Economy',
    image: fifaBg,
    description: 'FIFA Ultimate Team features one of the most complex in-game economies in sports gaming, with multiple currency types and marketplace dynamics.',
    coins: [
  { name: 'FUT Coins', icon: fifaCoinImg, label: 'Most Popular', price: '$12.99', quickPrice: 'Complete at least 3 offers to claim the offer',quickLabel: '514,000', description: 'Primary currency for player transfers and packs',
        options: [
    { name: "Galaxy", price: "$12.99" },
    { name: "Renega", price: "$15.99" },
    { name: "Travis", price: "$19.99" }
  ]},
  { name: 'FIFA Points', icon: fifaPointsImg, label: 'Most Popular', price: '$2', quickPrice: 'Complete at least 3 offers to claim the offer',quickLabel: '514,000', description: 'Premium currency for special packs',
        options: [
    { name: "Galaxy", price: "$12.99" },
    { name: "Renega", price: "$15.99" },
    { name: "Travis", price: "$19.99" }
  ]
  },
  { name: 'Player Cards', icon: playerCardImg, label: 'Most Popular', price: '$3', quickPrice: 'Complete at least 3 offers to claim the offer',quickLabel: '514,000', description: 'Individual player items currency for player',
        options: [
    { name: "Galaxy", price: "$12.99" },
    { name: "Renega", price: "$15.99" },
    { name: "Travis", price: "$19.99" }
  ]
  }
],
    stats: { players: '50M+', transactions: '1B+', revenue: '$1.8B' }
  },
  



    freefire: {
    title: 'FREE FIRE',
    subtitle: 'Ultimate Team Economy',
    image: FREEFIRE,
    description: 'FIFA Ultimate Team features one of the most complex in-game economies in sports gaming, with multiple currency types and marketplace dynamics.',
    coins: [
  { name: 'FUT Coins', icon: fifaCoinImg, label: 'Most Popular', price: '$12.99', quickPrice: 'Complete at least 3 offers to claim the offer',quickLabel: '514,000', description: 'Primary currency for player transfers and packs',
        options: [
    { name: "Galaxy", price: "$12.99" },
    { name: "Renega", price: "$15.99" },
    { name: "Travis", price: "$19.99" }
  ]},
  { name: 'FIFA Points', icon: fifaPointsImg, label: 'Most Popular', price: '$2', quickPrice: 'Complete at least 3 offers to claim the offer',quickLabel: '514,000', description: 'Premium currency for special packs',
        options: [
    { name: "Galaxy", price: "$12.99" },
    { name: "Renega", price: "$15.99" },
    { name: "Travis", price: "$19.99" }
  ]
  },
  { name: 'Player Cards', icon: playerCardImg, label: 'Most Popular', price: '$3', quickPrice: 'Complete at least 3 offers to claim the offer',quickLabel: '514,000', description: 'Individual player items currency for player',
        options: [
    { name: "Galaxy", price: "$12.99" },
    { name: "Renega", price: "$15.99" },
    { name: "Travis", price: "$19.99" }
  ]
  }
],
    stats: { players: '50M+', transactions: '1B+', revenue: '$1.8B' }
  },
  
  



  
  fortnite: {
    title: 'Fortnite',
    subtitle: 'Battle Royale Marketplace',
    image: fortniteBg,
    description: 'Fortnite revolutionized gaming cosmetics with V-Bucks creating a massive virtual economy centered around skins, emotes, and battle passes.',
    coins: [
      { name: 'V-Bucks', icon: fnv, label: 'Most Popular', price: '$7.99', quickPrice: 'Complete at least 3 offers to claim the offer',quickLabel: '514,000', description: 'Universal currency for all cosmetic purchases',
            options: [
    { name: "Galaxy", price: "$12.99" },
    { name: "Renega", price: "$15.99" },
    { name: "Travis", price: "$19.99" }
  ]
      },
      { name: 'Battle Stars', icon: fnstar, label: 'Most Popular', price: '$4.99', quickPrice: 'Complete at least 3 offers to claim the offer',quickLabel: '514,000', description: 'Battle Pass progression currency items',
            options: [
    { name: "Galaxy", price: "$12.99" },
    { name: "Renega", price: "$15.99" },
    { name: "Travis", price: "$19.99" }
  ]
      },
      { name: 'Cosmetics', icon: fncm, label: 'Most Popular', price: '$12.99', quickPrice: 'Complete at least 3 offers to claim the offer',quickLabel: '514,000', description: 'Skins, emotes, and customization items',
            options: [
    { name: "Galaxy", price: "$12.99" },
    { name: "Renega", price: "$15.99" },
    { name: "Travis", price: "$19.99" }
  ]
      }
    ],
    stats: { players: '400M+', transactions: '2.5B+', revenue: '$9.9B' }
  },
  
  
  
  cod: {
    title: 'Call of Duty',
    subtitle: 'Warzone & Multiplayer Economy',
    image: codBg,
    description: 'Call of Duty features COD Points as the backbone of its monetization, powering weapon blueprints, operator skins, and battle pass content.',
    coins: [
      { name: 'COD Points', icon: codp, label: 'Most Popular', price: '$9.99', quickPrice: 'Complete at least 3 offers to claim the offer',quickLabel: '514,000', description: 'Premium currency for battle pass and bundles',
            options: [
    { name: "Galaxy", price: "$12.99" },
    { name: "Renega", price: "$15.99" },
    { name: "Travis", price: "$19.99" }
  ]
      },
      { name: 'Battle Pass Tokens', icon: codbp, label: 'Most Popular', price: '$4.99', quickPrice: 'Complete at least 3 offers to claim the offer',quickLabel: '514,000', description: 'Tier skip tokens for battle pass progression',
            options: [
    { name: "Galaxy", price: "$12.99" },
    { name: "Renega", price: "$15.99" },
    { name: "Travis", price: "$19.99" }
  ]
      },
      { name: 'Weapon XP', icon: codxp, label: 'Most Popular', price: '$2.99', quickPrice: 'Complete at least 3 offers to claim the offer',quickLabel: '514,000', description: 'Experience boosts for weapon leveling',
            options: [
    { name: "Galaxy", price: "$12.99" },
    { name: "Renega", price: "$15.99" },
    { name: "Travis", price: "$19.99" }
  ]
      }
    ],
    stats: { players: '100M+', transactions: '800M+', revenue: '$3.2B' }
  },
  
  
  
  'rocket-league': {
    title: 'Rocket League',
    subtitle: 'Car Customization Economy',
    image: rocketLeagueBg,
    description: 'Rocket League transformed from premium to free-to-play with Credits powering an extensive car customization ecosystem.',
    coins: [
      { name: 'Credits', icon: rlc, label: 'Most Popular', price: '$4.99', quickPrice: 'Complete at least 3 offers to claim the offer',quickLabel: '514,000', description: 'Primary currency for trading and item shop',
            options: [
    { name: "Galaxy", price: "$12.99" },
    { name: "Renega", price: "$15.99" },
    { name: "Travis", price: "$19.99" }
  ]
      },
      { name: 'Blueprints', icon: rlb, label: 'Most Popular', price: '$1.99', quickPrice: 'Complete at least 3 offers to claim the offer',quickLabel: '514,000', description: 'Craftable item schematics competitive play',
            options: [
    { name: "Galaxy", price: "$12.99" },
    { name: "Renega", price: "$15.99" },
    { name: "Travis", price: "$19.99" }
  ]
      },
      { name: 'Tournament Credits', icon: rlt, label: 'Most Popular', price: '$0.99', quickPrice: 'Complete at least 3 offers to claim the offer',quickLabel: '514,000', description: 'Earned currency from competitive play',
            options: [
    { name: "Galaxy", price: "$12.99" },
    { name: "Renega", price: "$15.99" },
    { name: "Travis", price: "$19.99" }
  ]
      }
    ],
    stats: { players: '75M+', transactions: '500M+', revenue: '$500M' }
  }
};



export default gameData;