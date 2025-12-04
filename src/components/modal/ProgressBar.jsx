import styles from "../../styles/modal/ProgressBar.module.css";

function ProgressBar({ type, step }) {
  const steps = {
    club: {
      1: "50%",
      2: "100%",
    },

    meetup: {
      1: "0%",
      2: "50%",
      3: "100%",
    },
  };

  const current = steps[type];
  const isMeetup = type === "meetup";
  return (
    <div className={styles.progressBar}>
      <div className={styles.circle}>1</div>
      {isMeetup ? (
        <div
          className={`
        ${styles.circle} ${styles.middle}`}
        >
          2
        </div>
      ) : (
        ""
      )}
      <div className={styles.barBackground}>
        <div className={styles.barFill} style={{ width: current[step] }}></div>
      </div>
      <div className={styles.circle}>{isMeetup ? 3 : 2}</div>
    </div>
  );
}

export default ProgressBar;
