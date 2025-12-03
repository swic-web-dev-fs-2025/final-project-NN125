import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";

export default function useButtonState() {
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
    button17: "bg-white",
    button18: "bg-white",
    button19: "bg-white",
    button20: "bg-white",
    button21: "bg-white",
    button22: "bg-white",
    button23: "bg-white",
    button24: "bg-white",
    button25: "bg-white",
    button26: "bg-white",
    button27: "bg-white",
    button28: "bg-white",
    button29: "bg-white",
    button30: "bg-white",
    button31: "bg-white",
    button32: "bg-white",
    button33: "bg-white",
    button34: "bg-white",
    button35: "bg-white",
    button36: "bg-white",
    button37: "bg-white",
    button38: "bg-white",
    button39: "bg-white",
    button40: "bg-white",
    button41: "bg-white",
    button42: "bg-white",
    button43: "bg-white",
    button44: "bg-white",
    button45: "bg-white",
    button46: "bg-white",
    button47: "bg-white",
    button48: "bg-white",
    button49: "bg-white",
    button50: "bg-white",
    button51: "bg-white",
    button52: "bg-white",
    button53: "bg-white",
    button54: "bg-white",
    button55: "bg-white",
    button56: "bg-white",
    button57: "bg-white",
    button58: "bg-white",
    button59: "bg-white",
    button60: "bg-white",
    button61: "bg-white",
    button62: "bg-white",
    button63: "bg-white",
    button64: "bg-white",
  });

  const [colorState, setColorState] = useState("bg-red-500");

  // set the button's class to the current colorState when clicked
  const handleButtonClick = (buttonName) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [buttonName]: colorState,
    }));
  };

  return { buttonStates, handleButtonClick };
}
