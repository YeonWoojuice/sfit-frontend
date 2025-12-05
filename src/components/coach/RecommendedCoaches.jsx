import { useState, useEffect } from "react";
import styles from "../../styles/coach/RecommendedCoaches.module.css";
import prevIcon from "../../assets/coach/leftarrow.svg";
import nextIcon from "../../assets/coach/rightarrow.svg";
import { getRecommendedCoaches } from "../../api/private";
import { REGION_OPTIONS } from "../../constants/option";

function RecommendedCoaches() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [recommendedCoaches, setRecommendedCoaches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userName, setUserName] = useState("");

  // 사용자 이름 가져오기 및 로그인 상태 확인
  useEffect(() => {
    const name = localStorage.getItem("userName");
    const token = localStorage.getItem("accessToken");
    setUserName(name || "회원");
    
    // 로그인되어 있지 않으면 추천 코치를 불러오지 않음
    if (!token) {
      setLoading(false);
      setError("로그인이 필요합니다.");
      return;
    }
  }, []);

  // 추천 코치 데이터 가져오기
  useEffect(() => {
    async function fetchRecommendedCoaches() {
      // 로그인 상태 확인
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setLoading(false);
        setError("로그인이 필요합니다.");
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const data = await getRecommendedCoaches();
        
        console.log("추천 코치 API 응답:", data);
        
        // API 응답 검증
        if (!data || !data.recommendations) {
          console.warn("API 응답에 recommendations가 없습니다:", data);
          setError("추천 코치 데이터를 찾을 수 없습니다.");
          setLoading(false);
          return;
        }
        
        // recommendations가 배열인지 확인
        if (!Array.isArray(data.recommendations)) {
          console.warn("recommendations가 배열이 아닙니다:", data.recommendations);
          setError("추천 코치 데이터 형식이 올바르지 않습니다.");
          setLoading(false);
          return;
        }
        
        // API 응답을 컴포넌트 형식으로 변환
        const transformedCoaches = data.recommendations.map((coach) => {
          // 지역 코드를 한글 이름으로 변환
          const region = REGION_OPTIONS.find(
            (option) => option.id === coach.region_code
          );
          
          return {
            id: coach.id,
            name: coach.name,
            sport: coach.sport_names || "종목",
            region: region ? region.name : coach.region_code,
            imageUrl: coach.image_url,
            score: coach.score,
            recommendationReason: coach.recommendation_reason,
          };
        });
        
        console.log("변환된 추천 코치 데이터:", transformedCoaches);
        setRecommendedCoaches(transformedCoaches);
        setLoading(false);
      } catch (error) {
        console.error("추천 코치 조회 오류:", error);
        console.error("에러 상세:", {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status,
        });
        
        // 에러 처리
        if (error.response?.status === 401) {
          setError("로그인이 필요합니다.");
        } else if (error.response?.status === 400) {
          setError(error.response?.data?.message || "프로필 설정이 필요합니다.");
        } else if (error.response?.data?.message) {
          setError(error.response.data.message);
        } else {
          setError("추천 코치를 불러오는 중 오류가 발생했습니다.");
        }
        setLoading(false);
      }
    }

    fetchRecommendedCoaches();
  }, []);

  // 이미지 URL 생성
  const getImageUrl = (imageUrl) => {
    if (!imageUrl || typeof imageUrl !== "string") return "";
    if (imageUrl.startsWith("http")) return imageUrl;
    return "https://sfit-api-server.onrender.com" + imageUrl;
  };

  // 데이터가 없을 때 기본값
  const displayCoaches = recommendedCoaches.length > 0 
    ? recommendedCoaches 
    : [];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? finalCoaches.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === finalCoaches.length - 1 ? 0 : prev + 1
    );
  };

  // 임시 데이터 (API 실패 시 사용)
  const mockCoaches = [
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
      name: "강사명4",
      sport: "수영",
      region: "인천",
    },
  ];

  // 표시할 코치 데이터 (API 데이터가 있으면 사용, 없으면 임시 데이터)
  const finalCoaches = displayCoaches.length > 0 ? displayCoaches : mockCoaches;

  return (
    <section className={styles.recommendedSection}>
      <h2 className={styles.title}>{userName}님을 위한 추천 코치</h2>
      <div className={styles.carousel}>
        <button className={styles.prevBtn} onClick={handlePrev}>
          <img src={prevIcon} alt="prev" />
        </button>
        <div className={styles.carouselContent}>
          {finalCoaches.map((coach, index) => (
            <div
              key={coach.id}
              className={`${styles.coachCard} ${
                index === currentIndex ? styles.active : ""
              }`}
            >
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
                <span className={styles.sport}>{coach.sport || "종목"}</span>
                <span className={styles.region}>{coach.region || "지역"}</span>
                <h3 className={styles.name}>{coach.name || "강사명"}</h3>
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

