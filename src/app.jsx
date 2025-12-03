import Button from "./components/Button.jsx";
import useButtonState from "./hooks/use-button-state";

export default function app() {
  const { buttonStates, handleButtonClick } = useButtonState();

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

  return (
    <>
      <main className="min-h-screen bg-blue-900 flex flex-col items-center justify-center p-2">
        <h1>Button Color Changer</h1>
        <h2>Click the buttons to change their color!</h2>
        <p>The buttons' colors will stay upon refresh.</p>
        <div>
          {/* First row of buttons */}
          {/* Map the buttons array to Button components */}
          {BUTTON_ROW_ONE.map((field) => (
            <Button key={field.name} {...field} />
          ))}
        </div>
      </main>
    </>
  );
}
