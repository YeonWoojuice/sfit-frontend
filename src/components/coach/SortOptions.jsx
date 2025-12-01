import { useState } from "react";
import styles from "../../styles/coach/SortOptions.module.css";

function SortOptions() {
  const [status, setStatus] = useState("latest");

  return (
    <div className={styles.sort}>
      <p
        className={`${status === "latest" ? styles.select : ""}`}
        onClick={() => setStatus("latest")}
      >
        최신순
      </p>
      |
      <p
        className={`${status === "close" ? styles.select : ""}`}
        onClick={() => setStatus("close")}
      >
        거리순
      </p>
      |
      <p
        className={`${status === "popular" ? styles.select : ""}`}
        onClick={() => setStatus("popular")}
      >
        인기순
      </p>
    </div>
  );
}

export default SortOptions;
