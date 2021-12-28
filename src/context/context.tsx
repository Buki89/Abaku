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
      field: gameBoardInitialize(15),
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
