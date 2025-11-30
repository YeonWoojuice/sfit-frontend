import AuthLayout from "../components/AuthLayout";
import { useState } from "react";
import styles from "../styles/AuthPage.module.css";

function AuthPage() {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const switchMode = () => setIsLoginMode((prev) => !prev);

  return (
    <div
      className={`${styles.page} ${
        isLoginMode ? styles.loginMode : styles.signupMode
      }`}
    >
      <AuthLayout isLoginMode={isLoginMode} onSwitch={switchMode} />
    </div>
  );
}
export default AuthPage;
