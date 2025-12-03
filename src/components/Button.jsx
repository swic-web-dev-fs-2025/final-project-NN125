export default function Button({
  id,
  onClick,
  type = "button",
  color = "bg-white",
}) {
  return (
    <button
      id={id}
      type={type}
      className={`btnField ${color}`}
      onClick={onClick}
    ></button>
  );
}
