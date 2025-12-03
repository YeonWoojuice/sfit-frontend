import styles from "../../styles/gathering/ClubCard.module.css";
import CategoryButton from "../common/CategoryButton";
import calendar from "../../assets/calendar.svg";
import { REGION_OPTIONS, SPORT_OPTIONS } from "../../constants/option";

const RecomandIcon = () => {
  return <div className={styles.recoIcon}>추천</div>;
};

const RequestButton = () => {
  return <button className={styles.requestBtn}>신청하기</button>;
};

const DAYS = ["일", "월", "화", "수", "목", "금", "토"];

function ClubCard({ item, type }) {
  const sport = SPORT_OPTIONS.find((option) => option.id === item.sport_id);
  const regin = REGION_OPTIONS.find((option) => option.id === item.region_code);
  const days = item.days_of_week;

  // /uploads/1764340715270-225481246.jpg
  // /images/default-club.jpg
  return (
    <div className={styles.container}>
      <img
        src="https://sfit-api-server.onrender.com/images/default-club.jpg"
        className={styles.img}
      ></img>
      {/* <img src={item.image_path} className={styles.img}></img> */}
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
          {type === "번개 모임" ? (
            <div className={styles.dateBox}>
              <img src={calendar} className={styles.icon}></img>
              <p>{item.date}</p>
            </div>
          ) : (
            days.map((day, index) => (
              <CategoryButton key={index}>{DAYS[day]}</CategoryButton>
            ))
          )}
        </div>
        <div className={styles.btnBox}>
          <CategoryButton>{regin.name}</CategoryButton>
          <CategoryButton>{sport.name}</CategoryButton>
          <CategoryButton>{item.rating_avg}</CategoryButton>
        </div>
      </div>
    </div>
  );
}

export default ClubCard;
