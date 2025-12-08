import styles from "../../styles/modal/ChatItem.module.css";
import start from "../../assets/modal/star.png";
import start_act from "../../assets/modal/star_act.png";

function ChatItem({ data, isActive, onClick }) {
  // const imgUrl =
  //   "https://sfit-api-server.onrender.com" + data.partner.image_url;
  // const dateStr = data.last_message_at
  //   ? data.last_message_at.slice(5, 10).replace("-", ".")
  //   : "";

  return (
    <div className={styles.itemContainer} onClick={onClick}>
      <div className={styles.chatBox}>
        <div className={styles.imgWrapper}>
          <div className={styles.userImg}></div>
          {/* <img src={imgUrl} className={styles.userImg}></img> */}
          <div
            className={styles.circle}
            style={{ backgroundColor: `${isActive ? "#FF6F01" : "#d9d9d9"}` }}
          ></div>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <div className={styles.name}>헬스장</div>
            {/* <div className={styles.name}>{data.partner.name}</div> */}
            <div className={styles.date}>11.29</div>
            {/* <div className={styles.date}>{date}</div> */}
          </div>
          <div className={styles.desc}>
            네넵 꼭 좋은 파트너를 찾길 바랍니다..! 좋은 하루 보내세요. :)
          </div>
          {/* <div className={styles.desc}>{data.last_message}</div> */}
        </div>
      </div>
      <img src={isActive ? start_act : start} className={styles.star}></img>
      {/* <img
        src={data.is_favorite ? start_act : start}
        className={styles.star}
      ></img> */}
    </div>
  );
}

export default ChatItem;
