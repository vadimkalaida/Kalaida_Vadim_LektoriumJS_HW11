import React from 'react';
import './App.scss';
import ToDoComponentFunc from './components/ToDoComponentFunc/ToDoComponentFunc'
import store from "./store/store";
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToDoComponentFunc />
      </div>
    </Provider>
  );
}

export default App;
