import { Link } from "react-router-dom";
import { BotanicalDivider, TinyLeaf } from "./BotanicalAccent";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="px-4 pt-8">
        <BotanicalDivider color="#7A9E8E" className="max-w-6xl mx-auto opacity-40" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-sage-mid flex items-center justify-center shadow-warm shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="#FAF7F2" strokeWidth="1.2" />
                  <path d="M9 12l2 2 4-4" stroke="#FAF7F2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="font-display text-cream font-semibold text-sm leading-tight">Original Mobile Notary</div>
                <div className="font-body text-terra-light text-[10px] tracking-[0.18em] uppercase">of Nashville</div>
              </div>
            </div>
            <p className="font-body text-sage-light text-sm leading-relaxed">
              Friendly, professional mobile notary service throughout Nashville and surrounding Middle Tennessee communities. We come to you — wherever the appointment is most convenient.
            </p>
            <Link to="/service-area" className="inline-flex items-center gap-1.5 mt-4 font-body text-sage text-xs italic hover:text-cream transition-colors">
              <TinyLeaf color="#7A9E8E" className="w-3 h-4" />
              View neighborhoods and communities served
            </Link>
          </div>

          <div>
            <h3 className="font-display text-terra-light text-sm font-semibold tracking-wide mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Services", path: "/services" },
                { label: "Service Area", path: "/service-area" },
                { label: "Pricing", path: "/pricing" },
                { label: "About Brigitte", path: "/about" },
                { label: "FAQ", path: "/faq" },
                { label: "Book an Appointment", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="font-body text-sage-light hover:text-cream text-sm transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-terra opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-terra-light text-sm font-semibold tracking-wide mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <div className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-terra-light shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="font-body text-sage-light">
                    <a href="tel:+15618884808" className="hover:text-cream transition-colors">(561) 888-4808</a>
                    <span className="mx-2 text-sage-mid/60">·</span>
                    <a href="sms:+15618884808" className="hover:text-cream transition-colors">Text</a>
                  </div>
                </div>
              </li>
              <li>
                <a href="mailto:hello@originalnotary.com" className="font-body text-sage-light hover:text-cream transition-colors flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-terra-light shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hello@originalnotary.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-terra-light shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-body text-sage-light">Nashville & Middle Tennessee</span>
              </li>
            </ul>

            <div className="mt-5 pt-4 border-t border-sage-mid/30">
              <p className="font-body text-sage text-xs mb-2 uppercase tracking-wider">Accepts</p>
              <div className="flex flex-wrap gap-2">
                {["Cash", "Zelle", "Venmo", "Card"].map((method) => (
                  <span key={method} className="px-2.5 py-1 bg-sage-mid/20 border border-sage-mid/30 rounded-full text-xs font-body text-sage-light">
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-sage-mid/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-sage text-xs">© {new Date().getFullYear()} Original Mobile Notary of Nashville. All rights reserved.</p>
          <p className="font-body text-sage text-xs flex items-center gap-1.5">
            <TinyLeaf color="#7A9E8E" className="w-2.5 h-3" />
            Tennessee Commissioned Notary Public
          </p>
        </div>
      </div>
    </footer>
  );
}
