
import styles from "../../styles/gathering/ClubSection.module.css";

import SectionHeader from "../main/SectionHeader";
import ClubCard from "./ClubCard";

function ClubSection({ data }) {

  if (!data || !Array.isArray(data)) {
    return <div>데이터가 없습니다.</div>;
  }


  return (
    <section className={styles.meetingSection}>
      <SectionHeader title="일반 모임" isMeeting={true} />
      <div className={styles.meetingCards}>

        {data.map((item) => (
          <ClubCard key={item.id} item={item} />

        ))}
      </div>
    </section>
  );
}

export default ClubSection;
