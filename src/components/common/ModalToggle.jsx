import styles from "../../Styles/common/ModalToggle.module.css";

function ModalToggle({ type, onClick }) {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.toggle} ${type === "club" ? styles.active : ""}`}
        onClick={() => onClick("club")}
      >
        ?�호??
      </div>
      <div
        className={`${styles.toggle} ${
          type === "lightning" ? styles.active : ""
        }`}
        onClick={() => onClick("lightning")}
      >
        번개모임
      </div>
    </div>
  );
}

export default ModalToggle;
