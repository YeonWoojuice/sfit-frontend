import { useState } from "react";
import styles from "../../../styles/modal/common/SelectInput.module.css";

function SelectInput({ label, placeholder, options, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [display, setDisplay] = useState("");

  return (
    <div className={styles.selectContainer}>
      <label className={styles.label}>{label}</label>
      <div className={styles.selectWrapper}>
        <div
          className={`${styles.select} ${display ? styles.active : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {display || placeholder}
        </div>
        {isOpen && (
          <ul className={styles.options}>
            {options.map((option) => (
              <li
                key={option.id}
                value={option.id}
                onClick={() => {
                  setDisplay(option.name);
                  onChange(option.id);
                  setIsOpen(false);
                }}
              >
                {option.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SelectInput;
