import styles from "./TodoItem.module.css";

const TodoItem = ({ todo, onToggleTodo, onRemoveTodo }) => {
  return (
    <li className={styles.todoItem}> 
      <button 
        onClick={() => onToggleTodo(todo.id)} 
        className={styles.statusIcon} 
        aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}>
          
        {todo.completed ? ( 
          <i className={`fa-regular fa-circle-check ${styles.completedIcon}`}></i>
        ) : ( 
          <i className="fa-regular fa-circle uncompletedIcon"></i>
        )}
      </button>

      <span className={`${styles.todoText} ${todo.completed ? styles.completedText : ""}`}>
        {todo.text}
      </span>

      <button 
        className={styles.deleteButton} 
        onClick={() => onRemoveTodo(todo.id)} 
        aria-label="Delete task">

        <i className="fa-solid fa-xmark deleteIcon"></i>
      </button>
    </li>
  );
};

export default TodoItem;











  