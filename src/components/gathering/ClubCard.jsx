import { SPORT_OPTIONS } from "../../constants/option";
import styles from "../../styles/gathering/MeetingCard.module.css";

const RecomandIcon = () => {
  return <div className={styles.recoIcon}>추천</div>;
};

const RequestButton = () => {
  return <button className={styles.requestBtn}>신청하기</button>;
};

const CategoryButton = ({ children }) => {
  return <button className={styles.categoryBtn}>{children}</button>;
};

function ClubCard({ item }) {
  const sport = SPORT_OPTIONS.find((option) => option.id === item.sport_id);

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
        {item.date}
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
