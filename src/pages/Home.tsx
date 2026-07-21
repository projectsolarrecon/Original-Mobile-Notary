import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BotanicalDivider, CornerLeaves, LeafSprig, TinyLeaf } from "../components/BotanicalAccent";

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
    desc: "Reach out by phone, text, or the online form. We'll get back to you quickly.",
  },
  {
    number: "02",
    title: "Confirm Details & Location",
    desc: "We'll confirm the documents, time, meeting location, travel fee, and full price before you book.",
  },
  {
    number: "03",
    title: "We Come to You & Get It Done",
    desc: "Brigitte arrives prepared and notarizes your documents professionally at the agreed location.",
  },
];

const servicePromises = [
  {
    icon: "💬",
    title: "Clear Communication",
    text: "You will know what to bring, where to meet, and what the appointment will cost before it begins.",
  },
  {
    icon: "🤝",
    title: "Patient, Personal Service",
    text: "Every appointment is handled with care, especially when working with seniors, families, hospital patients, and people navigating important documents.",
  },
  {
    icon: "📍",
    title: "Reliable and Convenient",
    text: "Brigitte works to accommodate busy schedules, arrives prepared, and brings professional notary service directly to the customer.",
  },
];

const areas = [
  "Nashville",
  "East Nashville",
  "Old Hickory",
  "Hermitage",
  "Goodlettsville",
  "Hendersonville",
  "Gallatin",
  "Mount Juliet",
  "Lebanon",
  "Brentwood",
  "Franklin",
  "Nolensville",
  "Spring Hill",
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative bg-forest overflow-hidden min-h-[92vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-sage-mid opacity-10 -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-terra opacity-10 translate-y-1/3 -translate-x-1/3" />
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-sage opacity-5 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <CornerLeaves color="#7A9E8E" className="absolute top-0 left-0 opacity-20 w-40 h-40" />
        <CornerLeaves color="#C4714A" flip className="absolute top-0 right-0 opacity-15 w-32 h-32" />
        <CornerLeaves color="#7A9E8E" flip className="absolute bottom-0 right-0 opacity-15 w-36 h-36 rotate-180" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <motion.div custom={0} variants={fadeIn} initial="hidden" animate="visible">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-terra/20 text-terra-light text-xs font-bold font-body rounded-full uppercase tracking-widest mb-6 border border-terra/20">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Nashville, Tennessee
                </span>
              </motion.div>

              <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" className="font-display text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-cream leading-[1.15] mb-6">
                Nashville's Original <span className="italic text-sage">Mobile Notary</span> — <span className="text-terra">We Come to You</span>
              </motion.h1>

              <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="font-body text-sage-light text-lg leading-relaxed mb-8 max-w-lg">
                Notarization on your schedule, at your location. Brigitte meets clients at homes, offices, coffee shops, medical facilities, libraries, schools, and other convenient locations throughout Nashville and surrounding Middle Tennessee communities.
              </motion.p>

              <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="px-7 py-3.5 bg-terra text-cream font-bold font-body rounded-full text-center hover:bg-[#b0623e] transition-all shadow-warm-lg text-base">
                  Book an Appointment
                </Link>
                <a href="tel:+15618884808" className="px-7 py-3.5 border-2 border-sage-mid/50 text-cream font-semibold font-body rounded-full text-center hover:bg-sage-mid/20 hover:border-sage transition-all text-base">
                  Call or Text: (561) 888-4808
                </a>
              </motion.div>

              <motion.p custom={4} variants={fadeUp} initial="hidden" animate="visible" className="font-body text-sage text-sm mt-6 flex items-center gap-1.5">
                <TinyLeaf color="#7A9E8E" className="w-3 h-4 shrink-0" />
                Free quotes · Same-day availability · Evenings & weekends
              </motion.p>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.93, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }} className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2.5rem] border border-sage-mid/20" />
                <div className="absolute -inset-6 rounded-[3rem] border border-terra/10" />
                <div className="relative w-72 h-[22rem] md:w-80 md:h-[26rem] rounded-[2rem] overflow-hidden border-2 border-sage-mid/30 shadow-warm-lg bg-[#243D35]">
                  <img
                    src="/brigitte-about-web.jpg"
                    alt="Brigitte, a mobile notary serving Nashville and Middle Tennessee"
                    width={960}
                    height={1280}
                    className="h-full w-full object-cover object-center"
                    loading="eager"
                  />
                </div>

                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.5 }} className="absolute -bottom-4 -left-4 bg-cream rounded-2xl px-4 py-3 shadow-warm-lg border border-parchment">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-terra/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-terra" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <p className="font-body text-bark text-xs font-bold leading-none">TN Commissioned</p>
                      <p className="font-body text-stone text-[10px] mt-0.5">Notary Public</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 0.5 }} className="absolute -top-4 -right-4 bg-cream rounded-2xl px-4 py-3 shadow-warm-lg border border-parchment">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-sage-pale flex items-center justify-center">
                      <svg className="w-4 h-4 text-sage-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
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

      <section className="bg-parchment border-y border-stone-pale/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {trustBadges.map((badge, i) => (
              <motion.div key={badge.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex items-center gap-2 text-sm font-body text-stone font-semibold">
                <span className="text-base">{badge.icon}</span><span>{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
        <CornerLeaves color="#7A9E8E" className="absolute bottom-0 left-0 opacity-[0.06] w-64 h-64" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-4"><span className="font-body text-terra font-bold text-xs uppercase tracking-[0.2em]">Simple Process</span></motion.div>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-forest text-center mb-3">How It Works</motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-body text-stone text-center max-w-md mx-auto mb-4">Three straightforward steps from first contact to completed notarization.</motion.p>
          <BotanicalDivider color="#7A9E8E" className="max-w-xs mx-auto mb-14 opacity-60" />
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div key={step.number} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative bg-parchment rounded-3xl p-7 border border-stone-pale/50 shadow-warm hover:shadow-warm-lg transition-shadow group">
                <div className="w-12 h-12 rounded-2xl bg-forest text-cream font-display font-bold text-lg flex items-center justify-center mb-5 shadow-warm group-hover:bg-terra transition-colors">{step.number}</div>
                <h3 className="font-display text-forest font-semibold text-lg mb-3">{step.title}</h3>
                <p className="font-body text-stone text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-parchment relative overflow-hidden">
        <CornerLeaves color="#C4714A" flip className="absolute top-0 right-0 opacity-[0.07] w-56 h-56" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-4"><span className="font-body text-terra font-bold text-xs uppercase tracking-[0.2em]">What We Do</span></motion.div>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-forest text-center mb-3">Mobile Notary Services</motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-body text-stone text-center max-w-md mx-auto mb-4">From everyday paperwork to real estate closings, each appointment is handled with care and professionalism.</motion.p>
          <BotanicalDivider color="#7A9E8E" className="max-w-xs mx-auto mb-14 opacity-60" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <motion.div key={service.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-start gap-4 p-5 rounded-2xl bg-cream border border-stone-pale/40 hover:border-sage/50 hover:shadow-warm transition-all group">
                <span className="text-2xl mt-0.5 shrink-0">{service.icon}</span>
                <div><h3 className="font-display text-forest font-semibold text-base mb-1 group-hover:text-sage-mid transition-colors">{service.title}</h3><p className="font-body text-stone text-sm">{service.desc}</p></div>
              </motion.div>
            ))}
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 px-7 py-3 border-2 border-forest text-forest font-bold font-body rounded-full hover:bg-forest hover:text-cream transition-all">View All Services <span aria-hidden="true">→</span></Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-forest relative overflow-hidden">
        <CornerLeaves color="#7A9E8E" className="absolute top-0 left-0 opacity-10 w-48 h-48" />
        <CornerLeaves color="#7A9E8E" flip className="absolute bottom-0 right-0 opacity-10 w-48 h-48 rotate-180" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-4"><span className="font-body text-terra-light font-bold text-xs uppercase tracking-[0.2em]">What You Can Expect</span></motion.div>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-cream text-center mb-3">A Service Experience Built Around You</motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-body text-sage-light text-center max-w-3xl mx-auto mb-4 leading-relaxed">
            Original Mobile Notary is a new business, but attentive customer service is not new to Brigitte. She brings years of experience serving customers in their homes and businesses with patience, reliability, honesty, clear communication, and personalized service.
          </motion.p>
          <BotanicalDivider color="#7A9E8E" className="max-w-xs mx-auto mb-14 opacity-40" />
          <div className="grid md:grid-cols-3 gap-6">
            {servicePromises.map((promise, i) => (
              <motion.div key={promise.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-cream/8 backdrop-blur rounded-3xl p-7 border border-sage-mid/20 hover:border-sage-mid/40 hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-terra/20 border border-terra/30 flex items-center justify-center text-2xl mb-5">{promise.icon}</div>
                <h3 className="font-display text-cream font-semibold text-xl mb-3">{promise.title}</h3>
                <p className="font-body text-sage-light text-sm leading-relaxed">{promise.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
        <CornerLeaves color="#7A9E8E" flip className="absolute top-0 right-0 opacity-[0.06] w-56 h-56" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="order-2 md:order-1">
              <div className="rounded-3xl overflow-hidden shadow-warm-lg border border-stone-pale/50 h-72 md:h-80 bg-sage-pale flex items-center justify-center relative">
                <CornerLeaves color="#7A9E8E" className="absolute top-0 left-0 opacity-20 w-24 h-24" />
                <CornerLeaves color="#7A9E8E" flip className="absolute bottom-0 right-0 opacity-20 w-24 h-24 rotate-180" />
                <div className="text-center relative z-10 px-8">
                  <svg className="w-14 h-14 mx-auto mb-3 text-sage-mid opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                  <p className="font-display text-forest text-lg font-semibold">Nashville & Middle Tennessee</p>
                  <p className="font-body text-stone text-sm mt-2">Mobile appointments at homes, businesses, hospitals, care facilities, and other convenient meeting places.</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 md:order-2">
              <span className="font-body text-terra font-bold text-xs uppercase tracking-[0.2em]">Where We Go</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-forest mt-2 mb-4">Serving Nashville and Surrounding Communities</h2>
              <p className="font-body text-stone leading-relaxed mb-6">Mobile notary service is available throughout Nashville neighborhoods and nearby Middle Tennessee communities.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {areas.map((area, i) => (
                  <motion.span key={area} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="px-3 py-1.5 bg-parchment border border-stone-pale/60 rounded-full text-sm font-body text-bark font-medium shadow-warm hover:border-sage/50 hover:bg-sage-pale transition-all cursor-default">{area}</motion.span>
                ))}
              </div>
              <Link to="/service-area" className="inline-flex items-center gap-2 px-7 py-3 bg-forest text-cream font-bold font-body rounded-full hover:bg-sage-mid transition-colors shadow-warm">View Full Service Area <span aria-hidden="true">→</span></Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-parchment relative overflow-hidden">
        <CornerLeaves color="#C4714A" className="absolute top-0 left-0 opacity-[0.08] w-48 h-48" />
        <CornerLeaves color="#C4714A" flip className="absolute bottom-0 right-0 opacity-[0.08] w-48 h-48 rotate-180" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <LeafSprig color="#7A9E8E" className="mx-auto mb-6 opacity-60" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest mb-4">Ready to Get Started?</h2>
            <p className="font-body text-stone text-lg mb-8 max-w-xl mx-auto">Share the document type, preferred time, and appointment address or ZIP code for a clear quote.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="px-8 py-3.5 bg-terra text-cream font-bold font-body rounded-full hover:bg-[#b0623e] transition-all shadow-warm-lg">Book an Appointment</Link>
              <a href="tel:+15618884808" className="px-8 py-3.5 bg-forest text-cream font-bold font-body rounded-full hover:bg-sage-mid transition-all shadow-warm">Call (561) 888-4808</a>
            </div>
            <p className="font-body text-stone text-sm mt-6 italic">Need someone today? Call or text for the fastest response.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
