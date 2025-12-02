import styles from "../../styles/common/CategoryButton.module.css";

function CategoryButton({ children, isMy = false }) {
  return (
    <button className={`${styles.categoryBtn} ${isMy ? styles.my : ""}`}>
      {children}
    </button>
  );
}

export default CategoryButton;
