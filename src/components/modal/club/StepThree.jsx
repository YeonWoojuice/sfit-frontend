import styles from "../../../Styles/modal/club/StepThree.module.css";

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

    if (val < min) {
      onChange("level_min", val);
      return;
    }
    if (val > max) {
      onChange("level_max", val);
      return;
    }

    if (min === max && val === min) {
      onChange("level_min", 0);
      onChange("level_max", 0);
      return;
    }
    const distToMin = val - min;
    const distToMax = max - val;

    if (distToMin <= distToMax) {
      onChange("level_min", val + 1);
    } else {
      onChange("level_max", val - 1);
    }
  };
  // const levelText = {
  //   1: "?…ë¬¸???˜ì˜?´ìš”.",
  //   2: "ì´ˆë³´???˜ì˜?´ìš”.",
  //   3: "ì¤‘ê¸‰???ˆë²¨?´ì—??",
  //   4: "?ê¸‰?ë§Œ ê°€?¥í•´??",
  //   5: "?„ë¡œê¸??¤ë ¥??ëª¨ì„.",
  // };

  return (
    <div className={styles.container}>
      <div>
        <label className={styles.label}>ì°¸ê????ˆë²¨ ?¤ì •</label>
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
            ?ˆë²¨??? íƒ?´ì£¼?¸ìš”.
          </div>
        </div>
      </div>
      <div>
        <div className={styles.memberTitle}>
          <label className={styles.label}>ëª©í‘œ ?¸ì› ??/label>
          <p className={styles.sub}>ìµœì†Œ ?¸ì›ê³?ìµœë? ?¸ì›???¤ì •??ì£¼ì„¸??</p>
        </div>
        <input type="range" min={1} max={50}></input>
      </div>
    </div>
  );
}

export default StepThree;
