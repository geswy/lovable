import { Request, Response } from "express";

export const getNews = (req: Request, res: Response) => {
  const newsItems = [
    {
      id: 1,
      title: "FIFA 24 Ultimate Team Economy",
      excerpt: "Deep dive into player trading.",
      date: "2024-01-15",
      author: "Geswy Gaming",
      category: "Analysis",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Fortnite Chapter 5 Strategy Guide",
      excerpt: "Optimize your V-Bucks spending.",
      date: "2024-01-10",
      author: "Geswy Gaming",
      category: "Guide",
      readTime: "8 min"
    },
    {
    id: 3,
    title: "COD Warzone: Season 1 Battle Pass Review",
    excerpt: "Is the new Warzone battle pass worth your COD Points? Our comprehensive breakdown.",
    date: "2024-01-05",
    author: "Geswy Gaming", 
    category: "Review",
    readTime: "6 min"
    }
  ];

  res.json(newsItems);
};
