import { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  // Requirement: Use state to manage the list of to-do items
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Requirement: Event handling for adding a new to-do item
  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    };
    
    setTodos([...todos, newTodo]);
    setInput('');
  };

  // Requirement: Event handling for deleting a to-do item
  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  // Placeholders for next phase (to prevent errors in ToDoList)
  const toggleComplete = (id) => {}; 
  const editTodo = (id, text) => {};

  return (
    <div className="app-container">
      <Header />
      
      {/* Form to add tasks */}
      <form onSubmit={addTodo} className="input-form">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Add a new task..." 
        />
        <button type="submit" className="add-btn">Add</button>
      </form>

      {/* Requirement: Pass down state and functions as props */}
      <ToDoList 
        todos={todos} 
        deleteTodo={deleteTodo} 
        toggleComplete={toggleComplete}
        editTodo={editTodo} 
      />
    </div>
  );
}

export default App;