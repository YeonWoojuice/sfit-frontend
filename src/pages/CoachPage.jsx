import { useState, useEffect } from "react";
import styles from "../styles/coach/CoachPage.module.css";
import FilterMenu from "../components/main/FilterMenu";
import CoachTab from "../components/coach/CoachTab";
import SortOptions from "../components/coach/SortOptions";
import RecommendedCoaches from "../components/coach/RecommendedCoaches";
import CoachList from "../components/coach/CoachList";
import PopularCoachesSidebar from "../components/coach/PopularCoachesSidebar";
import FloatingLayout from "../components/common/FloatingLayout";
import FloatingButton from "../components/common/FloatingButton";
import Loading from "../components/common/Loading";
import prevIcon from "../assets/prev.png";
import nextIcon from "../assets/next.png";
import { getRange } from "../utils/pagination";
import { REGION_OPTIONS, SPORT_OPTIONS } from "../constants/option";
import { getCoaches } from "../api/public";

function CoachPage() {
  const [coaches, setCoaches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    async function fetchCoaches() {
      try {
        setLoading(true);
        console.log("코치 목록 API 호출 시작...");
        const data = await getCoaches();
        console.log("API 응답 데이터:", data);
        console.log("받은 코치 수:", data?.coaches?.length || 0);
        
        // 각 코치의 원본 데이터 확인
        data.coaches.forEach((coach, index) => {
          console.log(`코치 ${index + 1} 원본 데이터:`, {
            name: coach.name,
            image_url: coach.image_url,
            sport_names: coach.sport_names,
            region_code: coach.region_code,
          });
        });
        
        // API 응답을 CoachCard가 사용하는 형식으로 변환
        const transformedCoaches = data.coaches.map((coach) => ({
          id: coach.id,
          name: coach.name,
          sport: coach.sport_names || "종목 명",
          description1: coach.introduction || "소통과 공감으로 함께 하는 시간~",
          description2: "일정 조율 및 가격 제시",
          rating: coach.rating ? coach.rating.toFixed(2) : "4.86",
          reviewCount: "247", // API 응답에 없으므로 기본값 사용
          imageUrl: coach.image_url,
          regionCode: coach.region_code,
          ageGroup: coach.age_group,
        }));
        
        console.log("변환된 코치 데이터:", transformedCoaches);
        // 이미지 URL 확인
        transformedCoaches.forEach((coach, index) => {
          console.log(`코치 ${index + 1} 이미지 URL:`, coach.imageUrl || "없음");
        });
        setCoaches(transformedCoaches);
        setLoading(false);
      } catch (error) {
        console.error("코치 목록 조회 오류:", error);
        console.error("에러 상세:", {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status,
        });
        setError(
          error.response?.data?.message || 
          error.message || 
          "코치 목록을 불러오는 중 오류가 발생했습니다."
        );
        setLoading(false);
      }
    }

    fetchCoaches();
  }, []);

  if (loading) return <Loading />;

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.inner}>
          <div style={{ padding: "20px", textAlign: "center" }}>
            <p>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.section}>
          <FilterMenu filter={filter} onClick={handleFilter} />
          <div className={styles.midSection}>
            <RecommendedCoaches />
            <CoachTab />
            <CoachList coaches={coaches} />
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
