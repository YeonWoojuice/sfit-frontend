import { useState } from "react";
import styles from "../../styles/coach/PopularCoachesSidebar.module.css";

function PopularCoachesSidebar() {
  const [activeTab, setActiveTab] = useState("전체");

  const tabs = ["전체", "전문가", "커뮤니티 코치"];

  // 임시 데이터
  const popularCoaches = [
    {
      id: 1,
      name: "코치 이름 1",
      sport: "테니스",
      rating: "4.8",
    },
    {
      id: 2,
      name: "코치 이름 2",
      sport: "골프",
      rating: "4.5",
    },
    {
      id: 3,
      name: "코치 이름 3",
      sport: "수영",
      rating: "4.7",
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
              <h3 className={styles.name}>{coach.name}</h3>
              <div className={styles.details}>
                <span className={styles.sport}>{coach.sport}</span>
                <div className={styles.rating}>
                  <span className={styles.star}>★</span>
                  <span className={styles.ratingValue}>{coach.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularCoachesSidebar;

