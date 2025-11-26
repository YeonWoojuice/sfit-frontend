import styles from "../styles/AuthLayout.module.css";

function Title({ text, children }) {
  return (
    <div className={styles.Title}>
      <h1 style={{ margin: 0, padding: 0 }}>{text}</h1>
      {children}
    </div>
  );
}

export default Title;
