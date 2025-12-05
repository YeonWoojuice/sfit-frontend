import { useState } from "react";
import styles from "../../styles/modal/ChatModal.module.css";
import ChatItem from "./ChatItem";
import prev from "../../assets/modal/prev.png";

const Category = ({ children, isSelect = false, onClick }) => {
  return (
    <div
      className={`${styles.category} ${isSelect ? styles.select : ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const SearchIcon = () => (
  <svg
    className={styles.searchIcon}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

function ChatModal() {
  const [category, setCategory] = useState("전체");
  const [isChat, setIsChat] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {isChat ? (
          <div className={styles.chatTitle}>
            <img
              src={prev}
              className={styles.img}
              onClick={() => setIsChat(false)}
            ></img>
            <div className={styles.profile}></div>
            <div className={styles.name}>상대방</div>
          </div>
        ) : (
          <>
            <div className={styles.categorys}>
              <Category
                isSelect={category === "전체"}
                onClick={() => setCategory("전체")}
              >
                전체
              </Category>
              <Category
                isSelect={category === "안 읽음"}
                onClick={() => setCategory("안 읽음")}
              >
                안 읽음
              </Category>
              <Category
                isSelect={category === "즐겨찾기"}
                onClick={() => setCategory("즐겨찾기")}
              >
                즐겨찾기
              </Category>
            </div>
            <div className={styles.searchWrapper}>
              <input className={styles.input} />
              <SearchIcon />
            </div>
          </>
        )}
      </div>
      {isChat ? (
        <div className={styles.chatContent}>
          <div className={styles.messageList}>
            <div className={styles.receiverPlaceholder}>...</div>
          </div>

          <div className={styles.inputArea}>
            <input
              className={styles.messageInput}
              placeholder="메시지를 입력하세요."
            />
          </div>
        </div>
      ) : (
        <div className={styles.content}>
          <ChatItem
            onClick={() => {
              setIsChat(true);
            }}
          />
          <ChatItem
            onClick={() => {
              setIsChat(true);
            }}
          />
          <ChatItem
            isActive={true}
            onClick={() => {
              setIsChat(true);
            }}
          />
          <ChatItem
            onClick={() => {
              setIsChat(true);
            }}
          />
          <ChatItem
            onClick={() => {
              setIsChat(true);
            }}
          />
          <ChatItem
            onClick={() => {
              setIsChat(true);
            }}
          />
          <ChatItem
            onClick={() => {
              setIsChat(true);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default ChatModal;
