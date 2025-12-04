import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";

export default function useButtonState() {
  const [buttonStates, setButtonStates] = useLocalStorage(
    "buttonStates",
    Array(64).fill("bg-white")
  );

  const [colorState, setColorState] = useState("bg-black");

  // set the button's class to the current colorState when clicked
  const handleButtonClick = (buttonIndex) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [buttonIndex]: colorState,
    }));
  };

  // change the color state based on color picker selection
  const setCurrentColor = (color) => {
    setColorState(color);
  };

  const colorDisplay = colorState
    .replace("bg-", "")
    .replace("-500", "")
    .toUpperCase();

  return { buttonStates, handleButtonClick, setCurrentColor, colorDisplay };
}
