import styles from "../../styles/gathering/InstructorSection.module.css";
import SectionHeader from "../../componets/main/SectionHeader";
import InstructorCard from "../../componets/gathering/InstructorCard";

function InstructorSection() {
  return (
    <section className={styles.insturctorSection}>
      <SectionHeader title="강사님 리스트" sort="경기, 용인시, 기흥구" />
      <div className={styles.instructorCards}>
        <InstructorCard />
        <InstructorCard isNew={true} />
      </div>
    </section>
  );
}

export default InstructorSection;
