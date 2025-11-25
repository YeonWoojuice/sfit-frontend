import { useForm } from "react-hook-form";
import styles from "../Styles/SignupForm.module.css";
import Title from "../Components/Title";

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
                placeholder="?„ì´?”ë? ?…ë ¥??ì£¼ì„¸??"
                {...register("ID", { required: "?„ì´?”ë? ?…ë ¥??ì£¼ì„¸??" })}
              />
              <button type="button" className={styles.checkButton}>
                ì¤‘ë³µ?•ì¸
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
            placeholder="ë¹„ë?ë²ˆí˜¸ë¥??…ë ¥??ì£¼ì„¸??"
            {...register("Password", {
              // required:"ë¹„ë?ë²ˆí˜¸ë¥??…ë ¥??ì£¼ì„¸??",
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message: "?ë¬¸,?«ì,?¹ìˆ˜ë¬¸ì ì¡°í•© 6~20?ë¡œ ?…ë ¥??ì£¼ì„¸??.",
              },
            })}
          />
          {errors.Password && (
            <p className={styles.errorMassage}>{errors.Password.message}</p>
          )}
        </div>
        <div className={styles.rowGroup}>
          <div className={styles.rowItem}>
            <label className={styles.label}>?´ë¦„</label>
            <input
              type="text"
              placeholder="?´ë¦„???…ë ¥??ì£¼ì„¸??"
              className={styles.inputField}
              {...register("Name", { required: "?´ë¦„???…ë ¥??ì£¼ì„¸??" })}
            />
            {errors.Name && (
              <p className={styles.errorMassage}>{errors.Name.message}</p>
            )}
          </div>
          <div className={styles.rowItem}>
            <label className={styles.label}>?„í™”ë²ˆí˜¸</label>
            <input
              type="number"
              className={styles.inputField}
              placeholder="?„í™”ë²ˆí˜¸ë¥??…ë ¥??ì£¼ì„¸??"
              {...register("phonenumber", {
                required: "?„í™”ë²ˆí˜¸ë¥??…ë ¥??ì£¼ì„¸??",
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
          <label className={styles.label}>?´ë©”??/label>
          <div className={styles.rowGroup}>
            <div className={styles.rowItem}>
              <input
                type="text"
                placeholder="?´ë©”?¼ì„ ?…ë ¥??ì£¼ì„¸??"
                className={styles.inputField}
                {...register("Email", { required: "?´ë©”?¼ì„ ?…ë ¥??ì£¼ì„¸??" })}
              />
            </div>
            <div className={styles.rowItem}>
              <select
                className={`${styles.inputField} ${styles.emailDomainSelect}`}
                {...register("EmailDomain", {
                  required: "?„ë©”?¸ì„ ? íƒ??ì£¼ì„¸??",
                })}
              >
                <option value="naver.com">naver.com</option>
                <option value="gmail.com">gmail.com</option>
                <option value="daum.net">daum.net</option>
                <option value="direct">ì§ì ‘ ?…ë ¥</option>
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
          ?Œì›ê°€??
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
