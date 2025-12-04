export default function Button({
  id = "",
  onClick,
  type = "button",
  color = "bg-white",
  className = `btnField ${color}`,
}) {
  return (
    <button
      id={id}
      type={type}
      className={className}
      onClick={onClick}
    ></button>
  );
}
