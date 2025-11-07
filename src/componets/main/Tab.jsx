import styles from "../../styles/main/Tab.module.css";

function Tab() {
  return (
    <div className={styles.container}>
      <div className={styles.tabBtn}>전체</div>
      <div className={styles.tabBtn}>동호회</div>
      <div className={styles.tabBtn}>번개 모임</div>
      <div className={styles.tabBtn}>나의 모임</div>
    </div>
  );
}

export default Tab;
