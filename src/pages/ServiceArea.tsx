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

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.4, delay: i * 0.04 },
  }),
};

const serviceGroups = [
  {
    title: "Central Nashville",
    areas: ["Downtown Nashville", "SoBro", "The Gulch", "Germantown", "Midtown", "Music Row", "West End"],
  },
  {
    title: "East Nashville",
    areas: ["East Nashville", "Five Points", "Lockeland Springs", "Inglewood", "Edgefield", "Shelby Hills", "Cleveland Park"],
  },
  {
    title: "South Nashville",
    areas: ["12 South", "Belmont-Hillsboro", "Hillsboro Village", "Green Hills", "Berry Hill", "Wedgewood-Houston", "Edgehill"],
  },
  {
    title: "West Nashville",
    areas: ["Sylvan Park", "The Nations", "Charlotte Park", "Belle Meade", "Bellevue"],
  },
  {
    title: "North & Northeast Nashville",
    areas: ["North Nashville", "Madison", "Donelson", "Hermitage", "Old Hickory", "Whites Creek", "Antioch"],
  },
  {
    title: "North of Nashville",
    areas: ["Goodlettsville", "Hendersonville", "Gallatin"],
  },
  {
    title: "East of Nashville",
    areas: ["Mount Juliet", "Lebanon"],
  },
  {
    title: "South of Nashville",
    areas: ["Brentwood", "Franklin", "Nolensville", "Spring Hill"],
  },
];

export default function ServiceArea() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative bg-forest overflow-hidden py-20 md:py-24">
        <CornerLeaves color="#7A9E8E" className="absolute top-0 left-0 opacity-20 w-40 h-40" />
        <CornerLeaves color="#C4714A" flip className="absolute bottom-0 right-0 opacity-15 w-36 h-36 rotate-180" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="font-body text-terra-light font-bold text-xs uppercase tracking-[0.2em]">Where I Travel</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mt-3 mb-4">
              Mobile Notary Service Area
            </h1>
            <p className="font-body text-sage-light text-lg max-w-3xl mx-auto leading-relaxed">
              Mobile notary service throughout Nashville neighborhoods and surrounding Middle Tennessee communities.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
        <CornerLeaves color="#7A9E8E" className="absolute bottom-0 left-0 opacity-[0.06] w-56 h-56" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <BotanicalDivider color="#7A9E8E" className="max-w-xs mx-auto mb-14 opacity-60" />

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-forest mb-5">
                Greater Nashville & Middle Tennessee
              </h2>
              <p className="font-body text-stone leading-relaxed mb-6">
                Brigitte travels to homes, offices, hospitals, care facilities, libraries, coffee shops, and other convenient meeting locations throughout the region. The areas listed here represent regular service coverage, not a limited boundary.
              </p>
              <div className="rounded-3xl overflow-hidden shadow-warm-lg border border-stone-pale/50 h-96">
                <iframe
                  title="Greater Nashville Mobile Notary Service Area Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206253.2!2d-86.8688!3d36.1627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864ec3213eb903d%3A0x7d3fb9d0a1e9daa0!2sNashville%2C%20TN!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="font-body text-stone/50 text-xs mt-2.5 text-center italic">
                Serving Nashville and communities across the greater metropolitan area
              </p>
            </motion.div>

            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-forest mb-3">
                Neighborhoods & Communities Served
              </h2>
              <p className="font-body text-stone text-sm leading-relaxed mb-7">
                Browse by the part of town or nearby community that is most familiar to you.
              </p>

              <div className="space-y-5">
                {serviceGroups.map((group, groupIndex) => (
                  <motion.div
                    key={group.title}
                    custom={groupIndex}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="bg-parchment rounded-3xl p-5 border border-stone-pale/50 shadow-warm"
                  >
                    <h3 className="font-display text-forest font-semibold mb-3">{group.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.areas.map((area) => (
                        <span
                          key={area}
                          className="inline-flex items-center gap-1.5 rounded-full bg-cream border border-stone-pale/60 px-3 py-1.5 font-body text-bark text-sm"
                        >
                          <svg className="w-3.5 h-3.5 text-terra shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {area}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 bg-sage-pale border border-sage/30 rounded-3xl p-6">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sage/20 flex items-center justify-center shrink-0 text-lg">📍</div>
                  <div>
                    <h3 className="font-display text-forest font-semibold mb-2">Not sure whether your location is covered?</h3>
                    <p className="font-body text-stone text-sm leading-relaxed">
                      Send the appointment address or ZIP code. Brigitte will confirm the travel fee and full price before you book.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-1.5 mt-4 text-terra font-bold font-body text-sm hover:text-[#b0623e] transition-colors">
                      Ask about your location
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-parchment relative overflow-hidden">
        <CornerLeaves color="#C4714A" className="absolute top-0 left-0 opacity-[0.07] w-44 h-44" />
        <CornerLeaves color="#C4714A" flip className="absolute bottom-0 right-0 opacity-[0.07] w-44 h-44 rotate-180" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <LeafSprig color="#7A9E8E" className="mx-auto mb-6 opacity-60" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest mb-4">Ready to Book?</h2>
            <p className="font-body text-stone text-lg mb-8">Share your location and appointment details for a clear quote.</p>
            <Link to="/contact" className="inline-block px-8 py-3.5 bg-terra text-cream font-bold font-body rounded-full hover:bg-[#b0623e] transition-all shadow-warm-lg">
              Book an Appointment
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
