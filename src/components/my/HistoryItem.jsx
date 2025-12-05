import { REGION_OPTIONS } from "../../constants/option";
import styles from "../../styles/my/HistoryItem.module.css";

const Attendance = ({ label }) => {
  return (
    <div className={`${label ? styles.attendanceOk : styles.attendanceNo}`}>
      {label ? "참가" : "불참"}
    </div>
  );
};

function HistoryItem({ label, item }) {
  const getType = () => {
    if (item.type === "FLASH") return "번개 모임";
    if (item.type === "CLUB") return "동호회";
  };

  const getRegionString = () => {
    const region = REGION_OPTIONS.find(
      (option) => option.id === item.region_code
    );
    return region ? region.name : "지역 미설정";
  };

  return (
    <div className={styles.itemRow}>
      <p>{item.date}</p>
      <p>{getType()}</p>
      <p>{getRegionString()}</p>
      <p>{item.location}</p>
      <p>
        <Attendance label={label} />
      </p>
      <p>{item.rating}</p>
    </div>
  );
}

export default HistoryItem;
