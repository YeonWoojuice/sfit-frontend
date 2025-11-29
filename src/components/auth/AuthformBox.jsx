import styles from "../../styles/AuthformBox.module.css";

function AuthformBox({ title, children }) {
  return (
    <div className={styles.formBox}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default AuthformBox;
