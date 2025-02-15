import styles from "./TodoList.module.css";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggleTodo, onRemoveTodo }) => {
  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className={styles.ListContainer}>
      <div className={styles.todoSection}>
        <h3>To Do</h3>
        {activeTodos.length > 0 ? (
          <ul className={styles.List}>
            {activeTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggleTodo={onToggleTodo}
                onRemoveTodo={onRemoveTodo}/>
            ))}
          </ul>
        ) : (
          <p>No tasks to do!</p>
        )}
      </div>

      <div className={styles.completedSection}>
        <h3>Completed</h3>
        {completedTodos.length > 0 ? (
          <ul className={styles.List}>
            {completedTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggleTodo={onToggleTodo}
                onRemoveTodo={onRemoveTodo}/>
            ))}
          </ul>
        ) : (
          <p>No completed tasks!</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;








