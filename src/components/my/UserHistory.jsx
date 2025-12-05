import { useEffect, useState } from "react";
import styles from "../../styles/my/UserHistory.module.css";
import HistoryItem from "./HistoryItem";
import { getHistory } from "../../api/private";
import Loading from "../common/Loading";

function UserHistory() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMyHistory() {
      try {
        const res = await getHistory();
        setData(res);
        console.log(res);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    getMyHistory();
  }, []);

  if (loading) return <Loading />;
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
          <p>참가 여부</p>
          <p>별점 기록</p>
        </div>
        <div className={styles.tableBody}>
          {data.map((item, index) => (
            <HistoryItem key={index} label={item.my_state} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserHistory;
