import styled from "styled-components";
import { ContextProvider } from "./context/context";
import { Game } from "./view";

const Container = styled.div`
  height: 100vh;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const App = () => (
  <ContextProvider>
    <Container>
      <Game />
    </Container>
  </ContextProvider>
);

export default App;
