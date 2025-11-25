import LoginForm from '../hook/LoginForm.jsx';
import LoginImage from '../hook/LoginImage.jsx';
import SignupForm from '../hook/SignupForm.jsx';
import SignupImage from '../hook/SignupImage.jsx';
import Title from './Title.jsx';
import styles from "../Styles/AuthLayout.module.css";

function AuthLayout({isLoginMode, onSwitch}) {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>

        {/* ?ºÏ™Ω: ??ÉÅ login Í≥ÑÏó¥ */}
        <div className={`${styles.side} ${isLoginMode ? styles.whiteBg : styles.grayBg}`}>
          <div className={styles.sideContent}>
            <Title text="LOGIN">
              {!isLoginMode && (
                <button
                  type='button'
                  className={styles.switchButton}
                  onClick={onSwitch}
                >
                  Í≥ÑÏ†ï???¥Î? ?àÎÇò??
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

        {/* ?§Î•∏Ï™? ??ÉÅ signup Í≥ÑÏó¥ */}
        <div className={`${styles.side} ${isLoginMode ? styles.grayBg : styles.whiteBg}`}>
          <div className={styles.sideContent}>
            <Title text="SIGN UP">
              {isLoginMode && (
                <button
                  type='button'
                  className={styles.switchButton}
                  onClick={onSwitch}
                >
                  Í≥ÑÏ†ï???ÜÎÇò??
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

