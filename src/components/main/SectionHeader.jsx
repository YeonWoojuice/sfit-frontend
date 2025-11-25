import { useState } from "react";
import styles from "../../Styles/main/SectionHeader.module.css";

function SectionHeader({ title, isMeeting }) {
  const [staus, setStaus] = useState("all");
  return (
    <div className={styles.sectionHeader}>
      <h1 className={styles.sectionTitle}>{title}</h1>
      <div className={styles.sort}>
        {isMeeting ? (
          <>
            <p
              className={`${staus === "all" ? styles.select : ""}`}
              onClick={() => setStaus("all")}
            >
              ?�체
            </p>
            |
            <p
              className={`${staus === "latest" ? styles.select : ""}`}
              onClick={() => setStaus("latest")}
            >
              최신??
            </p>
            |
            <p
              className={`${staus === "close" ? styles.select : ""}`}
              onClick={() => setStaus("close")}
            >
              거리??
            </p>
            |
            <p
              className={`${staus === "popular" ? styles.select : ""}`}
              onClick={() => setStaus("popular")}
            >
              ?�기??
            </p>
          </>
        ) : (
          <p>경기??/p>
        )}
      </div>
    </div>
  );
}

export default SectionHeader;
