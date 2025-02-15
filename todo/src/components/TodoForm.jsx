import { useState } from "react";
import styles from "./TodoForm.module.css";

const TodoForm = ({ onAddTodo }) => {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); 
  const maxLength = 30;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputText.trim() === "") {
      setError(true);
      setErrorMessage("Please enter a task!"); 
    } else {
      onAddTodo(inputText);
      setInputText("");
      setError(false);
      setErrorMessage(""); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={`${styles.input} ${error ? styles.errorInput : ""}`}
          value={inputText}
          onChange={(e) => {
            if (e.target.value.length <= maxLength) {
              setInputText(e.target.value);
              setError(false);
              setErrorMessage(""); 
            }
          }}
          placeholder={error ? errorMessage : "Add a new task..."} 
          maxLength={maxLength}
        />
        <button type="submit" className={styles.button}>
          <i className="fa-solid fa-circle-plus"></i>
        </button>
      </div>
    </form>
  );
};

export default TodoForm;








