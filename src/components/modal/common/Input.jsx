import styles from "../../../styles/modal/common/Input.module.css";

function Input({ label, placeholder }) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
      ></input>
    </div>
  );
}

export default Input;
