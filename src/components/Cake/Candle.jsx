import Flame from "./Flame";

const Candle = ({ isLit = true }) => {
  return (
    <div className="candle">
      <Flame isLit={isLit} />
      <div className="wick" />
    </div>
  );
};

export default Candle;
