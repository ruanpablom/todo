import { GoCircle, GoCheckCircle, GoTrash } from 'react-icons/go';
import { Dispatch } from 'react';
import { Todo } from '../types';

type TodoItemProps = {
  todo: Todo;
  setTodoList: Dispatch<React.SetStateAction<Todo[]>>;
};
export function TodoItem({ todo, setTodoList }: TodoItemProps): JSX.Element {
  const concludeTodo = (todo: Todo) => {
    todo.concluded = !todo.concluded;
    setTodoList(todoList =>
      todoList.map(todoItem => (todoItem.id === todo.id ? todo : todoItem)),
    );
  };

  return (
    <li
      className={`flex gap-2 p-2 w-full bg-white shadowButton rounded items-center ${
        todo.concluded ? 'line-through decoration-red-700 opacity-75' : ''
      }`}
      key={todo.id}
    >
      <span className="font-bold text-red-700 text-left">{todo.content}</span>
      <div id="buttons-container" className="ml-auto flex gap-2 items-center">
        <button type="button" onClick={() => concludeTodo(todo)}>
          {todo.concluded ? (
            <GoCheckCircle size={20} className="text-red-700" />
          ) : (
            <GoCircle size={20} className="text-red-700" />
          )}
        </button>
        <button type="button">
          <GoTrash size={20} className="text-red-700" />
        </button>
      </div>
    </li>
  );
}
