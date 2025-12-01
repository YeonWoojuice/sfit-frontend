import styles from "../../styles/coach/CoachCard.module.css";
import chatIcon from "../../assets/chat.svg";
import coachchat from "../../assets/coach/coachchat.svg";
import coachcall from "../../assets/coach/coachcall.svg";
import coachstar from "../../assets/coach/coachstar.svg";

function CoachCard({ coach }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.nameRow}>
          <div className={styles.nameSection}>
            <h3 className={styles.name}>{coach?.name || "고미경"}</h3>
            <span className={styles.sportName}>{coach?.sport || "종목 명"}</span>
            <span className={styles.yellowDot}></span>
          </div>
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
        </div>
        <div className={styles.description}>
          <p>{coach?.description1 || "소통과 공감으로 함께 하는 시간~"}</p>
          <p>{coach?.description2 || "일정 조율 및 가격 제시"}</p>
        </div>
        <div className={styles.tags}>
          <span className={styles.tag}>종목</span>
          <span className={styles.tag}>지역</span>
          <span className={styles.tag}>나이대</span>
        </div>
      </div>
      <div className={styles.profileImage}></div>
    </div>
  );
}

export default CoachCard;