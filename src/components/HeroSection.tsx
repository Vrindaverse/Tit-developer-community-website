import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";
import Constellation from "./Constellation";
import { StarBackground } from "../pages/Home";

export default function HeroSection() {
  const initialSnippet =
    "beep beep..beeeeeppp......Initializing TIT Developer Community AI...";

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showMainSnippet, setShowMainSnippet] = useState(false);

  const mainSnippet = `
  {
  "founders": ["Annand Soni", "Ankit Kumar", "Ankit Patel"],
  "website_developers": [
    {"name": "Nikhil Mahalik", "enrollment_no": "0192CS241118"},
    {"name": "Satyam Sharma", "enrollment_no": "0191CS241308"},
    {"name": "Abhay Singh", "enrollment_no": "0191CY241001"}
  ],
  "mission": "Our goal is to empower engineers through immersive experiences, celestial coding challenges, and futuristic frameworks.",
  "vision": "Bridging the gap between academia and industry with innovation, mentorship, and real-world projects.",
  "call_to_action": {
    "unlock_potential": "Unlock your potential and join the revolution!",
    "learn_more": "To learn more, visit our 'Learn More' section.",
    "join_us": "Ready to join? Click 'Join Us Now'!"
  }
}

  `;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowMainSnippet(true);
    }, 3000); // Delay before clearing and showing main snippet
  }, []);

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .hero-section-mobile {
            flex-direction: column !important;
            padding-top: 6rem; /* Adjust padding to avoid navbar overlap */
          }

          .terminal-mobile {
            order: 2;
            margin-top: 2rem;
          }

          .button-container-mobile {
            order: 1;
          }

          /* Decrease text sizes for mobile view */
          .text-5xl {
            font-size: 2rem !important;
          }

          .md:text-7xl {
            font-size: 2rem !important;
          }

          .text-3xl {
            font-size: 1.5rem !important;
          }

          .md:text-5xl {
            font-size: 1.5rem !important;
          }

          .text-xl {
            font-size: 1rem !important;
          }

          .md:text-2xl {
            font-size: 1rem !important;
          }

          /* Additional spacing for mobile view */
          .hero-section-mobile > div:first-child {
            padding-bottom: 2rem; /* Add padding below the main content */
          }
        }

        @media (min-width: 769px) {
          .hero-section-mobile {
            padding-left: 10rem; /* Add left padding for desktop */
            padding-right: 10rem; /* Add right padding for desktop */
          }
        }
      `}</style>
      <section className="relative flex flex-row items-center justify-between min-h-[100vh] py-12 bg-[#020c1b] text-white px-6 md:px-10 overflow-hidden hero-section-mobile">
        {/* Constellation Background */}
        {isMobile ? <StarBackground /> : <Constellation />}

        {/* Left Side - Hero Section */}
        <div className="flex flex-col items-start text-left z-10 relative w-full h-full my-auto">
          {/* Community Name with Animated Icons */}
          <motion.h1
            className="text-4xl md:text-7xl font-extrabold tracking-wide uppercase flex items-center space-x-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {!isMobile && (
              <>
                <span className="text-blue-400 text-4xl md:text-6xl font-bold">
                  &lt;
                </span>
                <span className="text-white text-4xl md:text-6xl font-bold">
                  /
                </span>
                <span className="text-orange-400 text-4xl md:text-6xl font-bold">
                  &gt;
                </span>
              </>
            )}
            <span>
              <span className="text-blue-400">TIT</span>{" "}
              <span className="text-white">Developer</span>{" "}
              <span className="text-orange-400">Community</span>
            </span>
          </motion.h1>

          {/* Animated Slogan */}
          <motion.h2
            className="mt-4 text-xl md:text-3xl font-black text-purple-400 tracking-wide"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Typewriter
              words={["Empowering Juniors", "Led by Seniors"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.h2>

          {/* Description */}
          <motion.p
            className="mt-6 text-xl md:text-2xl max-w-lg text-gray-300 leading-relaxed italic font-semibold"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Join a community that{" "}
            <span className="text-white font-bold">codes the future</span>.
          </motion.p>

          {/* Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-lg lg:max-w-xl mt-1 button-container-mobile`}
          >
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeNTyWHWydlYcOmDJrE6w1Fk1ZH4deYDoYDovvR0QDUOYopaA/viewform"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-xl text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Join Us Now
            </motion.a>

            <motion.a
              href="learn-more"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-400 text-white rounded-xl text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Learn More
            </motion.a>
          </div>
        </div>

        {/* Right Side - Terminal Code Editor */}
        {!isMobile && (
          <motion.div
            className="relative w-full bg-gray-900 rounded-lg shadow-lg border border-gray-700 overflow-hidden text-left terminal-mobile"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Fake Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded-t-md">
              <div className="flex space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
              <span className="text-gray-400 text-xs">TITDevAI.js</span>
            </div>

            {/* Code Display */}
            <div className="p-4 font-mono text-sm leading-relaxed text-green-400 whitespace-pre-wrap">
              {!showMainSnippet ? (
                <Typewriter
                  words={[initialSnippet]}
                  loop={false}
                  cursor
                  cursorStyle="█"
                  typeSpeed={40}
                  deleteSpeed={15}
                  delaySpeed={600}
                />
              ) : (
                <Typewriter
                  words={[mainSnippet]}
                  loop={false}
                  cursor
                  cursorStyle="█"
                  typeSpeed={60}
                  deleteSpeed={20}
                  delaySpeed={600}
                />
              )}
            </div>
          </motion.div>
        )}
      </section>
    </>
  );
}
