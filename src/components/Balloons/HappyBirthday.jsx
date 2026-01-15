import BalloonLetter from "./BalloonLetter";

const colors = ["#ff4d6d", "#ffb703", "#8338ec", "#3a86ff", "#06d6a0"];

export default function HappyBirthday() {
  const text = "HAPPY BIRTHDAY";

  return (
    <div className="happy-birthday">
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
  );
}
