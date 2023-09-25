import { Dispatch } from 'react';
import { TodoItem } from '../TodoItem';
import { Todo } from '../types';

type TodoListProps = {
  todos: Todo[];
  setTodoList: Dispatch<React.SetStateAction<Todo[]>>;
};

export function TodoList({ todos, setTodoList }: TodoListProps): JSX.Element {
  return (
    <ul className="flex flex-col gap-3">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} setTodoList={setTodoList} />
      ))}
    </ul>
  );
}
