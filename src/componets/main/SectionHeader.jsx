import styles from "../../styles/main/SectionHeader.module.css";

function SectionHeader({ title, sort, isMeeting = false }) {
  return (
    <div className={styles.sectionHeader}>
      <h1 className={styles.sectionTitle}>{title}</h1>
      <div className={styles.sort}>
        {sort}
        {/* {isMeeting && (
          <div className={styles.menu}>
            <p>전체</p>
            <p>최신순</p>
            <p>인기순</p>
            <p>거리순</p>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default SectionHeader;
