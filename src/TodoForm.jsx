import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const TodoForm = ({ todoList, setTodoList }) => {
  let num = 2;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onAddTodo = () => {
    const todo = {
      id: num,
      title: title,
      content: content,
      isDone: false,
    };
    setTodoList([...todoList, todo]);
    num++;
  };

  return (
    <Form>
      <p>제목</p>
      <Input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <p>내용</p>
      <Input
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <Button border="blue" onClick={onAddTodo}>
        추가하기
      </Button>
    </Form>
  );
};

export default TodoForm;

const Form = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
  background-color: #eee;
  border-radius: 12px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
`;
const Input = styled.input`
  border: none;
  border-radius: 12px;
  height: 40px;
  padding: 0 12px;
  width: 240px;
`;
