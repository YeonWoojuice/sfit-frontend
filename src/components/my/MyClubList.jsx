import { useEffect, useState } from "react";
import styles from "../../styles/my/MyClubList.module.css";
import ClubItem from "./ClubItem";
import Loading from "../common/Loading";
import { getClubs } from "../../api/private";

function MyClubList() {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getClub() {
      try {
        const data = await getClubs();
        setClubs(data.clubs);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    getClub();
  }, []);

  if (loading) <Loading />;
  return (
    <div className={styles.clubContainer}>
      <div className={styles.header}>
        <p className={styles.title}>내 가입 동호회</p>
        <p className={styles.select}>모두 보기</p>
      </div>
      <div className={styles.clubs}>
        {clubs.map((item, index) => (
          <ClubItem key={index} item={item} />
        ))}
        {/* <ClubItem />
        <ClubItem />
        <ClubItem /> */}
      </div>
    </div>
  );
}

export default MyClubList;
