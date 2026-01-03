import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Productivity from "./components/Productivity";
import Testimonials from "./components/Testimonials";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <HeroSection />
        <Features />
        <Productivity />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

export default App;
