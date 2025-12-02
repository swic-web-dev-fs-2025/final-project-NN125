export default function Button({ type = "button", color = "bg-white" }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`btnField${color}`}
    ></button>
  );
}
