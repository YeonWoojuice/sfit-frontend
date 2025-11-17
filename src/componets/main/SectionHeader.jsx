import styles from "../../styles/main/SectionHeader.module.css";

function SectionHeader({ title, sort }) {
  return (
    <div className={styles.sectionHeader}>
      <h1 className={styles.sectionTitle}>{title}</h1>
      <p className={styles.sort}>{sort}</p>
    </div>
  );
}

export default SectionHeader;
