import styles from "../../styles/gathering/MeetingCard.module.css";
import CategoryButton from "../common/CategoryButton";

const RecomandIcon = () => {
  return <div className={styles.recoIcon}>추천</div>;
};

const RequestButton = () => {
  return <button className={styles.requestBtn}>신청하기</button>;
};

function ClubCard({ meeting }) {
  return (
    <div className={styles.container}>
      <div className={styles.img}></div>

      <div className={styles.contentBox}>
        <div className={styles.contentHeader}>
          <div className={styles.leftBox}>
            <RecomandIcon />
            <p className={styles.name}>{meeting.name}</p>
          </div>
          <RequestButton />
        </div>
        <p className={styles.content}>{meeting.description}</p>
      </div>

      <div className={styles.bottomBox}>
        {meeting.date}
        <div className={styles.btnBox}>
          <CategoryButton>{meeting.region}</CategoryButton>
          <CategoryButton>{meeting.sport}</CategoryButton>
          <CategoryButton>{meeting.rating}</CategoryButton>
        </div>
      </div>
    </div>
  );
}

export default ClubCard;
