import styles from "../../styles/main/FilterSelect.module.css";
// import RegionIcon from "../../assets/regions.svg?react";
// import SportsIcon from "../../assets/sports.svg?react";
// import CoachIcon from "../../assets/coach.svg?react";

function FilterSelect({ label, filter, filterkey, onClick, isOpen, onToggle }) {
  // const [open, setOpen] = useState(false);
  const hasValue = !!filter[filterkey];
  const getIconClass = (isActive) =>
    `${styles.icon} ${isActive ? styles.select : ""}`;

  // const icons = {
  //   regions: <RegionIcon className={getIconClass(isOpen || hasValue)} />,
  //   sports: <SportsIcon className={getIconClass(isOpen || hasValue)} />,
  //   coach: (
  //     <CoachIcon
  //       className={getIconClass(filter.coach)}
  //       style={{ width: "26px", height: "29px" }}
  //     />
  //   ),
  // };

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

  const isDropdown = filterkey !== "coach";
  const isActive = isDropdown ? isOpen || hasValue : filter.coach;

  return (
    <div className={styles.container}>
      <div
        className={`${styles.filterBox} ${isActive ? styles.active : ""}`}
        onClick={() => {
          if (!isDropdown) {
            onClick("coach", !filter.coach);
            onToggle();
            return;
          }
          onToggle();
        }}
      >
        <div className={styles.left}>
          {/* {icons[filterkey]} */}
          <p className={styles.label}>{label}</p>
        </div>
        <div className={styles.menuBtn}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
      </div>
      {isDropdown && isOpen && (
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
