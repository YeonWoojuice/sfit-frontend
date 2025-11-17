import styles from "../../styles/common/FloatingButton.module.css";

function FloatingButton({ type }) {
  const color = {
    chat: "#FF9F2C",
    new: "#FF632C",
  };
  return (
    <div className={styles.container} style={{ background: color[type] }}>
      <div></div>
    </div>
  );
}

export default FloatingButton;
