let configured = false;

declare global {
  interface Window {
    s: any;
    AWSCShortbread: any;
  }
}

export function configureAdobeAnalytics(): void {
  if (!configured) {
    console.log("not configured yet!");
    if (
      typeof window !== "undefined" &&
      typeof window.AWSCShortbread !== "undefined"
    ) {
      console.log("not configured yet! and AA exists!");
      window
        .AWSCShortbread({
          domain: ".amplify.aws",
        })
        .checkForCookieConsent();
      if (typeof window.s !== "undefined") {
        window.s.trackExternalLinks = false;
      }

      configured = true;
    }
  }
}
