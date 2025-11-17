import styles from "../../styles/common/FloatingButton.module.css";
import ChatIcon from "../../assets/chat.svg?react";
import NewIcon from "../../assets/new.svg?react";

function FloatingButton({ type }) {
  const color = {
    chat: "#FF9F2C",
    new: "#FF632C",
  };

  const icons = {
    chat: (
      <ChatIcon className={`${styles.icon} ${open ? styles.select : ""}`} />
    ),
    new: <NewIcon className={`${styles.icon} ${open ? styles.select : ""}`} />,
  };
  return (
    <div className={styles.container} style={{ background: color[type] }}>
      {icons[type]}
    </div>
  );
}

export default FloatingButton;
