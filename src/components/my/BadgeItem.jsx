import styles from "../../styles/my/BadgeItem.module.css";
import BadgeIcon from "../../assets/badge.svg?react";

function BadgeItem() {
  return (
    <div className={styles.itemContainer}>
      {/* <div className={styles.img}></div> */}
      <div className={styles.circle}>
        <BadgeIcon className={styles.img} />
      </div>
      <div className={styles.content}>
        <div className={styles.textGroup}>
          <p className={styles.title}>번개 참여 뱃지</p>
          <p className={styles.description}>번개 모임 3회 참여 시 얻는 뱃지</p>
        </div>
        <div className={styles.count}>8.9만명</div>
      </div>
    </div>
  );
}

export default BadgeItem;
