import HeroSection from "../components/home/HeroSection";
import AboutPreview from "../components/home/AboutPreview";
import ServicesOverview from "../components/home/ServicesOverview";
import ExpertiseHighlights from "../components/home/ExpertiseHighlights";
import ContactInfo from "../components/home/ContactInfo";
import FAQSection from "../components/home/FAQSection";
import FeaturedProducts from "../components/home/FeaturedProducts";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutPreview />
      <ServicesOverview />
      <FeaturedProducts />
      <ExpertiseHighlights />
      <ContactInfo />
      <FAQSection />
    </div>
  );
};

export default HomePage;
