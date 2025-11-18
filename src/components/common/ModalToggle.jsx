import styles from "../../styles/common/ModalToggle.module.css";

function ModalToggle() {
  return (
    <div className={styles.container}>
      <div className={`${styles.toggle} ${styles.active}`}>동호회</div>
      <div className={styles.toggle}>번개모임</div>
    </div>
  );
}

export default ModalToggle;
