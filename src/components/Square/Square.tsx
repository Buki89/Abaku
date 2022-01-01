import { FC, memo, useCallback } from "react";
import styled from "styled-components";
import { Modifier, Position, Status } from "../../types";
import { getVariant } from "../../utils";

type ContainerProps = {
  hasValue: boolean;
  modifier: Modifier;
  status: Status;
};

const Container = styled.div<ContainerProps>`
  height: 40px;
  width: 40px;
  border: 1px solid #672117;
  background-color: ${({ hasValue, modifier }) =>
    hasValue ? "#fbcf9f" : getVariant(modifier)};
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

  ${({ status }) => status === "pending" && `background-color: #f69023;`}
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
  modifier: Modifier;
};

const Square: FC<SquareProps> = memo((props) => {
  const {
    children,
    value,
    position,
    status,
    stoneStackIndex,
    modifier,
    onClick,
  } = props;

  const hasValue = value !== undefined;

  const handleClick = useCallback(
    () =>
      status !== "done" && onClick(position, status, stoneStackIndex, value),
    [onClick, position, status, value, stoneStackIndex]
  );

  return (
    <Container
      hasValue={hasValue}
      modifier={modifier}
      status={status}
      onClick={handleClick}
    >
      {children}
    </Container>
  );
});

export default Square;
