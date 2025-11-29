// import styles from "../styles/AboutPage.module.css";
import HeroSection from "../components/about/HeroSection";
import ServiceCard from "../components/about/ServiceCard";
import StepItem from "../components/about/StepItem";
import CTASection from "../components/about/CTASection";

function AboutPage() {
    return(
        <main>
            <HeroSection />
            <ServiceCard />
            <StepItem />
            <CTASection />
        </main>
    )

}

export default AboutPage;