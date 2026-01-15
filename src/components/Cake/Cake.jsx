import CakeSVG from "./CakeSVG";
import Candle from "./Candle";

const Cake = ({ candles = 5, blown = false }) => {
  return (
    <div className="cake-wrapper">
      <div className="cake">
        <div className="cake-top">
          {Array.from({ length: candles }).map((_, i) => (
            <Candle key={i} isLit={!blown} />
          ))}
        </div>
        <CakeSVG />
      </div>
    </div>
  );
};

export default Cake;
