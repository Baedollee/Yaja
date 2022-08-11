import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

export default function TodoPage() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "리액트 공부",
      content: " 리액트 기초 공부",
      isDone: false,
    },
  ]);

  return (
    <>
      <TodoHeader />
      <TodoForm todoList={todoList} setTodoList={setTodoList} />
      <TodoList
        isWorking={true}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <TodoList
        isWorking={false}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    </>
  );
}
