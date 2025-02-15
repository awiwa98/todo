import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <div className={styles.aboutContainer}>
        <h1 className={styles.aboutTitle}>About us🩷</h1>

        <div className={styles.aboutText}>
          <h2>
            Welcome to <span className={styles.styledWord}>TodoMate</span>, Your
            simple and efficient to-do list app designed to help you stay
            organized and productive.
          </h2>

          <ul>
            <h3>In our app you can:</h3>
            <li>Add tasks that need to be done.</li>
            <li>Delete tasks as needed.</li>
            <li>View an overview of active and completed todos.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
