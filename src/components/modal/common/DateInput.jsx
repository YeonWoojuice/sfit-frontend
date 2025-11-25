import styles from "../../../Styles/modal/common/DateInput.module.css";
import clock from "../../../assets/clock.png";
import arrow from "../../../assets/arrow.png";

function DateInput() {
  const times = {
    startTime: "?§Ï†Ñ 00 : 00",
    endTime: "?§ÌõÑ 00 : 00",
  };
  return (
    <div className={styles.dateBox}>
      <label className={styles.label}>?îÏùº Î∞??úÍ∞Ñ ?§Ï†ï</label>
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
