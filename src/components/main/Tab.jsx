import { useState } from "react";
import styles from "../../Styles/main/Tab.module.css";

function Tab() {
  const tabs = ["?�체", "?�호??, "번개 모임", "?�의 모임"];
  const [active, setActive] = useState("?�체");

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
