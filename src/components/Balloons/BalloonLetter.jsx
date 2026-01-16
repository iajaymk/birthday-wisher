export default function BalloonLetter({ letter, color }) {
  return (
    <div className="balloon-letter">
      <svg width="50" height="60" viewBox="0 0 70 90">
        <defs>
          <radialGradient id={`grad-${letter}`} cx="30%" cy="30%">
            <stop offset="0%" stopColor="#ffffffcc" />
            <stop offset="100%" stopColor={color} />
          </radialGradient>
        </defs>

        {/* Balloon body */}
        <ellipse
          cx="35"
          cy="38"
          rx="28"
          ry="34"
          fill={`url(#grad-${letter})`}
        />

        {/* Shine */}
        <ellipse cx="25" cy="28" rx="6" ry="10" fill="rgba(255,255,255,0.5)" />

        {/* Letter */}
        <text
          x="35"
          y="48"
          textAnchor="middle"
          fontSize="28"
          fontWeight="bold"
          fill="#fff"
          fontFamily="sans-serif"
        >
          {letter}
        </text>

        {/* Knot */}
        <circle cx="35" cy="75" r="3" fill="#d0d0d0" />
      </svg>

      {/* String */}
      <div className="balloon-string" />
    </div>
  );
}
