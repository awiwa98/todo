import { useState } from "react";
import styles from "./TodoForm.module.css";

const TodoForm = ({ onAddTodo }) => {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(false);
  const maxLength = 30;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputText.trim() === "") {
      setError(true);
    } else {
      onAddTodo(inputText);
      setInputText("");
      setError(false);
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
            }
          }}
          placeholder="Add a new task..."
          maxLength={maxLength}/>
          
        <button type="submit" className={styles.button}>
          <i className="fa-solid fa-circle-plus"></i>
        </button>
      </div>
    </form>
  );
};

export default TodoForm;







