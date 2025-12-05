import styles from "../../styles/modal/CHatItem.module.css";
import start from "../../assets/modal/star.png";
import start_act from "../../assets/modal/star_act.png";

function ChatItem({ isActive, onClick }) {
  return (
    <div className={styles.itemContainer} onClick={onClick}>
      <div className={styles.chatBox}>
        <div className={styles.userImg}>
          <div
            className={styles.circle}
            style={{ backgroundColor: `${isActive ? "#FF6F01" : "#d9d9d9"}` }}
          ></div>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <div className={styles.name}>헬스장</div>
            <div className={styles.date}>11.29</div>
          </div>
          <div className={styles.desc}>
            네넵 꼭 좋은 파트너를 찾길 바랍니다..! 좋은 하루 보내세요. :)
          </div>
        </div>
      </div>
      <img src={isActive ? start_act : start} className={styles.star}></img>
    </div>
  );
}

export default ChatItem;
