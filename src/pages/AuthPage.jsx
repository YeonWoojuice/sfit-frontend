import AuthLayout from "../components/AuthLayout";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "../styles/AuthPage.module.css";

function AuthPage() {
  const [searchParams] = useSearchParams();
  const [isLoginMode, setIsLoginMode] = useState(true);

  useEffect(() => {
    // 페이지 진입 시 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
    
    const mode = searchParams.get("mode");
    if (mode === "signup") {
      setIsLoginMode(false);
    } else {
      setIsLoginMode(true);
    }
  }, [searchParams]);

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
