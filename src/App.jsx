import { useEffect, useState } from "react";
import Cake from "./components/Cake/Cake";
import useBlowDetector from "./hooks/useBlowDetector";
import { fireConfetti } from "./components/Effects/Confetti";
import HappyBirthday from "./components/Balloons/HappyBirthday";
import "./styles/balloons.css";
import "./styles/background.css";
import "./styles/cake.css";
import Background from "./components/Background/Background";
import Home from "./pages/Home";

function App() {
  const [blown, setBlown] = useState(false);

  useBlowDetector(() => {
    setBlown(true);
  });

  useEffect(() => {
    if (blown) {
      fireConfetti();
    }
  }, [blown]);

  return (
    // <Background>
    //   <HappyBirthday />

    //   <Cake age={9} blown={blown} />
    // </Background>
    <>
      <Home />
    </>
  );
}

export default App;
