import { useEffect } from "react";
import sites from "../assets/siteContent";

const CANONICAL_HOSTS = new Set(
  Object.values(sites)
    .map((site) => site.canonicalDomain)
    .filter(Boolean),
);
console.log(CANONICAL_HOSTS);

export function useCanonical() {
  useEffect(() => {
    const host = window.location.hostname;

    if (!CANONICAL_HOSTS.has(host)) {
      // Not an SEO domain → no canonical
      return;
    }

    const canonicalUrl = `https://${host}` + window.location.pathname;

    let link = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;

    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }

    link.href = canonicalUrl;
  }, []);
}
