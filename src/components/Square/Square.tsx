import { FC, memo, useCallback } from "react";
import styled from "styled-components";
import useTraceUpdate from "../../hooks/useTraceUpdate";
import { Position, Status } from "../../types";

type ContainerProps = {
  hasValue: boolean;
};

const Container = styled.div<ContainerProps>`
  height: 40px;
  width: 40px;
  border: 1px solid #672117;
  background-color: ${({ hasValue: $hasValue }) =>
    $hasValue ? "#fbcf9f" : "#fff"};
  color: ${({ hasValue: $hasValue }) => ($hasValue ? "#672117" : "#fff")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;

  ${({ hasValue }) =>
    !hasValue &&
    `:hover {
    background-color: #d1d1e0;
  }`}
`;

type SquareProps = {
  value: number | undefined;
  onClick: (
    position: Position,
    status: Status,
    stoneStackIndex?: number,
    value?: number
  ) => void;
  position: Position;
  status: Status;
  stoneStackIndex?: number;
};

const Square: FC<SquareProps> = memo((props) => {
  const { children, value, position, status, stoneStackIndex, onClick } = props;

  const hasValue = value !== undefined;

  // useTraceUpdate(props);

  const handleClick = useCallback(
    () =>
      status !== "done" && onClick(position, status, stoneStackIndex, value),
    [onClick, position, hasValue, status, value, stoneStackIndex]
  );

  return (
    <Container hasValue={hasValue} onClick={handleClick}>
      {children}
    </Container>
  );
});

export default Square;
