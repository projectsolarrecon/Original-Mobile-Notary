import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { TinyLeaf } from "./BotanicalAccent";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Service Area", path: "/service-area" },
  { label: "Pricing", path: "/pricing" },
  { label: "About", path: "/about" },
  { label: "FAQ", path: "/faq" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-cream/95 backdrop-blur-sm border-b border-parchment sticky top-0 z-50 shadow-warm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[4.5rem]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="Original Mobile Notary of Nashville — Home">
            <div className="relative w-10 h-10 rounded-full bg-forest flex items-center justify-center shadow-warm shrink-0">
              {/* Notary seal icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="9" stroke="#D4E6DF" strokeWidth="1.2" />
                <path d="M9 12l2 2 4-4" stroke="#D4E6DF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="5.5" stroke="#7A9E8E" strokeWidth="0.8" strokeDasharray="2 2" />
              </svg>
              {/* Small leaf accent on logo circle */}
              <TinyLeaf
                color="#C4714A"
                className="absolute -top-1.5 -right-1 w-3 h-4 opacity-80"
              />
            </div>
            <div className="leading-tight">
              <div className="font-display text-forest font-semibold text-[15px] tracking-tight leading-none">
                Original Mobile Notary
              </div>
              <div className="font-body text-terra text-[10px] font-700 tracking-[0.18em] uppercase mt-0.5">
                of Nashville
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3.5 py-2 text-sm font-semibold font-body transition-colors rounded-lg ${
                    active
                      ? "text-forest"
                      : "text-stone hover:text-forest hover:bg-sage-pale"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-terra rounded-full"
                    />
                  )}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="ml-3 px-5 py-2.5 bg-terra text-cream text-sm font-bold font-body rounded-full hover:bg-[#b0623e] transition-colors shadow-warm"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-forest hover:bg-sage-pale transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <div className="w-5 h-[18px] flex flex-col justify-between">
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden border-t border-parchment bg-cream overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-1" aria-label="Mobile navigation">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold font-body transition-colors ${
                      active
                        ? "text-forest bg-sage-pale"
                        : "text-stone hover:text-forest hover:bg-sage-pale"
                    }`}
                  >
                    {active && <TinyLeaf color="#7A9E8E" className="w-3 h-4 shrink-0" />}
                    {link.label}
                  </Link>
                );
              })}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="block mt-3 px-4 py-3 bg-terra text-cream text-sm font-bold font-body rounded-xl text-center hover:bg-[#b0623e] transition-colors shadow-warm"
              >
                Book an Appointment
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
