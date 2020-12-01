import React, { useState } from "react";
import styled from "styled-components";
import Popup from "./Popup";

const StyledHints = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

const Remaining = styled.div`
  font-size: 14px;
  color: var(--sub);
`;

const ShowHint = styled.button`
  padding: 5px 10px;
  background-color: var(--light);
  color: var(--sub);
  border-radius: 5px;
  font-size: 14px;
  border: solid 1px var(--sub);
`;

const Hint = styled.div`
  width: 100%;
  text-align: center;
  font-size: 18px;
  color: var(--main);
`;

type Props = {
  hint: string;
  useHint: () => void;
  hints: number;
};

const Hints = (props: Props) => {
  const [error, setError] = useState(false);
  const [hint, setHint] = useState(false);

  return (
    <StyledHints>
      <Remaining>{"Hints Remaining: " + props.hints}</Remaining>
      <ShowHint
        onClick={() => {
          if (props.hints < 1) {
            setError(true);
            return;
          }
          props.useHint();
          setHint(true);
        }}
      >
        Get Hint
      </ShowHint>
      <Popup
        open={hint}
        content={<Hint>{props.hint}</Hint>}
        close={() => setHint(false)}
      />
      <Popup
        open={error}
        content={<Hint>You are out of Hints :O</Hint>}
        close={() => setError(false)}
      />
    </StyledHints>
  );
};

export default Hints;
