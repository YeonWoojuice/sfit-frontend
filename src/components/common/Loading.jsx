import styles from "../../styles/common/Loading.module.css";
import loadImg from "../../assets/loading.png";

function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.outter}>
        <div className={styles.circle}>
          <img src={loadImg} className={styles.img}></img>
        </div>
      </div>
    </div>
  );
}

export default Loading;
