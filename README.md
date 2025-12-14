# ToDo App — Module 3 (Vite + React)

**Student:** Chandaka Chakri  
**Project:** Simple To-Do List application (Vite + React)  

---

## Summary
This is a modern, responsive To-Do List application built with **Vite** and **React**. It fulfills the requirements for the Module 3 React Assignment by demonstrating the use of functional components, state management, props, and event handling.

### Key Features
* **Tech Stack:** Built using **Vite** for fast development and **React** (Functional Components).
* **Components:** Organized structure including `App`, `Header`, `ToDoList`, and `ToDoItem`.
* **CRUD Operations:**
    * **Add:** Users can add new tasks.
    * **List:** Renders tasks dynamically using `.map()` with unique `key` props.
    * **Edit:** Users can edit existing tasks inline.
    * **Delete:** Users can remove tasks.
    * **Toggle:** Users can mark tasks as completed.
* **State Management:** State is managed in the `App` component and passed down via props.
* **Styling:** Custom CSS located in `src/App.css` (No external UI libraries used).

---

## Project Structure
The project adheres to the following component hierarchy:
* `App.jsx`: Main container and state manager.
* `Header.jsx`: Displays the application title.
* `ToDoList.jsx`: Iterates through the todos state to render the list.
* `ToDoItem.jsx`: Renders individual tasks and handles edit/delete/toggle actions.

---

## How to Run the Application

Follow these steps to set up and run the project locally:

1.  **Clone the repository** (or unzip the project folder):
    ```bash
    git clone "https://github.com/Chakriroy11/react-todo-assignment"
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd todo-app
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Open in Browser:**
    Click the link shown in your terminal (usually `http://localhost:5173`) to view the application.
