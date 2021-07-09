import './App.css';
import Navbar from './Navbar';
import AddItem from './AddItem';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import itemReducer from './itemReducer';
import TodoList from './TodoList';

function App() {

  const store = createStore(itemReducer)
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <AddItem />
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
