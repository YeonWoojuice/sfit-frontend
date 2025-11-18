import styles from "../../styles/gathering/MeetingSection.module.css";
import SectionHeader from "../../componets/main/SectionHeader";
import MeetingCard from "./MeetingCard";

function MeetingSection({ data }) {
  return (
    <section className={styles.meetingSection}>
      <SectionHeader title="일반 모임" sort="전체" isMeeting={true} />
      <div className={styles.meetingCards}>
        {data.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
    </section>
  );
}

export default MeetingSection;
