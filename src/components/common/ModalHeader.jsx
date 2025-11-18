import styles from "../../styles/common/ModalHeader.module.css";
import GatherIcon from "../../assets/gathering.svg?react";
import MeetingIcon from "../../assets/meeting.svg?react";

function ModalHeader({ onClick }) {
  return (
    <div className={styles.modalHeader}>
      <div className={styles.img}>
        {/* <GatherIcon
          style={{
            width: "60px",
            height: "60px",

            fill: "#fff",
          }}
        /> */}
        <MeetingIcon
          style={{
            width: "45px",
            height: "45px",

            fill: "#fff",
          }}
        />
      </div>
      <div className={styles.textBox}>
        <h2 className={styles.title}>동호회</h2>
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
