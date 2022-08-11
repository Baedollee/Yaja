import React from "react";
import styled from "styled-components";

const Button = ({ children, background, border, onClick }) => {
  const style = {
    background: background,
    border: border,
  };
  return (
    <Btn {...style} onClick={onClick}>
      {children}
    </Btn>
  );
};

export default Button;

const Btn = styled.button`
  background-color: ${(props) => (props.background ? "grey" : "white")};
  border: 2px solid ${(props) => props.border || "green"};
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
`;
