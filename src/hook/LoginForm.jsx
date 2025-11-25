import { useForm } from "react-hook-form";
import styles from "../Styles/LoginForm.module.css";
import Title from "../Components/Title";

function LoginForm({ onSwitch }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Î°úÍ∑∏???úÎèÑ:", data);
    alert("Î°úÍ∑∏???úÎèÑ");
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
            placeholder="?ÑÏù¥?îÎ? ?ÖÎ†•??Ï£ºÏÑ∏??
            {...register("loginID", { required: "?ÑÏù¥?îÎ? ?ÖÎ†•??Ï£ºÏÑ∏??" })}
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
            placeholder="ÎπÑÎ?Î≤àÌò∏Î•??ÖÎ†•??Ï£ºÏÑ∏??
            {...register("loginPassword", {
              required: "ÎπÑÎ?Î≤àÌò∏Î•??ÖÎ†•??Ï£ºÏÑ∏??",
              minLength: {
                value: 6,
                message: "ÎπÑÎ?Î≤àÌò∏??ÏµúÏÜå 6???¥ÏÉÅ?¥Ïñ¥???©Îãà??",
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
          Î°úÍ∑∏??
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
