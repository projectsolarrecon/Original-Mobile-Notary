    import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BotanicalDivider, CornerLeaves, LeafSprig, TinyLeaf } from "../components/BotanicalAccent";

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

/* ── Data ── */
const trustBadges = [
  { label: "TN Commissioned Notary", icon: "🏛️" },
  { label: "NNA Member", icon: "🤝" },
  { label: "Certified Signing Agent", icon: "✍️" },
  { label: "E&O Insured", icon: "🛡️" },
  { label: "Background Checked", icon: "✅" },
];

const services = [
  { icon: "📄", title: "General Notarizations", desc: "Everyday documents, affidavits, and more" },
  { icon: "🏫", title: "School & Field Trip Forms", desc: "Quick turnaround for school paperwork" },
  { icon: "🏥", title: "Medical Documents", desc: "Healthcare directives and authorizations" },
  { icon: "⚖️", title: "Powers of Attorney", desc: "Legal authority documents handled with care" },
  { icon: "🏡", title: "Real Estate & Loan Signings", desc: "Certified signing agent for closings" },
  { icon: "📋", title: "Wills & Estate Documents", desc: "Sensitive documents handled respectfully" },
];

const steps = [
  {
    number: "01",
    title: "Request a Quote or Appointment",
    desc: "Reach out by phone, text, or the online form. We'll get back to you quickly — usually within the hour.",
  },
  {
    number: "02",
    title: "Confirm Details & Location",
    desc: "We'll nail down the documents, time, and where you'd like to meet — your home, office, hospital, or anywhere convenient.",
  },
  {
    number: "03",
    title: "We Come to You & Get It Done",
    desc: "We arrive on time, notarize your documents professionally, and you're on your way. Simple as that.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    text: "She came to my house on a Saturday evening to notarize my power of attorney. So professional and kind — I couldn't believe how easy it was!",
    stars: 5,
  },
  {
    name: "James T.",
    text: "Used her for a real estate closing. She was on time, prepared, and made the whole process stress-free. Will definitely use again.",
    stars: 5,
  },
  {
    name: "Linda R.",
    text: "I needed documents notarized at my mom's care facility. She was so patient and compassionate. Highly recommend!",
    stars: 5,
  },
];

const areas = [
  "Nashville", "Brentwood", "Franklin", "Murfreesboro",
  "Hendersonville", "Gallatin", "Mt. Juliet", "Smyrna",
  "Nolensville", "Spring Hill", "La Vergne", "Antioch",
];

/* ── Component ── */
export default function Home() {
  return (
    <div className="overflow-x-hidden">

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative bg-forest overflow-hidden min-h-[92vh] flex items-center">
        {/* Background texture blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-sage-mid opacity-10 -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-terra opacity-10 translate-y-1/3 -translate-x-1/3" />
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-sage opacity-5 -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Corner botanical decorations */}
        <CornerLeaves
          color="#7A9E8E"
          className="absolute top-0 left-0 opacity-20 w-40 h-40"
        />
        <CornerLeaves
          color="#C4714A"
          flip
          className="absolute top-0 right-0 opacity-15 w-32 h-32"
        />
        <CornerLeaves
          color="#7A9E8E"
          flip
          className="absolute bottom-0 right-0 opacity-15 w-36 h-36 rotate-180"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — copy */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              {/* Location pill */}
              <motion.div custom={0} variants={fadeIn} initial="hidden" animate="visible">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-terra/20 text-terra-light text-xs font-bold font-body rounded-full uppercase tracking-widest mb-6 border border-terra/20">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Nashville, Tennessee
                </span>
              </motion.div>

              <motion.h1
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="font-display text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-cream leading-[1.15] mb-6"
              >
                Nashville's Original{" "}
                <span className="italic text-sage">Mobile Notary</span>
                {" "}—{" "}
                <span className="text-terra">We Come to You</span>
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="font-body text-sage-light text-lg leading-relaxed mb-8 max-w-lg"
              >
                Notarization on your schedule, at your location. We meet you wherever is most convenient — your home, office, coffee shop, medical facility, library, school, or anywhere else that works for you. Available evenings and weekends.
              </motion.p>

              <motion.div
                custom={3}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex flex-col sm:flex-row gap-3"
              >
                <Link
                  to="/contact"
                  className="px-7 py-3.5 bg-terra text-cream font-bold font-body rounded-full text-center hover:bg-[#b0623e] transition-all shadow-warm-lg text-base"
                >
                  Book an Appointment
                </Link>
                <a
                  href="tel:+16155550000"
                  className="px-7 py-3.5 border-2 border-sage-mid/50 text-cream font-semibold font-body rounded-full text-center hover:bg-sage-mid/20 hover:border-sage transition-all text-base"
                >
                  Call or Text: (615) 555-0000
                </a>
              </motion.div>

              {/* Small trust note */}
              <motion.p
                custom={4}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="font-body text-sage text-sm mt-6 flex items-center gap-1.5"
              >
                <TinyLeaf color="#7A9E8E" className="w-3 h-4 shrink-0" />
                Free quotes · Same-day availability · Evenings & weekends
              </motion.p>
            </motion.div>

            {/* Right — photo placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute -inset-3 rounded-[2rem] border border-sage-mid/20 rounded-[2.5rem]" />
                <div className="absolute -inset-6 rounded-[3rem] border border-terra/10" />

                {/* Photo frame */}
                <div className="relative w-72 h-[22rem] md:w-80 md:h-[26rem] rounded-[2rem] overflow-hidden border-2 border-sage-mid/30 shadow-warm-lg bg-[#243D35] flex flex-col items-center justify-center gap-4">
                  {/* Botanical corner in placeholder */}
                  <CornerLeaves color="#7A9E8E" className="absolute top-0 left-0 opacity-20 w-24 h-24" />
                  <CornerLeaves color="#7A9E8E" flip className="absolute top-0 right-0 opacity-20 w-24 h-24" />

                  <div className="w-24 h-24 rounded-full bg-sage-mid/20 border-2 border-sage-mid/30 flex items-center justify-center">
                    <svg className="w-12 h-12 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="text-center px-8">
                    <p className="font-display text-sage text-base italic mb-1">Brigitte</p>
                    <p className="font-body text-sage/60 text-xs">Professional photo coming soon</p>
                  </div>

                  {/* Bottom botanical */}
                  <CornerLeaves color="#C4714A" className="absolute bottom-0 right-0 opacity-15 w-20 h-20 rotate-180" />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-cream rounded-2xl px-4 py-3 shadow-warm-lg border border-parchment"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-terra/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-terra" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body text-bark text-xs font-bold leading-none">TN Commissioned</p>
                      <p className="font-body text-stone text-[10px] mt-0.5">Notary Public</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -top-4 -right-4 bg-cream rounded-2xl px-4 py-3 shadow-warm-lg border border-parchment"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-sage-pale flex items-center justify-center">
                      <svg className="w-4 h-4 text-sage-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body text-bark text-xs font-bold leading-none">We Come to You</p>
                      <p className="font-body text-stone text-[10px] mt-0.5">Greater Nashville</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TRUST BADGES
      ═══════════════════════════════════════ */}
      <section className="bg-parchment border-y border-stone-pale/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {trustBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex items-center gap-2 text-sm font-body text-stone font-semibold"
              >
                <span className="text-base">{badge.icon}</span>
                <span>{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HOW IT WORKS
      ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
        {/* Subtle background leaf */}
        <CornerLeaves
          color="#7A9E8E"
          className="absolute bottom-0 left-0 opacity-[0.06] w-64 h-64"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-4"
          >
            <span className="font-body text-terra font-bold text-xs uppercase tracking-[0.2em]">Simple Process</span>
          </motion.div>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl font-bold text-forest text-center mb-3"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-body text-stone text-center max-w-md mx-auto mb-4"
          >
            Getting your documents notarized has never been easier. Three steps and you're done.
          </motion.p>

          <BotanicalDivider color="#7A9E8E" className="max-w-xs mx-auto mb-14 opacity-60" />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative bg-parchment rounded-3xl p-7 border border-stone-pale/50 shadow-warm hover:shadow-warm-lg transition-shadow group"
              >
                {/* Step number */}
                <div className="w-12 h-12 rounded-2xl bg-forest text-cream font-display font-bold text-lg flex items-center justify-center mb-5 shadow-warm group-hover:bg-terra transition-colors">
                  {step.number}
                </div>
                {/* Connector arrow (desktop) */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-[3.25rem] -right-4 z-10">
                    <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                      <path d="M0 8 Q16 8 24 8" stroke="#C4714A" strokeWidth="1.5" strokeDasharray="3 3" />
                      <path d="M22 4 L28 8 L22 12" stroke="#C4714A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
                <h3 className="font-display text-forest font-semibold text-lg mb-3">{step.title}</h3>
                <p className="font-body text-stone text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES OVERVIEW
      ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-parchment relative overflow-hidden">
        <CornerLeaves
          color="#C4714A"
          flip
          className="absolute top-0 right-0 opacity-[0.07] w-56 h-56"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-4"
          >
            <span className="font-body text-terra font-bold text-xs uppercase tracking-[0.2em]">What We Do</span>
          </motion.div>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl font-bold text-forest text-center mb-3"
          >
            Services We Offer
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-body text-stone text-center max-w-md mx-auto mb-4"
          >
            From everyday paperwork to real estate closings, we handle it all with care and professionalism.
          </motion.p>

          <BotanicalDivider color="#7A9E8E" className="max-w-xs mx-auto mb-14 opacity-60" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-start gap-4 p-5 rounded-2xl bg-cream border border-stone-pale/40 hover:border-sage/50 hover:shadow-warm transition-all group"
              >
                <span className="text-2xl mt-0.5 shrink-0">{service.icon}</span>
                <div>
                  <h3 className="font-display text-forest font-semibold text-base mb-1 group-hover:text-sage-mid transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-body text-stone text-sm">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-10"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3 border-2 border-forest text-forest font-bold font-body rounded-full hover:bg-forest hover:text-cream transition-all"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-forest relative overflow-hidden">
        <CornerLeaves color="#7A9E8E" className="absolute top-0 left-0 opacity-10 w-48 h-48" />
        <CornerLeaves color="#7A9E8E" flip className="absolute bottom-0 right-0 opacity-10 w-48 h-48 rotate-180" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-4"
          >
            <span className="font-body text-terra-light font-bold text-xs uppercase tracking-[0.2em]">Reviews</span>
          </motion.div>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl font-bold text-cream text-center mb-3"
          >
            What Clients Are Saying
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-body text-sage-light text-center max-w-md mx-auto mb-4"
          >
            Real reviews from real Nashville neighbors
          </motion.p>

          <BotanicalDivider color="#7A9E8E" className="max-w-xs mx-auto mb-14 opacity-40" />

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-cream/8 backdrop-blur rounded-3xl p-7 border border-sage-mid/20 hover:border-sage-mid/40 transition-colors"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-terra-light" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote mark */}
                <div className="font-display text-sage-mid text-5xl leading-none mb-2 opacity-40">"</div>

                <p className="font-body text-sage-light text-sm leading-relaxed mb-5 italic">
                  {t.text}
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-sage-mid/20">
                  <div className="w-9 h-9 rounded-full bg-terra/20 border border-terra/30 flex items-center justify-center font-display text-terra-light font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-body text-cream font-semibold text-sm">{t.name}</p>
                    <p className="font-body text-sage text-xs flex items-center gap-1">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                      </svg>
                      Google Review
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          COVERAGE AREA PREVIEW
      ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
        <CornerLeaves color="#7A9E8E" flip className="absolute top-0 right-0 opacity-[0.06] w-56 h-56" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 md:order-1"
            >
              <div className="rounded-3xl overflow-hidden shadow-warm-lg border border-stone-pale/50 h-72 md:h-80 bg-sage-pale flex items-center justify-center relative">
                <CornerLeaves color="#7A9E8E" className="absolute top-0 left-0 opacity-20 w-24 h-24" />
                <CornerLeaves color="#7A9E8E" flip className="absolute bottom-0 right-0 opacity-20 w-24 h-24 rotate-180" />
                <div className="text-center relative z-10">
                  <svg className="w-14 h-14 mx-auto mb-3 text-sage-mid opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="font-display text-forest/50 text-sm italic">Nashville Service Area Map</p>
                  <p className="font-body text-stone text-xs mt-1">Interactive map coming soon</p>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="order-1 md:order-2"
            >
              <span className="font-body text-terra font-bold text-xs uppercase tracking-[0.2em]">Where We Go</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-forest mt-2 mb-4">
                Serving Greater Nashville
              </h2>
              <p className="font-body text-stone leading-relaxed mb-6">
                We travel throughout Nashville and the surrounding communities. If you're not sure whether we cover your area, just ask — we're happy to check!
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {areas.map((city, i) => (
                  <motion.span
                    key={city}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="px-3 py-1.5 bg-parchment border border-stone-pale/60 rounded-full text-sm font-body text-bark font-medium shadow-warm hover:border-sage/50 hover:bg-sage-pale transition-all cursor-default"
                  >
                    {city}
                  </motion.span>
                ))}
              </div>

              <Link
                to="/service-area"
                className="inline-flex items-center gap-2 px-7 py-3 bg-forest text-cream font-bold font-body rounded-full hover:bg-sage-mid transition-colors shadow-warm"
              >
                View Full Service Area
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-parchment relative overflow-hidden">
        <CornerLeaves color="#C4714A" className="absolute top-0 left-0 opacity-[0.08] w-48 h-48" />
        <CornerLeaves color="#C4714A" flip className="absolute bottom-0 right-0 opacity-[0.08] w-48 h-48 rotate-180" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <LeafSprig color="#7A9E8E" className="mx-auto mb-6 opacity-60" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest mb-4">
              Ready to Get Started?
            </h2>
            <p className="font-body text-stone text-lg mb-8 max-w-xl mx-auto">
              Quotes are free and fast. Reach out today and we'll get back to you quickly — usually within the hour.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-terra text-cream font-bold font-body rounded-full hover:bg-[#b0623e] transition-all shadow-warm-lg"
              >
                Book an Appointment
              </Link>
              <a
                href="tel:+16155550000"
                className="px-8 py-3.5 bg-forest text-cream font-bold font-body rounded-full hover:bg-sage-mid transition-all shadow-warm"
              >
                Call (615) 555-0000
              </a>
            </div>
            <p className="font-body text-stone text-sm mt-6 italic">
              Need someone today? Call or text for fastest response.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}