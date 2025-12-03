import { useLocalStorage } from "@uidotdev/usehooks";

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
  });

  const handleButtonClick = (buttonName) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
  };

  return { handleButtonClick };
}
