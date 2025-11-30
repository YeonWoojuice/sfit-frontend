import styles from "../../styles/my/ClubItem.module.css";
import CategoryButton from "../common/CategoryButton";

function ClubItem() {
  return (
    <div className={styles.container}>
      <div className={styles.img}></div>
      <div className={styles.contentBox}>
        <div className={styles.textBox}>
          <p className={styles.name}>[모임 명]게시글 제목 명</p>
          <p className={styles.description}>게시물 혹은 부제 혹은 부연설명</p>
        </div>
        <div className={styles.box}>
          <p>D-Day 형식</p>
          <div className={styles.btnBox}>
            <CategoryButton>지역</CategoryButton>
            <CategoryButton>종목</CategoryButton>
            <CategoryButton>별점</CategoryButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClubItem;
