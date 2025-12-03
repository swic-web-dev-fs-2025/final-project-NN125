import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";

export default function useButtonState() {
  const [buttonStates, setButtonStates] = useLocalStorage(
    "buttonStates",
    Array(64).fill("bg-white")
  );

  const [colorState, setColorState] = useState("bg-red-500");

  // set the button's class to the current colorState when clicked
  const handleButtonClick = (buttonIndex) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [buttonIndex]: colorState,
    }));
  };

  return { buttonStates, handleButtonClick };
}
