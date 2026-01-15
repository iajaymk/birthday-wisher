import CakeSVG from "./CakeSVG";
import Candle from "./Candle";
import DigitCandle from "./DigitCandle";

const Cake = ({ age = 5, blown = false }) => {
  const isKid = age <= 8;
  const digits = age.toString().split("");
  console.log(age);

  return (
    <div className="cake-wrapper">
      <div className="cake">
        <div className="cake-top">
          {isKid
            ? Array.from({ length: age }).map((_, i) => (
                <Candle key={i} isLit={!blown} />
              ))
            : digits.map((digit, i) => (
                <DigitCandle key={i} digit={digit} isLit={!blown} />
              ))}
        </div>
        <CakeSVG />
      </div>
    </div>
  );
};

export default Cake;
