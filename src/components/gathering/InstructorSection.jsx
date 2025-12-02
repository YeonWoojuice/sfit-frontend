import styles from "../../styles/gathering/InstructorSection.module.css";
import SectionHeader from "../main/SectionHeader";
import InstructorCard from "../gathering/InstructorCard";

function InstructorSection() {
  return (
    <section className={styles.insturctorSection}>
      <SectionHeader title="인기 모임" isMeeting={false} />
      <div className={styles.instructorCards}>
        <InstructorCard />
        <InstructorCard isNew={true} />
      </div>
    </section>
  );
}

export default InstructorSection;
