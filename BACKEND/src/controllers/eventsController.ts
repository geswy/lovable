import { Request, Response } from "express";

export const getEvents = (req: Request, res: Response) => {
  const events = [
    {
      id: 1,
      title: "FIFA 24 Ultimate Team Workshop",
      description: "Learn advanced trading strategies and market analysis techniques.",
      date: "2024-02-15",
      time: "7:00 PM EST",
      location: "Online",
      attendees: 150,
      type: "Workshop"
    },
    {
      id: 2,
      title: "Gaming Economy Panel Discussion", 
      description: "Industry experts discuss the future of in-game economies.",
      date: "2024-02-22",
      time: "8:00 PM EST", 
      location: "Online",
      attendees: 300,
      type: "Panel"
    },
    {
      id: 3,
      title: "Fortnite Creative Mode Showcase",
      description: "Showcase of creative builds and V-Bucks optimization tips.",
      date: "2024-03-01",
      time: "6:00 PM EST",
      location: "Online",
      attendees: 200,
      type: "Showcase"
    }
  ];

  res.json(events);
};
