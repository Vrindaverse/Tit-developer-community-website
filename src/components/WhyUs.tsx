import { motion } from "framer-motion";

const WhyUs = () => {
  return (
    <section className="py-32 bg-gradient-to-r from-[#020c1b] via-[#080b1f] to-[#020c1b] text-white relative overflow-hidden">
      {/* Floating Stars & Planets */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-70"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${
                Math.random() * 3 + 2
              }s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.h2
          className="text-6xl font-extrabold text-center text-white mb-12 uppercase tracking-wide drop-shadow-2xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Become Part of Something{" "}
          <span className="text-yellow-400">Bigger</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-xl text-white text-center max-w-4xl mx-auto leading-relaxed mb-16 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          The{" "}
          <span className="font-bold text-yellow-400">
            Technocrats Developer Community
          </span>{" "}
          is more than just a club—it's a <strong>movement</strong>. Created to
          bring <strong>passionate programmers together</strong>, our goal is to{" "}
          <strong>train the next generation of developers</strong>, equipping
          them with real-world experience, mentorship, and endless
          opportunities.
        </motion.p>

        {/* Core Benefits */}
        <div className="mt-20 grid md:grid-cols-3 gap-12 text-center">
          {[
            {
              emoji: "🚀",
              title: "Learn by Doing",
              text: "Gain hands-on experience through live projects, coding challenges, and hackathons.",
            },
            {
              emoji: "🤝",
              title: "Mentorship from Experts",
              text: "Get guidance from experienced mentors and seniors who will help you grow and succeed.",
            },
            {
              emoji: "🌎",
              title: "Network & Collaborate",
              text: "Join a growing community of developers, collaborate on projects, and build lifelong connections.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#020c1b] text-white p-12 rounded-xl shadow-2xl transform transition-all hover:border-blue-400 hover:border ease-in-out"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <motion.h3
                className="text-5xl font-extrabold text-blue-600 dark:text-yellow-400 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {item.emoji}
              </motion.h3>
              <h4 className="text-2xl font-semibold mt-4 text-gray-800 dark:text-white">
                {item.title}
              </h4>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-3">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Community Stats with Bouncy Animations */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          {[
            { number: "50+", text: "Workshops & Hackathons" },
            { number: "500+", text: "Active Members" },
            { number: "1000+", text: "Projects & Contributions" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-[#020c1b] text-white p-10 rounded-xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-2xl ease-in-out"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <motion.h3
                className="text-4xl font-extrabold text-blue-600 dark:text-yellow-400"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                {stat.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Custom Scrollbar Styles
const styles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #1E1E2E;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #A6ADC8;
    border-radius: 4px;
    border: 2px solid #1E1E2E;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #828BBB;
  }
`;

// Inject custom styles
const styleTag = document.createElement("style");
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);

export default WhyUs;
