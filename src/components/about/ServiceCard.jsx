import styles from "../../styles/about/ServiceCard.module.css";
import starIcon from "../../assets/about/star.svg";
import about1 from "../../assets/about/about1.svg";
import about2 from "../../assets/about/about2.svg";
import about3 from "../../assets/about/about3.svg";
const services = [
    {
        id: 1,
        title: "동호회 생성",
        description: "클릭 한 번으로 동아리를 생성해보세요!\n\n관심종목, 지역, 인원만 설정하면 즉시 등록이 완료돼요!",
        icon: starIcon,
        image: about1
    },
    {
        id: 2,
        title: "번개 모임",
        description: "오늘 저녁, 바로 함께할 사람 찾아보세요!\n\n 위치 기반으로 주변의 소규모 모임을\n 즉시 확인하고 참여할 수 있어요.",
        icon: starIcon,
        image: about2
    },
    {
        id: 3,
        title: "강사 매칭/활동",
        description: "자격증 강사부터 경험형 코치까지,\n 나에게 맞는 트레이너를 합리적인 가격에 만나보세요!\n\n 누구나 코치가 될 수 있는 열린 기회",
        icon: starIcon,
        image: about3
    }
];

function ServiceCard() {
    return(
        <section className={styles.serviceSection}>
            <div className={styles.serviceContainer}>
                <h2 className={styles.sectionTitle}>세 가지 핵심 서비스</h2>
                <p className={styles.sectionSubtitle}>원하는 활동을 쉽고 빠르게 찾아보세요.</p>
                
                <div className={styles.cardsContainer}>
                    {services.map((service) => (
                        <div key={service.id} className={styles.card}>
                            <img src={service.icon} alt="icon" className={styles.icon} />
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                            <div className={styles.cardImage}>
                                <img src={service.image} alt={service.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServiceCard;