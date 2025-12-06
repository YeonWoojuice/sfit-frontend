import { useState, useEffect } from "react";
import styles from "../../styles/coach/PopularCoachesSidebar.module.css";
import coachstar from "../../assets/coach/coachstar.svg";
import { getPopularCoaches } from "../../api/public";

function PopularCoachesSidebar() {
  const [activeTab, setActiveTab] = useState("전문가");
  const [popularCoaches, setPopularCoaches] = useState([]);

  const tabs = ["전체", "전문가", "커뮤니티 코치"];

  // 임시 데이터 (API 실패 시 사용) - 3개만
  const mockCoaches = [
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

  useEffect(() => {
    async function fetchPopularCoaches() {
      try {
        console.log("인기 코치 API 호출 시작...");
        const data = await getPopularCoaches();
        console.log("인기 코치 API 응답 받음:", data);
        console.log("응답 타입:", typeof data, "배열인가?", Array.isArray(data));
        console.log("data.coaches:", data?.coaches);
        
        // API 응답이 배열인 경우 또는 {count, coaches} 형태인 경우 처리
        const coaches = Array.isArray(data) ? data : (data?.coaches || []);
        
        console.log("처리할 코치 데이터:", coaches);
        console.log("코치 수:", coaches.length);
        
        if (coaches && Array.isArray(coaches) && coaches.length > 0) {
          console.log("받은 인기 코치 수:", coaches.length);
          // 첫 번째 코치 데이터 구조 확인
          if (coaches[0]) {
            console.log("첫 번째 코치 원본 데이터:", coaches[0]);
          }
          // 최대 3개만 표시
          const limitedCoaches = coaches.slice(0, 3);
          const transformedCoaches = limitedCoaches.map((coach) => ({
            id: coach.id,
            name: coach.name,
            sport: coach.sports || coach.sport_names || "종목",
            description: coach.introduction || "키워드 및 설명...",
            rating: coach.rating ? coach.rating.toFixed(1) : "4.7",
            reviewCount: "142",
            imageUrl: coach.image_url,
          }));
          console.log("변환된 인기 코치 데이터:", transformedCoaches);
          setPopularCoaches(transformedCoaches);
        } else {
          console.warn("인기 코치 데이터 형식이 올바르지 않습니다:", data);
          setPopularCoaches(mockCoaches);
        }
      } catch (error) {
        console.error("인기 코치 조회 오류:", error);
        console.error("에러 상세:", {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status,
        });
        // 에러 시 임시 데이터 사용
        setPopularCoaches(mockCoaches);
      }
    }

    fetchPopularCoaches();
  }, []);

  // 표시할 코치 데이터 (API 데이터가 있으면 사용, 없으면 임시 데이터)
  const displayCoaches = popularCoaches.length > 0 ? popularCoaches : mockCoaches;
  
  // 이미지 URL 생성
  const getImageUrl = (imageUrl) => {
    if (!imageUrl || typeof imageUrl !== "string") return "";
    if (imageUrl.startsWith("http")) return imageUrl;
    return "https://sfit-api-server.onrender.com" + imageUrl;
  };

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
        {displayCoaches.map((coach) => (
          <div key={coach.id} className={styles.coachItem}>
            <div className={styles.profileImage}>
              {coach.imageUrl && getImageUrl(coach.imageUrl) && (
                <img 
                  src={getImageUrl(coach.imageUrl)} 
                  alt={coach.name}
                  onError={(e) => { e.target.style.display = "none"; }}
                />
              )}
            </div>
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

