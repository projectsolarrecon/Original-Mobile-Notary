import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BotanicalDivider,
  CornerLeaves,
  LeafSprig,
  TinyLeaf,
} from "../components/BotanicalAccent";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const reasons = [
  {
    icon: "⚡",
    title: "Same-Day Requests Welcome",
    description:
      "Need a document notarized quickly? Same-day appointments may sometimes be available when the schedule and travel route allow. Calling or texting provides the fastest response.",
  },
  {
    icon: "🛡️",
    title: "Commissioned & Insured",
    description:
      "Work with a commissioned Tennessee notary who carries Errors & Omissions insurance for added confidence and peace of mind.",
  },
  {
    icon: "✅",
    title: "NNA Certified",
    description:
      "NNA certification, signing-agent training, and background screening support careful, professional service for both general notarizations and loan signings.",
  },
  {
    icon: "📍",
    title: "A Large Service Area",
    description:
      "Mobile service is available throughout Nashville and many surrounding Middle Tennessee communities, bringing the appointment to an agreed location that works for you.",
  },
  {
    icon: "💳",
    title: "Flexible Payment Options",
    description:
      "Pay by cash, major card, or most common digital payment methods, including options such as Cash App, Venmo, Zelle, and Apple Pay.",
  },
  {
    icon: "🏷️",
    title: "Ask About Available Discounts",
    description:
      "Discounts or scheduling-based adjustments may be available for some appointments. Any option is discussed and confirmed as part of the individual quote.",
  },
  {
    icon: "🗓️",
    title: "Flexible Scheduling",
    description:
      "Appointments are generally available from 8:00 a.m. to 8:00 p.m. Same-day and after-hours service may sometimes be available by request.",
  },
  {
    icon: "🤝",
    title: "Personal, Patient Service",
    description:
      "You receive friendly, one-on-one attention, clear communication, and a notary who respects your time, privacy, and questions.",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    text: "Call, text, email, or send a message with your document type, preferred time, and appointment location.",
  },
  {
    number: "02",
    title: "Confirm the details",
    text: "Brigitte will confirm availability, travel details, identification requirements, payment options, and the full price before the appointment.",
  },
  {
    number: "03",
    title: "Meet at the agreed location",
    text: "Meet at your home, office, hospital, care facility, library, coffee shop, or another agreed location within the service area.",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative bg-forest overflow-hidden py-20 md:py-24">
        <CornerLeaves color="#7A9E8E" className="absolute top-0 left-0 opacity-20 w-40 h-40" />
        <CornerLeaves color="#C4714A" flip className="absolute bottom-0 right-0 opacity-15 w-36 h-36 rotate-180" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="font-body text-terra-light font-bold text-xs uppercase tracking-[0.2em]">
              Convenient. Professional. Personal.
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mt-3 mb-4">
              Why Choose Original Mobile Notary?
            </h1>
            <p className="font-body text-sage-light text-lg max-w-3xl mx-auto">
              Reliable mobile notary service designed around your schedule, your location, and the care your documents deserve.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-cream relative overflow-hidden">
        <CornerLeaves color="#7A9E8E" flip className="absolute top-0 right-0 opacity-[0.06] w-56 h-56" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <span className="font-body text-terra font-bold text-xs uppercase tracking-[0.2em]">The Original Difference</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest mt-3 mb-4">Notary service made easier</h2>
            <p className="font-body text-stone max-w-2xl mx-auto">
              A notary appointment should feel straightforward—not stressful. Every part of the service is built to provide convenience, professionalism, and clear communication.
            </p>
          </motion.div>

          <BotanicalDivider color="#7A9E8E" className="max-w-xs mx-auto my-12 opacity-60" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reasons.map((reason, i) => (
              <motion.article key={reason.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-parchment rounded-3xl p-6 border border-stone-pale/60 shadow-warm hover:border-sage/50 hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-cream border border-stone-pale/60 flex items-center justify-center text-2xl mb-4 shadow-warm">{reason.icon}</div>
                <h3 className="font-display text-lg text-forest font-semibold mb-2 flex items-center gap-2">
                  {reason.title}
                  <TinyLeaf color="#7A9E8E" className="w-3 h-4 shrink-0" />
                </h3>
                <p className="font-body text-stone text-sm leading-relaxed">{reason.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-parchment relative overflow-hidden">
        <CornerLeaves color="#7A9E8E" className="absolute bottom-0 left-0 opacity-[0.06] w-52 h-52" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <span className="font-body text-terra font-bold text-xs uppercase tracking-[0.2em]">Simple From Start to Finish</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest mt-3 mb-4">How mobile notary service works</h2>
            <p className="font-body text-stone max-w-2xl mx-auto">The process stays clear so you know what to expect before Brigitte travels.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div key={step.number} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative bg-cream rounded-3xl p-7 border border-stone-pale/60 shadow-warm">
                <span className="font-display text-4xl font-bold text-terra/25">{step.number}</span>
                <h3 className="font-display text-xl font-semibold text-forest mt-3 mb-2">{step.title}</h3>
                <p className="font-body text-stone text-sm leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/service-area" className="inline-flex items-center gap-2 font-body font-bold text-forest hover:text-terra transition-colors">
              View our service area <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-forest relative overflow-hidden">
        <CornerLeaves color="#7A9E8E" className="absolute top-0 left-0 opacity-15 w-44 h-44" />
        <CornerLeaves color="#7A9E8E" flip className="absolute bottom-0 right-0 opacity-15 w-44 h-44 rotate-180" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <LeafSprig color="#7A9E8E" className="mx-auto mb-6 opacity-50" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-4">Need a notary today?</h2>
            <p className="font-body text-sage-light text-lg mb-8">
              Contact Brigitte to check availability, ask about current options, or request a clear quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-block px-8 py-3.5 bg-terra text-cream font-bold font-body rounded-full hover:bg-[#b0623e] transition-all shadow-warm-lg">Book an Appointment</Link>
              <Link to="/services" className="inline-block px-8 py-3.5 border border-sage/50 text-cream font-bold font-body rounded-full hover:bg-sage/10 transition-all">Explore Services</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
