import RCCGPraiseHouse from "./section/hero";
import RCCGPraiseHouseInfo from "./section/info";
import RCCGPraiseHouseWelcome from "./section/intro";
import LeadershipSection from "./section/leaderShip";
import PrayerForm from "./section/prayerFormSection";
import BlogSection from "./section/blogSection";
import AboutMeSection from "./section/aboutMe";
import ContactSection from "./section/contact";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="bg-background-50">
      <Navbar />
      <RCCGPraiseHouse />
      <RCCGPraiseHouseWelcome />
      <RCCGPraiseHouseInfo />
      <AboutMeSection />
      <LeadershipSection />
      <PrayerForm for_prayer={true} />
      <BlogSection />
      <ContactSection/>
      <Footer />
    </div>
  );
}
