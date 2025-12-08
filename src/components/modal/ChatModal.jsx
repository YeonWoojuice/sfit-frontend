import { useEffect, useState } from "react";
import styles from "../../styles/modal/ChatModal.module.css";
import ChatItem from "./ChatItem";
import prev from "../../assets/modal/prev.png";
import { getChatList, getChats } from "../../api/private";

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
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [content, setContent] = useState("");
  const [rooms, setRooms] = useState([]);
  const [chats, setChats] = useState([]);
  const [isChat, setIsChat] = useState(false);

  const handleClick = async () => {
    try {
      const getChat = await getChats();
      console.log(getChat.messages);
      setChats(getChat.messages);
      setIsChat(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function getList() {
      const params = {
        filter: category,
        search: search,
      };
      try {
        const data = await getChatList(params);
        setRooms(data.rooms);
        console.log(data.rooms);
      } catch (error) {
        console.log(error);
      }
    }

    getList();
  }, []);

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
                isSelect={category === "all"}
                onClick={() => setCategory("all")}
              >
                전체
              </Category>
              <Category
                isSelect={category === "unread"}
                onClick={() => setCategory("unread")}
              >
                안 읽음
              </Category>
              <Category
                isSelect={category === "favorite"}
                onClick={() => setCategory("favorite")}
              >
                즐겨찾기
              </Category>
            </div>
            <div className={styles.searchWrapper}>
              <input
                className={styles.input}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
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
              value={content}
              placeholder="메시지를 입력하세요."
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
      ) : (
        <div className={styles.content}>
          {/* {rooms.map((room) => (
            <ChatItem key={room.id} data={room} onClick={handleClick(room.id)}/>
          ))} */}
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
        </div>
      )}
    </div>
  );
}

export default ChatModal;
