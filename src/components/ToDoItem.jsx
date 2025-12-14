import React, { useState } from 'react';

const ToDoItem = ({ todo, deleteTodo, toggleComplete, editTodo }) => {
  // Local state for editing mode
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEditSave = () => {
    editTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {/* Checkbox for Completion */}
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => toggleComplete(todo.id)} 
        className="checkbox"
      />

      {/* Logic to swap between Input (Edit) and Text (View) */}
      {isEditing ? (
        <input 
          type="text" 
          value={editText} 
          onChange={(e) => setEditText(e.target.value)}
          className="edit-input"
        />
      ) : (
        <span className="todo-text" onClick={() => toggleComplete(todo.id)}>
          {todo.text}
        </span>
      )}

      {/* Action Buttons */}
      <div className="actions">
        {isEditing ? (
          <button className="save-btn" onClick={handleEditSave}>Save</button>
        ) : (
          <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
        )}
        
        <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ToDoItem;