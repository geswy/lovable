import React, { useEffect } from "react";
import api from "@/lib/api"; // ✅ استعمل axios instance ديالك

declare global {
  interface Window {
    paypal: any;
  }
}

const Checkout = ({ totalPrice, gameTitle, coin, onClose }: any) => {
  useEffect(() => {
    const loadPaypalScript = () => {
      return new Promise((resolve, reject) => {
        if (document.getElementById("paypal-sdk")) {
          resolve(true);
          return;
        }
        const script = document.createElement("script");
        script.id = "paypal-sdk";
        script.src = `https://www.paypal.com/sdk/js?client-id=${
          import.meta.env.VITE_PAYPAL_CLIENT_ID
        }&components=buttons&currency=USD`; // ✅ clientId من .env
        script.onload = () => resolve(true);
        script.onerror = () => reject("❌ Failed to load PayPal SDK");
        document.body.appendChild(script);
      });
    };

    loadPaypalScript().then(() => {
      const checkExist = setInterval(() => {
        const container = document.getElementById("paypal-buttons");
        if (container && window.paypal) {
          clearInterval(checkExist);
          container.innerHTML = "";

          window.paypal
            .Buttons({
              style: { layout: "vertical", color: "blue" },

              createOrder: async () => {
                const cart = {
                  amount: parseFloat(totalPrice),
                  productName: `${gameTitle}-${coin.name}`,
                };

                const res = await api.post("/paypal/create-order", cart);
                return res.data.id;
              },

              onApprove: async (data: any) => {
                const res = await api.post("/paypal/capture-order", {
                  orderID: data.orderID,
                });
                alert("✅ Payment successful: " + res.data.status);
                onClose();
              },
            })
            .render("#paypal-buttons");
        }
      }, 100);
    });
  }, [totalPrice, gameTitle, coin, onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-[#111] text-white p-6 rounded-2xl shadow-lg w-[400px]">
        <h2 className="text-2xl font-bold mb-4 text-center">Checkout</h2>
        <div id="paypal-buttons"></div>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold py-2 rounded-lg shadow-md hover:opacity-90 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Checkout;
