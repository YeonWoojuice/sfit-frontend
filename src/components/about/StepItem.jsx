import styles from "../../styles/about/StepItem.module.css";
import step1 from "../../assets/about/step1.svg";
import step2 from "../../assets/about/step2.svg";
import step3 from "../../assets/about/step3.svg";
import step4 from "../../assets/about/step4.svg";
import number1 from "../../assets/about/number1.svg";
import number2 from "../../assets/about/number2.svg";
import number3 from "../../assets/about/number3.svg";
import number4 from "../../assets/about/number4.svg";

const steps=[
    {
        id:1,
        title:"간편 회원가입",
        description:"3초만에 가입!",
        icon: number1,
        image: step1
    },
    {
        id:2,
        title:"프로필 완성",
        description:"관심 종목, 지역, 한 줄 소개로 매칭 정확도 UP",
        icon: number2,
        image: step2
    },
    {
        id:3,
        title:"동호회&코치 매칭",
        description:"AI 기반 추천 시스템으로 딱 맞는 사람과 연결",
        icon: number3,
        image: step3
    },
    {
        id:4,
        title:"활동 시작!",
        description:"번개 참여, 코치 등록, 후기 공유까지 자유롭게!",
        icon: number4,
        image: step4
    }
];

function StepItem() {
    return(
        <section className={styles.stepSection}>
            <div className={styles.stepContainer}>
                <h2 className={styles.sectionTitle}>4단계로 시작해보세요!</h2>
                <p className={styles.sectionSubtitle}>간단한 과정으로 활동을 빠르게 찾을 수 있어요.</p>
            

            <div className={styles.cardsContainer}>
                {steps.map((step) =>(
                    <div key={step.id} className={styles.card}>
                        <img src={step.icon} alt="icon" className={styles.stepIcon} />
                        <h3 className={styles.stepTitle}>{step.title}</h3>
                        <p className={styles.stepDescription}>{step.description}</p>
                        <div className={styles.stepImage}>
                            <img src={step.image} alt="image" />
                        </div>
                    </div>
        ))}
      </div>
    </div>
  </section>
);
}

export default StepItem;