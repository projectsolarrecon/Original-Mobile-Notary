/**
 * Delicate botanical line-art SVG accents.
 * Used as decorative dividers and section ornaments throughout the site.
 */

interface Props {
  className?: string;
  color?: string;
}

/** A small sprig of leaves — used inline as a section ornament */
export function LeafSprig({ className = "", color = "#7A9E8E" }: Props) {
  return (
    <svg
      className={className}
      width="80"
      height="32"
      viewBox="0 0 80 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Center stem */}
      <path d="M40 28 Q40 16 40 4" stroke={color} strokeWidth="1" strokeLinecap="round" />
      {/* Left leaves */}
      <path d="M40 22 Q30 18 26 10 Q34 12 40 22Z" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.12" />
      <path d="M40 15 Q32 10 30 4 Q37 7 40 15Z" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.12" />
      {/* Right leaves */}
      <path d="M40 22 Q50 18 54 10 Q46 12 40 22Z" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.12" />
      <path d="M40 15 Q48 10 50 4 Q43 7 40 15Z" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.12" />
      {/* Small side sprigs */}
      <path d="M40 26 Q34 24 32 20" stroke={color} strokeWidth="0.7" strokeLinecap="round" />
      <path d="M40 26 Q46 24 48 20" stroke={color} strokeWidth="0.7" strokeLinecap="round" />
    </svg>
  );
}

/** A horizontal botanical divider with a center sprig */
export function BotanicalDivider({ className = "", color = "#7A9E8E" }: Props) {
  return (
    <div className={`flex items-center gap-4 ${className}`} aria-hidden="true">
      <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, ${color}50)` }} />
      <LeafSprig color={color} className="opacity-70" />
      <div className="flex-1 h-px" style={{ background: `linear-gradient(to left, transparent, ${color}50)` }} />
    </div>
  );
}

/** Corner botanical decoration — top-left or top-right */
export function CornerLeaves({ className = "", color = "#7A9E8E", flip = false }: Props & { flip?: boolean }) {
  return (
    <svg
      className={`${className} ${flip ? "scale-x-[-1]" : ""}`}
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Main stem from corner */}
      <path d="M10 110 Q30 80 60 50 Q80 30 110 10" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      {/* Large leaf 1 */}
      <path d="M35 85 Q20 65 30 45 Q45 60 35 85Z" stroke={color} strokeWidth="0.9" fill={color} fillOpacity="0.1" />
      {/* Large leaf 2 */}
      <path d="M60 60 Q45 40 55 20 Q70 35 60 60Z" stroke={color} strokeWidth="0.9" fill={color} fillOpacity="0.1" />
      {/* Small leaf */}
      <path d="M80 38 Q70 25 78 12 Q88 22 80 38Z" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.1" />
      {/* Tiny side sprigs */}
      <path d="M25 95 Q15 88 14 78" stroke={color} strokeWidth="0.7" strokeLinecap="round" />
      <path d="M50 70 Q40 62 42 52" stroke={color} strokeWidth="0.7" strokeLinecap="round" />
      <path d="M72 46 Q64 38 67 28" stroke={color} strokeWidth="0.7" strokeLinecap="round" />
    </svg>
  );
}

/** Small single leaf for inline use */
export function TinyLeaf({ className = "", color = "#7A9E8E" }: Props) {
  return (
    <svg
      className={className}
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M8 18 Q8 10 8 2" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <path d="M8 14 Q2 10 2 4 Q8 6 8 14Z" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.2" />
      <path d="M8 14 Q14 10 14 4 Q8 6 8 14Z" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.2" />
    </svg>
  );
}
