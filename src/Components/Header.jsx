import styles from "../Styles/Header.module.css";
import headerlogo from "../assets/HeaderLogo.svg";
import headersearch from "../assets/HeaderSearch.svg";
import profileImage from "../assets/ProfileImage.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.Headerlogo}>
        <img src={headerlogo} alt="logo" />
      </div>

      <div className={styles.Headernav}>
        <ul>
          <li>
            <Link to="/about">?�개</Link>
          </li>
          <li>
            <Link to="/coach">코치</Link>
          </li>
        </ul>
      </div>

      <div className={styles.Headersearch}>
        <input type="text" placeholder="모임??검?�해 보세??" />
        <button>
          <img src={headersearch} alt="search" />
        </button>
      </div>

      <div className={styles.Headerlogin}>
        <span className={styles.HeaderStatus}>로그?�웃 ?�태?�니??</span>
        <button className={styles.HeaderProfileButton}>
          <img src={profileImage} alt="user profile" />
        </button>
      </div>
    </div>
  );
}

export default Header;
