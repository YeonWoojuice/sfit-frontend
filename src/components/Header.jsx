import styles from "../styles/Header.module.css";
import headerlogo from "../assets/HeaderLogo.svg";
import headersearch from "../assets/HeaderSearch.svg";
import profileImage from "../assets/profileImage.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
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
        <Link to="/auth" className={styles.HeaderStatus}>
          로그아웃 상태입니다
        </Link>
        <Link to="/auth">
          <button className={styles.HeaderProfileButton}>
            <img src={profileImage} alt="user profile" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
