import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";
import api from "@/lib/api";

const Offers = () => {
  const [offers, setOffers] = useState<any[]>([]);

  useEffect(() => {
    api.get("/adblue/offers")
      .then(res => setOffers(res.data))
      .catch(err => console.error("Error fetching offers:", err));
  }, []);

  return (
    <div className="min-h-screen bg-background pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimatedSection>
          <div className="text-center mb-12">
<h1 className="text-4xl md:text-5xl font-bold mb-6 primary-gradient bg-clip-text text-transparent">
  Available Offers
</h1>

            <p className="text-xl text-muted-foreground">
              Complete at least 3 tasks to win free 1 skin
            </p>
          </div>
        </ScrollAnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <ScrollAnimatedSection key={index} delay={index * 200}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl mb-3">{offer.anchor}</CardTitle>
                  <p className="text-muted-foreground">{offer.conversion}</p>
                </CardHeader>
                <CardContent>
<Button asChild className="w-full btn-primary rounded-lg">
  <a href={offer.url} target="_blank" rel="noopener noreferrer">
    Claim Offer
  </a>
</Button>

                </CardContent>
              </Card>
            </ScrollAnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
