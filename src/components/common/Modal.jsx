import styles from "../../styles/common/Modal.module.css";
import ModalHeader from "./ModalHeader";
import ModalToggle from "./ModalToggle";

function Modal({ onClick }) {
  return (
    <div className={styles.container}>
      <ModalHeader onClick={onClick} />
      <ModalToggle />
    </div>
  );
}

export default Modal;
