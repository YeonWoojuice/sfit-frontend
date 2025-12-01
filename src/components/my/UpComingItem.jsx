import styles from "../../styles/my/UpComingItem.module.css";

function UpComingItem() {
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
        <p className={styles.subtitle}>부제 혹은 내용</p>
      </div>
      <div className={styles.region}>용인시 기흥구 강남대역</div>
      <div className={styles.placeSection}>
        <p>수지구청역</p>
        <p>볼더메이트</p>
      </div>
      <div className={styles.time}>시작 : 00시 00분</div>
    </div>
  );
}

export default UpComingItem;
