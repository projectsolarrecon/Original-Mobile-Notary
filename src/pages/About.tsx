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

const credentials = [
  {
    icon: "🏛️",
    title: "Tennessee Notary Commission",
    detail: "Commission #: [XXXXXXXX] · Expires: [MM/DD/YYYY]",
  },
  {
    icon: "🤝",
    title: "NNA Member",
    detail: "National Notary Association member in good standing",
  },
  {
    icon: "✍️",
    title: "Certified Signing Agent",
    detail: "NNA Certified Signing Agent — trained for real estate and loan closings",
  },
  {
    icon: "🛡️",
    title: "E&O Insurance",
    detail: "Errors & Omissions insurance for your protection and peace of mind",
  },
  {
    icon: "✅",
    title: "Background Screened",
    detail: "NNA background screening completed — required for loan signing work",
  },
];

const paymentMethods = [
  { icon: "💵", label: "Cash" },
  { icon: "💚", label: "Zelle" },
  { icon: "💜", label: "Venmo" },
  { icon: "💳", label: "Card" },
];

export default function About() {
  return (
    <div className="overflow-x-hidden">

      {/* ── Page Header ── */}
      <section className="relative bg-forest overflow-hidden py-20 md:py-24">
        <CornerLeaves color="#7A9E8E" className="absolute top-0 left-0 opacity-20 w-40 h-40" />
        <CornerLeaves color="#C4714A" flip className="absolute bottom-0 right-0 opacity-15 w-36 h-36 rotate-180" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="font-body text-terra-light font-bold text-xs uppercase tracking-[0.2em]">Nice to Meet You</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mt-3 mb-4">About Us</h1>
            <p className="font-body text-sage-light text-lg max-w-2xl mx-auto">
              We're your friendly Nashville mobile notary — here to make the process easy, wherever you are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Bio Section ── */}
      <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
        <CornerLeaves color="#7A9E8E" flip className="absolute top-0 right-0 opacity-[0.06] w-56 h-56" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <BotanicalDivider color="#7A9E8E" className="max-w-xs mx-auto mb-14 opacity-60" />

          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Photo Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-sm">
                {/* Decorative offset frame */}
                <div className="absolute -inset-3 rounded-[2.5rem] border border-sage/20" />
                <div className="absolute -inset-6 rounded-[3rem] border border-terra/10" />

                <div className="relative rounded-[2rem] overflow-hidden border-2 border-sage-mid/30 shadow-warm-lg bg-sage-pale aspect-[3/4] flex flex-col items-center justify-center gap-4">
                  <CornerLeaves color="#7A9E8E" className="absolute top-0 left-0 opacity-20 w-24 h-24" />
                  <CornerLeaves color="#7A9E8E" flip className="absolute top-0 right-0 opacity-20 w-24 h-24" />
                  <CornerLeaves color="#C4714A" className="absolute bottom-0 right-0 opacity-15 w-20 h-20 rotate-180" />

                  <div className="w-24 h-24 rounded-full bg-sage/20 border-2 border-sage-mid/30 flex items-center justify-center">
                    <svg className="w-12 h-12 text-sage-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="text-center px-8">
                    <p className="font-display text-forest/60 text-base italic mb-1">Brigitte</p>
                    <p className="font-body text-stone/50 text-xs">Professional photo coming soon</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bio Text */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-forest mb-6 flex items-center gap-2">
                Brigitte
                <TinyLeaf color="#7A9E8E" className="w-4 h-5" />
              </h2>

              <div className="space-y-4 font-body text-stone leading-relaxed">
                <p>
                  [Paragraph 1 — Introduce yourself warmly. Share a little about who you are, where you're from, and why you became a notary. Keep it conversational and personal — this is where clients get to know you as a neighbor, not just a service provider.]
                </p>
                <p>
                  [Paragraph 2 — Talk about your experience and what you specialize in. Mention the types of clients you love working with — families, seniors, real estate clients, etc. Share what makes your service different from just going to a UPS Store or bank.]
                </p>
                <p>
                  [Paragraph 3 — Close with something warm and inviting. Let them know you're easy to reach, happy to answer questions, and genuinely enjoy helping people. Invite them to reach out.]
                </p>
              </div>

              {/* Availability card */}
              <div className="mt-8 p-5 bg-parchment rounded-2xl border border-stone-pale/50 shadow-warm">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-terra shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-display text-forest font-semibold">Availability</h3>
                </div>
                <p className="font-body text-stone text-sm">
                  Available <strong className="text-forest">[Days/Hours Placeholder]</strong>, including evenings and weekends. Same-day appointments available when our schedule allows — call or text for fastest response.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Credentials ── */}
      <section className="py-20 bg-parchment relative overflow-hidden">
        <CornerLeaves color="#7A9E8E" className="absolute bottom-0 left-0 opacity-[0.06] w-52 h-52" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-4"
          >
            <span className="font-body text-terra font-bold text-xs uppercase tracking-[0.2em]">Credentials</span>
          </motion.div>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-display text-2xl md:text-3xl font-bold text-forest text-center mb-3"
          >
            Qualified & Trustworthy
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-body text-stone text-center max-w-md mx-auto mb-4"
          >
            Here's what we bring to every appointment.
          </motion.p>
          <BotanicalDivider color="#7A9E8E" className="max-w-xs mx-auto mb-14 opacity-60" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {credentials.map((cred, i) => (
              <motion.div
                key={cred.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-cream rounded-3xl p-6 border border-stone-pale/50 hover:border-sage/40 hover:shadow-warm transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-parchment border border-stone-pale/60 flex items-center justify-center text-2xl mb-4 shadow-warm group-hover:border-sage/40 transition-colors">
                  {cred.icon}
                </div>
                <h3 className="font-display text-forest font-semibold mb-1">{cred.title}</h3>
                <p className="font-body text-stone text-sm">{cred.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Payment Methods ── */}
      <section className="py-16 bg-cream border-t border-stone-pale/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="font-body text-terra font-bold text-xs uppercase tracking-[0.2em]">Payment</span>
            <h2 className="font-display text-2xl font-bold text-forest mt-2 mb-8">Accepted Payment Methods</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.label}
                  className="flex items-center gap-2.5 px-6 py-3 bg-parchment rounded-full border border-stone-pale/60 shadow-warm font-body text-bark font-semibold hover:border-sage/40 hover:bg-sage-pale transition-all"
                >
                  <span className="text-xl">{method.icon}</span>
                  <span>{method.label}</span>
                </div>
              ))}
            </div>
            <p className="font-body text-stone/60 text-sm mt-5 italic">Payment is collected at the time of service.</p>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-4">Let's Work Together</h2>
            <p className="font-body text-sage-light text-lg mb-8">
              Ready to book or have a question? We'd love to hear from you.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3.5 bg-terra text-cream font-bold font-body rounded-full hover:bg-[#b0623e] transition-all shadow-warm-lg"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}