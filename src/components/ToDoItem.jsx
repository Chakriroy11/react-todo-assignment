import React from 'react';

const ToDoItem = ({ todo, deleteTodo }) => {
  return (
    <div className="todo-item">
      <span className="todo-text">
        {todo.text}
      </span>

      <div className="actions">
        {/* Requirement: Event handling for deleting */}
        <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;