import styles from "../../styles/coach/CoachList.module.css";
import CoachCard from "./CoachCard";
import SortOptions from "./SortOptions";

function CoachList({ coaches = [] }) {
  // 임시 데이터
  const mockCoaches = [
    {
      id: 1,
      name: "고미경",
      rating: "4.86",
      reviewCount: "247",
      description1: "소통과 공감으로 함께 하는 시간~",
      description2: "일정 조율 및 가격 제시",
      sport: "종목 명",
    },
    {
      id: 2,
      name: "고미경",
      rating: "4.86",
      reviewCount: "247",
      description1: "소통과 공감으로 함께 하는 시간~",
      description2: "일정 조율 및 가격 제시",
      sport: "종목 명",
    },
    {
      id: 3,
      name: "고미경",
      rating: "4.86",
      reviewCount: "247",
      description1: "소통과 공감으로 함께 하는 시간~",
      description2: "일정 조율 및 가격 제시",
      sport: "종목 명",
    },
  ];

  const displayCoaches = coaches.length > 0 ? coaches : mockCoaches;

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
