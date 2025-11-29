import styles from "../../styles/about/CTASection.module.css";
import { Link } from "react-router-dom";

function CTASection() {
    return(
        <section className={styles.ctaSection}>
            <div className={styles.ctaSectionContainer}>
                <h2 className={styles.sectionTitle}>지금 바로 시작하세요!</h2>
                <p className={styles.sectionSubtitle}>수많은 사람들이 이미 새로운 취미와 코치를 만나고 있어요.</p>
            

                <div className={styles.ctaSectionButtons}>
                    <Link to="/auth" className={styles.primaryButton}>회원가입</Link>

                    <Link to="/" className={styles.secondaryButton}>서비스 둘러보기</Link>
                </div>
            </div>
        </section>
    )
}

export default CTASection;