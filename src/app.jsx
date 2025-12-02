import { useLocalStorage } from "@uidotdev/usehooks";

export default function app() {
  const [buttonStates, setButtonStates] = useLocalStorage("buttonStates", {
    button1: "bg-white",
    button2: "bg-white",
    button3: "bg-white",
    button4: "bg-white",
    button5: "bg-white",
    button6: "bg-white",
    button7: "bg-white",
    button8: "bg-white",
    button9: "bg-white",
    button10: "bg-white",
    button11: "bg-white",
    button12: "bg-white",
    button13: "bg-white",
    button14: "bg-white",
    button15: "bg-white",
    button16: "bg-white",
  });

  const handleButtonClick = (buttonName) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
  };
  return (
    <>
      <main className="min-h-screen bg-blue-900 flex flex-col items-center justify-center p-2">
        <h1>Button Color Changer</h1>
        <h2>Click the buttons to change their color!</h2>
        <p>The buttons' colors will stay upon refresh.</p>
        <div>
          {/* First row of buttons */}
          <div>
            <button
              onClick={() => {
                handleButtonClick("button1");
              }}
              className="btnField"
            ></button>
            <button
              onClick={() => {
                handleButtonClick("button2");
              }}
              className="btnField"
            ></button>
            <button
              onClick={() => {
                handleButtonClick("button3");
              }}
              className="btnField"
            ></button>
            <button
              onClick={() => {
                handleButtonClick("button4");
              }}
              className="btnField"
            ></button>
          </div>
          {/* Second row of buttons */}
          <div>
            <button
              onClick={() => {
                handleButtonClick("button5");
              }}
              className="btnField"
            ></button>
            <button
              onClick={() => {
                handleButtonClick("button6");
              }}
              className="btnField"
            ></button>
            <button
              onClick={() => {
                handleButtonClick("button7");
              }}
              className="btnField"
            ></button>
            <button
              onClick={() => {
                handleButtonClick("button8");
              }}
              className="btnField"
            ></button>
          </div>
          {/* Third row of buttons */}
          <div>
            <button
              onClick={() => {
                handleButtonClick("button9");
              }}
              className="btnField"
            ></button>
            <button
              onClick={() => {
                handleButtonClick("button10");
              }}
              className="btnField"
            ></button>
            <button
              onClick={() => {
                handleButtonClick("button11");
              }}
              className="btnField"
            ></button>
            <button
              onClick={() => {
                handleButtonClick("button12");
              }}
              className="btnField"
            ></button>
          </div>
          {/* Fourth row of buttons */}
          <div>
            <button
              onClick={() => {
                handleButtonClick("button13");
              }}
              className="btnField"
            ></button>
            <button
              onClick={() => {
                handleButtonClick("button14");
              }}
              className="btnField"
            ></button>
            <button
              onClick={() => {
                handleButtonClick("button15");
              }}
              className="btnField"
            ></button>
            <button
              onClick={() => {
                handleButtonClick("button16");
              }}
              className="btnField"
            ></button>
          </div>
        </div>
      </main>
    </>
  );
}
