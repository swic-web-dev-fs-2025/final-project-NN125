export default function Button({ type = "button", color = "bg-white" }) {
  return <button type={type} className={`btnField ${color}`}></button>;
}
