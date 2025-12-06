import { useEffect, useState } from "react";
import styles from "../../styles/my/BadgeList.module.css";
import BadgeItem from "./BadgeItem";
import { getBadges } from "../../api/private";
import Loading from "../common/Loading";

function BadgeList() {
  const [badges, setBadges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getBadge() {
      try {
        const data = await getBadges();
        setBadges(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    getBadge();
  }, []);

  if (loading) <Loading />;

  return (
    <div className={styles.badgeContainer}>
      <div className={styles.header}>
        <p className={styles.title}>뱃지</p>
        <p className={styles.select}>모두 보기</p>
      </div>
      <div className={styles.badges}>
        {/* {badges.map((item, index) => (
          <BadgeItem key={index} item={item}/>
        ))} */}
        <BadgeItem />
        <BadgeItem />
        <BadgeItem />
        <BadgeItem />
      </div>
    </div>
  );
}

export default BadgeList;
