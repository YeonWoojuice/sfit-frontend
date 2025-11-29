import { useForm } from "react-hook-form";
import { useState } from "react";
import { checkUsername, signup } from "../../api/auth";
import styles from "../../styles/SignupForm.module.css";

function SignupForm({ onSwitch }) {
  const [isChecking, setIsChecking] = useState(false);
  const [checkResult, setCheckResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onChange",
  });

  const username = watch("ID");

  const handleCheckDuplicate = async () => {
    if (!username || username.trim() === "") {
      alert("아이디를 입력해 주세요.");
      return;
    }

    // 형식 검증
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
      alert("영문,숫자만 입력해 주세요.");
      return;
    }

    setIsChecking(true);
    setCheckResult(null);

    try {
      const result = await checkUsername({ username });
      console.log("중복확인 API 응답:", result); // 디버깅용
      
      // API 응답 구조에 따라 분기 처리
      // 가능한 응답 구조들: isAvailable, available, exists, message 등
      if (result.isAvailable === true || result.available === true) {
        setCheckResult({ success: true, message: "사용 가능한 아이디입니다." });
      } else if (result.isAvailable === false || result.available === false || result.exists === true) {
        setCheckResult({ success: false, message: "이미 사용 중인 아이디입니다." });
      } else if (result.message) {
        // 서버에서 메시지를 직접 보내는 경우
        const isAvailable = result.message.includes("사용 가능") || result.message.includes("available");
        setCheckResult({ 
          success: isAvailable, 
          message: result.message 
        });
      } else {
        // 응답 구조를 모를 경우 전체 응답 확인
        console.warn("예상치 못한 응답 구조:", result);
        setCheckResult({ success: false, message: "응답을 확인할 수 없습니다." });
      }
    } catch (error) {
      console.error("중복 확인 오류:", error);
      if (error.response) {
        // 서버 응답이 있는 경우
        console.error("서버 응답:", error.response.data);
        const errorMessage = error.response.data?.message || "중복 확인 중 오류가 발생했습니다.";
        setCheckResult({ success: false, message: errorMessage });
      } else {
        setCheckResult({ success: false, message: "중복 확인 중 오류가 발생했습니다." });
      }
    } finally {
      setIsChecking(false);
    }
  };

  const onSubmit = async (data) => {
    // 중복확인 체크
    if (!checkResult || !checkResult.success) {
      alert("아이디 중복확인을 해주세요.");
      return;
    }

    setIsSubmitting(true);

    try {
      // 이메일 합치기
      const email = data.EmailDomain === "direct" 
        ? data.Email 
        : `${data.Email}@${data.EmailDomain}`;

      // 서버에 보낼 데이터 형식으로 변환 (API 스펙에 맞춤)
      const signupData = {
        username: data.ID,        // 프론트엔드: ID → 서버: username
        password: data.Password,  // 프론트엔드: Password → 서버: password
        name: data.Name,         // 프론트엔드: Name → 서버: name
        phone: data.phonenumber, // 프론트엔드: phonenumber → 서버: phone
        email: email,            // 프론트엔드: Email + EmailDomain → 서버: email
      };

      console.log("회원가입 데이터:", signupData);

      // 회원가입 API 호출
      const result = await signup(signupData);
      console.log("회원가입 성공:", result);
      
      alert("회원가입이 완료되었습니다!");
      // 성공 후 로그인 페이지로 이동하거나 폼 초기화
      // onSwitch(); // 로그인 모드로 전환하거나
      // 또는 다른 처리
      
    } catch (error) {
      console.error("회원가입 오류:", error);
      
      if (error.response) {
        // 서버 응답이 있는 경우
        const errorMessage = error.response.data?.message || 
                            error.response.data?.error || 
                            "회원가입 중 오류가 발생했습니다.";
        alert(errorMessage);
      } else if (error.request) {
        // 요청은 보냈지만 응답을 받지 못함 (네트워크 오류)
        alert("네트워크 오류가 발생했습니다. 연결을 확인해주세요.");
      } else {
        // 요청 설정 중 오류
        alert("회원가입 중 오류가 발생했습니다.");
      }
    } finally {
      setIsSubmitting(false);
    }
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
            {checkResult && (
              <span
                className={styles.errorMassage}
                style={{ color: checkResult.success ? "#4CAF50" : "#f44336" }}
              >
                {checkResult.message}
              </span>
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
            <button
              type="button"
              className={styles.checkButton}
              onClick={handleCheckDuplicate}
              disabled={isChecking}
            >
              {isChecking ? "확인중..." : "중복확인"}
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

        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? "처리 중..." : "회원가입"}
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
