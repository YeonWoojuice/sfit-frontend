import signup from '../assets/signupImage.png';
import styles from "../styles/SignupImage.module.css";
import contentBox from "../styles/AuthLayout.module.css";

// import signupform from './SignupForm.jsx';
function SignupImage({onSwitch}) {
  return(
  
      <div className={styles.signupImage}>
        <div className={styles.headerRow}>
          <h1 className={contentBox.Title}>SIGN UP</h1>
          <button
          type='button'
          className={styles.nosignup}
          onClick={onSwitch}>계정이 없나요?</button>
        </div>
        <img src={signup} alt="SignupImage" className={styles.image} />
      </div>
  )
}
export default SignupImage;  