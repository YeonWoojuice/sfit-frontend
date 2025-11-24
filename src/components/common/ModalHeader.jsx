import styles from "../../styles/common/ModalHeader.module.css";
import GatherIcon from "../../assets/gathering.svg?react";
import MeetingIcon from "../../assets/meeting.svg?react";

function ModalHeader({ onClick, type }) {
  const titles = {
    club: "동호회",
    lightning: "번개 모임",
  };

  const imgs = {
    club: (
      <MeetingIcon
        style={{
          width: "45px",
          height: "45px",
          fill: "#fff",
        }}
      />
    ),

    lightning: (
      <GatherIcon
        style={{
          width: "60px",
          height: "60px",
          fill: "#fff",
        }}
      />
    ),
  };
  return (
    <div className={styles.modalHeader}>
      <div className={styles.img}>{imgs[type]}</div>
      <div className={styles.textBox}>
        <h2 className={styles.title}>{titles[type]}</h2>
        <h2 className={styles.title}>나의 모임 생성하기</h2>
        <p className={styles.content}>부연 설명</p>
      </div>
      <button type="button" className={styles.btn} onClick={onClick}>
        x
      </button>
    </div>
  );
}

export default ModalHeader;
