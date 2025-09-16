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
      <h3 style={{ marginBottom: 'var(--space-4)', color: 'var(--gray-800)' }}>📋 할 일 목록</h3>{' '}
      <ul>
        {todos.map((item: Todo, index: number) => (
          <TodoItem key={item.id} todo={item} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
