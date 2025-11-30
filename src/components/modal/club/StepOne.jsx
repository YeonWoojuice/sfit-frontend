import styles from "../../../styles/modal/club/StepOne.module.css";
import Input from "../common/Input";

function StepOne({ info, onChange }) {
  return (
    <div className={styles.container}>
      {/* <div className={styles.imgBox}>
        <div className={styles.img}>사진을 업로드해 주세요.</div>
      </div> */}
      <div className={styles.inputBox}>
        <Input
          label="모임 명"
          placeholder="모임 명을 입력해주세요."
          value={info.name}
          onChange={(e) => onChange("name", e.target.value)}
        />
      </div>
      <div className={styles.inputBox}>
        <label className={styles.label}>모임 설명</label>
        <textarea
          placeholder="모임 설명을 입력해주세요."
          value={info.explain}
          className={styles.content}
          onChange={(e) => onChange("explain", e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}

export default StepOne;
