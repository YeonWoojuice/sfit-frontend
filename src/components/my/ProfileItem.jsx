import styles from "../../styles/my/ProfileItem.module.css";
import FlagIcon from "../../assets/my/flag.svg?react";
import RegionIcon from "../../assets/my/home.svg?react";
import GenderIcon from "../../assets/my/gender.svg?react";
import AgeIcon from "../../assets/my/age.svg?react";
import ExpalinIcon from "../../assets/my/explain.svg?react";
import CoachIcon from "../../assets/my/coach.svg?react";

function ProfileItem({ label, content }) {
  const renderIcon = {
    "관심 운동": <FlagIcon className={styles.icon} />,
    지역: <RegionIcon className={styles.icon} />,
    성별: <GenderIcon className={styles.icon} />,
    나이: <AgeIcon className={styles.icon} />,
    "한 줄 소개": <ExpalinIcon className={styles.icon} />,
    "코치 자격": <CoachIcon className={styles.icon} />,
  };
  return (
    <div className={styles.container}>
      <div className={styles.iconBox}>{renderIcon[label]}</div>
      <div className={styles.texts}>
        <div className={styles.label}>{label}</div>
        <div className={styles.content}>{content}</div>
      </div>
    </div>
  );
}

export default ProfileItem;
