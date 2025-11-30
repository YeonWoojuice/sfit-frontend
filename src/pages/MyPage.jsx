import styles from "../styles/my/MyPage.module.css";
import BadgeList from "../components/my/BadgeList";
import MyClubList from "../components/my/MyClubList";
import UpcomingMeetups from "../components/my/UpComingMeetups";
import UserHistory from "../components/my/UserHistory";
import UserProfile from "../components/my/UserProfile";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ children }) => {
  return (
    <button type="button" className={styles.btn}>
      {children}
    </button>
  );
};

function MyPage() {
  const [tab, setTab] = useState("profile");
  const navigate = useNavigate();

  //   useEffect(() => {
  //     // 로그인 상태 확인
  //     const userName = localStorage.getItem("userName");
  //     if (!userName) {
  //       // 로그인하지 않은 경우 로그인 페이지로 리다이렉트
  //       navigate("/auth");
  //     }
  //   }, [navigate]);

  const renderItem = {
    profile: <UserProfile />,
    history: <UserHistory />,
    badge: <BadgeList />,
    club: <MyClubList />,
    meetups: <UpcomingMeetups />,
  };
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.headerItem}>
            <p className={styles.headerNumber}>32</p>
            <p className={styles.headerLabel}>참여 동호회</p>
          </div>
          <div className={styles.headerItem}>
            <p className={styles.headerNumber}>200</p>
            <p className={styles.headerLabel}>참가 신청</p>
          </div>
        </div>
        <div className={styles.profileSection}>
          <div className={styles.sectionProfile}></div>
          <div className={styles.sectionTitle}>
            <div className={styles.profileMain}>
              <div className={styles.profileName}>김운동 / 당근</div>
              <div className={styles.profileLevel}>초보자</div>
            </div>
            <div className={styles.profileActions}>
              <Button>등급 승격 신청</Button>
              <Button>프로필 편집</Button>
            </div>
          </div>
          <div className={styles.tabs}>
            <div className={styles.tab} onClick={() => setTab("profile")}>
              프로필
            </div>
            <div className={styles.tab} onClick={() => setTab("history")}>
              히스토리
            </div>
            <div className={styles.tab} onClick={() => setTab("badge")}>
              뱃지
            </div>
            <div className={styles.tab} onClick={() => setTab("club")}>
              내 가입 동호회
            </div>
            <div className={styles.tab} onClick={() => setTab("meetups")}>
              예정된 번개 모임
            </div>
          </div>
          <div className={styles.tabPanel}>{renderItem[tab]}</div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
