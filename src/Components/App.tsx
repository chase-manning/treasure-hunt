import React from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

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
    </StyledApp>
  );
}

export default App;
