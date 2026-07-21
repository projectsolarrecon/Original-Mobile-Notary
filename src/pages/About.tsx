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
  { icon: "🏛️", title: "Tennessee Notary Commission", detail: "Commission #: [XXXXXXXX] · Expires: [MM/DD/YYYY]" },
  { icon: "🤝", title: "NNA Member", detail: "National Notary Association member in good standing" },
  { icon: "✍️", title: "Certified Signing Agent", detail: "NNA Certified Signing Agent — trained for real estate and loan closings" },
  { icon: "🛡️", title: "E&O Insurance", detail: "Errors & Omissions insurance for your protection and peace of mind" },
  { icon: "✅", title: "Background Screened", detail: "NNA background screening completed — required for loan signing work" },
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
      <section className="relative bg-forest overflow-hidden py-20 md:py-24">
        <CornerLeaves color="#7A9E8E" className="absolute top-0 left-0 opacity-20 w-40 h-40" />
        <CornerLeaves color="#C4714A" flip className="absolute bottom-0 right-0 opacity-15 w-36 h-36 rotate-180" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="font-body text-terra-light font-bold text-xs uppercase tracking-[0.2em]">Nice to Meet You</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mt-3 mb-4">About Brigitte</h1>
            <p className="font-body text-sage-light text-lg max-w-2xl mx-auto">
              Friendly, professional mobile notary service throughout Nashville and surrounding Middle Tennessee communities.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
        <CornerLeaves color="#7A9E8E" flip className="absolute top-0 right-0 opacity-[0.06] w-56 h-56" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <BotanicalDivider color="#7A9E8E" className="max-w-xs mx-auto mb-14 opacity-60" />
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-3 rounded-[2.5rem] border border-sage/20" />
                <div className="absolute -inset-6 rounded-[3rem] border border-terra/10" />
                <div className="relative rounded-[2rem] overflow-hidden border-2 border-sage-mid/30 shadow-warm-lg bg-sage-pale aspect-[3/4]">
                  <img src="/brigitte-about-web.jpg" alt="Brigitte of Original Mobile Notary enjoying coffee in Nashville" className="h-full w-full object-cover object-center" loading="eager" />
                </div>
              </div>
            </motion.div>

            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-forest mb-6 flex items-center gap-2">
                Brigitte
                <TinyLeaf color="#7A9E8E" className="w-4 h-5" />
              </h2>
              <div className="space-y-4 font-body text-stone leading-relaxed">
                <p>
                  Brigitte has called Nashville home since 2016, when she began providing mobile notary services throughout the area. Since then, she has helped individuals, families, and businesses complete important documents with service that is convenient, professional, affordable, and reliable.
                </p>
                <p>
                  As an NNA-certified notary, Brigitte brings careful attention, clear communication, and a friendly, patient approach to every appointment. She travels throughout Nashville neighborhoods and surrounding Middle Tennessee communities, meeting clients wherever it is most convenient—including their homes, offices, hospitals, care facilities, libraries, and favorite coffee shops.
                </p>
                <p>
                  Brigitte believes getting a document notarized should be simple and comfortable. She is always happy to answer questions, accommodate busy schedules when possible, and make each appointment as easy as she can. She is also an enthusiastic animal lover and looks forward to meeting both you and any pets who decide to supervise the appointment.
                </p>
              </div>
              <Link to="/service-area" className="inline-flex items-center gap-1.5 mt-6 text-terra font-bold font-body text-sm hover:text-[#b0623e] transition-colors">
                See the neighborhoods and communities served
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>

              <div className="mt-8 p-5 bg-parchment rounded-2xl border border-stone-pale/50 shadow-warm">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-terra shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
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

      <section className="py-20 bg-parchment relative overflow-hidden">
        <CornerLeaves color="#7A9E8E" className="absolute bottom-0 left-0 opacity-[0.06] w-52 h-52" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-4"><span className="font-body text-terra font-bold text-xs uppercase tracking-[0.2em]">Credentials</span></motion.div>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-display text-2xl md:text-3xl font-bold text-forest text-center mb-3">Qualified & Trustworthy</motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-body text-stone text-center max-w-md mx-auto mb-4">Here's what we bring to every appointment.</motion.p>
          <BotanicalDivider color="#7A9E8E" className="max-w-xs mx-auto mb-14 opacity-60" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {credentials.map((cred, i) => (
              <motion.div key={cred.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-cream rounded-3xl p-6 border border-stone-pale/50 hover:border-sage/40 hover:shadow-warm transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-parchment border border-stone-pale/60 flex items-center justify-center text-2xl mb-4 shadow-warm group-hover:border-sage/40 transition-colors">{cred.icon}</div>
                <h3 className="font-display text-forest font-semibold mb-1">{cred.title}</h3>
                <p className="font-body text-stone text-sm">{cred.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream border-t border-stone-pale/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="font-body text-terra font-bold text-xs uppercase tracking-[0.2em]">Payment</span>
            <h2 className="font-display text-2xl font-bold text-forest mt-2 mb-8">Accepted Payment Methods</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {paymentMethods.map((method) => (
                <div key={method.label} className="flex items-center gap-2.5 px-6 py-3 bg-parchment rounded-full border border-stone-pale/60 shadow-warm font-body text-bark font-semibold hover:border-sage/40 hover:bg-sage-pale transition-all">
                  <span className="text-xl">{method.icon}</span><span>{method.label}</span>
                </div>
              ))}
            </div>
            <p className="font-body text-stone/60 text-sm mt-5 italic">Payment is collected at the time of service.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-forest relative overflow-hidden">
        <CornerLeaves color="#7A9E8E" className="absolute top-0 left-0 opacity-15 w-44 h-44" />
        <CornerLeaves color="#7A9E8E" flip className="absolute bottom-0 right-0 opacity-15 w-44 h-44 rotate-180" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <LeafSprig color="#7A9E8E" className="mx-auto mb-6 opacity-50" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-4">Let's Work Together</h2>
            <p className="font-body text-sage-light text-lg mb-8">Ready to book or have a question? We'd love to hear from you.</p>
            <Link to="/contact" className="inline-block px-8 py-3.5 bg-terra text-cream font-bold font-body rounded-full hover:bg-[#b0623e] transition-all shadow-warm-lg">Get in Touch</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
