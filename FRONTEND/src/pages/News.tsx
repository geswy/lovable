import React, { useEffect, useState } from 'react';
import api from '@/lib/api'; // axios config
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User } from 'lucide-react';
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection';

const News = () => {
  const [newsItems, setNewsItems] = useState<any[]>([]);

  useEffect(() => {
    api.get("/news") // axios كيستعمل baseURL = http://localhost:5000/api
      .then(res => setNewsItems(res.data))
      .catch(err => console.error("Error fetching news:", err));
  }, []);

  return (
    <div className="min-h-screen bg-background pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimatedSection>
          <div className="text-center mb-12">
<h1 className="text-4xl md:text-5xl font-bold mb-6 primary-gradient bg-clip-text text-transparent">
  Gaming News & Insights
</h1>

            <p className="text-xl text-muted-foreground">
              Stay updated with the latest in gaming economies and industry trends
            </p>
          </div>
        </ScrollAnimatedSection>

        <div className="space-y-8">
          {newsItems.map((item, index) => (
            <ScrollAnimatedSection key={item.id} delay={index * 200}>
              <Card className="game-card cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Badge variant="outline" className="mb-3 border-primary/50 text-primary">
                        {item.category}
                      </Badge>
                      <CardTitle className="text-xl mb-3 hover:text-primary transition-colors">
                        {item.title}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        {item.excerpt}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {item.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {item.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;