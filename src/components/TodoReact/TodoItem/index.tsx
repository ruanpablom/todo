import { GoCircle, GoCheckCircle, GoTrash } from 'react-icons/go';
import { Dispatch, forwardRef, useCallback } from 'react';
import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from 'react-beautiful-dnd';
import { Todo } from '../types';

type TodoItemProps = {
  todo: Todo;
  setTodoList: Dispatch<React.SetStateAction<Todo[]>>;
  className?: string;
} & DraggableProvidedDragHandleProps &
  DraggableProvidedDraggableProps;
export const TodoItem = forwardRef<HTMLLIElement, TodoItemProps>(
  function TodoItem(
    { className, todo, setTodoList, ...props },
    ref,
  ): JSX.Element {
    const concludeTodo = useCallback(() => {
      todo.concluded = !todo.concluded;
      if (todo.concluded) {
        setTodoList(todoList => [
          ...todoList.filter(todoItem => todoItem.id !== todo.id),
          todo,
        ]);
      } else {
        setTodoList(todoList => [
          todo,
          ...todoList.filter(todoItem => todoItem.id !== todo.id),
        ]);
      }
    }, [setTodoList, todo]);

    const deleteTodo = useCallback(() => {
      setTodoList(todoList =>
        todoList.filter(todoItem => todoItem.id !== todo.id),
      );
    }, [setTodoList, todo.id]);

    return (
      <li
        className={`flex gap-2 p-2 w-full bg-white shadowButton rounded items-center ${
          todo.concluded ? 'line-through decoration-red-700 opacity-75' : ''
        } ${className || ''}`}
        {...props}
        ref={ref}
      >
        <span className="font-bold text-red-700 text-left">{todo.content}</span>
        <div id="buttons-container" className="ml-auto flex gap-2 items-center">
          <button type="button" onClick={concludeTodo}>
            {todo.concluded ? (
              <GoCheckCircle size={20} className="text-red-700" />
            ) : (
              <GoCircle size={20} className="text-red-700" />
            )}
          </button>
          <button type="button" onClick={deleteTodo}>
            <GoTrash size={20} className="text-red-700" />
          </button>
        </div>
      </li>
    );
  },
);
