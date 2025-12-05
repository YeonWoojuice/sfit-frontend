import { REGION_OPTIONS, SPORT_OPTIONS } from "../../constants/option";
import styles from "../../styles/my/UserProfile.module.css";
import ProfileItem from "./ProfileItem";

function UserProfile({ data }) {
  const getSportsString = () => {
    if (!data.sports || data.sports.length === 0) return "선택 안함";

    return data.sports
      .map((sportId) => {
        const sport = SPORT_OPTIONS.find((option) => option.id === sportId);
        return sport ? sport.name : null;
      })
      .filter(Boolean) 
      .join(" / ");
  };

  const getRegionString = () => {
    const region = REGION_OPTIONS.find(
      (option) => option.id === data.region_code
    );
    return region ? region.name : "지역 미설정";
  };

  const getGenderString = () => {
    if (data.gender === "M") return "남자";
    if (data.gender === "F") return "여자";
  };

  // if (!data) return null;
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileTitle}>나의 프로필 카드</div>
      <div className={styles.profileGroupLeft}>
        <ProfileItem label="관심 운동" content={getSportsString()} />
        <ProfileItem label="지역" content={getRegionString()} />
        <ProfileItem label="성별" content={getGenderString()} />
      </div>
      <div className={styles.profileGroupRight}>
        <ProfileItem label="나이" content={data.age} />
        <ProfileItem label="한 줄 소개" content={data.introduction} />
        <ProfileItem label="코치 자격" content="일반 회원" />
      </div>
    </div>
  );
}

export default UserProfile;
