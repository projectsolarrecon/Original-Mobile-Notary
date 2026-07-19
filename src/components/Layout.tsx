import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const PHONE_DISPLAY = "(561) 888-4808";
const PHONE_E164 = "+15618884808";
const LEGACY_PHONE_PATTERNS = [
  /\(615\) 555-0000/g,
  /615-555-0000/g,
  /\+16155550000/g,
];

function replaceLegacyPhoneReferences(root: ParentNode) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];

  while (walker.nextNode()) {
    textNodes.push(walker.currentNode as Text);
  }

  textNodes.forEach((node) => {
    let nextValue = node.nodeValue ?? "";
    LEGACY_PHONE_PATTERNS.forEach((pattern) => {
      nextValue = nextValue.replace(pattern, PHONE_DISPLAY);
    });
    if (nextValue !== node.nodeValue) node.nodeValue = nextValue;
  });

  root.querySelectorAll?.('a[href="tel:+16155550000"]').forEach((link) => {
    link.setAttribute("href", `tel:${PHONE_E164}`);
  });
}

export default function Layout() {
  useEffect(() => {
    replaceLegacyPhoneReferences(document.body);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            replaceLegacyPhoneReferences(node as Element);
          } else if (node.nodeType === Node.TEXT_NODE && node.parentElement) {
            replaceLegacyPhoneReferences(node.parentElement);
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-cream pb-16 sm:pb-0">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 sm:hidden border-t border-sage-mid/30 bg-forest shadow-warm-lg">
        <a
          href={`tel:${PHONE_E164}`}
          className="flex items-center justify-center gap-2 px-4 py-3.5 font-body text-sm font-bold text-cream hover:bg-sage-mid/20 transition-colors"
          aria-label={`Call Original Mobile Notary at ${PHONE_DISPLAY}`}
        >
          <span aria-hidden="true">☎</span>
          Call {PHONE_DISPLAY}
        </a>
        <a
          href={`sms:${PHONE_E164}`}
          className="flex items-center justify-center gap-2 border-l border-sage-mid/30 px-4 py-3.5 font-body text-sm font-bold text-cream hover:bg-sage-mid/20 transition-colors"
          aria-label={`Text Original Mobile Notary at ${PHONE_DISPLAY}`}
        >
          <span aria-hidden="true">✉</span>
          Text
        </a>
      </div>
    </div>
  );
}
