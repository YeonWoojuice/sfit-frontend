import { useState } from "react";
import styles from "../../styles/main/FilterSelect.module.css";

function FilterSelect({ label, filter, filterkey, onClick }) {
  const mockOptions = {
    regions: [
      "서울",
      "경기",
      "인천",
      "부산",
      "대구",
      "광주",
      "대전",
      "울산",
      "경북",
      "충북",
      "충남",
    ],
    sports: ["야구", "축구", "골프", "수영"],
  };

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.filterBox} ${open ? styles.active : ""}`}
        onClick={() => {
          if (filterkey === "coach") {
            onClick("coach", true);
            setOpen(!open);
            return;
          }
          setOpen(!open);
        }}
      >
        <div className={styles.left}>
          <div className={styles.icon}></div>
          <p className={styles.label}>{label}</p>
        </div>
        <div className={styles.menuBtn}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
      </div>
      {open && (
        <div className={styles.options}>
          {(mockOptions[filterkey] ?? []).map((item) => (
            <div className={styles.optionBox} key={item}>
              <div
                className={`${styles.check} ${
                  filter[filterkey] === item ? styles.select : ""
                }`}
              ></div>
              <div
                className={styles.option}
                onClick={() => {
                  onClick(filterkey, item);
                }}
              >
                {item}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterSelect;
