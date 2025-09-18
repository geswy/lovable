import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Coins, TrendingUp, Users, Star, ShoppingCart, Plus, Minus } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Checkout from "./Checkout";




// Enhanced Coin Card Component

import {ChevronDown, Check } from "lucide-react";

const CoinCard = ({ coin, gameTitle }: { coin: any; gameTitle: string }) => {
  const [quantity, setQuantity] = React.useState(1);
  const [selectedOption, setSelectedOption] = React.useState<any>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const dropdownRef = React.useRef<HTMLDivElement | null>(null);

  // يسد منين نسكرولو أو نكليكو برا
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const basePrice = parseFloat(
    (selectedOption?.price || coin.price).replace("$", "")
  );
  const totalPrice = (basePrice * quantity).toFixed(2);

const [openCheckout, setOpenCheckout] = useState(false);
  return (
    
    <div className="p-6 border-r border-border/50 last:border-r-0 hover:bg-secondary/20 transition-all duration-300">
      <div className="text-center mb-4" ref={dropdownRef}>
        {/* Icon */}
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
          
          <div className="mt-3 relative">
            <Button
              variant="outline"
              size="sm"
              className="w-full flex items-center justify-between rounded-lg shadow-sm border-muted-foreground/30 hover:border-primary transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              {selectedOption ? selectedOption.name : "Choose Skin"}
              <ChevronDown
                className={`h-4 w-4 ml-2 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </Button>

            {isOpen && (
              <div className="absolute z-50 mt-2 w-full rounded-lg shadow-xl bg-background border border-border animate-in fade-in-0 zoom-in-95 duration-200">
                {coin.options.map((opt: any, i: number) => {
                  const isSelected = selectedOption?.name === opt.name;
                  return (
                    <div
                      key={i}
                      className={`flex justify-between items-center text-sm cursor-pointer px-3 py-2 
                        hover:bg-primary/10 transition rounded-md
                        ${isSelected ? "bg-primary/5" : ""}`}
                      onClick={() => {
                        setSelectedOption(opt);
                        setIsOpen(false);
                      }}
                    >
                      <span className="flex items-center gap-2">
                        {isSelected && (
                          <Check className="h-4 w-4 text-primary" />
                        )}
                        {opt.name}
                      </span>
                      <span
                        className={`font-semibold ${
                          isSelected ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {opt.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
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

      <Button
      
        className="w-full mt-2"
        onClick={() => {
          
          try {
            // ⇦ هنا غير كنفتح المودال
            setOpenCheckout(true);
          } catch (err) {
            console.error("Error creating PayPal order:", err);
          }
        }}
      >
        Buy Now
      </Button>

      {/* ⇦ المودال كيتعرض غير إلا كان openCheckout = true */}
      {openCheckout && (
       <Checkout
  totalPrice={totalPrice} // ← استعمل totalPrice اللي محسوب
  gameTitle={gameTitle}
  coin={{ name: coin.name }}
  onClose={() => setOpenCheckout(false)}
/>

      )}




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

import gameData from "@/data/gameData";


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