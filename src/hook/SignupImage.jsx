import signup from '../assets/signupImage.png';
import styles from "../styles/SignupImage.module.css";

// import signupform from './SignupForm.jsx';
function SignupImage({onSwitch}) {
  return(
  
      <div className={styles.signupImage}>
        <img src={signup} alt="SignupImage" className={styles.image} />
      </div>
  )
}
export default SignupImage;