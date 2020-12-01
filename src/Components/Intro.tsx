import React from "react";
import styled from "styled-components";
import { isPropertySignature } from "typescript";
import sunlight from "../assets/Sunlight.svg";
import Button from "../styles/Button";

const StyledIntro = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 40px;
`;

const Header = styled.div`
  width: 100%;
  text-align: center;
  color: var(--main);
  font-size: 30px;
`;

const Image = styled.img`
  width: 80%;
`;

type Props = {
  nextPage: () => void;
};

const Intro = (props: Props) => {
  return (
    <StyledIntro>
      <Image src={sunlight}></Image>
      <Header>Welcome to Chase's Treasure Hunt!!</Header>
      <Button onClick={() => props.nextPage()}>Let's Start!</Button>
    </StyledIntro>
  );
};

export default Intro;
