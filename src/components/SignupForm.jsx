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
        <div className={styles.rowGroup}>
          <div className={styles.rowItem}>
            <label className={styles.label}>ID</label>
            <div className={styles.inputWithButton}>
              <input
                type="text"
                className={styles.inputField}
                placeholder="아이디를 입력해 주세요."
                {...register("ID", { required: "아이디를 입력해 주세요." })}
              />
              <button type="button" className={styles.checkButton}>
                중복확인
              </button>
            </div>
            {errors.ID && (
              <p className={styles.errorMassage}>{errors.ID.message}</p>
            )}
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Password</label>
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
          {errors.Password && (
            <p className={styles.errorMassage}>{errors.Password.message}</p>
          )}
        </div>
        <div className={styles.rowGroup}>
          <div className={styles.rowItem}>
            <label className={styles.label}>이름</label>
            <input
              type="text"
              placeholder="이름을 입력해 주세요."
              className={styles.inputField}
              {...register("Name", { required: "이름을 입력해 주세요." })}
            />
            {errors.Name && (
              <p className={styles.errorMassage}>{errors.Name.message}</p>
            )}
          </div>
          <div className={styles.rowItem}>
            <label className={styles.label}>전화번호</label>
            <input
              type="number"
              className={styles.inputField}
              placeholder="전화번호를 입력해 주세요."
              {...register("phonenumber", {
                required: "전화번호를 입력해 주세요.",
              })}
            />
            {errors.phonenumber && (
              <p className={styles.errorMassage}>
                {errors.phonenumber.message}
              </p>
            )}
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>이메일</label>
          <div className={styles.rowGroup}>
            <div className={styles.rowItem}>
              <input
                type="text"
                placeholder="이메일을 입력해 주세요."
                className={styles.inputField}
                {...register("Email", { required: "이메일을 입력해 주세요." })}
              />
            </div>
            <div className={styles.rowItem}>
              <select
                className={`${styles.inputField} ${styles.emailDomainSelect}`}
                {...register("EmailDomain", {
                  required: "도메인을 선택해 주세요.",
                })}
              >
                <option value="naver.com">naver.com</option>
                <option value="gmail.com">gmail.com</option>
                <option value="daum.net">daum.net</option>
                <option value="direct">직접 입력</option>
              </select>
            </div>
          </div>
        </div>
        {(errors.EmailId || errors.EmailDomain) && (
          <p className={styles.errorMessage}>
            {errors.EmailId?.message || errors.EmailDomain?.message}
          </p>
        )}

        <button type="submit" className={styles.submitButton}>
          회원가입
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
