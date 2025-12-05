import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";

export default function useButtonState() {
  // MAIN APP CODE
  const BUTTON_COUNT = 64;

  // create initial button array with starting color of white
  const [buttonStates, setButtonStates] = useLocalStorage(
    "buttonStates",
    Array(BUTTON_COUNT).fill("bg-white")
  );

  // current selected color state, default to black
  const [colorState, setColorState] = useState("bg-black");

  // set the button's class to the current colorState when clicked
  const handleFieldButtonClick = (buttonIndex) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [buttonIndex]: colorState,
    }));
  };

  // fill all buttons with the current colorState by creating a new array
  const handleFillButtonClick = () => {
    setButtonStates(Array(BUTTON_COUNT).fill(colorState));
  };

  // change the color state based on color picker selection
  const setCurrentColor = (color) => {
    setColorState(color);
  };

  // takes the colorState and formats it for display
  const colorDisplay = colorState
    .replace("bg-", "")
    .replace("-500", "")
    .toUpperCase();

  // FORM CODE
  const [submittedData, setSubmittedData] = useState("");
  const [savedData, setSavedData] = useLocalStorage("savedData", {});
  const [message, setMessage] = useState("");

  // form submission handler
  function handleSubmit(formData) {
    if (message.length > 100) {
      return;
    }

    const data = Object.fromEntries(formData);
    setSubmittedData(data);
    setMessage("");

    setSavedData(data);
  }

  return {
    BUTTON_COUNT,
    buttonStates,
    handleFieldButtonClick,
    handleFillButtonClick,
    setCurrentColor,
    colorDisplay,
    handleSubmit,
    submittedData,
    setSubmittedData,
    message,
    setMessage,
    savedData,
  };
}
