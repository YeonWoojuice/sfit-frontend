import styles from "../../styles/about/HeroSection.module.css";
import { Link } from "react-router-dom";

function HeroSection() {
    return(
        <section className={styles.heroSection}>
            <div className={styles.heroSectionContainer}>
                <h1 className={styles.heroTitle}>클릭 한 번으로 바로 매칭!</h1>
                <p className={styles.heroSubtitle}>취미도 코치도 한 곳에서 연결되는 가장 빠른 커뮤니티</p>
                <div className={styles.heroSectionButtons}>
                    <Link to="/auth?mode=signup" className={styles.primaryButton}>회원가입</Link>
                    <Link to="/" className={styles.secondaryButton}>서비스 둘러보기</Link>
                    
                </div>
            </div>
        </section>
    )
}

export default HeroSection;