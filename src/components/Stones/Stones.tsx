import { FC } from "react";
import styled from "styled-components";
import { useGameContext } from "../../context/context";
import Stone from "./Stone";

const Container = styled.div``;

const Stack = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

type StonesProps = {};

const Stones: FC<StonesProps> = () => {
  const { state } = useGameContext();
  const { stones } = state;

  return (
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
  );
};

export default Stones;
