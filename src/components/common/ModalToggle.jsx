import styles from "../../styles/common/ModalToggle.module.css";

function ModalToggle({ type, onClick }) {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.toggle} ${type === "club" ? styles.active : ""}`}
        onClick={() => onClick("club")}
      >
        동호회
      </div>
      <div
        className={`${styles.toggle} ${type === "meetup" ? styles.active : ""}`}
        onClick={() => onClick("meetup")}
      >
        번개모임
      </div>
    </div>
  );
}

export default ModalToggle;
