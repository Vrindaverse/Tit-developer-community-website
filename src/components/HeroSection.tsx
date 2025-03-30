import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";
import Constellation from "./Constellation";

export default function HeroSection() {
  const initialSnippet = "beep beep..beeeeeppp......Initializing TIT Developer Community AI...";
  const mainSnippet = `
  {
  "founders of the community": ["Annand Soni", "Ankit Kumar", "Ankit Patel"],
  "website_developers": [
    {
      "name": "Nikhil Mahalik",
      "enrollment_no": "0191CS241118"
    },
    {
      "name": "Satyam Sharma",
      "enrollment_no": "0192CS241308"
    },
    {
      "name": "Abhay Singh",
      "enrollment_no": "0191CY10001"
    }
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

  const [showMainSnippet, setShowMainSnippet] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMainSnippet(true);
    }, 3000); // Delay before clearing and showing main snippet
  }, []);

  return (
    <section className="relative flex flex-row items-center justify-between min-h-[100vh] py-12 bg-[#020c1b] text-white px-6 md:px-10 overflow-hidden">
      {/* Constellation Background */}
      <Constellation />

      {/* Left Side - Hero Section */}
      <div className="flex flex-col items-start text-left z-10 relative w-1/2">
        {/* Community Name with Animated Icons */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-wide uppercase mb-8 flex items-center space-x-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="text-blue-400 text-6xl md:text-8xl font-bold">&lt;</span>
          <span className="text-white text-6xl md:text-8xl font-bold">/</span>
          <span className="text-orange-400 text-6xl md:text-8xl font-bold">&gt;</span>
          <span>
            <span className="text-blue-400">TIT</span> <span className="text-white">Developer</span>{" "}
            <span className="text-orange-400">Community</span>
          </span>
        </motion.h1>

        {/* Animated Slogan */}
        <motion.h2
          className="mt-4 text-3xl md:text-5xl font-black text-purple-400 tracking-wide"
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
          Join a community that <span className="text-white font-bold">codes the future</span>.
        </motion.p>

        {/* Buttons */}
        <div className="mt-10 flex space-x-6">
          <motion.a
            href="join-us"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-lg text-xl font-semibold shadow-xl transform hover:scale-110 transition-all duration-300 hover:shadow-blue-500/50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            aria-label="Join Us Now"
          >
            Join Us Now
          </motion.a>
          <motion.a
            href="learn-more"
            className="px-8 py-4 bg-gray-500 hover:bg-gray-400 rounded-lg text-xl font-semibold shadow-xl transform hover:scale-110 transition-all duration-300 hover:shadow-gray-500/50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            aria-label="Learn More"
          >
            Learn More
          </motion.a>
        </div>
      </div>

      {/* Right Side - Terminal Code Editor */}
      <motion.div
        className="relative w-1/2 p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-700 overflow-hidden text-left"
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
    </section>
  );
}
