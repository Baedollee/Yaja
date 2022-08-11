import React from "react";
import styled from "styled-components";

const TodoHeader = () => {
  return (
    <Header>
      <p>my todo List</p>
      <p>React</p>
    </Header>
  );
};

export default TodoHeader;

const Header = styled.div`
  align-items: center;
  border: 1px solid #ddd;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 20px;
`;
