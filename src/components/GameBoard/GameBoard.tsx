import { FC, useCallback } from "react";
import styled from "styled-components";
import { useGameContext } from "../../context/context";
import { ActionType, Position, Status } from "../../types";
import Square from "../Square";

const Border = styled.div`
  border: 5px solid #ffc820;
  border-radius: 5px;
`;

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

  const handleClick = useCallback(
    (
      position: Position,
      status: Status,
      stoneStackIndex?: number,
      value?: number
    ) => {
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
    [dispatch, stones.activeStone, stones.activeStoneIndex]
  );

  if (!state.field) {
    return <div>loading...</div>;
  }

  return (
    <Border>
      <Container>
        {state.field.map(
          ({ value, position, status, stoneStackIndex, modifier }, index) => {
            return (
              <Square
                key={index}
                value={value}
                position={position}
                onClick={handleClick}
                status={status}
                stoneStackIndex={stoneStackIndex}
                modifier={modifier}
              >
                {value}
              </Square>
            );
          }
        )}
      </Container>
    </Border>
  );
};

export default GameBoard;
