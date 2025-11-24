import { useState } from "react";
import styles from "../../styles/modal/Modal.module.css";
import ModalHeader from "../common/ModalHeader";
import ModalToggle from "../common/ModalToggle";
import StepOne from "./gathering/StepOne";
import ProgressBar from "./ProgressBar";
import StepTwo from "./gathering/StepTwo";

const Button = ({ children, color, onClick }) => {
  const backColor = {
    oragne: "#FF632C",
    gray: "#8D8B8D",
  };

  const textColor = {
    oragne: "#ffffff",
    gray: "#343339",
  };
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.btn}
      style={{ backgroundColor: backColor[color], color: textColor[color] }}
    >
      {children}
    </button>
  );
};

function Modal({ onClick }) {
  const [step, setStep] = useState(2);
  const steps = {
    1: <StepOne />,
    2: <StepTwo />,
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerLayout}>
        <ModalHeader onClick={onClick} />
        <ModalToggle />
      </div>
      <div className={styles.layout}>
        {steps[step]}
        <ProgressBar step={step} />
        <div className={styles.buttons}>
          <Button color="gray" onClick={() => setStep(step - 1)}>
            뒤로가기
          </Button>
          <Button color="oragne" onClick={() => setStep(step + 1)}>
            다음으로
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
