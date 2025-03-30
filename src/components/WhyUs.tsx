import { motion } from "framer-motion";

const WhyUs = () => {
  return (
    <section className="py-32 bg-gradient-to-r from-[#020c1b] via-[#080b1f] to-[#020c1b] text-white relative overflow-hidden">
      {/* Glowing Animated Blobs */}
      <div className="absolute inset-0 z-0">
        {/* Blob 1 */}
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-pink-500 via-yellow-500 to-teal-500 opacity-60 blur-3xl"
          initial={{ x: '-50%', y: '-50%' }}
          animate={{
            x: ['-50%', '50%', '-70%'],
            y: ['-50%', '60%', '-40%'],
            opacity: [0.6, 0.4, 0.6],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            times: [0, 0.5, 1],
          }}
        />
        {/* Blob 2 */}
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-purple-500 via-blue-600 to-green-400 opacity-50 blur-3xl"
          initial={{ x: '50%', y: '50%' }}
          animate={{
            x: ['50%', '-50%', '70%'],
            y: ['50%', '-50%', '30%'],
            opacity: [0.5, 0.4, 0.5],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            times: [0, 0.5, 1],
          }}
        />
        {/* Blob 3 */}
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-yellow-300 via-pink-400 to-orange-600 opacity-50 blur-3xl"
          initial={{ x: '-30%', y: '-30%' }}
          animate={{
            x: ['-30%', '60%', '-50%'],
            y: ['-30%', '40%', '70%'],
            opacity: [0.5, 0.4, 0.5],
          }}
          transition={{
            duration: 7,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            times: [0, 0.5, 1],
          }}
        />
        {/* Blob 4 */}
        <motion.div
          className="absolute w-56 h-56 rounded-full bg-gradient-to-r from-teal-500 via-indigo-400 to-purple-600 opacity-40 blur-3xl"
          initial={{ x: '50%', y: '-50%' }}
          animate={{
            x: ['50%', '-50%', '40%'],
            y: ['-50%', '60%', '-30%'],
            opacity: [0.4, 0.3, 0.4],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            times: [0, 0.5, 1],
          }}
        />
        {/* Blob 5 */}
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-indigo-600 opacity-30 blur-3xl"
          initial={{ x: '70%', y: '20%' }}
          animate={{
            x: ['70%', '20%', '50%'],
            y: ['20%', '40%', '60%'],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 9,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            times: [0, 0.5, 1],
          }}
        />
        {/* Blob 6 */}
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-red-400 via-yellow-500 to-pink-600 opacity-40 blur-3xl"
          initial={{ x: '20%', y: '80%' }}
          animate={{
            x: ['20%', '-30%', '80%'],
            y: ['80%', '40%', '20%'],
            opacity: [0.4, 0.3, 0.4],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            times: [0, 0.5, 1],
          }}
        />
        {/* Blob 7 */}
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 opacity-60 blur-3xl"
          initial={{ x: '-50%', y: '70%' }}
          animate={{
            x: ['-50%', '40%', '-60%'],
            y: ['70%', '30%', '50%'],
            opacity: [0.6, 0.5, 0.6],
          }}
          transition={{
            duration: 7,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            times: [0, 0.5, 1],
          }}
        />
      </div>

      {/* Starry night sky background */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20 z-0" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}></div>

      {/* Creating Stars with CSS */}
      <div className="absolute inset-0 z-0 bg-fixed bg-no-repeat bg-cover" style={{ background: `url('https://cdn.pixabay.com/photo/2017/11/29/22/29/space-2983790_960_720.jpg')`, animation: "starsAnimation 100s linear infinite" }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.h2
          className="text-6xl font-extrabold text-center text-white mb-12 uppercase tracking-wide drop-shadow-2xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Become Part of Something <span className="text-yellow-400">Bigger</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-xl text-white text-center max-w-4xl mx-auto leading-relaxed mb-16 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          The <span className="font-bold text-yellow-400">Technocrats Developer Community</span> is more than just a club—it's a <strong>movement</strong>.  
          Created to bring <strong>passionate programmers together</strong>, our goal is to <strong>train the next generation of developers</strong>, equipping them with real-world experience, mentorship, and endless opportunities.
        </motion.p>

        {/* Core Benefits */}
        <div className="mt-20 grid md:grid-cols-3 gap-12 text-center">
          {[
            { emoji: "🚀", title: "Learn by Doing", text: "Gain hands-on experience through live projects, coding challenges, and hackathons." },
            { emoji: "🤝", title: "Mentorship from Experts", text: "Get guidance from experienced mentors and seniors who will help you grow and succeed." },
            { emoji: "🌎", title: "Network & Collaborate", text: "Join a growing community of developers, collaborate on projects, and build lifelong connections." }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#020c1b] text-white p-12 rounded-xl shadow-2xl transform transition-all hover:scale-110 hover:shadow-2xl ease-in-out"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
              <motion.h3
                className="text-5xl font-extrabold text-blue-600 dark:text-yellow-400 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {item.emoji}
              </motion.h3>
              <h4 className="text-2xl font-semibold mt-4 text-gray-800 dark:text-white">{item.title}</h4>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-3">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Community Stats with Bouncy Animations */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          {[
            { number: "50+", text: "Workshops & Hackathons" },
            { number: "500+", text: "Active Members" },
            { number: "1000+", text: "Projects & Contributions" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-[#020c1b] text-white p-10 rounded-xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-2xl ease-in-out"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
              <motion.h3
                className="text-4xl font-extrabold text-blue-600 dark:text-yellow-400"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">{stat.text}</p>
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