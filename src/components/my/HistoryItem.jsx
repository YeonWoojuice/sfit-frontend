import styles from "../../styles/my/HistoryItem.module.css";

const Attendance = ({ label }) => {
  return (
    <div
      className={`${
        label === "참가" ? styles.attendanceOk : styles.attendanceNo
      }`}
    >
      {label}
    </div>
  );
};

function HistoryItem({ label }) {
  return (
    <div className={styles.itemRow}>
      <p>251002</p>
      <p>번개모임</p>
      <p>서울시 강남구</p>
      <p>배드민턴장..........</p>
      <p>
        <Attendance label={label} />
      </p>
      <p>(별점)</p>
    </div>
  );
}

export default HistoryItem;
