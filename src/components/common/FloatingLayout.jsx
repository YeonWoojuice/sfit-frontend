import styles from "../../styles/common/FloatingLayout.module.css";

function FloatingLayout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>{children}</div>
    </div>
  );
}

export default FloatingLayout;
