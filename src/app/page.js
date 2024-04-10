import Image from "next/image";
import HeroSection from "./components/heroSection";
import NavBar from "./components/navBar";
import AboutSection from "./components/aboutSection";
import ProjectSection from "./components/projectSection";
import EmailSection from "./components/emailSection";
import Footer from "./components/footer";
import AchievementSection from "./components/achievementSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
