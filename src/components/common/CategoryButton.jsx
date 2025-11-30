import styles from "../../styles/common/CategoryButton.module.css";

function CategoryButton({ children }) {
  return <button className={styles.categoryBtn}>{children}</button>;
}

export default CategoryButton;
