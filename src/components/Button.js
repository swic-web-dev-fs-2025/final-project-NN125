export default function Button({ disabled, type = "button", text }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {text}
    </button>
  );
}
