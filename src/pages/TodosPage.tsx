import TodoList from '../components/todos/TodoList';
import TodoWrite from '../components/todos/TodoWrite';
import { TodoProvider } from '../contexts/TodoContext';

const TodosPage = () => {
  return (
    <div>
      <h2>할일</h2>
      <TodoProvider>
        <div>
          <TodoWrite></TodoWrite>
        </div>
        <div>
          <TodoList></TodoList>
        </div>
      </TodoProvider>
    </div>
  );
};

export default TodosPage;
