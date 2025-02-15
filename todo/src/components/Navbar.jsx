import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <p>TodoMate</p>
      </div>
      <ul className={styles.navLinks}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>
            Todos
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


