import styles from "../../styles/coach/CoachCard.module.css";
import chatIcon from "../../assets/chat.svg";
import coachchat from "../../assets/coach/coachchat.svg";
import coachcall from "../../assets/coach/coachcall.svg";

function CoachCard({ coach }) {
  return (
    <div className={styles.container}>
      <div className={styles.profileImage}></div>
      <div className={styles.content}>
        <div className={styles.nameRow}>
          <div className={styles.nameSection}>
            <h3 className={styles.name}>{coach?.name || "고미경"}</h3>
            <div className={styles.sportRow}>
              <span className={styles.sportName}>{coach?.sport || "종목 명"}</span>
              <span className={styles.yellowDot}></span>
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <p>{coach?.description1 || "소통과 공감으로 함께 하는 시간~"}</p>
          <p>{coach?.description2 || "일정 조율 및 가격 제시"}</p>
        </div>
        <div className={styles.ratingRow}>
          <div className={styles.ratingSection}>
            <span className={styles.star}>★</span>
            <span className={styles.ratingValue}>
              {coach?.rating || "4.86"}
            </span>
            <span className={styles.reviewCount}>
              ({coach?.reviewCount || "247"})
            </span>
          </div>
          <div className={styles.contactIcons}>
            <button className={styles.iconBtn}>
              <img src={coachcall} alt="call" />
            </button>
            <button className={styles.iconBtn}>
              <img src={coachchat} alt="chat" />
            </button>
          </div>
        </div>
        <div className={styles.tags}>
          <span className={styles.tag}>종목</span>
          <span className={styles.tag}>지역</span>
          <span className={styles.tag}>나이대</span>
        </div>
      </div>
    </div>
  );
}

export default CoachCard;
