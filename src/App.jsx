import { useState } from "react";
import Cake from "./components/Cake/Cake";
import useBlowDetector from "./hooks/useBlowDetector";

function App() {
  const [blown, setBlown] = useState(false);

  useBlowDetector(() => {
    setBlown(true);
  });
  return (
    <>
      <div className="">
        {/* <h2 style={{ textAlign: "center", color: "#fff" }}>
          Make a wish & blow the candles 🎂
        </h2> */}

        <Cake candles={8} blown={blown} />
      </div>
    </>
  );
}

export default App;
