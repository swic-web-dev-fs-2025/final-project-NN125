export default function Button({
  onClick,
  id,
  type = "button",
  color = "bg-white",
  className = `btnField ${color}`,
  text,
}) {
  return (
    <button id={id} type={type} className={className} onClick={onClick}>
      {text}
    </button>
  );
}
