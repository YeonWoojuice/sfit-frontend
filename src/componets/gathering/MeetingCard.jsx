import styles from "../../styles/gathering/MeetingCard.module.css";

const RecomandIcon = () => {
  return <div className={styles.recoIcon}>추천</div>;
};

const RequestButton = () => {
  return <button className={styles.requestBtn}>신청하기</button>;
};

const CategoryButton = ({ label }) => {
  return <button className={styles.categoryBtn}>{label}</button>;
};

function MeetingCard() {
  return (
    <div className={styles.container}>
      <div className={styles.img}></div>

      <div className={styles.contentBox}>
        <div className={styles.contentHeader}>
          <div className={styles.leftBox}>
            <RecomandIcon />
            <p className={styles.name}>[모임 명] 게시글 제목 설명</p>
          </div>
          <RequestButton />
        </div>
        <p className={styles.content}>게시물 부제 혹은 부연설명</p>
      </div>

      <div className={styles.bottomBox}>
        20250-11-07
        <div className={styles.btnBox}>
          <CategoryButton label={"지역"} />
          <CategoryButton label={"종목"} />
          <CategoryButton label={"별점"} />
        </div>
      </div>
    </div>
  );
}

export default MeetingCard;
