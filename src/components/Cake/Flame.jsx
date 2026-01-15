export default function Flame({ isLit }) {
  if (!isLit) return null;

  return (
    <div className="flame">
      <div className="flame-inner" />
    </div>
  );
}
