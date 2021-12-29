import {
  singleDouble,
  singleTriple,
  wholeDouble,
  wholeTriple,
} from "./modifiers";
import { Modifier, SquareType } from "./types";

export const gameBoardInitialize = (size: number): SquareType[] => {
  const column = Array(size).fill(undefined);
  const row = Array(size).fill(undefined);
  const result: SquareType[] = [];
  column.map((column, columnIndex) => {
    return row.map((row, rowIndex) => {
      if (
        wholeTriple.some(
          (value) => value.x === columnIndex && value.y === rowIndex
        )
      ) {
        return result.push({
          position: { x: columnIndex, y: rowIndex },
          status: "empty",
          value: undefined,
          modifier: "3X",
        });
      }

      if (
        singleTriple.some(
          (value) => value.x === columnIndex && value.y === rowIndex
        )
      ) {
        return result.push({
          position: { x: columnIndex, y: rowIndex },
          status: "empty",
          value: undefined,
          modifier: "3x",
        });
      }

      if (
        wholeDouble.some(
          (value) => value.x === columnIndex && value.y === rowIndex
        )
      ) {
        return result.push({
          position: { x: columnIndex, y: rowIndex },
          status: "empty",
          value: undefined,
          modifier: "2X",
        });
      }

      if (
        singleDouble.some(
          (value) => value.x === columnIndex && value.y === rowIndex
        )
      ) {
        return result.push({
          position: { x: columnIndex, y: rowIndex },
          status: "empty",
          value: undefined,
          modifier: "2x",
        });
      }
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

export const getVariant = (variant: Modifier): string => {
  switch (variant) {
    case "3X":
      return "#4aa4db";
    case "3x":
      return "#00d04e";
    case "2X":
      return "#b0e9f0";
    case "2x":
      return "#abe898";
    default:
      return "#fff";
  }
};
