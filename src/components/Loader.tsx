import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const words = ["TIT", "Developer", "Community"];
const typingSpeed = 70; // Faster typing effect

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [loadingTime, setLoadingTime] = useState(2000); // Default fast loading
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (charIndex < words[wordIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + words[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (wordIndex < words.length - 1) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + " ");
        setWordIndex((prev) => prev + 1);
        setCharIndex(0);
      }, 200);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setIsTyping(false), 500);
    }
  }, [charIndex, wordIndex]);

  useEffect(() => {
    const startTime = new Date().getTime();

    fetch("https://www.google.com/favicon.ico", { cache: "no-store" })
      .then(() => {
        const endTime = new Date().getTime();
        const speed = endTime - startTime;

        // If speed is high, keep the loader for 1-2s, otherwise extend to 3-4s
        if (speed > 1500) {
          setLoadingTime(4000); // Slow network: Show loader for 4s
          setShowLoader(true); // Show the loader
        } else {
          setLoadingTime(2000); // Fast network: Show loader for 2s
          setShowLoader(false); // Hide the loader
        }
      })
      .catch(() => {
        setLoadingTime(4000);
        setShowLoader(true); // Show loader if there's a connection issue
      });

    const timer = setTimeout(() => onComplete(), loadingTime);
    return () => clearTimeout(timer);
  }, [onComplete, loadingTime]);

  return (
    <>
      {showLoader && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white overflow-hidden">
          {/* Typing Effect with Glitch */}
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-wide relative text-blue-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {displayedText}
            {isTyping && <span className="text-white animate-pulse">|</span>}
          </motion.h1>

          {/* Cloning / Glitch Effect */}
          <motion.div
            className="absolute text-5xl md:text-7xl font-extrabold tracking-wide text-orange-400 opacity-50"
            initial={{ x: -5, y: -5, opacity: 0 }}
            animate={{ x: [0, 5, -5, 0], y: [0, 5, -5, 0], opacity: [0, 1, 0.5, 1] }}
            transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
          >
            {displayedText}
          </motion.div>

          {/* Flickering "Loading..." */}
          <motion.p
            className="mt-6 text-lg md:text-2xl text-gray-300 font-mono"
            animate={{
              opacity: [0.2, 1, 0.2],
              x: [-1, 1, -1],
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          >
            Loading<span className="text-red-400">.</span>
            <span className="text-green-400">.</span>
            <span className="text-blue-400">.</span>
          </motion.p>

          {/* Neon Glow Effect */}
          <style >{`
            h1 {
              text-shadow: 0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(0, 0, 255, 0.6);
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default Loader;
