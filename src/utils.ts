import { Modifier, SquareType } from "./types";

export const gameBoardInitialize = (size: number): SquareType[] => {
  const column = Array(size).fill(undefined);
  const row = Array(size).fill(undefined);
  const result: SquareType[] = [];
  column.map((column, columnIndex) => {
    return row.map((row, rowIndex) => {
      return result.push({
        position: { x: columnIndex, y: rowIndex },
        status: "empty",
        value: undefined,
      });
    });
  });

  return result;
};

export const getRandomNumber = (): number => {
  return Math.round(Math.random() * 9);
};

export const getRandomNumbers = (size: number): number[] => {
  const numbers: number[] = [];
  for (let x = 0; x < size; x++) {
    numbers.push(getRandomNumber());
  }

  return numbers;
};

export const getVariatn = (variant: Modifier): string => {
  switch (variant) {
    case "3X":
      return "#4aa4db";
    case "3x":
      return "#00d04e";
    case "2X":
      return "#b0e9f0";
    case "2x":
      return "#abe898";
  }

  return;
};
