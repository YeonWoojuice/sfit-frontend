import styles from "../../styles/my/UserHistory.module.css";
import HistoryItem from "./HistoryItem";

function UserHistory() {
  return (
    <div className={styles.historyContainer}>
      <div className={styles.header}>
        <div className={styles.title}>히스토리</div>
        <div className={styles.filters}>
          <div className={styles.all}>전체</div>
          <div className={styles.meetup}>번개</div>
          <div className={styles.club}>동호회</div>
        </div>
      </div>
      <div className={styles.historyTable}>
        <div className={styles.tableHeader}>
          <p>날짜</p>
          <p>모임</p>
          <p>지역</p>
          <p>장소</p>
          <p>참겨 여부</p>
          <p>별점 기록</p>
        </div>
        <div className={styles.tableBody}>
          <HistoryItem label="참가" />
          <HistoryItem label="불참" />
          <HistoryItem label="불참" />
          <HistoryItem label="참가" />
          <HistoryItem label="불참" />
        </div>
      </div>
    </div>
  );
}

export default UserHistory;
