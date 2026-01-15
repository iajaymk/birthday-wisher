import FloatingBalloons from "./FloatingBalloons";

export default function Background({ children }) {
  return (
    <div className="background">
      <FloatingBalloons />
      <div className="content">{children}</div>
    </div>
  );
}
