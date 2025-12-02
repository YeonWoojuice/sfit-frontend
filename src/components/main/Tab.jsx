import styles from "../../styles/main/Tab.module.css";

function Tab({ currentTab, onTabChange }) {
  const tabs = ["전체", "동호회", "번개 모임", "나의 모임"];

  return (
    <div className={styles.container}>
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`${styles.tabBtn} ${
            tab === currentTab ? styles.active : ""
          }`}
          onClick={() => {
            onTabChange(tab);
          }}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}

export default Tab;
