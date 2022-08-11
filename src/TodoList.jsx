import React from "react";
import TodoCard from "./TodoCard";

const TodoList = ({ isWorking, todoList, setTodoList }) => {
  return (
    <div>
      <p>{isWorking ? "Working..." : "Done..."}</p>
      {isWorking && (
        <div>
          {todoList.map((todo) => {
            if (!todo.isDone) {
              return (
                <TodoCard
                  key={todo.id}
                  todo={todo}
                  todoList={todoList}
                  setTodoList={setTodoList}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      )}
      {!isWorking && (
        <div>
          {todoList.map((todo) => {
            if (todo.isDone) {
              return (
                <TodoCard
                  key={todo.id}
                  todo={todo}
                  todoList={todoList}
                  setTodoList={setTodoList}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      )}
    </div>
  );
};

export default TodoList;
