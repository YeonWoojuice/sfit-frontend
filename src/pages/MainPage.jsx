import styles from "../styles/main/MainPage.module.css";
import Tab from "../componets/main/Tab";
import MeetingCard from "../componets/gathering/MeetingCard";
import FilterMenu from "../componets/main/FilterMenu";
import { useState } from "react";

function MainPage() {
  const mockMeetingData = [
    {
      id: 1,
      name: "[모임 명] 게시글 제목 설명 1",
      description: "게시물 부제 혹은 부연설명입니다. 즐거운 모임!",
      date: "2025-11-16",
      region: "서울",
      sport: "테니스",
      rating: 4.5,
    },
    {
      id: 2,
      name: "[수영] 주말 아침 수영 하실 분",
      description: "초보자도 환영합니다. 자유형 위주로 해요.",
      date: "2025-11-17",
      region: "부산",
      sport: "수영",
      rating: 4.8,
    },
    {
      id: 3,
      name: "[농구] 저녁에 3v3 한게임!",
      description: "한강 공원에서 가볍게 뛰실 분 구합니다.",
      date: "2025-11-18",
      region: "서울",
      sport: "농구",
      rating: 4.2,
    },
    {
      id: 4,
      name: "[클라이밍] 볼더링 같이 풀어요",
      description: "더클라임 신논현점입니다. V3-V4 레벨.",
      date: "2025-11-19",
      region: "경기",
      sport: "클라이밍",
      rating: 4.9,
    },
    {
      id: 5,
      name: "[축구] 주말 오전 11:11 정규 게임",
      description: "용병 구합니다! 포지션은 미드필더.",
      date: "2025-11-20",
      region: "인천",
      sport: "축구",
      rating: 4.6,
    },
    {
      id: 6,
      name: "[배드민턴] 초심자 대상 레슨 모임",
      description: "라켓 없으셔도 대여 가능합니다.",
      date: "2025-11-21",
      region: "대구",
      sport: "배드민턴",
      rating: 4.7,
    },
  ];

  const [filter, setFilter] = useState({
    regions: "",
    sports: "",
    coach: false,
  });

  const handleFilter = (key, value) => {
    setFilter((prev) => ({ ...prev, [key]: prev[key] === value ? "" : value }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}></div>
      <FilterMenu filter={filter} onClick={handleFilter} />
      <Tab />
      <div className={styles.insturctorSection}>
        <div className={styles.sectionHeader}>
          <h1 className={styles.sectionTitle}>강사님 리스트</h1>
          <p className={styles.sort}>경기, 용인시, 기흥구</p>
        </div>
        <div className={styles.cardSection}></div>
      </div>
      <section className={styles.meetingSection}>
        <div className={styles.sectionHeader}>
          <h1 className={styles.sectionTitle}>일반 모임</h1>
          <p className={styles.sort}>거리순</p>
        </div>
        <div className={styles.cardSection}>
          {mockMeetingData.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </div>
        <div className={styles.bottom}>
          <div className={styles.prev}></div>

          <div className={styles.next}></div>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
