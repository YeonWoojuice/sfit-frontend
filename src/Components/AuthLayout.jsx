import LoginForm from '../hook/LoginForm.jsx';
import LoginImage from '../hook/LoginImage.jsx';
import SignupForm from '../hook/SignupForm.jsx';
import SignupImage from '../hook/SignupImage.jsx';
import styles from "../styles/AuthLayout.module.css";

function AuthLayout({isLoginMode, onSwitch}) {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>

        {/* 왼쪽: 항상 login 계열 */}
        <div className={`${styles.side} ${isLoginMode ? styles.whiteBg : styles.grayBg}`}>
          {isLoginMode ? (
            <LoginForm onSwitch={onSwitch} />
          ) : (
            <LoginImage onSwitch={onSwitch} />
          )}
        </div>

        {/* 오른쪽: 항상 signup 계열 */}
        <div className={`${styles.side} ${isLoginMode ? styles.grayBg : styles.whiteBg}`}>
          {isLoginMode ? (
            <SignupImage onSwitch={onSwitch} />
          ) : (
            <SignupForm onSwitch={onSwitch} />
          )}
        </div>

      </div>
    </div>
  );
}

export default AuthLayout;


