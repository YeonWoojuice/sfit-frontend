import login from "../assets/loginimage.png";
import styles from "../styles/LoginImage.module.css";

function LoginImage({ onSwitch }) {
  return (
    <div className={styles.loginImage}>
      <img src={login} alt="LoginImage" className={styles.image} />
    </div>
  );
}
export default LoginImage;
