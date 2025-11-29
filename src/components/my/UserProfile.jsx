import styles from "../../styles/my/UserProfile.module.css";
import ProfileItem from "./ProfileItem";

function UserPofile() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>나의 프로필 카드</div>
      <div className={styles.left}>
        <ProfileItem label="관심 운동" content="축구 / 농구" />
        <ProfileItem label="지역" content="서울시 강남구" />
        <ProfileItem label="성별" content="여자" />
      </div>
      <div className={styles.right}>
        <ProfileItem label="나이" content="22세 (2003년생)" />
        <ProfileItem
          label="한 줄 소개"
          content="함께 즐거운 운동 라이프 즐겨요~!"
        />
        <ProfileItem label="코치 자격" content="일반 회원" />
      </div>
    </div>
  );
}

export default UserPofile;
