import Button from "./components/Button.jsx";
import useButtonState from "./hooks/use-button-state.jsx";

export default function app() {
  const { colorDisplay, buttonStates, handleButtonClick, setCurrentColor } =
    useButtonState();

  const BUTTON_ROW_ONE = [
    {
      name: "0",
      onClick: () => {
        handleButtonClick(0);
      },
      color: buttonStates[0],
    },
    {
      name: "1",
      onClick: () => {
        handleButtonClick(1);
      },
      color: buttonStates[1],
    },
    {
      name: "2",
      onClick: () => {
        handleButtonClick(2);
      },
      color: buttonStates[2],
    },
    {
      name: "3",
      onClick: () => {
        handleButtonClick(3);
      },
      color: buttonStates[3],
    },
    {
      name: "4",
      onClick: () => {
        handleButtonClick(4);
      },
      color: buttonStates[4],
    },
    {
      name: "5",
      onClick: () => {
        handleButtonClick(5);
      },
      color: buttonStates[5],
    },
    {
      name: "6",
      onClick: () => {
        handleButtonClick(6);
      },
      color: buttonStates[6],
    },
    {
      name: "7",
      onClick: () => {
        handleButtonClick(7);
      },
      color: buttonStates[7],
    },
  ];

  const BUTTON_ROW_TWO = [
    {
      name: "8",
      onClick: () => {
        handleButtonClick(8);
      },
      color: buttonStates[8],
    },
    {
      name: "9",
      onClick: () => {
        handleButtonClick(9);
      },
      color: buttonStates[9],
    },
    {
      name: "10",
      onClick: () => {
        handleButtonClick(10);
      },
      color: buttonStates[10],
    },
    {
      name: "11",
      onClick: () => {
        handleButtonClick(11);
      },
      color: buttonStates[11],
    },
    {
      name: "12",
      onClick: () => {
        handleButtonClick(12);
      },
      color: buttonStates[12],
    },
    {
      name: "13",
      onClick: () => {
        handleButtonClick(13);
      },
      color: buttonStates[13],
    },
    {
      name: "14",
      onClick: () => {
        handleButtonClick(14);
      },
      color: buttonStates[14],
    },
    {
      name: "15",
      onClick: () => {
        handleButtonClick(15);
      },
      color: buttonStates[15],
    },
  ];

  const BUTTON_COLOR_PICKER = [
    {
      name: "color-white",
      color: "bg-white",
      onClick: () => setCurrentColor("bg-white"),
      className: "colorPicker bg-white",
    },
    {
      name: "color-black",
      color: "bg-black",
      onClick: () => setCurrentColor("bg-black"),
      className: "colorPicker bg-black",
    },
    {
      name: "color-red",
      color: "bg-red-500",
      onClick: () => setCurrentColor("bg-red-500"),
      className: "colorPicker bg-red-500",
    },
    {
      name: "color-yellow",
      color: "bg-yellow-500",
      onClick: () => setCurrentColor("bg-yellow-500"),
      className: "colorPicker bg-yellow-500",
    },
    {
      name: "color-green",
      color: "bg-green-500",
      onClick: () => setCurrentColor("bg-green-500"),
      className: "colorPicker bg-green-500",
    },
    {
      name: "color-blue",
      color: "bg-blue-500",
      onClick: () => setCurrentColor("bg-blue-500"),
      className: "colorPicker bg-blue-500",
    },
    {
      name: "color-purple",
      color: "bg-purple-500",
      onClick: () => setCurrentColor("bg-purple-500"),
      className: "colorPicker bg-purple-500",
    },
    {
      name: "color-pink",
      color: "bg-pink-500",
      onClick: () => setCurrentColor("bg-pink-500"),
      className: "colorPicker bg-pink-500",
    },
  ];

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
            {/* Second row of buttons */}
            {/* Map the buttons array to Button components */}
            {BUTTON_ROW_TWO.map((field) => (
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
