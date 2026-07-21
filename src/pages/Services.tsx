import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BotanicalDivider, CornerLeaves, LeafSprig } from "../components/BotanicalAccent";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const services = [
  {
    icon: "📄",
    title: "General Document Notarization",
    desc: "Need something notarized but not sure which category it falls into? Chances are we can help. Bring your document and a valid photo ID and we'll take care of it.",
  },
  {
    icon: "🏫",
    title: "School & Field Trip Forms",
    desc: "Permission slips, enrollment forms, and other school paperwork that require a notary stamp. Quick, easy, and we can come to you before or after school hours.",
  },
  {
    icon: "🏥",
    title: "Medical & Healthcare Documents",
    desc: "Healthcare directives, HIPAA authorizations, medical consent forms, and other health-related documents that need to be officially notarized.",
  },
  {
    icon: "⚖️",
    title: "Powers of Attorney",
    desc: "Whether it's a general, durable, or limited power of attorney, we'll make sure your document is properly witnessed and notarized — handled with the care and attention it deserves.",
  },
  {
    icon: "📝",
    title: "Affidavits & Sworn Statements",
    desc: "Sworn statements, affidavits of identity, residency affidavits, and other documents that require you to swear or affirm the truth of the contents.",
  },
  {
    icon: "🏡",
    title: "Real Estate & Loan Signings",
    desc: "As a Certified Signing Agent, we're trained to handle mortgage and real estate closing packages. We work with title companies, escrow officers, and lenders to make closings smooth.",
  },
  {
    icon: "📜",
    title: "Wills & Estate Documents",
    desc: "Last wills and testaments, living wills, trusts, and other estate planning documents. We understand these are sensitive and important — we treat them that way.",
  },
  {
    icon: "🏨",
    title: "Hospital & Care Facility Visits",
    desc: "We regularly visit hospitals, nursing homes, assisted living facilities, and rehabilitation centers. If a loved one can't travel, we'll come to them.",
  },
];

export default function Services() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative bg-forest overflow-hidden py-20 md:py-24">
        <CornerLeaves color="#7A9E8E" className="absolute top-0 left-0 opacity-20 w-40 h-40" />
        <CornerLeaves color="#C4714A" flip className="absolute bottom-0 right-0 opacity-15 w-36 h-36 rotate-180" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="font-body text-terra-light font-bold text-xs uppercase tracking-[0.2em]">What We Offer</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mt-3 mb-4">Mobile Notary Services</h1>
            <p className="font-body text-sage-light text-lg max-w-2xl mx-auto">
              Professional mobile notary services throughout Nashville and surrounding Middle Tennessee communities, explained in plain language.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
        <CornerLeaves color="#7A9E8E" flip className="absolute top-0 right-0 opacity-[0.06] w-56 h-56" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <BotanicalDivider color="#7A9E8E" className="max-w-xs mx-auto mb-14 opacity-60" />

          <div className="grid md:grid-cols-2 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-start gap-5 p-6 rounded-3xl bg-parchment border border-stone-pale/50 hover:border-sage/50 hover:shadow-warm transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-cream border border-stone-pale/60 flex items-center justify-center text-2xl shrink-0 shadow-warm group-hover:border-sage/40 transition-colors">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-display text-forest font-semibold text-lg mb-2 group-hover:text-sage-mid transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-body text-stone text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-10 bg-sage-pale border border-sage/30 rounded-3xl p-7">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-sage/20 flex items-center justify-center shrink-0 text-xl">💬</div>
              <div>
                <h3 className="font-display text-forest font-semibold text-lg mb-2">Not sure if we can help?</h3>
                <p className="font-body text-stone leading-relaxed mb-3">
                  Just ask — we're happy to tell you whether your document qualifies for notarization. Appointments are available across Nashville neighborhoods and nearby communities throughout Middle Tennessee.
                </p>
                <p className="font-body text-stone/70 text-sm italic">
                  Please note: As a notary, we can notarize your documents, but we're not able to provide legal advice or tell you which documents you need. For legal guidance, please consult an attorney.
                </p>
                <Link to="/service-area" className="inline-flex items-center gap-1.5 mt-4 text-terra font-bold font-body text-sm hover:text-[#b0623e] transition-colors">
                  View the full service area
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-parchment relative overflow-hidden">
        <CornerLeaves color="#C4714A" className="absolute top-0 left-0 opacity-[0.07] w-44 h-44" />
        <CornerLeaves color="#C4714A" flip className="absolute bottom-0 right-0 opacity-[0.07] w-44 h-44 rotate-180" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <LeafSprig color="#7A9E8E" className="mx-auto mb-6 opacity-60" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest mb-4">Ready to Book?</h2>
            <p className="font-body text-stone text-lg mb-8">Quotes are free and fast. We'll get back to you quickly.</p>
            <Link to="/contact" className="inline-block px-8 py-3.5 bg-terra text-cream font-bold font-body rounded-full hover:bg-[#b0623e] transition-all shadow-warm-lg">
              Get a Free Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
