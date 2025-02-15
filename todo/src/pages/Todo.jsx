import { useState, useEffect } from "react";
import styles from "./Todo.module.css";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Todo = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const allTodosCompleted =
    todos.length > 0 && todos.every((todo) => todo.completed);

  return (
    <div className={styles.container}>
      <h1 className={styles.title} key={allTodosCompleted ? "completed" : "todo"}>
        {allTodosCompleted ? (
          <span>Yay! All tasks completed! 🎉</span>
        ) : (
          <span>Things to Do🩷</span>
        )}
      </h1>

      <TodoForm onAddTodo={addTodo} />

      <TodoList todos={todos} onToggleTodo={toggleTodo} onRemoveTodo={removeTodo} />
    </div>
  );
};

export default Todo;







