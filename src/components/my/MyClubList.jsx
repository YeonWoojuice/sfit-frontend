import styles from "../../styles/my/MyClubList.module.css";
import ClubItem from "./ClubItem";

function MyClubList() {
  return (
    <div className={styles.clubContainer}>
      <div className={styles.header}>
        <p className={styles.title}>내 가입 동호회</p>
        <p className={styles.select}>모두 보기</p>
      </div>
      <div className={styles.clubs}>
        <ClubItem />
        <ClubItem />
        <ClubItem />
      </div>
    </div>
  );
}

export default MyClubList;
