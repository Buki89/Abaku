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
          modifier: "2x",
        });
      }
      return result.push({
        position: { x: columnIndex, y: rowIndex },
        status: "empty",
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

export const checkInitialMove = (fields: SquareType[]): boolean => {
  return fields.filter((field) => field.value !== undefined).length > 1;
};

export const checkCenter = (fields: SquareType[]): boolean => {
  const match = fields.filter((field) => field.value !== undefined);
  return match.some(
    (value) => value.position.x === 7 && value.position.y === 7
  );
};

const allEqual = (arr: number[]) => arr.every((v) => v === arr[0]);

export const checkDirection = (fields: SquareType[]): number => {
  const xAxis: number[] = [];
  const yAxis: number[] = [];

  fields
    .filter((field) => field.value !== undefined)
    .forEach((value) => {
      xAxis.push(value.position.x);
      yAxis.push(value.position.y);
    });

  if (allEqual(xAxis)) {
    return xAxis[0];
  }
  if (allEqual(yAxis)) {
    return xAxis[0];
  }
  return -1;
};

export const sum = (a: number, b: number, c: number): boolean => a + b === c;
export const subtraction = (a: number, b: number, c: number): boolean =>
  a - b === c;
export const division = (a: number, b: number, c: number): boolean =>
  a / b === c;
export const multiplication = (a: number, b: number, c: number): boolean =>
  a * b === c;
export const squareExponent = (a: number, b: number): boolean =>
  Math.pow(a, 2) === b;
export const cubeExponent = (a: number, b: number): boolean =>
  Math.pow(a, 3) === b;
export const squareRoot = (a: number, b: number): boolean => Math.sqrt(a) === b;
export const cubeRoot = (a: number, b: number): boolean =>
  Math.pow(a, 1 / 3) === b;

export const lengthOfThree = (array: SquareType[]) => {
  const [a, b, c] = array;
  console.log(sum(a.value, b.value, c.value));
  console.log(subtraction(a.value, b.value, c.value));
  console.log(multiplication(a.value, b.value, c.value));
  console.log(division(a.value, b.value, c.value));
};

export const allSum = (array: string[]) => {
  for (let x = 0; x < array.length / 2; x++) {
    for (let y = 0; y < 10; y++) {}
  }
};
