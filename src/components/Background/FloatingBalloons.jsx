const colors = ["#ff6f91", "#ffc75f", "#845ec2", "#4d96ff", "#00c9a7"];

export default function FloatingBalloons() {
  return (
    <div className="floating-balloons">
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={i}
          className="bg-balloon"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 6}s`,
            background: colors[i % colors.length],
            transform: `scale(${0.6 + Math.random() * 0.6})`,
          }}
        />
      ))}
    </div>
  );
}
