import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { Stage, stages } from "../Stages/stages";
import Page from "./Page";
import Completed from "./Completed";
import Intro from "./Intro";

const StyledApp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

class State {
  page: number = -1;
  hints: number = 3;
}

function App() {
  const [state, setState] = useState(new State());

  useEffect(() => {
    setState({
      ...state,
      page: Number.parseInt(localStorage.getItem("page") || "-1"),
      hints: Number.parseInt(localStorage.getItem("hints") || "3"),
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextPage = () => {
    localStorage.setItem("page", (state.page + 1).toString());
    setState({ ...state, page: state.page + 1 });
  };

  const reduceHints = () => {
    localStorage.setItem("hints", (state.hints - 1).toString());
    setState({ ...state, hints: state.hints - 1 });
  };

  return (
    <StyledApp>
      <GlobalStyles />
      {state.page === -1 && <Intro nextPage={() => nextPage()} />}
      {stages.map((stage: Stage, index: number) => (
        <Page
          key={index}
          stage={stage}
          active={state.page === index}
          nextPage={() => nextPage()}
          percentComplete={state.page / stages.length}
          useHint={() => reduceHints()}
          hints={state.hints}
        />
      ))}
      {state.page === stages.length && <Completed />}
    </StyledApp>
  );
}

export default App;
