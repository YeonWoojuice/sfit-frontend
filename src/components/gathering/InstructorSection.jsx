import styles from "../../styles/gathering/InstructorSection.module.css";
import SectionHeader from "../main/SectionHeader";
import InstructorCard from "../gathering/InstructorCard";

function InstructorSection() {
  return (
    <section className={styles.insturctorSection}>
      <SectionHeader title="강사님 리스트" isMeeting={false} />
      <div className={styles.instructorCards}>
        <InstructorCard />
        <InstructorCard isNew={true} />
      </div>
    </section>
  );
}

export default InstructorSection;
