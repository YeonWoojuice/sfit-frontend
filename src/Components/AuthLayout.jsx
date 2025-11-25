import LoginForm from '../hook/LoginForm.jsx';
import LoginImage from '../hook/LoginImage.jsx';
import SignupForm from '../hook/SignupForm.jsx';
import SignupImage from '../hook/SignupImage.jsx';
import Title from './Title.jsx';
import styles from "../styles/AuthLayout.module.css";

function AuthLayout({isLoginMode, onSwitch}) {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>

        {/* 왼쪽: 항상 login 계열 */}
        <div className={`${styles.side} ${isLoginMode ? styles.whiteBg : styles.grayBg}`}>
          <div className={styles.sideContent}>
            <Title text="LOGIN">
              {!isLoginMode && (
                <button
                  type='button'
                  className={styles.switchButton}
                  onClick={onSwitch}
                >
                  계정이 이미 있나요?
                </button>
              )}
            </Title>
            {isLoginMode ? (
              <LoginForm onSwitch={onSwitch} />
            ) : (
              <LoginImage onSwitch={onSwitch} />
            )}
          </div>
        </div>

        {/* 오른쪽: 항상 signup 계열 */}
        <div className={`${styles.side} ${isLoginMode ? styles.grayBg : styles.whiteBg}`}>
          <div className={styles.sideContent}>
            <Title text="SIGN UP">
              {isLoginMode && (
                <button
                  type='button'
                  className={styles.switchButton}
                  onClick={onSwitch}
                >
                  계정이 없나요?
                </button>
              )}
            </Title>
            {isLoginMode ? (
              <SignupImage onSwitch={onSwitch} />
            ) : (
              <SignupForm onSwitch={onSwitch} />
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default AuthLayout;

