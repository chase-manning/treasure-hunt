import styled from "styled-components";

type Props = {
  sub?: boolean;
};

const Button = styled.button`
  margin-top: 20px;
  color: ${(props: Props) => (props.sub ? "var(--primary)" : "var(--light)")};
  padding: 20px 40px;
  background-color: ${(props: Props) =>
    props.sub ? "var(--light)" : "var(--primary)"};
  border: solid 1px var(--primary);
  border-radius: 10px;
`;

export default Button;
