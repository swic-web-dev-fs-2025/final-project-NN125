export default function Button({
  onClick,
  id,
  disabled,
  type = "button",
  color = "bg-white",
  className = `btnField ${color}`,
  text,
}) {
  return (
    <button
      id={id}
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
