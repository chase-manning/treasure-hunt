import React from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { Stage, stages } from "../Stages/stages";
import Page from "./Page";

const StyledApp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <StyledApp>
      <GlobalStyles />
      {stages.map((stage: Stage) => (
        <Page stage={stage} />
      ))}
    </StyledApp>
  );
}

export default App;
