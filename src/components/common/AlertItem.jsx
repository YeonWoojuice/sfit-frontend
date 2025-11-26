import styles from "../../styles/common/AlertItem.module.css";

function AlertItem() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.short}>
        <div className={styles.circle}></div>
        <div className={styles.text}>
          강남대학교 클라이밍 번개 모임 (용인 기흥역) 준...
        </div>
      </div> */}
      <div className={styles.header}>
        <div className={styles.imgBox}>
          <div className={styles.circleBox}>
            <div className={styles.circle}></div>
          </div>
          <div className={styles.img}></div>
        </div>
        <div>
          <p className={styles.name}>[모임명]</p>
          <p className={styles.place}>축구 종합운동장 (잠실) 모임</p>
        </div>
        <div className={styles.time}>1시간 전</div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.text}>모임의 참석 / 불참 여부를 체크해 주세요.</p>
        <div className={styles.btnBox}>
          <button className={styles.btn}>참석</button>
          <button className={styles.btn}>불참</button>
        </div>
      </div>
    </div>
  );
}

export default AlertItem;
