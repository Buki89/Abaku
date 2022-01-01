import { FC, useCallback } from "react";
import styled from "styled-components";
import { useGameContext } from "../../context/context";
import { allSum, checkDirection, lengthOfThree, sum } from "../../utils";
import CheckIcon from "../CheckIcon";

const Container = styled.div`
  background-color: #7cb342;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.5rem;
  height: 4.5rem;
  margin-left: 1rem;
  border: 8px solid #fbcf9f;
  :hover {
    cursor: pointer;
  }
`;

type ConfirmButtonProps = {};

const ConfirmButton: FC<ConfirmButtonProps> = () => {
  const { state } = useGameContext();

  const { field } = state;

  const handleClick = useCallback(() => {
    // console.log("lenght", checkInitialMove(field));
    // console.log("center", checkCenter(field));
    console.log("direction", checkDirection(field));
    if (checkDirection(field) > 0) {
      const row = checkDirection(field);

      const rowToEval = field.filter(
        (x) => x.position.x === row && x.status !== "empty"
      );
      // for (let x = 0; x < rowToEval.length - 2; x++) {
      //   console.log(
      //     sum(
      //       rowToEval[x].value,
      //       rowToEval[x + 1].value,
      //       rowToEval[x + 2].value
      //     )
      //   );
      // }
      allSum(["2", "2", "4", "8", "1", "2"]);
    }
  }, [field]);

  return (
    <Container onClick={handleClick}>
      <CheckIcon />
    </Container>
  );
};

export default ConfirmButton;
