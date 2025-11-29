import styles from "../styles/my/MyPage.module.css";
import BadgeList from "../components/my/BadgeList";
import MyClubList from "../components/my/MyClubList";
import UpcomingMeetups from "../components/my/UpcomingMeetups";
import UserHistory from "../components/my/UserHistory";
import UserPofile from "../components/my/UserProfile";

const Button = ({ children }) => {
  return (
    <button type="button" className={styles.btn}>
      {children}
    </button>
  );
};

function MyPage() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.headerContainer}>
          <div className={styles.header}>
            <p className={styles.number}>32</p>
            <p className={styles.text}>참여 동호회</p>
          </div>
          <div className={styles.header}>
            <p className={styles.number}>200</p>
            <p className={styles.text}>참가 신청</p>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionProfile}></div>
          <div className={styles.sectionTitle}>
            <div className={styles.profileContainer}>
              <div className={styles.profile}>김운동 / 당근</div>
              <div className={styles.sub}>초보자</div>
            </div>
            <div className={styles.btnContainer}>
              <Button>등급 승격 신청</Button>
              <Button>프로필 편집</Button>
            </div>
          </div>
          <div className={styles.tabs}>
            <div className={styles.tab}>프로필</div>
            <div className={styles.tab}>히스토리</div>
            <div className={styles.tab}>뱃지</div>
            <div className={styles.tab}>내 가입 동호회</div>
            <div className={styles.tab}>예정된 번개 모임</div>
          </div>
          <div className={styles.tabSection}>
            {/* <UserPofile /> */}
            <UserHistory />
            {/* <BadgeList /> */}
            {/* <MyClubList /> */}
            {/* <UpcomingMeetups /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
