import { useState } from "react";
import styles from "../../Styles/modal/Modal.module.css";
import ModalHeader from "../common/ModalHeader";
import ModalToggle from "../common/ModalToggle";
import StepOne from "./club/StepOne";
import ProgressBar from "./ProgressBar";
import StepTwo from "./club/StepTwo";
import StepThree from "./club/StepThree";

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
  const [info, setInfo] = useState({
    name: "",
    explain: "",
    region_code: "",
    sport_id: "", // ÏΩîÎìúÎ°?Î≥ÄÍ≤??ÑÏöî
    start_at: "",
    end_at: "",
    start_time: "",
    end_time: "",
    days_of_week: [],
    capacity_min: 0,
    capacity_max: 0,
    level_min: "",
    level_max: "",
  });

  //  { id: 1, name: '?ºÍµ¨' },
  //  { id: 2, name: 'Ï∂ïÍµ¨' },
  //  { id: 3, name: 'Í≥®ÌîÑ' },
  //  { id: 4, name: '?òÏòÅ' }
  //  { id: 5, name: '?¨Îãù' }
  //  { id: 6, name: '?åÎãà?? }

  const handleUpdate = (key, value) => {
    setInfo((prev) => ({ ...prev, [key]: value }));
  };

  const steps = {
    club: {
      1: <StepOne info={info} onChange={handleUpdate} />,
      2: <StepTwo info={info} onChange={handleUpdate} />,
    },

    lightning: {
      1: <StepOne info={info} onChange={handleUpdate} />,
      2: <StepTwo info={info} onChange={handleUpdate} />,
      3: <StepThree info={info} onChange={handleUpdate} />,
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
        <ProgressBar type={type} step={step} />
        <div className={styles.buttons}>
          <Button color="gray" onClick={handlePrev}>
            {step === 1 ? "?Ä?•ÌïòÍ∏? : "?§Î°úÍ∞ÄÍ∏?}
          </Button>
          <Button color="oragne" onClick={handleNext}>
            ?§Ïùå?ºÎ°ú
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
