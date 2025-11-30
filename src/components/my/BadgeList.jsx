import styles from "../../styles/my/BadgeList.module.css";
import BadgeItem from "./BadgeItem";

function BadgeList() {
  return (
    <div className={styles.badgeContainer}>
      <div className={styles.header}>
        <p className={styles.title}>뱃지</p>
        <p className={styles.select}>모두 보기</p>
      </div>
      <div className={styles.badges}>
        <BadgeItem />
        <BadgeItem />
        <BadgeItem />
        <BadgeItem />
      </div>
    </div>
  );
}

export default BadgeList;
