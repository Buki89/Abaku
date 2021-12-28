import { FC, useCallback } from "react";
import styled from "styled-components";
import { useGameContext } from "../../context/context";
import { ActionType, Position, Status } from "../../types";
import Square from "../Square";

const Container = styled.div`
  height: 630px;
  width: 630px;
  border: 6px solid #672117;
  position: relative;
  display: grid;
  grid-template-columns: repeat(15, 1fr);
`;

type GameBoardProps = {};

const GameBoard: FC<GameBoardProps> = () => {
  const { state, dispatch } = useGameContext();
  console.log("field", state.field);
  const { stones } = state;
  console.log("stones", stones);

  const handleClick = useCallback(
    (
      position: Position,
      status: Status,
      stoneStackIndex?: number,
      value?: number
    ) => {
      console.log("click");
      console.log("stones.activeStone", stones.activeStone === undefined);
      console.log("pending", status === "pending");
      if (stones.activeStone !== undefined) {
        dispatch({
          type: ActionType.addNumber,
          payload: {
            position,
            value: stones.activeStone,
            stoneStackIndex: stones.activeStoneIndex,
          },
        });
        dispatch({
          type: ActionType.removeStone,
          payload: { index: stones.activeStoneIndex },
        });
        dispatch({
          type: ActionType.changeActiveStone,
          payload: {
            index: undefined,
            value: undefined,
          },
        });
      }
      if (stones.activeStone === undefined && status === "pending") {
        dispatch({ type: ActionType.removeNumber, payload: { position } });
        dispatch({
          type: ActionType.addStone,
          payload: { index: stoneStackIndex, value },
        });
      }
    },
    [dispatch, stones.activeStone]
  );

  if (!state.field) {
    return <div>loading...</div>;
  }

  return (
    <Container>
      {state.field.map(
        ({ value, position, status, stoneStackIndex }, index) => {
          return (
            <Square
              key={index}
              value={value}
              position={position}
              onClick={handleClick}
              status={status}
              stoneStackIndex={stoneStackIndex}
            >
              {value}
            </Square>
          );
        }
      )}
    </Container>
  );
};

export default GameBoard;
