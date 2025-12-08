import styles from "../styles/my/MyPage.module.css";
import BadgeList from "../components/my/BadgeList";
import MyClubList from "../components/my/MyClubList";
import UpComingMeetups from "../components/my/UpComingMeetups";
import UserHistory from "../components/my/UserHistory";
import UserProfile from "../components/my/UserProfile";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMy } from "../api/private";
import Loading from "../components/common/Loading";

const Button = ({ children }) => {
  return (
    <button type="button" className={styles.btn}>
      {children}
    </button>
  );
};

function MyPage() {
  const [myInfo, setMyInfo] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("profile");

  const navigate = useNavigate();

    useEffect(() => {
      // 로그인 상태 확인
      const userName = localStorage.getItem("userName");
      if (!userName) {
        // 로그인하지 않은 경우 로그인 페이지로 리다이렉트
        navigate("/auth");
      }
    }, [navigate]);

  useEffect(() => {
    async function getMine() {
      try {
        const data = await getMy();
        setMyInfo(data);
        setImgUrl("https://sfit-api-server.onrender.com" + data.avatar_url);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    getMine();
  }, []);

  const renderItem = {
    profile: <UserProfile data={myInfo} />,
    history: <UserHistory data={myInfo} />,
    badge: <BadgeList data={myInfo} />,
    club: <MyClubList data={myInfo} />,
    meetups: <UpComingMeetups data={myInfo} />,
  };

  if (loading) return <Loading />;

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.headerItem}>
            <p className={styles.headerNumber}>{myInfo.club_count}</p>
            <p className={styles.headerLabel}>참여 동호회</p>
          </div>
          <div className={styles.headerItem}>
            <p className={styles.headerNumber}>{myInfo.application_count}</p>
            <p className={styles.headerLabel}>참가 신청</p>
          </div>
        </div>
        <div className={styles.profileSection}>
          <img src={imgUrl} className={styles.sectionProfile}></img>
          <div className={styles.sectionTitle}>
            <div className={styles.profileMain}>
              <div className={styles.profileName}>{myInfo.name} / 당근</div>
              <div className={styles.profileLevel}>{myInfo.level}</div>
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
