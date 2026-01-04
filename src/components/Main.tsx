import HeroSection from "./HeroSection";
import Features from "./Features";
import Productivity from "./Productivity";
import Testimonials from "./Testimonials";
import Cta from "./Cta";
import { useState, useEffect } from "react";
import "./Main.css"

function Main() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisible = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    };
  }

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    document.addEventListener("scroll", toggleVisible);
    return () => document.removeEventListener("scroll", toggleVisible);
  }, [])

  return (
    <main className="container">
      <HeroSection />
      <Features />
      <Productivity />
      <Testimonials />
      <Cta />
      <div
        className={`scroll-up-btn btn-primary ${isVisible? "show-scroll-btn" : ""}`}
        onClick={handleScrollUp}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </div>
    </main>
  );
}

export default Main;