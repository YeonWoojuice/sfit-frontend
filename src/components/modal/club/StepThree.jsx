import { useEffect, useRef, useState } from "react";
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

  const sliderRef = useRef(null);
  const minMember = info.member_min || 1;
  const maxMember = info.member_max || 50;
  const MIN_LIMIT = 1;
  const MAX_LIMIT = 50;

  const [dragging, setDragging] = useState(null);

  const getPercent = (value) => {
    return ((value - MIN_LIMIT) / (MAX_LIMIT - MIN_LIMIT)) * 100;
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!dragging || !sliderRef.current) return;

      const rect = sliderRef.current.getBoundingClientRect();
      const width = rect.width;
      const offsetX = e.clientX - rect.left; // 슬라이더 내의 클릭 X 좌표

      // X좌표를 1~50 사이의 값으로 변환
      let newValue = Math.round(
        (offsetX / width) * (MAX_LIMIT - MIN_LIMIT) + MIN_LIMIT
      );

      // 범위 제한 (1 ~ 50)
      newValue = Math.max(MIN_LIMIT, Math.min(MAX_LIMIT, newValue));

      if (dragging === "min") {
        // 최소값은 최대값을 넘을 수 없음 (최소 1명 차이 유지)
        if (newValue >= maxMember) newValue = maxMember - 1;
        onChange("member_min", newValue);
      } else if (dragging === "max") {
        // 최대값은 최소값보다 작을 수 없음
        if (newValue <= minMember) newValue = minMember + 1;
        onChange("member_max", newValue);
      }
    };

    const handleMouseUp = () => {
      setDragging(null); // 드래그 종료
    };

    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, minMember, maxMember, onChange]);

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
        <div className={styles.barBackground} ref={sliderRef}>
          <span className={styles.staticNumber}>1</span>
          <div
            className={styles.barFill}
            style={{
              left: `${getPercent(minMember)}%`,
              width: `${getPercent(maxMember) - getPercent(minMember)}%`,
            }}
          ></div>

          {/* 최소 인원 핸들 (왼쪽) */}
          <div
            className={styles.handle}
            style={{ left: `${getPercent(minMember)}%` }}
            onMouseDown={(e) => {
              e.preventDefault();
              setDragging("min");
            }}
          >
            {minMember}
          </div>

          {/* 최대 인원 핸들 (오른쪽) */}
          <div
            className={styles.handle}
            style={{ left: `${getPercent(maxMember)}%` }}
            onMouseDown={(e) => {
              e.preventDefault();
              setDragging("max");
            }}
          >
            {maxMember}
          </div>
          <span className={styles.staticNumber}>50</span>
        </div>
      </div>
    </div>
  );
}

export default StepThree;
