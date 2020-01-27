import React from 'react';
import './ToDoComponentFunc.scss'
import AddTodo from "../../containers/AddTodo";
import VisibleTodoList from "../../containers/VisibleTodoList";

const ToDoComponentFunc = ({ dispatch }) => {

  return (
    <div className="wrapper">
      <div className="topBlock">
        <AddTodo />
        <p className="topBlock-text">Mouse Right Click - delete item</p>
      </div>
      <VisibleTodoList />
    </div>
  );
}

export default ToDoComponentFunc;