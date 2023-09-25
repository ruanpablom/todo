/* eslint-disable @typescript-eslint/no-misused-promises */

import './App.css';
import { TodoReact } from './components/TodoReact';

function App(): JSX.Element {
  return (
    <div id="app-container" className="w-96">
      <h1 className="text-white font-bold text-3xl mb-2">TODO List</h1>
      <TodoReact />
    </div>
  );
}

export default App;
