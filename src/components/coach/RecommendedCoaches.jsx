import { useState } from "react";
import styles from "../../styles/coach/RecommendedCoaches.module.css";
import prevIcon from "../../assets/coach/leftarrow.svg";
import nextIcon from "../../assets/coach/rightarrow.svg";

function RecommendedCoaches() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 임시 데이터
  const recommendedCoaches = [
    {
      id: 1,
      name: "강사명1",
      sport: "테니스",
      region: "서울",
    },
    {
      id: 2,
      name: "강사명2",
      sport: "골프",
      region: "경기",
    },
    {
      id: 3,
      name: "강사명3",
      sport: "수영",
      region: "인천",
    },
    {
        id: 4,
        name: "강사명3",
        sport: "수영",
        region: "인천",
      },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? recommendedCoaches.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === recommendedCoaches.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className={styles.recommendedSection}>
      <h2 className={styles.title}>김강냉님을 위한 추천 코치</h2>
      <div className={styles.carousel}>
        <button className={styles.prevBtn} onClick={handlePrev}>
          <img src={prevIcon} alt="prev" />
        </button>
        <div className={styles.carouselContent}>
          {recommendedCoaches.map((coach, index) => (
            <div
              key={coach.id}
              className={`${styles.coachCard} ${
                index === currentIndex ? styles.active : ""
              }`}
            >
              <div className={styles.profileImage}></div>
              <div className={styles.info}>
                <span className={styles.sport}>{coach.sport}</span>
                <span className={styles.region}>{coach.region}</span>
                <h3 className={styles.name}>{coach.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.nextBtn} onClick={handleNext}>
          <img src={nextIcon} alt="next" />
        </button>
      </div>
    </section>
  );
}

export default RecommendedCoaches;

