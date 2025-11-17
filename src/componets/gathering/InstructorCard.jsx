import styles from "../../styles/gathering/InsturctorCard.module.css";

function InstructorCard({ isNew = false }) {
  return (
    <div className={styles.container}>
      <div className={styles.img}></div>
      <div className={styles.textBox}>
        <div className={styles.titles}>
          {isNew && <div className={styles.new}>N</div>}
          <p className={styles.title}>[모임 명] 게시글 제목 설명</p>
        </div>
        <p className={styles.content}>게시물 부제 혹은 부연설명</p>
      </div>
    </div>
  );
}

export default InstructorCard;
