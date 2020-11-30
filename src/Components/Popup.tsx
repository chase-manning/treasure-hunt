import React from "react";
import styled from "styled-components";

const SyledPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--light);
  border-radius: 20px;
`;

type Props = {
  open: boolean;
  content: JSX.Element;
  close: () => void;
};

const Popup = (props: Props) => {
  return <SyledPopup></SyledPopup>;
};

export default Popup;
