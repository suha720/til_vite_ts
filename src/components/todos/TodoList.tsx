import type React from 'react';
import type { TodoType } from '../../types/TodoType';
import TodoItem from './TodoItem';

type TodoListProps = {
  children?: React.ReactNode;
  todos: TodoType[];
  toggleTodo: (id: string) => void;
  editTodo: (id: string, editTitle: string) => void;
  deleteTodo: (id: string) => void;
};

const TodoList = ({ todos, toggleTodo, editTodo, deleteTodo }: TodoListProps): JSX.Element => {
  return (
    <div>
      <h2>목록</h2>
      <ul>
        {todos.map((item: TodoType) => (
          <TodoItem
            key={item.id}
            todo={item}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
