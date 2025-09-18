// src/hooks/usePayPalScript.ts
import { useEffect } from "react";

export function usePayPalScript(clientId: string) {
  useEffect(() => {
    if (document.getElementById("paypal-sdk")) return; // ما تعاودش تضيفو

    const script = document.createElement("script");
    script.id = "paypal-sdk";
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`; 
    script.async = true;
    document.body.appendChild(script);
  }, [clientId]);
}
