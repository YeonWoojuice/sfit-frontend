import styles from "../../../Styles/modal/club/StepOne.module.css";
import Input from "../common/Input";

function StepOne({ info, onChange }) {
  return (
    <>
      <div className={styles.imgBox}>
        <div className={styles.img}>?¬ì§„???…ë¡œ?œí•´ ì£¼ì„¸??</div>
      </div>
      <div className={styles.inputBox}>
        <Input
          label="ëª¨ìž„ ëª?
          placeholder="ëª¨ìž„ ëª…ì„ ?…ë ¥?´ì£¼?¸ìš”."
          value={info.name}
          onChange={(e) => onChange("name", e.target.value)}
        />
      </div>
      <div className={styles.inputBox}>
        <label className={styles.label}>ëª¨ìž„ ?¤ëª…</label>
        <textarea
          placeholder="ëª¨ìž„ ?¤ëª…???…ë ¥?´ì£¼?¸ìš”."
          value={info.explain}
          className={styles.content}
          onChange={(e) => onChange("explain", e.target.value)}
        ></textarea>
      </div>
    </>
  );
}

export default StepOne;
