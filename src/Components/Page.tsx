import React from "react";
import styled from "styled-components";
import { Stage } from "../Stages/stages";
import TopBar from "./TopBar";
import PageContent from "./PageContent";

const StyledPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
`;

type Props = {
  stage: Stage;
  active: boolean;
  nextPage: () => void;
  percentComplete: number;
  useHint: () => void;
  hints: number;
};

const Page = (props: Props) => {
  if (!props.active) return null;

  return (
    <StyledPage>
      <TopBar
        stage={props.stage}
        percentComplete={props.percentComplete}
        useHint={() => props.useHint()}
        hints={props.hints}
      />
      <PageContent stage={props.stage} />
    </StyledPage>
  );
};

export default Page;
