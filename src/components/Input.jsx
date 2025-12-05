export default function Input({
  label,
  name,
  type = "text",
  required = true,
  rows = 4,
  value,
  onChange,
}) {
  const isTextarea = type === "textarea";
  const baseClasses = "w-full rounded border px-3 py-2 bg-white";

  return (
    <div className="mb-4">
      <label className="mb-1 block font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500">*</span>}
        {isTextarea ? (
          <textarea
            name={name}
            required={required}
            rows={rows}
            className={baseClasses}
            value={value}
            onChange={onChange}
          />
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            required={required}
            className={baseClasses}
            value={value}
            onChange={onChange}
          />
        )}
      </label>
    </div>
  );
}
