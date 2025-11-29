import styles from "../../styles/my/UserHistory.module.css";
import HistoryItem from "./HistoryItme";

function UserHistory() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>히스토리</div>
        <div className={styles.filters}>
          <div>전체</div>
          <div>번개</div>
          <div>동호회</div>
        </div>
      </div>
      <div className={styles.lists}>
        <HistoryItem />
      </div>
    </div>
  );
}

export default UserHistory;
