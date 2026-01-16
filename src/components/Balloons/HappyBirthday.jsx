import { useEffect, useState } from "react";
import BalloonLetter from "./BalloonLetter";

const colors = ["#ff4d6d", "#ffb703", "#8338ec", "#3a86ff", "#06d6a0"];

export default function HappyBirthday({ name = "" }) {
  const text = "HAPPY BIRTHDAY";
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    if (!name) {
      setTypedName("");
      return;
    }

    const upper = name.toUpperCase();
    setTypedName("");
    let i = 0;
    const speed = 300;
    const timer = setInterval(() => {
      i += 1;
      setTypedName(upper.slice(0, i));
      if (i >= upper.length) clearInterval(timer);
    }, speed);

    return () => clearInterval(timer);
  }, [name]);

  return (
    <div className="happy-birthday">
      <div className="hidden md:flex">
        {text
          .split("")
          .map((char, i) =>
            char === " " ? (
              <div key={i} className="balloon-space" />
            ) : (
              <BalloonLetter
                key={i}
                letter={char}
                color={colors[i % colors.length]}
              />
            )
          )}
      </div>
      <div className="block md:hidden">
        <div className="flex">
          {"HAPPY"
            .split("")
            .map((char, i) =>
              char === " " ? (
                <div key={i} className="balloon-space" />
              ) : (
                <BalloonLetter
                  key={i}
                  letter={char}
                  color={colors[i % colors.length]}
                />
              )
            )}
        </div>
        <div className="flex">
          {"BIRTH"
            .split("")
            .map((char, i) =>
              char === " " ? (
                <div key={i} className="balloon-space" />
              ) : (
                <BalloonLetter
                  key={i}
                  letter={char}
                  color={colors[i % colors.length]}
                />
              )
            )}
        </div>
        <div className="flex items-center justify-center">
          {"DAY"
            .split("")
            .map((char, i) =>
              char === " " ? (
                <div key={i} className="balloon-space" />
              ) : (
                <BalloonLetter
                  key={i}
                  letter={char}
                  color={colors[i % colors.length]}
                />
              )
            )}
        </div>
      </div>
      {name && (
        <div className="w-full flex justify-center mt-4">
          <span className="text-2xl font-bold text-black drop-shadow-lg">
            {typedName}
            <span className="ml-1 animate-pulse"></span>
          </span>
        </div>
      )}
    </div>
  );
}
