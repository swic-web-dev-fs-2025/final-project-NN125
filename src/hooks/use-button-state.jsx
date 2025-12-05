import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";

export default function useButtonState() {
  // main app

  const BUTTON_COUNT = 64;

  const [buttonStates, setButtonStates] = useLocalStorage(
    "buttonStates",
    Array(BUTTON_COUNT).fill("bg-white")
  );

  const [colorState, setColorState] = useState("bg-black");

  // set the button's class to the current colorState when clicked
  const handleButtonClick = (buttonIndex) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [buttonIndex]: colorState,
    }));
  };

  const handleFillButtonClick = () => {
    setButtonStates(Array(BUTTON_COUNT).fill(colorState));
  };

  // change the color state based on color picker selection
  const setCurrentColor = (color) => {
    setColorState(color);
  };

  const colorDisplay = colorState
    .replace("bg-", "")
    .replace("-500", "")
    .toUpperCase();

  // form
  const [submittedData, setSubmittedData] = useState("");
  const [savedData, setSavedData] = useLocalStorage("savedData", {});
  const [message, setMessage] = useState("");

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
    buttonStates,
    handleButtonClick,
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
