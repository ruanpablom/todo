import { useState } from 'react';
import { Todo } from './types';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';

export function TodoReact(): JSX.Element {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  return (
    <div id="todo-container" className="w-full">
      <TodoInput setTodoList={setTodoList} />
      <TodoList todos={todoList} setTodoList={setTodoList} />
    </div>
  );
}
