import { useEffect, useState } from "react";
import styles from "../../styles/my/UpComingMeetups.module.css";
import UpComingItem from "./UpComingItem";
import Loading from "../common/Loading";
import { getMeetups } from "../../api/private";

function UpcomingMeetups() {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMeetup() {
      try {
        const data = await getMeetups();
        setMeetups(data.flashes);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    getMeetup();
  }, []);

  if (loading) <Loading />;

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
          {/* {meetups.map((item, index) => (
            <UpComingItem key={index} item={item}/>
          ))} */}
          <UpComingItem />
          <UpComingItem />
          <UpComingItem />
        </div>
      </div>
    </div>
  );
}

export default UpcomingMeetups;
