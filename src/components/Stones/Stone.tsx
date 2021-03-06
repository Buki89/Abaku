import { FC, useCallback } from "react";
import styled from "styled-components";
import { useGameContext } from "../../context/context";
import { ActionType } from "../../types";

const Container = styled.div<{ $active: boolean; $hasValue: boolean }>`
  background-color: ${({ $active }) => ($active ? " #e67300" : "#fbcf9f")};
  height: 80px;
  width: 80px;
  border: 1px solid #672117;
  margin: 2px;
  color: #672117;
  font-size: 5rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: ${({ $active }) => ($active ? "#e67300" : "#e6730050")};
  }
  ${({ $hasValue }) =>
    !$hasValue &&
    `
      background-color: #fbcf9f;
      border: 1px solid #fbcf9f;
      :hover {
        background-color: #fbcf9f;
      }
      `}
`;

type StoneProps = {
  index: number;
  active: boolean;
  value: number | undefined;
};

const Stone: FC<StoneProps> = ({ children, index, active, value }) => {
  const { dispatch } = useGameContext();
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement> | undefined) => {
      e?.preventDefault();
      dispatch({
        type: ActionType.changeActiveStone,
        payload: { value, index },
      });
    },
    [index, value, dispatch]
  );

  const hasValue = value !== undefined;

  return (
    <Container $active={active} $hasValue={hasValue} onClick={handleClick}>
      {children}
    </Container>
  );
};

export default Stone;
