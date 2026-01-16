import Smoke from "../Effects/Smoke";
import Flame from "./Flame";

const Candle = ({ isLit = true }) => {
  return (
    <div className="candle">
      {isLit ? <Flame isLit /> : <Smoke />}
      <div className="wick" />
    </div>
  );
};

export default Candle;
