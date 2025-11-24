import styles from "../../../styles/modal/common/DateInput.module.css";
import clock from "../../../assets/clock.png";
import arrow from "../../../assets/arrow.png";

function DateInput() {
  const times = {
    startTime: "오전 00 : 00",
    endTime: "오후 00 : 00",
  };
  return (
    <div className={styles.dateBox}>
      <label className={styles.label}>요일 및 시간 설정</label>
      <input type="date" className={styles.input}></input>
      <div className={styles.times}>
        <div className={styles.time}>
          <img src={clock} className={styles.timeImg} />
          {times.startTime}
        </div>
        <img src={arrow} className={styles.arrow}></img>
        <div className={styles.time}>
          <img src={clock} className={styles.timeImg} />
          {times.endTime}
        </div>
      </div>
    </div>
  );
}

export default DateInput;
