import styles from "../styles/main/MainPage.module.css";
import { useEffect, useState } from "react";
import { getRange } from "../utils/pagination";
import Tab from "../components/main/Tab";
import FilterMenu from "../components/main/FilterMenu";
import InstructorSection from "../components/gathering/InstructorSection";
import ClubSection from "../components/gathering/ClubSection";
import FloatingButton from "../components/common/FloatingButton";
import prevIcon from "../assets/prev.png";
import nextIcon from "../assets/next.png";
import FloatingLayout from "../components/common/FloatingLayout";
import Modal from "../components/modal/Modal";
import AlertItem from "../components/common/AlertItem";
import { getClubs } from "../api/guest";
import { REGION_OPTIONS, SPORT_OPTIONS } from "../constants/option";
import Loading from "../components/common/Loading";

function MainPage() {
  const [data, setData] = useState([]);

  const pageInfo = {
    page: 1,
    size: 8,
    totalPages: 8,
    totalElements: 61,
    hasPrev: false,
    hasNext: true,
  };

  const pages = getRange(1, pageInfo.totalPages);
  const [filter, setFilter] = useState({
    regions: "",
    sports: "",
    coach: false,
  });

  const [modal, setModal] = useState(false);

  const handleFilter = (key, value) => {
    setFilter((prev) => ({ ...prev, [key]: prev[key] === value ? "" : value }));
  };

  useEffect(() => {
    async function getclub() {
      try {
        const regions = REGION_OPTIONS.find((r) => r.name === filter.regions);
        const regionId = regions ? regions.id : "";

        const sports = SPORT_OPTIONS.find((s) => s.name === filter.sports);
        const sportId = sports ? sports.id : "";

        const search = "";

        const params = {
          region: regionId,
          sport: sportId,
          search,
        };
        console.log(params);
        const data = await getClubs(params);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }

    getclub();
  }, [filter.regions, filter.sports]);

  return (
    <div className={styles.container}>
      {modal && <Modal onClick={() => setModal(false)} />}
      <div className={styles.inner}>
        {/* 필터링 */}
        <div className={styles.section}>
          <FilterMenu filter={filter} onClick={handleFilter} />
          <div className={styles.midSection}>
            <Tab />
            {/* 강사 데이터 넘겨줘야 됨 */}
            <InstructorSection />
            <Loading />
            {/* {data.clubs ? <ClubSection data={data.clubs} /> : <Loading />} */}
            {/* 모임 페이지 버튼 */}
            <div className={styles.bottom}>
              {data.count > 8 ? (
                <>
                  <img src={prevIcon} className={styles.prev}></img>
                  <div className={styles.pages}>
                    {pages.map((item) => (
                      <div key={item} className={styles.page}>
                        {item}
                      </div>
                    ))}
                  </div>
                  <img src={nextIcon} className={styles.next}></img>
                </>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.alertContainer}>
              <AlertItem />
            </div>
            {/* 플로팅 버튼 */}
            <FloatingLayout>
              <FloatingButton type="chat" />
              <FloatingButton
                type="new"
                onClick={() => {
                  setModal(!modal);
                }}
              />
            </FloatingLayout>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
