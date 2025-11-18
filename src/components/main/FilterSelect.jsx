import { useState } from "react";
import styles from "../../styles/main/FilterSelect.module.css";
import RegionIcon from "../../assets/regions.svg?react";
import SportsIcon from "../../assets/sports.svg?react";
import CoachIcon from "../../assets/coach.svg?react";

function FilterSelect({ label, filter, filterkey, onClick }) {
  const [open, setOpen] = useState(false);

  const icons = {
    regions: (
      <RegionIcon className={`${styles.icon} ${open ? styles.select : ""}`} />
    ),
    sports: (
      <SportsIcon className={`${styles.icon} ${open ? styles.select : ""}`} />
    ),
    coach: (
      <CoachIcon
        className={`${styles.icon} ${open ? styles.select : ""}`}
        style={{ width: "26px", height: "29px" }}
      />
    ),
  };

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

  return (
    <div className={styles.container}>
      <div
        className={`${styles.filterBox} ${open ? styles.active : ""}`}
        onClick={() => {
          if (filterkey === "coach") {
            onClick("coach", !filter.coach);
            setOpen(!open);
            return;
          }
          setOpen(!open);
        }}
      >
        <div className={styles.left}>
          {icons[filterkey]}
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
                onClick={(e) => {
                  e.stopPropagation();
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
