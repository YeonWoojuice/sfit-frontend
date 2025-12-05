import styles from "../../styles/my/ClubItem.module.css";
import CategoryButton from "../common/CategoryButton";
import calendar from "../../assets/calendar.svg";
import { REGION_OPTIONS, SPORT_OPTIONS } from "../../constants/option";

function ClubItem({ item }) {
  const imgUrl = "https://sfit-api-server.onrender.com" + item.image_url;
  const date = item.joined_at.slice(0, 10);
  const getSportsString = () => {
    if (!item.sports || item.sports.length === 0) return "선택 안함";

    return item.sports
      .map((sportId) => {
        const sport = SPORT_OPTIONS.find((option) => option.id === sportId);
        return sport ? sport.name : null;
      })
      .filter(Boolean)
      .join(" / ");
  };
  const getRegionString = () => {
    const region = REGION_OPTIONS.find(
      (option) => option.id === item.region_code
    );
    return region ? region.name : "지역 미설정";
  };

  return (
    <div className={styles.container}>
      <img src={imgUrl} className={styles.img}></img>
      <div className={styles.contentBox}>
        <div className={styles.textBox}>
          <p className={styles.name}>{item.name}</p>
          <p className={styles.description}>게시물 혹은 부제 혹은 부연설명</p>
        </div>
        <div className={styles.box}>
          <div className={styles.dateBox}>
            <img src={calendar} className={styles.calendar}></img>
            <p>{date}</p>
          </div>
          <div className={styles.btnBox}>
            <CategoryButton isMy={true}>{getRegionString()}</CategoryButton>
            <CategoryButton isMy={true}>{getSportsString()}</CategoryButton>
            <CategoryButton isMy={true}>{item.member_count}</CategoryButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClubItem;
