import dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import fetch from "node-fetch";
import { PAYPAL_API, PAYPAL_CLIENT_ID, PAYPAL_SECRET } from "../config/paypal";
console.log("🟢 ENV CHECK");
console.log("PAYPAL_CLIENT_ID:", process.env.PAYPAL_CLIENT_ID);
console.log("PAYPAL_SECRET:", process.env.PAYPAL_SECRET?.substring(0, 6) + "...");
console.log("PAYPAL_API:", process.env.PAYPAL_API);



async function getAccessToken() {
  const auth = Buffer.from(
    `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`
  ).toString("base64");

  const response = await fetch(`${process.env.PAYPAL_API}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      "Authorization": `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  interface PayPalTokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope?: string;
    app_id?: string;
    nonce?: string;
  }

  const data = (await response.json()) as PayPalTokenResponse;

  console.log("🟢 AccessToken Response:", data);

  if (!data.access_token) {
    throw new Error("❌ Failed to get PayPal access token");
  }

  return data.access_token;
}


export const createOrder = async (req: Request, res: Response) => {
  try {
    const { amount, productName } = req.body;

    const accessToken = await getAccessToken();

    const response = await fetch(`${PAYPAL_API}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
  intent: "CAPTURE",
  purchase_units: [
    {
      amount: { currency_code: "USD", value: amount || "20.00" },
      description: productName || "Default Product",
    },
  ],
  application_context: {
    shipping_preference: "NO_SHIPPING", // ✅ ميطلبش address
    user_action: "PAY_NOW",             // ✅ يبين "Pay Now" بلا confirm إضافي
  },
}),

    });

    const data: any = await response.json();

    console.log("🟢 PayPal Order Response:", data);

    const approvalUrl = data?.links?.find((link: any) => link.rel === "approve")?.href;

    res.json({
      id: data.id,
      approvalUrl,
    });

  } catch (error) {
    console.error("❌ Error creating PayPal order:", error);
    res.status(500).json({ error: "Error creating PayPal order", details: error });
  }
};
export const captureOrder = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.body; // ✅ جاي من frontend

    const accessToken = await getAccessToken();

    const response = await fetch(`${PAYPAL_API}/v2/checkout/orders/${orderId}/capture`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    const data: any = await response.json();

    // ✅ هنا PayPal كيصيفط حالة الأوردر + التفاصيل ديال الترانزاكشن
    res.json({
      id: data.id,
      status: data.status, // COMPLETED ولا PENDING
      payer: data.payer,   // معلومات المشتري
      purchase_units: data.purchase_units, // تفاصيل الشراء
    });
  } catch (error) {
    res.status(500).json({ error: "Error capturing PayPal order", details: error });
  }
};

