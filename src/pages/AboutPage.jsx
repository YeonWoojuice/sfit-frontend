import styles from "../styles/about/AboutPage.module.css";
import HeroSection from "../components/about/HeroSection";
import ServiceCard from "../components/about/ServiceCard";
import StepItem from "../components/about/StepItem";
import CTASection from "../components/about/CTASection";
import { useEffect, useRef, useState } from "react";

function AboutPage() {
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef(null);
    const serviceRef = useRef(null);
    const stepRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        // 페이지 진입 시 페이드인 효과
        setIsVisible(true);

        // Intersection Observer로 스크롤 시 애니메이션
        const observers = [];
        const refs = [heroRef, serviceRef, stepRef, ctaRef];

        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -100px 0px"
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                }
            });
        };

        refs.forEach((ref) => {
            if (ref.current) {
                const observer = new IntersectionObserver(observerCallback, observerOptions);
                observer.observe(ref.current);
                observers.push(observer);
            }
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);

    return(
        <main className={styles.aboutPage}>
            <div ref={heroRef} className={`${styles.fadeInUp} ${isVisible ? styles.visible : ''}`}>
                <HeroSection />
            </div>
            <div ref={serviceRef} className={styles.fadeInUp}>
                <ServiceCard />
            </div>
            <div ref={stepRef} className={styles.fadeInUp}>
                <StepItem />
            </div>
            <div ref={ctaRef} className={styles.fadeInUp}>
                <CTASection />
            </div>
        </main>
    )

}

export default AboutPage;