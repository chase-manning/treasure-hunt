import React, { useState } from "react";
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

class State {
  page: number = 0;
}

function App() {
  const [state, setState] = useState(new State());

  return (
    <StyledApp>
      <GlobalStyles />
      {stages.map((stage: Stage, index: number) => (
        <Page
          key={index}
          stage={stage}
          active={state.page === index}
          nextPage={() => setState({ ...state, page: state.page + 1 })}
          percentComplete={state.page / stages.length}
        />
      ))}
    </StyledApp>
  );
}

export default App;
