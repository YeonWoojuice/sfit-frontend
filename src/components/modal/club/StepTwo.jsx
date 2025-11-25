import styles from "../../../Styles/modal/club/StepTwo.module.css";
import DateInput from "../common/DateInput";
import Input from "../common/Input";

function StepTwo({ info, onChange }) {
  return (
    <div className={styles.container}>
      <div className={styles.inputBox}>
        <Input
          label="ì§€???¤ì •"
          placeholder="ì§€??„ ?¤ì •?´ì£¼?¸ìš”."
          value={info.region_code}
          onChange={(e) => onChange("region_code", e.target.value)}
        />
        <Input label="?¥ì†Œ ?¤ì •" placeholder="?¥ì†Œë¥??¤ì •?´ì£¼?¸ìš”." />
      </div>
      <Input
        label="ì¢…ëª© ?¤ì •"
        placeholder="ì¢…ëª©???¤ì •?´ì£¼?¸ìš”. (Tag ?•ì‹)"
        value={info.sport_id}
        onChange={(e) => onChange("sport_id", e.target.value)}
      />
      <DateInput />
    </div>
  );
}

export default StepTwo;
