import { REGION_OPTIONS, SPORT_OPTIONS } from "../../constants/option";
import styles from "../../styles/my/UpComingItem.module.css";

function UpComingItem({ item }) {
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
    <div className={styles.itemContainer}>
      <div className={styles.dateSection}>
        <p>2025년</p>
        <p>10월 24일</p>
        <div className={styles.timelineMarker}>
          <div className={styles.markerInner}></div>
        </div>
      </div>
      <div className={styles.infoSection}>
        <p className={styles.name}>아우내 배드민턴</p>
        {/* <p className={styles.name}>{item.title}</p> */}
        <p className={styles.subtitle}>부제 혹은 내용</p>
      </div>
      <div className={styles.region}>용인시 기흥구 강남대역</div>
      {/* <div className={styles.region}>{getRegionString()}</div> */}
      <div className={styles.placeSection}>
        <p>수지구청역</p>
        <p>볼더메이트</p>
      </div>
      <div className={styles.time}>시작 : 00시 00분</div>
      {/* <div className={styles.time}>시작 : {item.time}</div> */}
    </div>
  );
}

export default UpComingItem;
