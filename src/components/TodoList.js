import { dispatchContext, ToDoContext } from '../context/ToDoContext';
import TodoItem from './TodoItem';
import { useContext, useEffect } from 'react';
import { getTodos } from '../utils/axios-api-fn';
import styled from 'styled-components';

const TodoList = () => {
  const getTodo = useContext(ToDoContext);
  const dispatch = useContext(dispatchContext);

  useEffect(() => {
    const initTodo = () => {
      getTodos()
        .then((response) => {
          dispatch({ type: 'INIT', initTodos: response });
        })
        .catch((err) => {
          throw new Error(err);
        });
    };
    initTodo();
  }, [dispatch]);
  return (
    <>
      {getTodo ? (
        getTodo.map((todo) => {
          return (
            <TodoItem
              text={todo.todo}
              id={todo.id}
              key={todo.id}
              isCompleted={todo.isCompleted}
            />
          );
        })
      ) : (
        <span>TodoList가 없습니다</span>
      )}
    </>
  );
};

export default TodoList;
