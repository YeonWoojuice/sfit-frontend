import styles from "../../styles/common/FloatingButton.module.css";
import ChatIcon from "../../assets/chat.svg?react";
import NewIcon from "../../assets/new.svg?react";

function FloatingButton({ type, onClick }) {
  const color = {
    chat: "#FF9F2C",
    new: "#FF632C",
  };

  const icons = {
    // styles.select : ""}`}
    chat: <ChatIcon className={`${styles.icon}`} />,
    new: <NewIcon className={`${styles.icon}`} />,
  };
  return (
    <div
      className={styles.container}
      style={{ background: color[type] }}
      onClick={onClick}
    >
      {icons[type]}
    </div>
  );
}

export default FloatingButton;
