import { useState } from "react";
import styles from "../../styles/main/SectionHeader.module.css";

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
              전체
            </p>
            |
            <p
              className={`${staus === "latest" ? styles.select : ""}`}
              onClick={() => setStaus("latest")}
            >
              최신순
            </p>
            |
            <p
              className={`${staus === "close" ? styles.select : ""}`}
              onClick={() => setStaus("close")}
            >
              거리순
            </p>
            |
            <p
              className={`${staus === "popular" ? styles.select : ""}`}
              onClick={() => setStaus("popular")}
            >
              인기순
            </p>
          </>
        ) : (
          <p>경기도, 용인시, 기흥구</p>
        )}
      </div>
    </div>
  );
}

export default SectionHeader;
