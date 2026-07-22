import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BotanicalDivider, CornerLeaves, LeafSprig, TinyLeaf } from "../components/BotanicalAccent";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const factors = [
  {
    icon: "🚗",
    title: "Distance Traveled",
    desc: "Travel is a primary part of the quote. The appointment address or ZIP code helps Brigitte calculate the route before confirming the price.",
  },
  {
    icon: "📋",
    title: "Documents & Signatures",
    desc: "The number of documents, signers, signatures, and notarial acts can affect the total appointment price.",
  },
  {
    icon: "🕐",
    title: "Time & Scheduling",
    desc: "Appointments are generally available from 8:00 a.m. to 8:00 p.m. Timing, day of week, and scheduling flexibility may affect the quote.",
  },
  {
    icon: "⚡",
    title: "Same-Day or After-Hours Requests",
    desc: "Same-day and after-hours service may sometimes be available. Availability and any related price adjustment are confirmed before booking.",
  },
  {
    icon: "🏠",
    title: "Appointment Setting",
    desc: "Homes, businesses, hospitals, care facilities, and other locations can involve different travel, access, waiting, or coordination needs.",
  },
  {
    icon: "🅿️",
    title: "Parking & Access",
    desc: "Paid parking, secure buildings, hospital check-in, or difficult access may affect the time and cost of the appointment.",
  },
];

export default function Pricing() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative bg-forest overflow-hidden py-20 md:py-24">
        <CornerLeaves color="#7A9E8E" className="absolute top-0 left-0 opacity-20 w-40 h-40" />
        <CornerLeaves color="#C4714A" flip className="absolute bottom-0 right-0 opacity-15 w-36 h-36 rotate-180" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="font-body text-terra-light font-bold text-xs uppercase tracking-[0.2em]">Clear Quotes, Confirmed Up Front</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mt-3 mb-4">Mobile Notary Pricing</h1>
            <p className="font-body text-sage-light text-lg max-w-2xl mx-auto">
              Every appointment is different. Share the details and receive the full price before you decide to book.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="bg-terra">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <TinyLeaf color="#FAF7F2" className="w-3 h-4 shrink-0 opacity-80" />
            <p className="font-body text-cream font-semibold text-sm text-center sm:text-left">
              Quotes are free. Ask about any currently available discounts or flexible scheduling options.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link to="/contact" className="px-5 py-2.5 bg-cream text-terra font-bold font-body rounded-full text-sm hover:bg-parchment transition-colors shadow-warm whitespace-nowrap">
              Get a Free Quote
            </Link>
            <a href="tel:+15618884808" className="px-5 py-2.5 border-2 border-cream/50 text-cream font-bold font-body rounded-full text-sm hover:bg-cream/10 transition-colors whitespace-nowrap">
              Call or Text
            </a>
          </div>
        </div>
      </div>

      <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
        <CornerLeaves color="#7A9E8E" className="absolute bottom-0 left-0 opacity-[0.06] w-56 h-56" />
        <CornerLeaves color="#7A9E8E" flip className="absolute top-0 right-0 opacity-[0.06] w-52 h-52" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <BotanicalDivider color="#7A9E8E" className="max-w-xs mx-auto mb-14 opacity-60" />

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-4">
            <span className="font-body text-terra font-bold text-xs uppercase tracking-[0.2em]">What Goes Into Your Quote</span>
          </motion.div>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-display text-2xl md:text-3xl font-bold text-forest text-center mb-3">
            Six Factors That Can Shape the Price
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-body text-stone text-center max-w-2xl mx-auto mb-4">
            Send the document type, number of signers or signatures, preferred time, and appointment address or ZIP code. Brigitte will confirm the total before traveling.
          </motion.p>

          <BotanicalDivider color="#7A9E8E" className="max-w-xs mx-auto mb-14 opacity-60" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {factors.map((factor, i) => (
              <motion.div key={factor.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-parchment rounded-3xl p-6 border border-stone-pale/50 hover:border-sage/40 hover:shadow-warm transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-cream border border-stone-pale/60 flex items-center justify-center text-2xl mb-4 shadow-warm group-hover:border-sage/40 transition-colors">
                  {factor.icon}
                </div>
                <h3 className="font-display text-forest font-semibold mb-2">{factor.title}</h3>
                <p className="font-body text-stone text-sm leading-relaxed">{factor.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-10 bg-sage-pale border border-sage/30 rounded-3xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-sage/20 flex items-center justify-center shrink-0 text-xl">💬</div>
            <div>
              <h3 className="font-display text-forest font-semibold text-lg mb-2">Ask About Available Options</h3>
              <p className="font-body text-stone text-sm leading-relaxed">
                Discounts or scheduling-based adjustments may be available for some appointments. There is no automatic or guaranteed discount schedule; any option is discussed and confirmed as part of the individual quote.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-forest relative overflow-hidden">
        <CornerLeaves color="#7A9E8E" className="absolute top-0 left-0 opacity-15 w-44 h-44" />
        <CornerLeaves color="#7A9E8E" flip className="absolute bottom-0 right-0 opacity-15 w-44 h-44 rotate-180" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <LeafSprig color="#7A9E8E" className="mx-auto mb-6 opacity-50" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-4">Ready to Get Your Quote?</h2>
            <p className="font-body text-sage-light text-lg mb-8">
              Tell Brigitte what you need, when you need it, and where the appointment would take place. You will receive the total price before confirming.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="px-8 py-3.5 bg-terra text-cream font-bold font-body rounded-full hover:bg-[#b0623e] transition-all shadow-warm-lg">
                Get a Free Quote
              </Link>
              <a href="tel:+15618884808" className="px-8 py-3.5 border-2 border-sage-mid/50 text-cream font-bold font-body rounded-full hover:bg-sage-mid/20 hover:border-sage transition-all">
                Call (561) 888-4808
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
