import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { faqs } from "../data/faqs";

const SITE_URL = "https://originalnotary.com";
const SOCIAL_IMAGE = `${SITE_URL}/professional_mobile_notary_services_banner_refreshed.png`;

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
};

const metadataByPath: Record<string, PageMetadata> = {
  "/": {
    title: "Mobile Notary Nashville, TN | Original Mobile Notary",
    description:
      "Professional mobile notary service throughout Nashville and surrounding Middle Tennessee communities. Appointments generally available 8 a.m.–8 p.m., with same-day requests sometimes available.",
    path: "/",
  },
  "/services": {
    title: "Mobile Notary Services in Nashville | Original Mobile Notary",
    description:
      "Mobile notarization for powers of attorney, medical documents, affidavits, estate documents, real estate closings, school forms, and more throughout Nashville and Middle Tennessee.",
    path: "/services",
  },
  "/service-area": {
    title: "Nashville Mobile Notary Service Area | Middle Tennessee",
    description:
      "See the Nashville neighborhoods and nearby Middle Tennessee communities served by Original Mobile Notary, including Hendersonville, Gallatin, Mount Juliet, Lebanon, Franklin, and Brentwood.",
    path: "/service-area",
  },
  "/pricing": {
    title: "Mobile Notary Pricing in Nashville, TN",
    description:
      "Request a clear mobile notary quote for Nashville and surrounding Middle Tennessee communities. Travel fees and the full appointment price are confirmed before booking.",
    path: "/pricing",
  },
  "/why-choose-us": {
    title: "Why Choose Original Mobile Notary of Nashville",
    description:
      "Choose friendly, professional mobile notary service with clear communication, flexible scheduling, broad payment options, and service throughout Nashville and Middle Tennessee.",
    path: "/why-choose-us",
  },
  "/about": {
    title: "About Brigitte | Nashville Mobile Notary",
    description:
      "Meet Brigitte, an NNA-certified mobile notary serving Nashville and surrounding Middle Tennessee communities with patient, reliable, personalized service.",
    path: "/about",
  },
  "/faq": {
    title: "Nashville Mobile Notary FAQ",
    description:
      "Get answers about Nashville mobile notary hours, same-day appointments, identification, payment methods, discounts, travel pricing, and service locations.",
    path: "/faq",
  },
  "/contact": {
    title: "Book a Mobile Notary in Nashville",
    description:
      "Request a mobile notary appointment in Nashville or a surrounding Middle Tennessee community. Share your document type, preferred time, and meeting location for a clear quote.",
    path: "/contact",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: "Original Mobile Notary of Nashville",
  url: `${SITE_URL}/`,
  image: SOCIAL_IMAGE,
  telephone: "+1-561-888-4808",
  email: "hello@originalnotary.com",
  priceRange: "$$",
  description:
    "Mobile notary service throughout Nashville and surrounding Middle Tennessee communities. Appointments are scheduled in advance; there is no public walk-in office.",
  founder: {
    "@type": "Person",
    name: "Brigitte",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  areaServed: [
    "Nashville",
    "Goodlettsville",
    "Hendersonville",
    "Gallatin",
    "Mount Juliet",
    "Lebanon",
    "Brentwood",
    "Franklin",
    "Nolensville",
    "Spring Hill",
  ].map((name) => ({ "@type": "City", name })),
  paymentAccepted: "Cash, credit card, debit card, Cash App, Venmo, Zelle, Apple Pay and other common digital payment methods",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mobile Notary Services",
    itemListElement: [
      "General document notarization",
      "Powers of attorney",
      "Medical and healthcare documents",
      "Affidavits and sworn statements",
      "Real estate and loan signings",
      "Wills and estate documents",
      "Hospital and care facility visits",
      "School and field trip forms",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}

function upsertSchema(key: string, data: object | null) {
  let schema = document.head.querySelector<HTMLScriptElement>(`script[data-seo-schema="${key}"]`);
  if (!data) {
    schema?.remove();
    return;
  }
  if (!schema) {
    schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.dataset.seoSchema = key;
    document.head.appendChild(schema);
  }
  schema.textContent = JSON.stringify(data);
}

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = metadataByPath[pathname] ?? {
      title: "Page Not Found | Original Mobile Notary",
      description: "The requested page could not be found.",
      path: pathname,
      noindex: true,
    };

    const canonicalUrl = `${SITE_URL}${page.path === "/" ? "/" : page.path}`;

    document.title = page.title;
    upsertMeta('meta[name="description"]', { name: "description", content: page.description });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: page.noindex ? "noindex, nofollow" : "index, follow",
    });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: "Original Mobile Notary of Nashville" });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: page.title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: page.description });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: SOCIAL_IMAGE });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: page.title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: page.description });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: SOCIAL_IMAGE });
    upsertLink("canonical", canonicalUrl);

    upsertSchema("local-business", localBusinessSchema);
    upsertSchema("faq", pathname === "/faq" ? faqSchema : null);
  }, [pathname]);

  return null;
}
