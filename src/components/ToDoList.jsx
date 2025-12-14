import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, deleteTodo, toggleComplete, editTodo }) => {
  return (
    <div className="todo-list">
      {todos.length === 0 ? <p className="empty-msg">No tasks yet!</p> : null}
      
      {todos.map((todo) => (
        <ToDoItem 
          key={todo.id} 
          todo={todo} 
          deleteTodo={deleteTodo} 
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default ToDoList;