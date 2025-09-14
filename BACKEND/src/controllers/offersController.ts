import { Request, Response } from "express";
import axios from "axios";

const USER_ID = "622869";
const API_KEY_OFFERS = "9399b9e808848f17751c668b29532185";

export const getOffers = async (req: Request, res: Response) => {
  try {
    const url = `https://d1s59iugjlhwm7.cloudfront.net/public/offers/feed.php?user_id=${USER_ID}&api_key=${API_KEY_OFFERS}&s1=&s2=`;

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching offers:", error);
    res.status(500).json({ error: "Failed to fetch offers" });
  }
};
