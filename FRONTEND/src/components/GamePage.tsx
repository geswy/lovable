import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Coins, TrendingUp, Users, Star, ShoppingCart, Plus, Minus } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

// Import game backgrounds
import fifaBg from '@/assets/fifa-bg.jpg';
import fortniteBg from '@/assets/fortnite-bg.jpg';
import codBg from '@/assets/cod-bg.jpg';
import rocketLeagueBg from '@/assets/rocket-league-bg.jpg';
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



// Enhanced Coin Card Component
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown,} from "lucide-react";

const CoinCard = ({ coin, gameTitle }: { coin: any; gameTitle: string }) => {
  const [quantity, setQuantity] = React.useState(1);
  const [selectedOption, setSelectedOption] = React.useState<any>(null);

  const basePrice = parseFloat(
    (selectedOption?.price || coin.price).replace("$", "")
  );
  const totalPrice = (basePrice * quantity).toFixed(2);

  return (
    <div className="p-6 border-r border-border/50 last:border-r-0 hover:bg-secondary/20 transition-all duration-300">
      <div className="text-center mb-4">
        <div className="flex justify-center mb-3">
          <img
            src={coin.icon}
            alt={coin.name}
            className="h-12 w-12 object-contain"
          />
        </div>
        <h3 className="text-xl font-bold mb-1">{coin.name}</h3>

        {coin.label && (
          <Badge
            variant="secondary"
            className="mb-2 px-3 py-1 bg-primary/10 text-primary border-primary/20 text-xs"
          >
            {coin.label}
          </Badge>
        )}

        <p className="text-muted-foreground text-sm mb-4">{coin.description}</p>

        {/* السعر */}
        <Badge
          variant="secondary"
          className="text-lg px-4 py-2 bg-primary/10 text-primary border-primary/20"
        >
          ${totalPrice}
        </Badge>

        {/* زر الاختيارات */}
        {coin.options && coin.options.length > 0 && (
          <div className="mt-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full flex items-center justify-between"
                >
                  {selectedOption ? selectedOption.name : "Choose Skin"}
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                side="top"
                className="w-full rounded-lg shadow-xl"
              >
                {coin.options.map((opt: any, i: number) => (
                  <DropdownMenuItem
                    key={i}
                    className="flex justify-between text-sm cursor-pointer"
                    onClick={() => setSelectedOption(opt)}
                  >
                    <span>{opt.name}</span>
                    <span className="text-primary font-semibold">
                      {opt.price}
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>

      {/* quantity + add to cart */}
      <div className="space-y-3">
        <div className="flex items-center justify-center gap-3">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="h-8 w-8 p-0"
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="font-semibold w-8 text-center">{quantity}</span>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setQuantity(quantity + 1)}
            className="h-8 w-8 p-0"
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>

        <Button className="w-full bg-gradient-primary hover:shadow-glow">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

import { useNavigate } from "react-router-dom";

// Purchase Card Component (Quick Buy - Quick Price)
const PurchaseCard = ({ coin }: { coin: any }) => {
  const navigate = useNavigate();

  return (
    <Card className="hover:shadow-glow transition-all duration-300 group cursor-pointer">
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <img src={coin.icon} alt={coin.name} className="h-10 w-10 object-contain" />
          <div>
            <h4 className="font-semibold">{coin.name}</h4>
            {coin.quickLabel && (
              <p className="text-xs text-primary">{coin.quickLabel}</p>
            )}
            <p className="text-sm text-muted-foreground">
              {coin.quickPrice || coin.price}
            </p>
          </div>
        </div>

        <Button 
          size="sm" 
          className="w-full group-hover:bg-primary/90"
          onClick={() => navigate("/offers")}
        >
          Quick Buy
        </Button>
      </CardContent>
    </Card>
  );
};





const gameData = {
  fifa: {
    title: 'FIFA 24',
    subtitle: 'Ultimate Team Economy',
    image: fifaBg,
    description: 'FIFA Ultimate Team features one of the most complex in-game economies in sports gaming, with multiple currency types and marketplace dynamics.',
    coins: [
  { name: 'FUT Coins', icon: fifaCoinImg, label: 'Most Popular', price: '$3', quickPrice: 'Complete at least 3 offers to claim the offer',quickLabel: '514,000', description: 'Primary currency for player transfers and packs',
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

const GamePage = () => {
  const { gameId } = useParams();
  const game = gameId ? gameData[gameId as keyof typeof gameData] : null;

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Game not found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Header */}
      <div className="relative h-80 overflow-hidden">
        <img 
          src={game.image} 
          alt={game.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        <div className="absolute bottom-6 left-6 right-6">
          <Link to="/">
            <Button variant="outline" className="mb-4 border-primary/50 text-primary hover:bg-primary/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Games
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{game.title}</h1>
          <p className="text-xl text-primary">{game.subtitle}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Game Description */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {game.description}
            </p>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold">{game.stats.players}</h3>
              <p className="text-muted-foreground">Active Players</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold">{game.stats.transactions}</h3>
              <p className="text-muted-foreground">Transactions</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold">{game.stats.revenue}</h3>
              <p className="text-muted-foreground">Annual Revenue</p>
            </CardContent>
          </Card>
        </div>

{/* Enhanced Shopping System */}
<Card className="overflow-hidden mb-12">
  <CardHeader className="bg-gradient-primary text-primary-foreground">
    <CardTitle className="flex items-center gap-2 text-2xl">
      <Coins className="h-6 w-6" />
      In-Game Currency & Shopping System
    </CardTitle>
  </CardHeader>
<CardContent className="p-0">
  <div
    className="
      flex flex-row gap-4
      overflow-x-auto snap-x snap-mandatory
      lg:grid lg:grid-cols-3 lg:gap-0 lg:overflow-x-visible
    "
  >
    {game.coins.map((coin, index) => (
      <div key={index} className="min-w-[250px] lg:min-w-0 snap-start">
        <CoinCard coin={coin} gameTitle={game.title} />
      </div>
    ))}
  </div>
</CardContent>

</Card>

{/* Quick Purchase Options */}
<Card className="mb-12">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <ShoppingCart className="h-5 w-5 text-primary" />
      Quick Purchase Options
    </CardTitle>
  </CardHeader>
  <CardContent>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {game.coins.map((coin, index) => (
        <PurchaseCard key={index} coin={coin} />
      ))}
    </div>
  </CardContent>
</Card>

      </div>
    </div>
  );
};

export default GamePage;