import styles from "../../../styles/modal/club/StepTwo.module.css";
import { REGION_OPTIONS, SPORT_OPTIONS } from "../../constants/option";
import DateInput from "../common/DateInput";
import Input from "../common/Input";
import SelectInput from "../common/SelectInput";

function StepTwo({ info, onChange, isCalendar }) {
  return (
    <div className={styles.container}>
      <div className={styles.inputBox}>
        <SelectInput
          label="지역 설정"
          placeholder="지역을 선택해주세요."
          options={REGION_OPTIONS}
          onChange={(val) => onChange("region_code", val)}
        />
        <SelectInput
          label="종목 설정"
          placeholder="종목을 선택해주세요."
          options={SPORT_OPTIONS}
          onChange={(val) => onChange("sport_id", val)}
        />
      </div>
      <Input
        label="장소 설정"
        placeholder="장소를 입력해주세요."
        value={info.location}
        onChange={(e) => onChange("location", e.target.value)}
      />
      <DateInput info={info} onChange={onChange} isCalendar={isCalendar} />
    </div>
  );
}

export default StepTwo;
