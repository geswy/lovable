import express from "express";
import fetch from "node-fetch";
import { Router } from "express";
const router = express.Router();

router.get("/offers", async (req, res) => {
  try {
    const response = await fetch(
      "https://d1s59iugjlhwm7.cloudfront.net/public/offers/feed.php?user_id=622869&api_key=9399b9e808848f17751c668b29532185"
    );

    const offers = await response.json();
    res.json(offers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});
router.get("/leads", async (req, res) => {
  try {
    const response = await fetch(
      "https://d1s59iugjlhwm7.cloudfront.net/public/external/check2.php?testing=1"
    );
    const leads = await response.json();
    res.json(leads);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
