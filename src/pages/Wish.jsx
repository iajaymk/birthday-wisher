import Background from "#components/Background/Background";
import HappyBirthday from "#components/Balloons/HappyBirthday";
import Cake from "#components/Cake/Cake";
import { fireConfetti } from "#components/Effects/Confetti";
import useBlowDetector from "#hooks/useBlowDetector";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

const Wish = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name") || "Friend";
  const age = Number(searchParams.get("age")) || 18;
  // const cake = searchParams.get("cake") || "chocolate";
  // const candles = searchParams.get("candles") || "classic";
  console.table({ name, age });

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
    <div className="">
      <Background>
        <HappyBirthday name={name} />
        <Cake age={age} blown={blown} />
      </Background>
    </div>
  );
};

export default Wish;
