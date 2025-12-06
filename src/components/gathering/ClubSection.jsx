import styles from "../../styles/gathering/ClubSection.module.css";

import SectionHeader from "../main/SectionHeader";
import ClubCard from "./ClubCard";

function ClubSection({ type, data }) {
  const titles = {
    전체: "일반 모임",
    동호회: "일반 모임",
    "번개 모임": "번개 모임",
    "니의 모임": "일반 모임",
  };

  if (!data || !Array.isArray(data)) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <section className={styles.meetingSection}>
      <SectionHeader title={titles[type]} isMeeting={true} />
      <div className={styles.meetingCards}>
        {data.map((item) => (
          <ClubCard key={item.id} item={item} type={type} />
        ))}
      </div>
    </section>
  );
}

export default ClubSection;
