import { FC } from "react";
import styled from "styled-components";
import { ConfirmButton } from "..";
import { useGameContext } from "../../context/context";
import Stone from "./Stone";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  align-items: center;
`;

const Stack = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fbcf9f;
  padding: 0.25rem;
  border-radius: 6px;
`;

type StonesProps = {};

const Stones: FC<StonesProps> = () => {
  const { state } = useGameContext();
  const { stones } = state;

  return (
    <Container>
      <Stack>
        {stones.values.map((value: number | undefined, index: number) => (
          <Stone
            key={index}
            index={index}
            active={stones.activeStoneIndex === index}
            value={value}
          >
            {value}
          </Stone>
        ))}
      </Stack>
      <ConfirmButton />
    </Container>
  );
};

export default Stones;
