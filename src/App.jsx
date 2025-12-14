import { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // 1. Add Item
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

  // 2. Delete Item
  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  // 3. Mark as Completed (Requirement: Event handling for completion)
  const toggleComplete = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // 4. Edit Item (Requirement: Event handling for editing)
  const editTodo = (id, newText) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="app-container">
      <Header />
      
      <form onSubmit={addTodo} className="input-form">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Add a new task..." 
        />
        <button type="submit" className="add-btn">Add</button>
      </form>

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