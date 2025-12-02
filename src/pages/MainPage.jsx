import styles from "../styles/main/MainPage.module.css";
import { useEffect, useState } from "react";
import { getClubs, getMeetup } from "../api/public";
import { REGION_OPTIONS, SPORT_OPTIONS } from "../constants/option";
import { getRange } from "../utils/pagination";
import prevIcon from "../assets/main/prev.png";
import nextIcon from "../assets/main/next.png";
import Modal from "../components/modal/Modal";
import FilterMenu from "../components/main/FilterMenu";
import Tab from "../components/main/Tab";
import InstructorSection from "../components/gathering/InstructorSection";
import ClubSection from "../components/gathering/ClubSection";
import Loading from "../components/common/Loading";
import AlertItem from "../components/common/AlertItem";
import FloatingButton from "../components/common/FloatingButton";
import FloatingLayout from "../components/common/FloatingLayout";

function MainPage() {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("전체");
  const [filter, setFilter] = useState({
    regions: "",
    sports: "",
    coach: false,
  });

  const pageInfo = {
    page: 1,
    size: 8,
    totalPages: 8,
    totalElements: 61,
    hasPrev: false,
    hasNext: true,
  };

  const pages = getRange(1, pageInfo.totalPages);

  const [modal, setModal] = useState(false);

  const handleFilter = (key, value) => {
    setFilter((prev) => ({ ...prev, [key]: prev[key] === value ? "" : value }));
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setData([]);
  };

  // search 추가 필요
  // useEffect(() => {
  //   async function getclub() {
  //     try {
  //       const regions = REGION_OPTIONS.find((r) => r.name === filter.regions);
  //       const regionId = regions ? regions.id : "";

  //       const sports = SPORT_OPTIONS.find((s) => s.name === filter.sports);
  //       const sportId = sports ? sports.id : "";

  //       const search = "";

  //       const baseParams = {
  //         region: regionId,
  //         sport: sportId,
  //         search,
  //       };

  //       let responseData = [];

  //       if (activeTab === "번개 모임") {
  //         responseData = await getMeetup(baseParams, search);
  //       } else {
  //         responseData = await getClubs(baseParams);
  //       }
  //       console.log(responseData);
  //       setData(responseData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   getclub();
  // }, [filter.regions, filter.sports, activeTab]);

  const contentList = data.clubs || data.flashes; // 응답 데이터 다른 키값

  return (
    <div className={styles.container}>
      {modal && <Modal onClick={() => setModal(false)} />}

      <div className={styles.inner}>
        {/* 필터링 */}
        <div className={styles.section}>
          <FilterMenu filter={filter} onClick={handleFilter} />
          <div className={styles.midSection}>
            <Tab currentTab={activeTab} onTabChange={handleTabChange} />
            {/* 강사 데이터 넘겨줘야 됨 */}
            <InstructorSection />
            {/* <Loading /> */}
            {contentList ? (
              <ClubSection type={activeTab} data={contentList} />
            ) : (
              <Loading />
            )}
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
