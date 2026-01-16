export default function CakeSVG() {
  return (
    <svg
      width="320"
      height="200"
      viewBox="0 0 320 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <ellipse cx="160" cy="185" rx="120" ry="12" fill="rgba(0,0,0,0.15)" />

      {/* Bottom layer */}
      <rect x="40" y="100" width="240" height="60" rx="20" fill="#d17a22" />

      {/* Bottom highlight */}
      <rect
        x="40"
        y="100"
        width="240"
        height="20"
        rx="20"
        fill="rgba(255,255,255,0.15)"
      />

      {/* Cream layer */}
      <rect x="50" y="70" width="220" height="35" rx="18" fill="#fff3e0" />

      {/* Top layer */}
      <rect x="60" y="40" width="200" height="40" rx="18" fill="#e08b3c" />

      {/* Icing top */}
      <rect x="60" y="35" width="200" height="20" rx="18" fill="#ffffff" />

      {/* Icing drips */}
      <path
        d="
          M60 45
          Q80 65 95 45
          Q110 70 130 45
          Q150 75 170 45
          Q190 70 210 45
          Q230 65 260 45
          Z
        "
        fill="#ffffff"
      />
    </svg>
  );
}
