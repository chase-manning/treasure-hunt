import React from "react";
import styled from "styled-components";

const StyledProgressbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bar = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background-color: var(--primary-light);
`;

type FilledProps = {
  width: string;
};

const Filled = styled.div`
  width: ${(props: FilledProps) => props.width};
  height: 10px;
  border-radius: 5px;
  background-color: var(--primary);
`;

const Percent = styled.div`
  font-size: 14px;
  color: var(--sub);
  justify-content: end;
  margin-left: 10px;
`;

type Props = {
  percentComplete: number;
};

const ProgressBar = (props: Props) => {
  const percentString = props.percentComplete + "%";

  return (
    <StyledProgressbar>
      <Bar>
        <Filled width={percentString} />
      </Bar>
      <Percent>{percentString}</Percent>
    </StyledProgressbar>
  );
};

export default ProgressBar;
