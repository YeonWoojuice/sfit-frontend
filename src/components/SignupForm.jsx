import { useForm } from "react-hook-form";
import styles from "../styles/SignupForm.module.css";
import Title from "../components/Title";

function SignupForm({ onSwitch }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.signupFormContainer}>
      <form className={styles.signupForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            ID
            {errors.ID && (
              <span className={styles.errorMassage}>{errors.ID.message}</span>
            )}
          </label>
          <div className={styles.inputWithButton}>
            <input
              type="text"
              className={styles.inputField}
              placeholder="아이디를 입력해 주세요."
              {...register("ID", { 
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message: "영문,숫자만 입력해 주세요.",
                },
              })}
            />
            <button type="button" className={styles.checkButton}>
              중복확인
            </button>
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Password
            {errors.Password && (
              <span className={styles.errorMassage}>
                {errors.Password.message}
              </span>
            )}
          </label>
          <input
            type="password"
            className={styles.inputField}
            placeholder="비밀번호를 입력해 주세요."
            {...register("Password", {
              // required:"비밀번호를 입력해 주세요.",
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message: "영문,숫자,특수문자 조합 6~20자로 입력해 주세요..",
              },
            })}
          />
        </div>
        <div className={styles.rowGroup}>
          <div className={styles.rowItem}>
            <label className={styles.label}>
              이름
              {errors.Name && (
                <span className={styles.errorMassage}>
                  {errors.Name.message}
                </span>
              )}
            </label>
            <input
              type="text"
              placeholder="이름을 입력해 주세요."
              className={styles.inputField}
              {...register("Name", {
                pattern: {
                  value: /^[가-힣]+$/,
                  message: "한글만 입력해 주세요.",
                },
                minLength: {
                  value: 2,
                  message: "이름은 최소 2자 이상입니다.",
                },
                maxLength: {
                  value: 10,
                  message: "이름은 최대 10자까지 입력 가능합니다.",
                },
              })}
            />
          </div>
          <div className={styles.rowItem}>
            <label className={styles.label}>
              전화번호
              {errors.phonenumber && (
                <span className={styles.errorMassage}>
                  {errors.phonenumber.message}
                </span>
              )}
            </label>
            <input
              type="tel"
              className={styles.inputField}
              placeholder="전화번호를 입력해 주세요."
              {...register("phonenumber", {
                pattern: {
                  value: /^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/,
                  message: "형식을 확인해주세요. ",
                },
              })}
            />
          </div>
        </div>
        <div className={styles.rowGroup}>
          <div className={styles.rowItem}>
            <label className={styles.label}>
              E-mail
              {errors.Email && (
                <span className={styles.errorMassage}>
                  {errors.Email.message}
                </span>
              )}
            </label>
            <input
              type="text"
              placeholder="이메일을 입력해 주세요."
              className={styles.inputField}
              {...register("Email", {
                pattern: {
                  value: /^[a-zA-Z0-9]([a-zA-Z0-9._-]*[a-zA-Z0-9])?$/,
                  message: "올바른 형식이 아닙니다.",
                },
                
              })}
            />
          </div>
          <div className={styles.rowItem}>
            <label
              className={styles.label}
              style={{ visibility: "hidden" }}
            >
              도메인
              {errors.EmailDomain && (
                <span className={styles.errorMassage}>
                  {errors.EmailDomain.message}
                </span>
              )}
            </label>
            <select
              className={`${styles.inputField} ${styles.emailDomainSelect}`}
              {...register("EmailDomain", {
                required: "도메인을 선택해 주세요.",
              })}
            >
              <option value="naver.com">@naver.com</option>
              <option value="gmail.com">@gmail.com</option>
              <option value="daum.net">@daum.net</option>
              <option value="direct">직접 입력</option>
            </select>
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          회원가입
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
