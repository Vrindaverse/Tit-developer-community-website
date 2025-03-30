import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import LearnMore from "./pages/LearnMore";
import Mentors from "./pages/Mentors";
import Events from "./pages/Events";
import HallOfFame from "./pages/HallOfFame";
import Testimonials from "./pages/Testimonials";
import JoinUs from "./pages/JoinUs";
import Gallery from "./components/Gallery";
import FAQs from "./pages/FAQs";
import Register from "./pages/Register";
import DocsHome from "./pages/docs/Docs";
import WebDev from "./pages/docs/WebDevlopment"
import Android from "./pages/docs/Android"
import AiMl from "./pages/docs/AiMl"
import Dsa from "./pages/docs/Dsa"
import Git from "./pages/docs/Git"

const AppContent = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 2-3 seconds
    }, 2500); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, [location]); // Runs when the route changes

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
      {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/learn-more" element={<LearnMore />} />
              <Route path="/mentors" element={<Mentors />} />
              <Route path="/events" element={<Events />} />
              <Route path="/hall-of-fame" element={<HallOfFame />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/join-us" element={<JoinUs />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/register" element={<Register />} />
              <Route path="/docs" element={<DocsHome />} />
              <Route path="/docs/web-dev" element={<WebDev />} />
              <Route path="/docs/android" element={<Android />} />
              <Route path="/docs/ai-ml" element={<AiMl />} />
              <Route path="/docs/dsa" element={<Dsa />} />
              <Route path="/docs/git" element={<Git />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
