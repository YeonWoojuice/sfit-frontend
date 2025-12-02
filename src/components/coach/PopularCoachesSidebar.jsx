import { useState } from "react";
import styles from "../../styles/coach/PopularCoachesSidebar.module.css";
import coachstar from "../../assets/coach/coachstar.svg";
function PopularCoachesSidebar() {
  const [activeTab, setActiveTab] = useState("전문가");

  const tabs = ["전체", "전문가", "커뮤니티 코치"];

  // 임시 데이터
  const popularCoaches = [
    {
      id: 1,
      name: "강사명",
      sport: "종목",
      description: "키워드 및 설명...",
      rating: "4.7",
      reviewCount: "142",
    },
    {
      id: 2,
      name: "강사명",
      sport: "종목",
      description: "키워드 및 설명...",
      rating: "4.7",
      reviewCount: "142",
    },
    {
      id: 3,
      name: "강사명",
      sport: "종목",
      description: "키워드 및 설명...",
      rating: "4.7",
      reviewCount: "142",
    },
    
  ];

  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>실시간 인기 코치</h2>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${
              activeTab === tab ? styles.active : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={styles.coachList}>
        {popularCoaches.map((coach) => (
          <div key={coach.id} className={styles.coachItem}>
            <div className={styles.profileImage}></div>
            <div className={styles.info}>
              <div className={styles.nameRow}>
                <span className={styles.sportTag}>{coach.sport}</span>
                <h3 className={styles.name}>{coach.name}</h3>
              </div>
              <p className={styles.description}>{coach.description}</p>
              <div className={styles.rating}>
                <img src={coachstar} alt="star" className={styles.star} />
                <span className={styles.ratingValue}>{coach.rating}</span>
                <span className={styles.reviewCount}>({coach.reviewCount})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularCoachesSidebar;

