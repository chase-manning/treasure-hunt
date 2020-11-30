import React from "react";
import styled from "styled-components";
import treasure from "../assets/Treasure.svg";

const StyledComplete = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 40px;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  font-size: 30px;
  color: var(--main);
  text-align: center;
  margin-bottom: 20px;
`;

const SubHeader = styled.div`
  width: 100%;
  font-size: 16px;
  color: var(--sub);
  text-align: center;
`;

const Image = styled.img`
  width: 80%;
`;

const Complete = () => {
  return (
    <StyledComplete>
      <Image src={treasure}></Image>
      <TextArea>
        <Header>Congratulations!!</Header>
        <SubHeader>
          Great job completing the Treasure Hunt! Buy yourself an Ice Cream to
          Celebrate! :D
        </SubHeader>
      </TextArea>
    </StyledComplete>
  );
};

export default Complete;
