import styles from "../../styles/my/ProfileItem.module.css";
import FlagIcon from "../../assets/my/flag.svg?react";
import RegionIcon from "../../assets/my/home.svg?react";
import GenderIcon from "../../assets/my/gender.svg?react";
import AgeIcon from "../../assets/my/age.svg?react";
import ExpalinIcon from "../../assets/my/explain.svg?react";
import CoachIcon from "../../assets/my/coach.svg?react";

function ProfileItem({ label, content }) {
  const renderIcon = {
    "관심 운동": <FlagIcon className={styles.itemIcon} />,
    지역: <RegionIcon className={styles.itemIcon} />,
    성별: <GenderIcon className={styles.itemIcon} />,
    나이: <AgeIcon className={styles.itemIcon} />,
    "한 줄 소개": <ExpalinIcon className={styles.itemIcon} />,
    "코치 자격": <CoachIcon className={styles.itemIcon} />,
  };

  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemIconBox}>{renderIcon[label]}</div>
      <div className={styles.itemTexts}>
        <div className={styles.itemLabel}>{label}</div>
        <div className={styles.itemContent}>{content}</div>
      </div>
    </div>
  );
}

export default ProfileItem;
