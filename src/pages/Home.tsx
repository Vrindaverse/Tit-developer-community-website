import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Loader from "../components/Loader";
import HeroSection from "../components/HeroSection";
import Gallery from "../components/Gallery";
import WhyUs from "../components/WhyUs";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <Loader onComplete={() => setIsLoading(false)} />
  ) : (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative min-h-screen overflow-hidden text-white bg-[#020c1b]" // No space-y here
    >
      <HeroSection />
      <StarBackground />
      <Gallery />
      <StarBackground />
      <WhyUs />
    </motion.div>
  );
};

// 🌌 Dark Blue Space Background with Twinkling Stars
const StarBackground = () => (
  <div className="relative w-full h-[50px] overflow-hidden">
    {/* Twinkling Stars */}
    {Array.from({ length: 50 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-white rounded-full"
        style={{
          width: `${Math.random() * 1.5}px`,
          height: `${Math.random() * 1.5}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.4 + 0.1,
        }}
        animate={{
          opacity: [0, 1, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: Math.random() * 2 + 1,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
);

export default Home;
