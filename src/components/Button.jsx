export default function Button({
  onClick,
  type = "button",
  color = "bg-white",
}) {
  return (
    <button
      type={type}
      className={`btnField ${color}`}
      onClick={onClick}
    ></button>
  );
}
