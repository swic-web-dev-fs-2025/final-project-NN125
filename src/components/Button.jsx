export default function Button({
  onClick,
  type = "button",
  color = "bg-white",
  className = `btnField ${color}`,
}) {
  return <button type={type} className={className} onClick={onClick}></button>;
}
