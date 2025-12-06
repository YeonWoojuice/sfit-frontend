import styles from "../../styles/coach/CoachList.module.css";
import CoachCard from "./CoachCard";
import SortOptions from "./SortOptions";

function CoachList({ coaches = [] }) {
  const displayCoaches = coaches;

  return (
    <section className={styles.coachListSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>코치 리스트</h2>
        <SortOptions />
      </div>
      <div className={styles.coachList}>
        {displayCoaches.map((coach) => (
          <CoachCard key={coach.id} coach={coach} />
        ))}
      </div>
    </section>
  );
}

export default CoachList;
