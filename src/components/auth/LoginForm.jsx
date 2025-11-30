import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import styles from "../../styles/LoginForm.module.css";

function LoginForm({ onSwitch }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // 서버에 보낼 데이터 형식으로 변환
      const loginData = {
        username: data.username,
        password: data.loginPassword, // 프론트엔드: loginPassword → 서버: password
      };

      console.log("로그인 데이터:", loginData);

      // 로그인 API 호출
      const result = await login(loginData);
      console.log("로그인 성공 - 전체 응답:", result);
      console.log("로그인 응답 - 모든 키:", Object.keys(result));
      console.log("로그인 응답 - user 객체:", result.user);
      
      // 토큰 저장 (응답에 토큰이 있는 경우)
      if (result.accessToken) {
        localStorage.setItem("accessToken", result.accessToken);
      }
      if (result.refreshToken) {
        localStorage.setItem("refreshToken", result.refreshToken);
      }
      
      // 사용자 정보 저장
      // username(ID)을 userName으로 저장 (헤더에 표시용)
      const userId = result.user?.username || result.username;
      if (userId) {
        localStorage.setItem("username", userId);
        localStorage.setItem("userName", userId); // ID를 이름으로 사용
        console.log("localStorage에 userName(ID) 저장 완료:", userId);
      }
      
      // Header 컴포넌트에 로그인 상태 변경 알림
      window.dispatchEvent(new Event("userLogin"));
      
      // 메인 페이지로 이동
      navigate("/");
      
    } catch (error) {
      console.error("로그인 오류:", error);
      
      if (error.response) {
        // 서버 응답이 있는 경우
        const errorMessage = error.response.data?.message || 
                            error.response.data?.error || 
                            "로그인 중 오류가 발생했습니다.";
        alert(errorMessage);
      } else if (error.request) {
        // 요청은 보냈지만 응답을 받지 못함 (네트워크 오류)
        alert("네트워크 오류가 발생했습니다. 연결을 확인해주세요.");
      } else {
        // 요청 설정 중 오류
        alert("로그인 중 오류가 발생했습니다.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.loginFormContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="loginID">
            ID
          </label>
          <input
            id="username"
            type="text"
            className={styles.inputField}
            placeholder="아이디를 입력해 주세요"
            {...register("username", { required: "아이디를 입력해 주세요." })}
          />
          {errors.username && (
            <p className={styles.errorMassage}>{errors.username.message}</p>
          )}
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="loginPassword">
            Password
          </label>
          <input
            id="loginPassword"
            type="password"
            className={styles.inputField}
            placeholder="비밀번호를 입력해 주세요"
            {...register("loginPassword", {
              required: "비밀번호를 입력해 주세요.",
              minLength: {
                value: 6,
                message: "비밀번호는 최소 6자 이상이어야 합니다.",
              },
            })}
          />
          {errors.loginPassword && (
            <p className={styles.errorMassage}>
              {errors.loginPassword.message}
            </p>
          )}
        </div>

        <button 
          type="submit" 
          className={styles.submitButton}
        >
          로그인
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
