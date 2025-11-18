import styles from "../../styles/common/FloatingLayout.module.css";

function FloatingLayout({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default FloatingLayout;
