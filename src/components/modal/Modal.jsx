import { useEffect, useState } from "react";
import styles from "../../styles/modal/Modal.module.css";
import ModalHeader from "../common/ModalHeader";
import ModalToggle from "../common/ModalToggle";
import StepOne from "./club/StepOne";
import ProgressBar from "./ProgressBar";
import StepTwo from "./club/StepTwo";
import StepThree from "./club/StepThree";
import { createClub } from "../../api/private";

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
      className={`${styles.btn} ${color === "gray" ? styles.gray : ""}`}
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
    name: "", // 동호회 + 번개
    explain: "", // 동호회 + 번개
    region_code: "", // 동호회 + 번개
    location: "", // 동호회 + 번개 / 장소? 상세주소(시)?
    sport_id: "", // 동호회 + 번개
    date: "", // 번개
    start_time: "", // 번개
    end_time: "", // 번게
    days_of_week: [], // 동호회
    capacity_min: 3, //번개
    capacity_max: 25, // 번개
    level_min: 1, // 번개
    level_max: 5, // 번개
    attachment_id: "", // 동호회 + 번개
  });

  const handleUpdate = (key, value) => {
    setInfo((prev) => ({ ...prev, [key]: value }));
  };

  const steps = {
    club: {
      1: <StepOne info={info} onChange={handleUpdate} />,
      2: <StepTwo info={info} onChange={handleUpdate} isCalendar={false} />,
    },

    lightning: {
      1: <StepOne info={info} onChange={handleUpdate} />,
      2: <StepTwo info={info} onChange={handleUpdate} isCalendar={true} />,
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

  const isLast = step === totalSteps;

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
    else return;
  };

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
    else return;
  };

  const handleClick = async () => {
    const payload = {
      name: "",
      explain: "",
      region_code: "",
      location: "",
      sport_id: "",
      start_time: "",
      end_time: "",
      days_of_week: [],
      // attachment_id: "",
    };

    try {
      const data = await createClub(payload);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
            {step === 1 ? "저장하기" : "뒤로가기"}
          </Button>
          {isLast ? (
            <Button color="oragne" onClick={handleClick}>
              생성하기
            </Button>
          ) : (
            <Button color="oragne" onClick={handleNext}>
              다음으로
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
