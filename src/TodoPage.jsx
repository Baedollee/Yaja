import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { __getTodoList } from './redux/modules/todo';
import TodoForm from './TodoForm';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

export default function TodoPage() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);

  useEffect(() => {
    dispatch(__getTodoList());
  }, []);

  return (
    <>
      <TodoHeader />
      <TodoForm todoList={todoList} />
      <TodoList isWorking={true} todoList={todoList} />
      <TodoList isWorking={false} todoList={todoList} />
    </>
  );
}
