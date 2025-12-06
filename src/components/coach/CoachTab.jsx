import { useState } from "react";
import styles from "../../styles/coach/CoachTab.module.css";

function CoachTab() {
  const tabs = ["전체", "전문가", "커뮤니티 코치"];
  const [active, setActive] = useState("전체");

  return (
    <div className={styles.container}>
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`${styles.tabBtn} ${tab === active ? styles.active : ""}`}
          onClick={() => {
            setActive(tab);
          }}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}

export default CoachTab;


