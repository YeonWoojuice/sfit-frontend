import { useState } from "react";
import styles from "../styles/coach/CoachPage.module.css";
import FilterMenu from "../components/main/FilterMenu";
import CoachTab from "../components/coach/CoachTab";
import SortOptions from "../components/coach/SortOptions";
import RecommendedCoaches from "../components/coach/RecommendedCoaches";
import CoachList from "../components/coach/CoachList";
import PopularCoachesSidebar from "../components/coach/PopularCoachesSidebar";
import FloatingLayout from "../components/common/FloatingLayout";
import FloatingButton from "../components/common/FloatingButton";
import prevIcon from "../assets/prev.png";
import nextIcon from "../assets/next.png";
import { getRange } from "../utils/pagination";
import { REGION_OPTIONS, SPORT_OPTIONS } from "../constants/option";

function CoachPage() {
  const pageInfo = {
    page: 1,
    size: 8,
    totalPages: 8,
    totalElements: 61,
    hasPrev: false,
    hasNext: true,
  };

  const pages = getRange(1, pageInfo.totalPages);
  const [filter, setFilter] = useState({
    regions: "",
    sports: "",
    coach: false,
  });

  const handleFilter = (key, value) => {
    setFilter((prev) => ({ ...prev, [key]: prev[key] === value ? "" : value }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.section}>
          <FilterMenu filter={filter} onClick={handleFilter} />
          <div className={styles.midSection}>
            <RecommendedCoaches />
            <CoachTab />
            <CoachList />
            {/* 페이지네이션 */}
            <div className={styles.bottom}>
              {pageInfo.totalElements > 8 ? (
                <>
                  <img src={prevIcon} className={styles.prev} alt="prev" />
                  <div className={styles.pages}>
                    {pages.map((item) => (
                      <div key={item} className={styles.page}>
                        {item}
                      </div>
                    ))}
                  </div>
                  <img src={nextIcon} className={styles.next} alt="next" />
                </>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.popularCoachesContainer}>
              <PopularCoachesSidebar />
            </div>
            {/* 플로팅 버튼 */}
            <FloatingLayout>
              <FloatingButton type="chat" />
              <FloatingButton type="new" />
            </FloatingLayout>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoachPage