import styles from "../../styles/modal/ProgressBar.module.css";

function ProgressBar({ step }) {
  return (
    <div className={styles.progressBar}>
      <div className={styles.circle}>1</div>
      <div className={styles.barBackground}>
        <div
          className={styles.barFill}
          style={{ width: step === 2 ? "100%" : "50%" }}
        ></div>
      </div>
      <div className={styles.circle}>2</div>
    </div>
  );
}

export default ProgressBar;
