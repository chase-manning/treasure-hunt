import React from "react";
import styled from "styled-components";

const StyledProgressbar = styled.div`
  width: 100%;
  display: flex;
`;

const Bar = styled.div`
  width: 80%;
  height: 20px;
  border-radius: 10px;
  background-color: var(--primary-light);
`;

type FilledProps = {
  width: string;
};

const Filled = styled.div`
  width: ${(props: FilledProps) => props.width};
  height: 20px;
  border-radius: 10px;
  background-color: var(--primary);
`;

const Percent = styled.div`
  font-size: 16;
  color: var(--main);
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
