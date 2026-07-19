import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CornerLeaves, LeafSprig } from "../components/BotanicalAccent";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-cream relative overflow-hidden">
      <CornerLeaves color="#7A9E8E" className="absolute top-0 left-0 opacity-10 w-48 h-48" />
      <CornerLeaves color="#C4714A" flip className="absolute bottom-0 right-0 opacity-10 w-48 h-48 rotate-180" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative text-center px-4 max-w-md mx-auto"
      >
        <LeafSprig color="#7A9E8E" className="mx-auto mb-6 opacity-50" />
        <p className="font-display text-terra text-7xl font-bold mb-4">404</p>
        <h1 className="font-display text-2xl font-bold text-forest mb-3">Page Not Found</h1>
        <p className="font-body text-stone mb-8 leading-relaxed">
          Looks like this page took a wrong turn. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3.5 bg-forest text-cream font-bold font-body rounded-full hover:bg-sage-mid transition-all shadow-warm"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
