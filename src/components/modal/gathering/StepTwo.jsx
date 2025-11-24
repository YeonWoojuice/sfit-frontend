import styles from "../../../styles/modal/gathering/StepTwo.module.css";

function StepTwo() {
  return (
    <div className={styles.two}>
      <div className={styles.imgBox}>
        <div className={styles.img}>사진을 업로드해 주세요.</div>
      </div>
      <div className={styles.inputBox}>
        <label className={styles.label}>모임 명</label>
        <input
          placeholder="모임 명을 입력해주세요."
          className={styles.name}
        ></input>
      </div>
      <div className={styles.inputBox}>
        <label className={styles.label}>모임 설명</label>
        <textarea
          placeholder="모임 설명을 입력해주세요."
          className={styles.content}
        ></textarea>
      </div>
    </div>
  );
}

export default StepTwo;
