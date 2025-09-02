import type React from 'react';
import type { Todo, TodoType } from '../../types/TodoType';
import TodoItem from './TodoItem';
import { useTodos } from '../../contexts/TodoContext';

type TodoListProps = {
  children?: React.ReactNode;
};

const TodoList = ({}: TodoListProps): JSX.Element => {
  const { todos } = useTodos();
  return (
    <div>
      <h2>목록</h2>
      <ul>
        {todos.map((item: Todo) => (
          <TodoItem key={item.id} todo={item} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
