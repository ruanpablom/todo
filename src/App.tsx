/* eslint-disable @typescript-eslint/no-misused-promises */

import './App.css';
import { TodoReact } from './components/TodoReact';

function App(): JSX.Element {
  return (
    <div id="app-container" className="w-96">
      <TodoReact />
    </div>
  );
}

export default App;
