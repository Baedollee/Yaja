import styled from "styled-components";
import Button from "./Button";

export default function TodoCard({ todoList, setTodoList, todo }) {
  const onDeleteTodo = (id) => {
    if (window.confirm("삭제 하시겠습니까")) {
      let copy = todoList.filter((todo) => todo.id !== id);
      setTodoList(copy);
    }
  };

  const onUpdateTodo = (id) => {
    let copy = todoList.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
        return todo;
      } else {
        return todo;
      }
    });

    setTodoList(copy);
  };

  return (
    <TodoContainer>
      <p>{todo.title}</p>
      <p>{todo.content}</p>
      <Button
        border="red"
        onClick={() => {
          onDeleteTodo(todo.id);
        }}
      >
        삭제하기
      </Button>
      <Button
        background={todo.isDone}
        onClick={() => {
          onUpdateTodo(todo.id);
        }}
      >
        완료
      </Button>
    </TodoContainer>
  );
}
const TodoContainer = styled.div`
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
`;
