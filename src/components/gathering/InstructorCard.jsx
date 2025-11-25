import styles from "../../Styles/gathering/InsturctorCard.module.css";

function InstructorCard({ isNew = false }) {
  return (
    <div className={styles.container}>
      <div className={styles.img}></div>
      <div className={styles.textBox}>
        <div className={styles.titles}>
          {isNew && <div className={styles.new}>N</div>}
          <p className={styles.title}>[ëª¨ìž„ ëª? ê²Œì‹œê¸€ ?œëª© ?¤ëª…</p>
        </div>
        <p className={styles.content}>ê²Œì‹œë¬?ë¶€???¹ì? ë¶€?°ì„¤ëª?/p>
      </div>
    </div>
  );
}

export default InstructorCard;
