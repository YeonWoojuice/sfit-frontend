import styles from "../Styles/main/MainPage.module.css";
import { useState } from "react";
import { getRange } from "../utils/pagination";
import Tab from "../Components/main/Tab";
import FilterMenu from "../Components/main/FilterMenu";
import InstructorSection from "../Components/gathering/InstructorSection";
import MeetingSection from "../Components/gathering/MeetingSection";
import FloatingButton from "../Components/common/FloatingButton";
import prevIcon from "../assets/prev.png";
import nextIcon from "../assets/next.png";
import FloatingLayout from "../Components/common/FloatingLayout";
import Modal from "../Components/modal/Modal";

function MainPage() {
  const mockMeetingData = [
    {
      id: 1,
      name: "[ëª¨ì„ ëª? ê²Œì‹œê¸€ ?œëª© ?¤ëª… 1",
      description: "ê²Œì‹œë¬?ë¶€???¹ì? ë¶€?°ì„¤ëª…ì…?ˆë‹¤. ì¦ê±°??ëª¨ì„!",
      date: "2025-11-16",
      region: "?œìš¸",
      sport: "?Œë‹ˆ??,
      rating: 4.5,
    },
    {
      id: 2,
      name: "[?˜ì˜] ì£¼ë§ ?„ì¹¨ ?˜ì˜ ?˜ì‹¤ ë¶?,
      description: "ì´ˆë³´?ë„ ?˜ì˜?©ë‹ˆ?? ?ìœ ???„ì£¼ë¡??´ìš”.",
      date: "2025-11-17",
      region: "ë¶€??,
      sport: "?˜ì˜",
      rating: 4.8,
    },
    {
      id: 3,
      name: "[?êµ¬] ?€?ì— 3v3 ?œê²Œ??",
      description: "?œê°• ê³µì›?ì„œ ê°€ë³ê²Œ ?°ì‹¤ ë¶?êµ¬í•©?ˆë‹¤.",
      date: "2025-11-18",
      region: "?œìš¸",
      sport: "?êµ¬",
      rating: 4.2,
    },
    {
      id: 4,
      name: "[?´ë¼?´ë°] ë³¼ë”ë§?ê°™ì´ ?€?´ìš”",
      description: "?”í´?¼ì„ ? ë…¼?„ì ?…ë‹ˆ?? V3-V4 ?ˆë²¨.",
      date: "2025-11-19",
      region: "ê²½ê¸°",
      sport: "?´ë¼?´ë°",
      rating: 4.9,
    },
    {
      id: 5,
      name: "[ì¶•êµ¬] ì£¼ë§ ?¤ì „ 11:11 ?•ê·œ ê²Œì„",
      description: "?©ë³‘ êµ¬í•©?ˆë‹¤! ?¬ì??˜ì? ë¯¸ë“œ?„ë”.",
      date: "2025-11-20",
      region: "?¸ì²œ",
      sport: "ì¶•êµ¬",
      rating: 4.6,
    },
    {
      id: 6,
      name: "[ë°°ë“œë¯¼í„´] ì´ˆì‹¬???€???ˆìŠ¨ ëª¨ì„",
      description: "?¼ì¼“ ?†ìœ¼?”ë„ ?€??ê°€?¥í•©?ˆë‹¤.",
      date: "2025-11-21",
      region: "?€êµ?,
      sport: "ë°°ë“œë¯¼í„´",
      rating: 4.7,
    },
  ];

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

  return (
    <div className={styles.container}>
      <div className={styles.header}></div>
      {modal && <Modal onClick={() => setModal(false)} />}
      {/* ?Œë¡œ??ë²„íŠ¼ */}
      <FloatingLayout>
        <FloatingButton type="chat" />
        <FloatingButton
          type="new"
          onClick={() => {
            setModal(!modal);
          }}
        />
      </FloatingLayout>

      {/* ?„í„°ë§?*/}
      <FilterMenu filter={filter} onClick={handleFilter} />
      <Tab />
      {/* ê°•ì‚¬ ?°ì´???˜ê²¨ì¤˜ì•¼ ??*/}
      <InstructorSection />
      <MeetingSection data={mockMeetingData} />
      {/* ëª¨ì„ ?˜ì´ì§€ ë²„íŠ¼ */}
      <div className={styles.bottom}>
        <img src={prevIcon} className={styles.prev}></img>
        <div className={styles.pages}>
          {pages.map((item) => (
            <div key={item} className={styles.page}>
              {item}
            </div>
          ))}
        </div>
        <img src={nextIcon} className={styles.next}></img>
      </div>
    </div>
  );
}

export default MainPage;
