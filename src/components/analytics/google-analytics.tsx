import Script from "next/script";
import { preconnect } from "react-dom";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  // Opens the TCP/TLS connection for gtag.js early instead of waiting for
  // the script tag to be discovered after hydration.
  preconnect("https://www.googletagmanager.com");
  preconnect("https://www.google-analytics.com");

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
