import styles from "../../Styles/gathering/MeetingSection.module.css";
import SectionHeader from "../main/SectionHeader";
import MeetingCard from "./MeetingCard";

function MeetingSection({ data }) {
  return (
    <section className={styles.meetingSection}>
      <SectionHeader title="?�반 모임" isMeeting={true} />
      <div className={styles.meetingCards}>
        {data.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
    </section>
  );
}

export default MeetingSection;
