import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Header.module.css";
import headerlogo from "../assets/headerlogo.svg";
import headersearch from "../assets/headersearch.svg";
import profileImage from "../assets/profileimage.svg";
import { Link } from "react-router-dom";

function Header() {
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // localStorage에서 사용자 이름 가져오기
    const name = localStorage.getItem("userName");
    setUserName(name);
  }, []);

  // localStorage 변경 감지 (다른 컴포넌트에서 로그인 시)
  useEffect(() => {
    const handleStorageChange = () => {
      const name = localStorage.getItem("userName");
      setUserName(name);
    };

    window.addEventListener("storage", handleStorageChange);
    // 커스텀 이벤트로 같은 탭 내에서도 감지
    window.addEventListener("userLogin", handleStorageChange);
    window.addEventListener("userLogout", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("userLogin", handleStorageChange);
      window.removeEventListener("userLogout", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    // localStorage에서 모든 인증 정보 제거
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("username");
    localStorage.removeItem("userName");
    
    // Header 컴포넌트에 로그아웃 상태 변경 알림
    window.dispatchEvent(new Event("userLogout"));
    
    // 상태 업데이트
    setUserName(null);
    
    // 메인 페이지로 이동
    navigate("/");
  };

  const isLoggedIn = !!userName;

  return (
    <div className={styles.Headerwrapper}>
    <div className={styles.Header}>
      <div className={styles.Headerlogo}>
        <Link to="/">
          <img src={headerlogo} alt="logo" />
        </Link>
      </div>

      <div className={styles.Headernav}>
        <ul>
          <li>
            <Link to="/about">소개</Link>
          </li>
          <li>
            <Link to="/coach">코치</Link>
          </li>
        </ul>
      </div>

      <div className={styles.Headersearch}>
        <input type="text" placeholder="모임을 검색해 보세요!" />
        <button>
          <img src={headersearch} alt="search" />
        </button>
      </div>

      <div className={styles.Headerlogin}>
        {isLoggedIn ? (
          <>
            <span className={styles.HeaderStatus}>
              안녕하세요 <br />{userName}님
            </span>
            <button 
              onClick={handleLogout}
              className={styles.HeaderLogoutButton}
            >
              로그아웃
            </button>
          </>
        ) : (
          <Link to="/auth" className={styles.HeaderStatus}>
            로그아웃 상태입니다
          </Link>
        )}
        <Link to={isLoggedIn ? "/my" : "/auth"}>
          <button className={styles.HeaderProfileButton}>
            <img src={profileImage} alt="user profile" />
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Header;
