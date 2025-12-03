import Button from "./components/Button.jsx";
import useButtonState from "./hooks/use-button-state";

export default function app() {
  const { buttonStates, handleButtonClick } = useButtonState();

  const BUTTON_ROW_ONE = [
    {
      name: "button1",
      onClick: () => {
        handleButtonClick("button1");
      },
      color: buttonStates.button1,
    },
    {
      name: "button2",
      onClick: () => {
        handleButtonClick("button2");
      },
      color: buttonStates.button2,
    },
    {
      name: "button3",
      onClick: () => {
        handleButtonClick("button3");
      },
      color: buttonStates.button3,
    },
    {
      name: "button4",
      onClick: () => {
        handleButtonClick("button4");
      },
      color: buttonStates.button4,
    },
    {
      name: "button5",
      onClick: () => {
        handleButtonClick("button5");
      },
      color: buttonStates.button5,
    },
    {
      name: "button6",
      onClick: () => {
        handleButtonClick("button6");
      },
      color: buttonStates.button6,
    },
    {
      name: "button7",
      onClick: () => {
        handleButtonClick("button7");
      },
      color: buttonStates.button7,
    },
    {
      name: "button8",
      onClick: () => {
        handleButtonClick("button8");
      },
      color: buttonStates.button8,
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
