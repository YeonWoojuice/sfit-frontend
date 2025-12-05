import styles from "../styles/main/MainPage.module.css";
import { useEffect, useState } from "react";
import { getClubs, getMeetup } from "../api/public";
import { REGION_OPTIONS, SPORT_OPTIONS } from "../constants/option";
import { getRange } from "../utils/pagination";
import prevIcon from "../assets/prev.png";
import nextIcon from "../assets/next.png";
import NewModal from "../components/modal/NewModal";
import FilterMenu from "../components/main/FilterMenu";
import Tab from "../components/main/Tab";
import InstructorSection from "../components/gathering/InstructorSection";
import ClubSection from "../components/gathering/ClubSection";
import Loading from "../components/common/Loading";
import AlertItem from "../components/common/AlertItem";
import FloatingButton from "../components/common/FloatingButton";
import FloatingLayout from "../components/common/FloatingLayout";
import useKeywordStore from "../store/useKeywordStore";
import ChatModal from "../components/modal/ChatModal";

function MainPage() {
  const [modal, setModal] = useState("");
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("전체");
  const keyword = useKeywordStore((state) => state.keyword);
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

  const renderModal = {
    new: <NewModal onClick={() => setModal("")} />,
    chat: <ChatModal onClick={() => setModal("")} />,
  };

  const pages = getRange(1, pageInfo.totalPages);

  const handleFilter = (key, value) => {
    setFilter((prev) => ({ ...prev, [key]: prev[key] === value ? "" : value }));
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setData([]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      async function getclub() {
        try {
          const regions = REGION_OPTIONS.find((r) => r.name === filter.regions);
          const regionId = regions ? regions.id : "";

          const sports = SPORT_OPTIONS.find((s) => s.name === filter.sports);
          const sportId = sports ? sports.id : "";

          const baseParams = {
            region: regionId,
            sport: sportId,
          };

          const clubParams = {
            ...baseParams,
            search: keyword,
          };

          let responseData = {};

          if (activeTab === "전체") {
            const [clubsRes, meetupsRes] = await Promise.all([
              getClubs(clubParams),
              getMeetup(baseParams),
            ]);

            const combinedList = [
              ...(clubsRes.clubs || []),
              ...(meetupsRes.flashes || []),
            ];

            responseData = {
              combined: combinedList,
              count: (clubsRes.count || 0) + (meetupsRes.count || 0),
            };
          } else if (activeTab === "번개 모임") {
            responseData = await getMeetup(baseParams);
          } else {
            // 동호회
            responseData = await getClubs(clubParams);
          }

          console.log(responseData);
          setData(responseData);
        } catch (error) {
          console.log(error);
        }
      }
      getclub();
    }, 500); // 0.5초 딜레이

    // cleanup
    return () => clearTimeout(timer);
  }, [filter.regions, filter.sports, keyword, activeTab]);

  const contentList =
    activeTab === "전체" ? data.combined : data.clubs || data.flashes; // 응답 데이터 다른 키값

  return (
    <div className={styles.container}>
      {modal && renderModal[modal]}

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
            <div className={styles.alertContainer}>{/* <AlertItem /> */}</div>
            {/* 플로팅 버튼 */}
            <FloatingLayout>
              <FloatingButton
                type="chat"
                onClick={() => {
                  setModal((prev) => (prev === "chat" ? "" : "chat"));
                }}
              />
              <FloatingButton
                type="new"
                onClick={() => {
                  setModal((prev) => (prev === "new" ? "" : "new"));
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
