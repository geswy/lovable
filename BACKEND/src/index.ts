import express from "express";
import cors from "cors";

import newsRoutes from "./routes/news";
import eventsRoutes from "./routes/events";
import adblueRoutes from "./routes/adblue";
import offersRoutes from "./routes/offers";
import paypalRoutes from "./routes/paypal";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/adblue", adblueRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/offers", offersRoutes);





app.use("/api/paypal", paypalRoutes);

// Fake news data (حالياً ستاتيك، من بعد تقدر تجيبها من DB)
const newsItems = [
  {
    id: 1,
    title: "New Gaming Economy Analysis: FIFA 24 Ultimate Team",
    excerpt: "Deep dive into the latest changes in FIFA 24's Ultimate Team economy and how it affects player trading.",
    date: "2024-01-15",
    author: "Geswy Gaming",
    category: "Analysis",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Fortnite Chapter 5: V-Bucks Strategy Guide", 
    excerpt: "Everything you need to know about optimizing your V-Bucks spending in the new chapter.",
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

app.get("/api/news", (req, res) => {
  res.json(newsItems);
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
