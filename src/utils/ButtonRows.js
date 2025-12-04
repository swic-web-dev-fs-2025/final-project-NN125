export const BUTTON_ROW_ONE = [
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

export const BUTTON_COLOR_PICKER = [
  {
    name: "color-white",
    color: "bg-white",
    onClick: () => setCurrentColor("bg-white"),
    className: "colorPicker bg-white",
  },
  {
    name: "color-red",
    color: "bg-red-500",
    onClick: () => setCurrentColor("bg-red-500"),
    className: "colorPicker bg-red-500",
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
    name: "color-yellow",
    color: "bg-yellow-500",
    onClick: () => setCurrentColor("bg-yellow-500"),
    className: "colorPicker bg-yellow-500",
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
  {
    name: "color-black",
    color: "bg-black",
    onClick: () => setCurrentColor("bg-black"),
    className: "colorPicker bg-black",
  },
];
