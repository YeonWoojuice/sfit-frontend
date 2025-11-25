import { useForm } from "react-hook-form";
import styles from "../styles/LoginForm.module.css";
import Title from "../Components/Title";

function LoginForm({ onSwitch }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("로그인 시도:", data);
    alert("로그인 시도");
  };

  return (
    <div className={styles.loginFormContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="loginID">
            ID
          </label>
          <input
            id="loginID"
            type="text"
            className={styles.inputField}
            placeholder="아이디를 입력해 주세요"
            {...register("loginID", { required: "아이디를 입력해 주세요." })}
          />
          {errors.loginID && (
            <p className={styles.errorMassage}>{errors.loginID.message}</p>
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

        <button type="submit" className={styles.submitButton}>
          로그인
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
