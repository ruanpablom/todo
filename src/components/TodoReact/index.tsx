import { useEffect, useState } from 'react';
import { Todo } from './types';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';

export function TodoReact(): JSX.Element {
  const [todoList, setTodoList] = useState<Todo[]>(
    localStorage.getItem('todoList')
      ? JSON.parse(localStorage.getItem('todoList') as string)
      : [],
  );

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div id="todo-container" className="w-full">
      <TodoInput setTodoList={setTodoList} />
      <TodoList todos={todoList} setTodoList={setTodoList} />
    </div>
  );
}
