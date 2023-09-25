import { Dispatch, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../types';

export type TodoInputProps = {
  setTodoList: Dispatch<React.SetStateAction<Todo[]>>;
};

export function TodoInput({ setTodoList }: TodoInputProps): JSX.Element {
  const todoInputRef = useRef<HTMLInputElement>(null);

  const insertTodoList = () => {
    if (todoInputRef.current) {
      const todoContent = todoInputRef.current.value;

      if (todoContent) {
        const todo: Todo = {
          id: uuidv4(),
          content: todoContent,
          concluded: false,
        };

        setTodoList(todoList => [...todoList, todo]);
        todoInputRef.current.value = '';
      }
    }
  };

  return (
    <div id="todo-input-container" className="flex gap-2 h-10">
      <input
        className="w-full h-fit text-xl px-2 bg-white text-red-700 font-bold rounded border-2 border-white outline-none mt-[1px]"
        type="text"
        ref={todoInputRef}
      />
      <button
        type="button"
        className="shadowButton bg-white font-bold text-sm py-1 px-2 rounded-md text-red-700 h-fit"
        onClick={insertTodoList}
      >
        INSERT
      </button>
    </div>
  );
}
