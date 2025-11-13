import login from '../assets/LoginImage.png';
import styles from "../styles/LoginImage.module.css";
import contentBox from "../styles/AuthLayout.module.css";

// import signupform from './SignupForm.jsx';
function SignupImage({onSwitch}) {
  return(
    
      <div className={styles.loginImage}>
        <div className={styles.headerRow}>
          <h1 className={contentBox.Title}>LOGIN</h1>
          <button
          type='button'
          className={styles.nosignup}
          onClick={onSwitch}>계정이 있나요?</button>
        </div>
        <img src={login} alt="LoginImage" className={styles.image} />
      </div>
  )
}
export default SignupImage;  