import styles from "../../../styles/modal/club/StepThree.module.css";

const Level = ({ children, isSelect, value, onClick }) => {
  return (
    <div
      className={`${styles.level} ${isSelect ? styles.select : ""}`}
      onClick={() => onClick(value)}
    >
      {children}
    </div>
  );
};

function StepThree({ info, onChange }) {
  const levels = [1, 2, 3, 4, 5];

  const min = info.level_min || 0;
  const max = info.level_max || 0;

  const handleClick = (val) => {
    if (min === 0) {
      onChange("level_min", val);
      onChange("level_max", val);
      return;
    }
    if (val === min) {
      if (min === max) {
        onChange("level_min", 0);
        onChange("level_max", 0);
      } else {
        onChange("level_min", val + 1);
      }
      return;
    }

    if (val === max) {
      onChange("level_max", val - 1);
      return;
    }

    if (val < min) {
      onChange("level_min", val);
      return;
    }
    if (val > max) {
      onChange("level_max", val);
      return;
    }

    const distToMin = val - min;
    const distToMax = max - val;

    if (distToMin <= distToMax) {
      onChange("level_min", val);
    } else {
      onChange("level_max", val);
    }
  };
  // const levelText = {
  //   1: "입문자 환영해요.",
  //   2: "초보자 환영해요.",
  //   3: "중급자 레벨이에요.",
  //   4: "상급자만 가능해요.",
  //   5: "프로급 실력자 모임.",
  // };

  return (
    <div className={styles.container}>
      <div>
        <label className={styles.label}>참가자 레벨 설정</label>
        <div className={styles.levelContainer}>
          <div className={styles.levelBox}>
            {levels.map((num) => (
              <Level
                key={num}
                isSelect={num >= min && num <= max}
                value={num}
                onClick={handleClick}
              >
                {num}
              </Level>
            ))}
          </div>
          <div className={styles.levelText}>
            {/* {level ? levelText[level] :  */}
            레벨을 선택해주세요.
          </div>
        </div>
      </div>
      <div>
        <div className={styles.memberTitle}>
          <label className={styles.label}>목표 인원 수</label>
          <p className={styles.sub}>최소 인원과 최대 인원을 설정해 주세요.</p>
        </div>
        <input type="range" min={1} max={50}></input>
      </div>
    </div>
  );
}

export default StepThree;
