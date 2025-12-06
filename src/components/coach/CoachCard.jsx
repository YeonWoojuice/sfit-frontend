import styles from "../../styles/coach/CoachCard.module.css";
import coachchat from "../../assets/coach/coachchat.svg";
import coachcall from "../../assets/coach/coachcall.svg";
import coachstar from "../../assets/coach/coachstar.svg";
import { REGION_OPTIONS } from "../../constants/option";

function CoachCard({ coach }) {
  // 지역 코드를 한글 이름으로 변환
  const getRegionName = () => {
    if (!coach?.regionCode) return "지역";
    const region = REGION_OPTIONS.find(
      (option) => option.id === coach.regionCode
    );
    return region ? region.name : "지역";
  };

  // 이미지 URL 생성 (BASE_URL + image_url)
  const getImageUrl = () => {
    if (!coach?.imageUrl || typeof coach.imageUrl !== "string") return "";
    // image_url이 이미 전체 URL인 경우
    if (coach.imageUrl.startsWith("http")) {
      return coach.imageUrl;
    }
    // 상대 경로인 경우 BASE_URL 추가
    return "https://sfit-api-server.onrender.com" + coach.imageUrl;
  };

  // 이미지 로딩 실패 시 처리
  const handleImageError = (e) => {
    e.target.style.display = "none";
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.nameRow}>
          <div className={styles.nameSection}>
            <h3 className={styles.name}>{coach?.name || "고미경"}</h3>
            <span className={styles.sportName}>{coach?.sport || "종목 명"}</span>
            <span className={styles.yellowDot}></span>
          </div>
        </div>
        <div className={styles.description}>
          <p>{coach?.description1 || "소통과 공감으로 함께 하는 시간~"}</p>
          <p>{coach?.description2 || "일정 조율 및 가격 제시"}</p>
        </div>
      
        <div className={styles.bottomSection}>
          <div className={styles.ratingSection}>
            <img src={coachstar} alt="star" className={styles.star} />
            <span className={styles.ratingValue}>
              {coach?.rating || "4.86"}
            </span>
            <span className={styles.reviewCount}>
              ({coach?.reviewCount || "247"})
            </span>
            <div className={styles.contactIcons}>
              <button className={styles.iconBtn}>
                <img src={coachchat} alt="chat" />
              </button>
              <button className={styles.iconBtn}>
                <img src={coachcall} alt="call" className={styles.callIcon} />
              </button>
            </div>
          </div>
          <div className={styles.tags}>
            <span className={styles.tag}>{coach?.sport || "종목"}</span>
            <span className={styles.tag}>{getRegionName()}</span>
            <span className={styles.tag}>{coach?.ageGroup || "나이대"}</span>
          </div>
        </div>
      </div>
      <div className={styles.profileImage}>
        {coach?.imageUrl && getImageUrl() && (
          <img 
            src={getImageUrl()} 
            alt={coach?.name || "코치 프로필"}
            onError={handleImageError}
          />
        )}
      </div>
    </div>
  );
}

export default CoachCard;