import styles from "../../styles/gathering/MeetingSection.module.css";
import SectionHeader from "../main/SectionHeader";
import ClubCard from "./ClubCard";

function ClubSection({ data }) {
  return (
    <section className={styles.meetingSection}>
      <SectionHeader title="일반 모임" isMeeting={true} />
      <div className={styles.meetingCards}>
        {data.map((meeting) => (
          <ClubCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
    </section>
  );
}

export default ClubSection;
