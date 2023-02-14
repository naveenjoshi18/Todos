import Todo from './Todos/Todo'
import './App.css';
import { Provider } from 'react-redux';
import store from './Todos/Redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Todo />
    </div>
    </Provider>
  );
}

export default App;
