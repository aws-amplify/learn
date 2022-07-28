let configured = false;

declare global {
  interface Window {
    s: any;
    AWSCShortbread: any;
  }
}

export function configureAdobeAnalytics(): void {
  if (!configured) {
    if (
      typeof window !== "undefined" &&
      typeof window.AWSCShortbread !== "undefined"
    ) {
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
