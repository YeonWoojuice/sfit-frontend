import { useState } from "react";
import styles from "../../styles/main/Tab.module.css";

function Tab() {
  const tabs = ["전체", "동호회", "번개 모임", "나의 모임"];
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

export default Tab;
