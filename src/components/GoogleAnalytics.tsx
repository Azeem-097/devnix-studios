"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_MEASUREMENT_ID = "G-ED15ZV8J1G";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export default function GoogleAnalytics() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Load GA only after user interaction OR 3 seconds idle
    const loadGA = () => setShouldLoad(true);

    // Load on first user interaction
    const events = ["scroll", "mousemove", "touchstart", "keydown"];
    events.forEach((event) => {
      window.addEventListener(event, loadGA, { once: true, passive: true });
    });

    // Or load after 3 seconds (whichever comes first)
    const timer = setTimeout(loadGA, 3000);

    return () => {
      clearTimeout(timer);
      events.forEach((event) => {
        window.removeEventListener(event, loadGA);
      });
    };
  }, []);

  if (!shouldLoad) return null;

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}

export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number>
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params || {});
  }
};

export const trackWhatsAppClick = (location: string) => {
  trackEvent("whatsapp_click", {
    event_category: "Contact",
    event_label: location,
    value: 1,
  });
};

export const trackPhoneClick = (location: string) => {
  trackEvent("phone_click", {
    event_category: "Contact",
    event_label: location,
    value: 1,
  });
};

export const trackEmailClick = (location: string) => {
  trackEvent("email_click", {
    event_category: "Contact",
    event_label: location,
    value: 1,
  });
};

export const trackFormSubmit = (formName: string) => {
  trackEvent("form_submit", {
    event_category: "Lead",
    event_label: formName,
    value: 10,
  });
};

export const trackCTAClick = (buttonName: string, location: string) => {
  trackEvent("cta_click", {
    event_category: "Engagement",
    event_label: `${buttonName} - ${location}`,
    value: 1,
  });
};
