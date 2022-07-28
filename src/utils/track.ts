let configured = false;

interface PageViewOptions {
  event: Event;
  page: Page;
  data?: Record<string, any>;
}

interface CustomEventOptions {
  event: Event;
  data?: Record<string, any>;
}

interface Page {
  pageURL: string;
  pageType?: string;
}

interface Event {
  name: string;
  type: string;
  description?: string;
}
declare global {
  interface Window {
    s: any;
    AWSCShortbread: any;
    AWSMA: any;
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

function trackCustomEvent(opt: CustomEventOptions): void {
  try {
    window.AWSMA.ready(() => {
      document.dispatchEvent(
        new CustomEvent(window.AWSMA.TRIGGER_EVENT, { detail: opt })
      );
    });
  } catch (error) {
    // don't want to error for analytics events
  }
}

export function trackPageView(eventName: string, pageURL: string): void {
  const opt: PageViewOptions = {
    event: {
      type: "pageview",
      name: eventName,
    },
    page: {
      pageURL: pageURL,
    },
  };

  trackCustomEvent(opt);
}

export function trackExternalLink(hrefTo: string): void {
  if (typeof window !== "undefined" && typeof window.s != "undefined") {
    const { s } = window;
    s.linkTrackVars =
      "prop39,prop41,prop50,prop61,prop62,eVar39,eVar41,eVar50,eVar61,eVar62,eVar69";
    s.tl(true, "e", hrefTo);
  }
}
