import { FC } from "react";
import styled from "styled-components";
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
  return (
    <Container>
      <CheckIcon />
    </Container>
  );
};

export default ConfirmButton;
