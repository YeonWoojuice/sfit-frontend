import styles from "../../../Styles/modal/common/Input.module.css";

function Input({ label, placeholder, value, onChange }) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      ></input>
    </div>
  );
}

export default Input;
