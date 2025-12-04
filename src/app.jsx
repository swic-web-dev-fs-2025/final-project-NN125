import Button from "./components/Button.jsx";
import useButtonState from "./hooks/use-button-state";
import { BUTTON_COLOR_PICKER, BUTTON_ROW_ONE } from "./utils/ButtonRows";

export default function app() {
  const { colorDisplay } = useButtonState();

  return (
    <>
      <main className="min-h-screen bg-blue-900 flex flex-col items-center justify-center p-2">
        <div className="rounded-xl m-4 text-center bg-white p-8 shadow-lg">
          <h1 className="text-4xl font-bold p-4">Button Color Changer</h1>
          <h2 className="text-xl pb-4">
            Click the buttons to change their color!
          </h2>
          <p className="text-sm pb-4">
            The buttons' colors will stay upon refresh.
          </p>
          <div>
            {/* First row of buttons */}
            {/* Map the buttons array to Button components */}
            {BUTTON_ROW_ONE.map((field) => (
              <Button key={field.name} {...field} />
            ))}
          </div>
          <div>
            {/* Color picker */}
            {/* Map the buttons array to Button components */}
            {BUTTON_COLOR_PICKER.map((field) => (
              <Button key={field.color} {...field} />
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
