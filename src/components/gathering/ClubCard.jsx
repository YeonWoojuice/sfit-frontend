import styles from "../../styles/gathering/ClubCard.module.css";
import CategoryButton from "../common/CategoryButton";
import { SPORT_OPTIONS } from "../../constants/option";

const RecomandIcon = () => {
  return <div className={styles.recoIcon}>추천</div>;
};

const RequestButton = () => {
  return <button className={styles.requestBtn}>신청하기</button>;
};

const DAYS = ["일", "월", "화", "수", "목", "금", "토"];

function ClubCard({ item }) {
  const sport = SPORT_OPTIONS.find((option) => option.id === item.sport_id);
  const days = item.days_of_week;

  return (
    <div className={styles.container}>
      <div className={styles.img}></div>

      <div className={styles.contentBox}>
        <div className={styles.contentHeader}>
          <div className={styles.leftBox}>
            <RecomandIcon />

            <p className={styles.name}>{item.name}</p>
          </div>
          <RequestButton />
        </div>
        <p className={styles.content}>{item.explain}</p>
      </div>

      <div className={styles.bottomBox}>
        <div className={styles.dates}>
          {days.map((day, index) => (
            <CategoryButton key={index}>{DAYS[day]}</CategoryButton>
          ))}
        </div>
        <div className={styles.btnBox}>
          <CategoryButton>{item.region_name}</CategoryButton>
          <CategoryButton>{sport.name}</CategoryButton>
          <CategoryButton>{item.rating_avg}</CategoryButton>
        </div>
      </div>
    </div>
  );
}

export default ClubCard;
