import styled from 'styled-components';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { __deleteTodoList, __editTodoList } from './redux/modules/todo';

export default function TodoCard({ todoList, todo }) {
  const dispatch = useDispatch();

  const onDeleteTodo = (id) => {
    if (window.confirm('삭제 하시겠습니까')) {
      dispatch(__deleteTodoList(id));
    }
  };

  const onUpdateTodo = (todo) => {
    let copy = {
      id: todo.id,
      title: todo.title,
      content: todo.content,
      isDone: !todo.isDone,
    };

    dispatch(__editTodoList(copy));
  };

  return (
    <TodoContainer>
      <p>{todo.title}</p>
      <p>{todo.content}</p>
      <Button
        border="red"
        onClick={() => {
          onDeleteTodo(todo.id);
        }}>
        삭제하기
      </Button>
      <Button
        background={todo.isDone}
        onClick={() => {
          onUpdateTodo(todo);
        }}>
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
