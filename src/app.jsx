import Button from "./components/Button.jsx";
import useButtonState from "./hooks/use-button-state.jsx";

export default function app() {
  const { colorDisplay, buttonStates, handleButtonClick, setCurrentColor } =
    useButtonState();

  // dynamically create an array of 64 buttons using Array.from
  const BUTTON_FIELD = Array.from({ length: 64 }, (unused, index) => ({
    id: String(index),
    onClick: () => handleButtonClick(index),
    color: buttonStates[index],
  }));

  const BUTTON_COLOR_PICKER = [
    {
      id: "color-black",
      color: "bg-black",
      onClick: () => setCurrentColor("bg-black"),
      className: "colorPicker bg-black",
    },
    {
      id: "color-gray",
      color: "bg-gray-500",
      onClick: () => setCurrentColor("bg-gray-500"),
      className: "colorPicker bg-gray-500",
    },
    {
      id: "color-white",
      color: "bg-white",
      onClick: () => setCurrentColor("bg-white"),
      className: "colorPicker bg-white",
    },
    {
      id: "color-red",
      color: "bg-red-500",
      onClick: () => setCurrentColor("bg-red-500"),
      className: "colorPicker bg-red-500",
    },
    {
      id: "color-orange",
      color: "bg-orange-500",
      onClick: () => setCurrentColor("bg-orange-500"),
      className: "colorPicker bg-orange-500",
    },
    {
      id: "color-yellow",
      color: "bg-yellow-500",
      onClick: () => setCurrentColor("bg-yellow-500"),
      className: "colorPicker bg-yellow-500",
    },
    {
      id: "color-green",
      color: "bg-green-500",
      onClick: () => setCurrentColor("bg-green-500"),
      className: "colorPicker bg-green-500",
    },
    {
      id: "color-cyan",
      color: "bg-cyan-500",
      onClick: () => setCurrentColor("bg-cyan-500"),
      className: "colorPicker bg-cyan-500",
    },
    {
      id: "color-blue",
      color: "bg-blue-500",
      onClick: () => setCurrentColor("bg-blue-500"),
      className: "colorPicker bg-blue-500",
    },
    {
      id: "color-purple",
      color: "bg-purple-500",
      onClick: () => setCurrentColor("bg-purple-500"),
      className: "colorPicker bg-purple-500",
    },
    {
      id: "color-fuchsia",
      color: "bg-fuchsia-500",
      onClick: () => setCurrentColor("bg-fuchsia-500"),
      className: "colorPicker bg-fuchsia-500",
    },
    {
      id: "color-pink",
      color: "bg-pink-500",
      onClick: () => setCurrentColor("bg-pink-500"),
      className: "colorPicker bg-pink-500",
    },
  ];

  const FORM_FIELDS = [
    { label: "Name", name: "name", type: "text" },
    { label: "Email", name: "email", type: "email" },
    {
      label: "Message",
      name: "message",
      type: "textarea",
      value: message ?? "",
      onChange: (e) => setMessage(e.target.value),
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-blue-900 flex flex-col items-center justify-center">
        <div className="rounded-xl m-4 text-center bg-white p-8 shadow-lg">
          <h1 className="text-4xl font-bold p-4">Button Color Changer</h1>
          <h2 className="text-xl pb-4">
            Click the buttons to change their color!
          </h2>
          <p className="text-sm pb-4">
            The buttons' colors will stay upon refresh.
          </p>
          <div className="grid grid-cols-8 gap-1.25 pb-2">
            {/* Button Field */}
            {/* Map the buttons array to Button components */}
            {BUTTON_FIELD.map((buttonField) => (
              <Button key={buttonField.id} {...buttonField} />
            ))}
          </div>
          <div>
            {/* Color picker */}
            {/* Map the buttons array to Button components */}
            {BUTTON_COLOR_PICKER.map((colorField) => (
              <Button key={colorField.id} {...colorField} />
            ))}
          </div>
          <div>
            {/* Selected color display */}
            <p className="font-bold">Selected Color: {colorDisplay}</p>
          </div>
        </div>
      </main>
    </>
  );
}
