import Flame from "./Flame";
import Smoke from "../Effects/Smoke";

export default function DigitCandle({ digit, isLit }) {
  return (
    <div className="digit-candle-wrapper">
      {isLit ? <Flame isLit /> : <Smoke />}

      <svg
        className="digit-svg"
        viewBox="0 0 60 90"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`wax-${digit}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff5d6" />
            <stop offset="100%" stopColor="#f4a261" />
          </linearGradient>
        </defs>

        {/* Digit shape */}
        <text
          x="30"
          y="70"
          textAnchor="middle"
          fontSize="72"
          fontWeight="900"
          fontFamily="Arial Rounded MT Bold, sans-serif"
          fill={`url(#wax-${digit})`}
        >
          {digit}
        </text>
      </svg>

      {/* Wick */}
      <div className="digit-wick" />
    </div>
  );
}
