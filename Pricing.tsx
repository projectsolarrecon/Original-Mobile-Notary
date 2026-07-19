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
    desc: "Travel is the primary factor in your quote. We'll always be upfront about the travel cost before confirming anything.",
  },
  {
    icon: "📋",
    title: "Number of Signatures",
    desc: "Tennessee state law sets a maximum per-signature notary fee, so more signatures means a slightly higher notary fee.",
  },
  {
    icon: "🕐",
    title: "Time of Day & Day of Week",
    desc: "Standard business hours are the most affordable. Evening and weekend appointments may include a small additional fee.",
  },
  {
    icon: "⚡",
    title: "Same-Day or Rush Requests",
    desc: "Need it done today? We'll do our best to make it happen — same-day and urgent requests may carry a higher rate.",
  },
  {
    icon: "🏠",
    title: "Location Type",
    desc: "Most appointments are straightforward. Some commercial or high-traffic locations may affect timing and logistics.",
  },
  {
    icon: "🅿️",
    title: "Parking",
    desc: "If parking is limited or paid at your location, that may factor into the overall cost. Just mention it when you reach out.",
  },
];

export default function Pricing() {
  return (
    <div className="overflow-x-hidden">

      {/* ── Page Header ── */}
      <section className="relative bg-forest overflow-hidden py-20 md:py-24">
        <CornerLeaves color="#7A9E8E" className="absolute top-0 left-0 opacity-20 w-40 h-40" />
        <CornerLeaves color="#C4714A" flip className="absolute bottom-0 right-0 opacity-15 w-36 h-36 rotate-180" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="font-body text-terra-light font-bold text-xs uppercase tracking-[0.2em]">Transparent & Fair</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mt-3 mb-4">Pricing</h1>
            <p className="font-body text-sage-light text-lg max-w-2xl mx-auto">
              Every quote is tailored to your situation — here's exactly what goes into it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Inline CTA Banner ── */}
      <div className="bg-terra">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <TinyLeaf color="#FAF7F2" className="w-3 h-4 shrink-0 opacity-80" />
            <p className="font-body text-cream font-semibold text-sm text-center sm:text-left">
              The fastest way to get our best price? Just ask — quotes are free and we respond quickly.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-cream text-terra font-bold font-body rounded-full text-sm hover:bg-parchment transition-colors shadow-warm whitespace-nowrap"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+16155550000"
              className="px-5 py-2.5 border-2 border-cream/50 text-cream font-bold font-body rounded-full text-sm hover:bg-cream/10 transition-colors whitespace-nowrap"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>

      {/* ── Pricing Factors ── */}
      <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
        <CornerLeaves color="#7A9E8E" className="absolute bottom-0 left-0 opacity-[0.06] w-56 h-56" />
        <CornerLeaves color="#7A9E8E" flip className="absolute top-0 right-0 opacity-[0.06] w-52 h-52" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <BotanicalDivider color="#7A9E8E" className="max-w-xs mx-auto mb-14 opacity-60" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-4"
          >
            <span className="font-body text-terra font-bold text-xs uppercase tracking-[0.2em]">What Goes Into Your Quote</span>
          </motion.div>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-display text-2xl md:text-3xl font-bold text-forest text-center mb-3"
          >
            Six Factors That Shape Your Price
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-body text-stone text-center max-w-lg mx-auto mb-4"
          >
            We keep our pricing straightforward and transparent. Here's everything we look at when building your quote — no surprises, ever.
          </motion.p>

          <BotanicalDivider color="#7A9E8E" className="max-w-xs mx-auto mb-14 opacity-60" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {factors.map((factor, i) => (
              <motion.div
                key={factor.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-parchment rounded-3xl p-6 border border-stone-pale/50 hover:border-sage/40 hover:shadow-warm transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-cream border border-stone-pale/60 flex items-center justify-center text-2xl mb-4 shadow-warm group-hover:border-sage/40 transition-colors">
                  {factor.icon}
                </div>
                <h3 className="font-display text-forest font-semibold mb-2">{factor.title}</h3>
                <p className="font-body text-stone text-sm leading-relaxed">{factor.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* TN Law note */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-10 bg-sage-pale border border-sage/30 rounded-3xl p-6 flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-2xl bg-sage/20 flex items-center justify-center shrink-0 text-xl">🏛️</div>
            <div>
              <h3 className="font-display text-forest font-semibold text-lg mb-2">Tennessee Notary Fee Regulations</h3>
              <p className="font-body text-stone text-sm leading-relaxed">
                Tennessee state law sets a maximum fee notaries can charge per signature — that portion of your quote is regulated and consistent across the state.{" "}
                <strong className="text-forest">Travel is the main variable</strong> that makes each quote unique to your location.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-forest relative overflow-hidden">
        <CornerLeaves color="#7A9E8E" className="absolute top-0 left-0 opacity-15 w-44 h-44" />
        <CornerLeaves color="#7A9E8E" flip className="absolute bottom-0 right-0 opacity-15 w-44 h-44 rotate-180" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <LeafSprig color="#7A9E8E" className="mx-auto mb-6 opacity-50" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-4">
              Ready to Get Your Quote?
            </h2>
            <p className="font-body text-sage-light text-lg mb-8">
              Tell us what you need and where you are — we'll get back to you with a clear, no-pressure price right away. Quotes are always free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-terra text-cream font-bold font-body rounded-full hover:bg-[#b0623e] transition-all shadow-warm-lg"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+16155550000"
                className="px-8 py-3.5 border-2 border-sage-mid/50 text-cream font-bold font-body rounded-full hover:bg-sage-mid/20 hover:border-sage transition-all"
              >
                Call (615) 555-0000
              </a>
            </div>
            <p className="font-body text-sage text-sm mt-5 italic">
              Most quotes are turned around within the hour.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
