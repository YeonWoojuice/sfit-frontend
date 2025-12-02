import styles from "../../../styles/modal/common/DateInput.module.css";
import calendar from "../../../assets/calendar.svg";
import clock from "../../../assets/clock.png";
import arrow from "../../../assets/arrow.png";

const DAYS = ["일", "월", "화", "수", "목", "금", "토"];

function DateInput({ info, onChange, isCalendar }) {
  const handleDayToggle = (dayIndex) => {
    const currentDays = info.days_of_week || [];
    let newDays;

    if (currentDays.includes(dayIndex)) {
      // 이미 선택되어 있으면 제거
      newDays = currentDays.filter((d) => d !== dayIndex);
    } else {
      // 없으면 추가하고 숫자 순서대로 정렬 (0, 1, 2...)
      newDays = [...currentDays, dayIndex].sort((a, b) => a - b);
    }

    onChange("days_of_week", newDays);
  };

  //선택된 요일을 텍스트로 변환 (예: "화요일, 일요일")
  const getDayLabel = () => {
    const days = info.days_of_week || [];
    if (days.length === 0) return "요일을 선택해주세요.";

    return days.map((idx) => `${DAYS[idx]}요일`).join(", ");
  };
  // 시간 설정
  const handleTimeChange = (key, e) => {
    onChange(key, e.target.value);
  };

  // 강제로 열기
  const handleInputClick = (e) => {
    try {
      // showPicker API 지원 브라우저 (Chrome, Edge 등)
      if (e.target.showPicker) {
        e.target.showPicker();
      }
    } catch (error) {
      // 구형 브라우저 등 오류 발생 시 무시
      console.log(error);
    }
  };

  const hasSelectedDays = info.days_of_week?.length > 0;
  return (
    <div className={styles.dateBox}>
      <div className={styles.days}>
        <label className={styles.label}>요일 및 시간 설정</label>
        {isCalendar ? (
          <input
            type="date"
            className={styles.input}
            onChange={(e) => onChange("date", e.target.value)}
          ></input>
        ) : (
          <div className={styles.dayContainer}>
            <div className={styles.displayBox}>
              <img src={calendar} className={styles.img} />
              <span
                className={`${styles.dayText} ${
                  hasSelectedDays ? styles.active : ""
                }`}
              >
                {getDayLabel()}
              </span>
            </div>
            {/* 요일 선택 버튼들 */}
            <div className={styles.dayButtons}>
              {DAYS.map((day, index) => (
                <button
                  key={day}
                  className={`${styles.dayBtn} ${
                    info.days_of_week?.includes(index) ? styles.active : ""
                  }`}
                  onClick={() => handleDayToggle(index)}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className={styles.times}>
        <div className={styles.time}>
          <img src={clock} className={styles.timeImg} />
          {info.start_time || "00 : 00"}
          <input
            type="time"
            className={styles.timeInput}
            value={info.start_time || ""}
            onClick={handleInputClick}
            onChange={(e) => handleTimeChange("start_time", e)}
          />
        </div>
        <img src={arrow} className={styles.arrow}></img>
        <div className={styles.time}>
          <img src={clock} className={styles.timeImg} />
          {info.end_time || "00 : 00"}
          <input
            type="time"
            className={styles.timeInput}
            value={info.end_time || ""}
            onClick={handleInputClick}
            onChange={(e) => handleTimeChange("end_time", e)}
          />
        </div>
      </div>
    </div>
  );
}

export default DateInput;
