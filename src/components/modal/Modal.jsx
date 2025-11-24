import { useState } from "react";
import styles from "../../styles/modal/Modal.module.css";
import ModalHeader from "../common/ModalHeader";
import ModalToggle from "../common/ModalToggle";
import StepOne from "./club/StepOne";
import ProgressBar from "./ProgressBar";
import StepTwo from "./club/StepTwo";

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
  const [type, setType] = useState("club");
  const [step, setStep] = useState(1);
  const steps = {
    club: {
      1: <StepOne />,
      2: <StepTwo />,
    },

    lightning: {
      1: <StepOne />,
      2: <StepTwo />,
      3: <div>번개모임</div>,
    },
  };

  const handleToggle = () => {
    const newType = type === "lightning" ? "club" : "lightning";
    setType(newType);
    setStep(1);
  };

  const current = steps[type];
  const totalSteps = Object.keys(current).length;

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
    else return;
  };

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
    else return;
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerLayout}>
        <ModalHeader type={type} onClick={onClick} />
        <ModalToggle type={type} onClick={handleToggle} />
      </div>
      <div className={styles.layout}>
        {current[step]}
        <ProgressBar step={step} />
        <div className={styles.buttons}>
          <Button color="gray" onClick={handlePrev}>
            {step === 1 ? "저장하기" : "뒤로가기"}
          </Button>
          <Button color="oragne" onClick={handleNext}>
            다음으로
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
