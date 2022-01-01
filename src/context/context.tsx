import { createContext, FC, useContext, useReducer } from "react";
import { ContextProps } from "../types";
import { gameBoardInitialize, getRandomNumbers } from "../utils";
import { reducer } from "./reducer";

export const GameContext = createContext<ContextProps | undefined>(undefined);

GameContext.displayName = "Game Context";

const useGameContext = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};

const ContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    {
      field: gameBoardInitialize(15).map((field) => {
        if (field.position.x === 7 && field.position.y === 7) {
          return {
            position: { x: 7, y: 7 },
            status: "done",
            value: 2,
          };
        }
        if (field.position.x === 7 && field.position.y === 8) {
          return {
            position: { x: 7, y: 8 },
            status: "done",
            value: 2,
          };
        }
        if (field.position.x === 7 && field.position.y === 9) {
          return {
            position: { x: 7, y: 9 },
            status: "done",
            value: 4,
          };
        }

        return field;
      }),
      stones: {
        values: getRandomNumbers(5),
        activeStone: undefined,
        activeStoneIndex: undefined,
      },
    },
    undefined
  );

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export { ContextProvider, useGameContext };
