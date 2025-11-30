import styles from "../../styles/my/UpcomingMeetups.module.css";
import UpComingItem from "./UpComingItem";

function UpcomingMeetups() {
  return (
    <div className={styles.meetupContainer}>
      <p className={styles.title}>예정된 번개 모임</p>
      <div className={styles.meetupTable}>
        <div className={styles.tableHeader}>
          <p className={styles.date}>날짜</p>
          <p className={styles.title}>제목</p>
          <p className={styles.region}>지역</p>
          <p className={styles.place}>장소</p>
          <p className={styles.time}>시간</p>
        </div>
        <div className={styles.tableBody}>
          <UpComingItem />
          <UpComingItem />
          <UpComingItem />
        </div>
      </div>
    </div>
  );
}

export default UpcomingMeetups;
