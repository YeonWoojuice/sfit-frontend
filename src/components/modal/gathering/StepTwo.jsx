import styles from "../../../styles/modal/gathering/StepTwo.module.css";
import DateInput from "../common/DateInput";
import Input from "../common/Input";

function StepTwo() {
  return (
    <div className={styles.container}>
      <div className={styles.inputBox}>
        <Input label="지역 설정" placeholder="지역을 설정해주세요." />
        <Input label="장소 설정" placeholder="장소를 설정해주세요." />
      </div>
      <Input label="종목 설정" placeholder="종목을 설정해주세요. (Tag 형식)" />
      <DateInput />
    </div>
  );
}

export default StepTwo;
