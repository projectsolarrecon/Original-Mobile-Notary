import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BotanicalDivider, CornerLeaves, LeafSprig, TinyLeaf } from "../components/BotanicalAccent";
import { faqs, type FAQEntry } from "../data/faqs";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

function FAQItem({ faq, index }: { faq: FAQEntry; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className={`rounded-3xl overflow-hidden border transition-all duration-200 ${
        open
          ? "border-sage/50 shadow-warm bg-cream"
          : "border-stone-pale/50 bg-parchment hover:border-sage/30 hover:bg-cream"
      }`}
    >
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-5 text-left" aria-expanded={open}>
        <span className="font-display text-forest font-semibold pr-4 text-base leading-snug">{faq.q}</span>
        <div className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 ${open ? "bg-terra text-cream rotate-180" : "bg-stone-pale/60 text-stone"}`}>
          <svg className="w-4 h-4 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }} className="overflow-hidden">
            <div className="px-6 pb-6 font-body text-stone text-sm leading-relaxed border-t border-stone-pale/40 pt-4 flex gap-3">
              <TinyLeaf color="#7A9E8E" className="w-3 h-4 shrink-0 mt-0.5 opacity-60" />
              <p>{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative bg-forest overflow-hidden py-20 md:py-24">
        <CornerLeaves color="#7A9E8E" className="absolute top-0 left-0 opacity-20 w-40 h-40" />
        <CornerLeaves color="#C4714A" flip className="absolute bottom-0 right-0 opacity-15 w-36 h-36 rotate-180" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="font-body text-terra-light font-bold text-xs uppercase tracking-[0.2em]">Got Questions?</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mt-3 mb-4">Frequently Asked Questions</h1>
            <p className="font-body text-sage-light text-lg max-w-2xl mx-auto">
              Answers about appointments, identification, payment, discounts, hours, pricing, and mobile service throughout Nashville and Middle Tennessee.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
        <CornerLeaves color="#7A9E8E" className="absolute bottom-0 left-0 opacity-[0.06] w-52 h-52" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <BotanicalDivider color="#7A9E8E" className="max-w-xs mx-auto mb-14 opacity-60" />
          <div className="space-y-3">
            {faqs.map((faq, i) => <FAQItem key={faq.q} faq={faq} index={i} />)}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-12 bg-forest rounded-3xl p-8 text-center relative overflow-hidden">
            <CornerLeaves color="#7A9E8E" className="absolute top-0 left-0 opacity-15 w-28 h-28" />
            <CornerLeaves color="#7A9E8E" flip className="absolute bottom-0 right-0 opacity-15 w-28 h-28 rotate-180" />
            <div className="relative">
              <LeafSprig color="#7A9E8E" className="mx-auto mb-4 opacity-50" />
              <h3 className="font-display text-cream font-bold text-xl mb-3">Still have a question?</h3>
              <p className="font-body text-sage-light text-sm mb-6">
                Reach out by phone, text, email, or the contact form. Brigitte will confirm availability and the full price before the appointment.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact" className="px-6 py-3 bg-terra text-cream font-bold font-body rounded-full hover:bg-[#b0623e] transition-all shadow-warm">Send a Message</Link>
                <a href="tel:+15618884808" className="px-6 py-3 border-2 border-sage-mid/50 text-cream font-bold font-body rounded-full hover:bg-sage-mid/20 hover:border-sage transition-all">Call (561) 888-4808</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
