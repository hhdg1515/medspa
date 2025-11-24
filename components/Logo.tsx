export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Geometric circular pattern inspired by ARIA logo */}
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />

      {/* Intersecting lines creating sacred geometry pattern */}
      <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />

      {/* Diagonal cross */}
      <line x1="23" y1="23" x2="77" y2="77" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="77" y1="23" x2="23" y2="77" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />

      {/* Center focal point */}
      <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.8" />

      {/* Outer decorative arcs */}
      <path
        d="M 50 2 A 48 48 0 0 1 98 50"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.6"
        fill="none"
      />
      <path
        d="M 98 50 A 48 48 0 0 1 50 98"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.4"
        fill="none"
      />
    </svg>
  );
}
