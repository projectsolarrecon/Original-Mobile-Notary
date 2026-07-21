import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BotanicalDivider, CornerLeaves, LeafSprig, TinyLeaf } from "../components/BotanicalAccent";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

const faqs = [
  {
    q: "What do I need to bring to my appointment?",
    a: "Please bring a valid, government-issued photo ID — such as a driver's license, state ID, or passport. Make sure your ID is current (not expired). You'll also need to bring the document(s) you need notarized. Do not sign the document beforehand — the signature must happen in front of us.",
  },
  {
    q: "Do I need to sign the document in front of you?",
    a: "Yes! This is one of the most important parts of notarization. You must sign the document in our presence. If you've already signed it, we generally cannot notarize it — so please wait until we're together.",
  },
  {
    q: "Can you notarize something that's already been signed?",
    a: "In most cases, no. Notarization requires that the signer sign the document in front of the notary. If a document has already been signed, it typically cannot be notarized. There are a few exceptions (like acknowledgments vs. jurats), so feel free to ask us about your specific situation.",
  },
  {
    q: "Do you notarize documents in languages other than English?",
    a: "We can notarize documents written in other languages as long as we can identify the signature line and the notarial certificate is in English. However, we're not able to translate documents or verify the content of a document written in a language we don't read. If you have questions about a specific document, just ask.",
  },
  {
    q: "How far in advance do I need to book?",
    a: "We recommend reaching out as soon as you know you need a notary — even same-day requests are often possible depending on our schedule. For loan signings and real estate closings, a bit more lead time is helpful. For general notarizations, we can often accommodate short-notice requests.",
  },
  {
    q: "What's your cancellation or rescheduling policy?",
    a: "Life happens — we get it! Please let us know as soon as possible if you need to cancel or reschedule. We ask for at least a few hours' notice when possible. For loan signings, please notify us and the title company as early as you can, as these involve more coordination.",
  },
  {
    q: "Do you visit hospitals, care facilities, or homes?",
    a: "Absolutely — this is one of the most important parts of what we do. We regularly visit hospitals, nursing homes, assisted living facilities, rehabilitation centers, and private homes. If a loved one is unable to travel, we'll come to them. Just let us know the location and any special instructions when you book.",
  },
  {
    q: "What forms of payment do you accept?",
    a: "We accept cash, Zelle, Venmo, and card. Payment is collected at the time of service. If you have a question about payment before booking, just ask!",
  },
  {
    q: "What areas do you serve?",
    a: "We provide mobile notary service throughout Nashville, including Downtown, East Nashville, Germantown, The Gulch, Green Hills, Bellevue, Donelson, Hermitage, and Old Hickory. We also regularly serve Goodlettsville, Hendersonville, Gallatin, Mount Juliet, Lebanon, Brentwood, Franklin, Nolensville, Spring Hill, and other surrounding Middle Tennessee communities. Visit the Service Area page for the full neighborhood and community list.",
  },
  {
    q: "How are travel fees determined?",
    a: "Travel fees are based on the appointment location and are confirmed before you book. Send the address or ZIP code along with the type of appointment, and we'll provide the full price up front.",
  },
  {
    q: "How do I get a quote?",
    a: "Easy! Just reach out by phone, text, or the contact form on this site. Tell us what you need notarized, where you're located, and when you'd like to meet. We'll get back to you quickly with a clear, no-pressure quote. Quotes are always free.",
  },
];

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
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
              Answers to common questions about appointments, documents, pricing, and travel throughout Nashville and Middle Tennessee.
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
                We're happy to answer anything that's not covered here. Reach out by phone, text, or the contact form.
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
