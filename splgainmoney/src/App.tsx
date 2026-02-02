import { useState, useEffect } from "react";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import FloatingButtons from "./components/FloatingButtons.tsx";
import Home from "./pages/Home";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import HowItWorks from "./pages/HowItWorks.tsx";
import MobileApp from "./pages/MobileApp.tsx";
import Contact from "./pages/Contact.tsx";

type Page =
  | "home"
  | "about"
  | "services"
  | "how-it-works"
  | "mobile-app"
  | "contact";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={setCurrentPage} />;
      case "about":
        return <About />;
      case "services":
        return <Services />;
      case "how-it-works":
        return <HowItWorks />;
      case "mobile-app":
        return <MobileApp />;
      case "contact":
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  // The below code is for disable view source code from unknown person now right click option not working it is best for control code reusability

  // useEffect(() => {
  //   document.addEventListener("contextmenu", (e) => e.preventDefault());
  // }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
      <FloatingButtons />
    </div>
  );
}

export default App;
