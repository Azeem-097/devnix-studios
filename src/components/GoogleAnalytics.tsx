"use client";

import Script from "next/script";

const GA_MEASUREMENT_ID = "G-ED15ZV8J1G";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
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

// Helper function to track conversions
export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number>
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params || {});
    console.log(`📊 GA Event Tracked: ${eventName}`, params);
  }
};

// Pre-defined conversion events
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
