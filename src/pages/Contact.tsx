import { motion } from "framer-motion";
import { BotanicalDivider, CornerLeaves, TinyLeaf } from "../components/BotanicalAccent";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const inputClass =
  "w-full px-4 py-3 rounded-2xl border border-stone-pale/60 bg-cream text-bark placeholder-stone/40 font-body text-sm focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage transition-colors";

const labelClass = "block font-body text-sm font-semibold text-forest mb-1.5";

export default function Contact() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative bg-forest overflow-hidden py-20 md:py-24">
        <CornerLeaves color="#7A9E8E" className="absolute top-0 left-0 opacity-20 w-40 h-40" />
        <CornerLeaves color="#C4714A" flip className="absolute bottom-0 right-0 opacity-15 w-36 h-36 rotate-180" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="font-body text-terra-light font-bold text-xs uppercase tracking-[0.2em]">Let's Connect</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mt-3 mb-4">Book an Appointment</h1>
            <p className="font-body text-sage-light text-lg max-w-2xl mx-auto">
              Share what you need, when you need it, and where you would like to meet. Brigitte will confirm availability and the full price before the appointment.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="bg-terra py-3 px-4 text-center">
        <p className="font-body text-cream font-semibold text-sm">
          ⚡ Need someone today?{" "}
          <a href="tel:+15618884808" className="underline hover:no-underline font-bold">Call (561) 888-4808</a>{" "}
          or{" "}
          <a href="sms:+15618884808" className="underline hover:no-underline font-bold">send a text</a>{" "}
          to check same-day availability.
        </p>
      </div>

      <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
        <CornerLeaves color="#7A9E8E" className="absolute bottom-0 left-0 opacity-[0.05] w-56 h-56" />
        <CornerLeaves color="#7A9E8E" flip className="absolute top-0 right-0 opacity-[0.05] w-56 h-56" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <BotanicalDivider color="#7A9E8E" className="max-w-xs mx-auto mb-14 opacity-60" />

          <div className="grid lg:grid-cols-3 gap-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-1 space-y-5">
              <h2 className="font-display text-xl font-bold text-forest mb-5">Contact Info</h2>

              <div className="p-4 bg-parchment rounded-2xl border border-stone-pale/50 shadow-warm">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-forest flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="font-body text-xs text-stone/60 font-semibold uppercase tracking-wider">Phone / Text</p>
                    <div className="font-body font-bold">
                      <a href="tel:+15618884808" className="text-forest hover:text-terra transition-colors">(561) 888-4808</a>
                      <span className="mx-2 text-stone/40">·</span>
                      <a href="sms:+15618884808" className="text-forest hover:text-terra transition-colors">Text</a>
                    </div>
                  </div>
                </div>
              </div>

              <a href="mailto:hello@originalnotary.com" className="flex items-center gap-3.5 p-4 bg-parchment rounded-2xl border border-stone-pale/50 shadow-warm hover:border-sage/40 hover:shadow-warm-lg transition-all group">
                <div className="w-11 h-11 rounded-xl bg-forest flex items-center justify-center shrink-0 group-hover:bg-sage-mid transition-colors">
                  <svg className="w-5 h-5 text-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="font-body text-xs text-stone/60 font-semibold uppercase tracking-wider">Email</p>
                  <p className="font-body text-forest font-bold group-hover:text-terra transition-colors text-sm">hello@originalnotary.com</p>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-4 bg-parchment rounded-2xl border border-stone-pale/50 shadow-warm">
                <div className="w-11 h-11 rounded-xl bg-forest flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <p className="font-body text-xs text-stone/60 font-semibold uppercase tracking-wider">Appointment Hours</p>
                  <p className="font-body text-forest font-bold text-sm">Generally 8:00 a.m.–8:00 p.m.</p>
                  <p className="font-body text-stone text-xs mt-1">Same-day and after-hours by request when available</p>
                </div>
              </div>

              <div className="p-4 bg-sage-pale rounded-2xl border border-sage/30">
                <p className="font-body text-forest text-sm font-semibold mb-1">Mobile appointments only</p>
                <p className="font-body text-stone text-xs leading-relaxed">There is no public walk-in office. Brigitte meets clients at an agreed location after the appointment is confirmed.</p>
              </div>
            </motion.div>

            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-2">
              <div className="bg-parchment rounded-3xl shadow-warm border border-stone-pale/50 p-8">
                <h2 className="font-display text-xl font-bold text-forest mb-2">Send Us a Message</h2>
                <p className="font-body text-stone text-sm mb-7 leading-relaxed">Use the form to request a quote or appointment. Include enough detail for Brigitte to evaluate the route and timing.</p>

                <form name="notary-contact" method="POST" action="/contact?submitted=true" data-netlify="true" data-netlify-honeypot="bot-field" className="space-y-5">
                  <input type="hidden" name="form-name" value="notary-contact" />
                  <p className="hidden" aria-hidden="true"><label>Do not fill this out: <input name="bot-field" /></label></p>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div><label htmlFor="full-name" className={labelClass}>Full Name *</label><input id="full-name" name="full-name" type="text" placeholder="Jane Smith" className={inputClass} required /></div>
                    <div><label htmlFor="phone" className={labelClass}>Phone Number *</label><input id="phone" name="phone" type="tel" placeholder="(615) 000-0000" className={inputClass} required /></div>
                  </div>

                  <div><label htmlFor="email" className={labelClass}>Email Address</label><input id="email" name="email" type="email" placeholder="jane@example.com" className={inputClass} /></div>
                  <div><label htmlFor="location" className={labelClass}>Appointment Address or ZIP Code *</label><input id="location" name="location" type="text" placeholder="Nashville, TN 37201" className={inputClass} required /></div>

                  <div>
                    <label htmlFor="document-type" className={labelClass}>Type of Document(s)</label>
                    <select id="document-type" name="document-type" className={`${inputClass} cursor-pointer`}>
                      <option value="">Select a document type...</option>
                      <option>General Notarization</option><option>Power of Attorney</option><option>Affidavit / Sworn Statement</option><option>Real Estate / Loan Signing</option><option>Medical / Healthcare Document</option><option>School / Field Trip Form</option><option>Will / Estate Document</option><option>Other</option>
                    </select>
                  </div>

                  <div><label htmlFor="preferred-date-time" className={labelClass}>Preferred Date & Time</label><input id="preferred-date-time" name="preferred-date-time" type="text" placeholder="e.g., This Saturday afternoon, or ASAP" className={inputClass} /></div>
                  <div><label htmlFor="details" className={labelClass}>Additional Details</label><textarea id="details" name="details" rows={4} placeholder="Number of signers or signatures, hospital or care-facility instructions, access details, or anything else Brigitte should know" className={`${inputClass} resize-none`} /></div>

                  <div className="pt-2">
                    <button type="submit" className="w-full py-4 bg-terra text-cream font-bold font-body rounded-2xl hover:bg-[#b0623e] transition-all shadow-warm-lg text-base">Send Message & Request a Quote</button>
                    <p className="font-body text-stone/50 text-xs text-center mt-3 flex items-center justify-center gap-1.5"><TinyLeaf color="#7A9E8E" className="w-2.5 h-3" />For urgent or same-day needs, please call or text directly.</p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
