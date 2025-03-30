import { motion } from "framer-motion";

const LearnMore = () => {
  return (
    <section className="relative py-32 bg-[#020c1b] text-white overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              width: `${Math.random() * 4}px`,
              height: `${Math.random() * 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 text-left">
        <motion.h1
          className="text-5xl font-bold text-blue-400 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          TIT Developer Community
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl font-light max-w-4xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          The TIT Developer Community is an ever-evolving, innovation-driven group of passionate developers. Our mission is to bridge the gap between students and real-world tech applications through mentorship, collaboration, and innovation. We provide a platform for students to learn, create, and grow into industry-ready professionals through active participation in technical events, hackathons, and workshops.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="p-6 bg-white/10 rounded-xl shadow-lg border border-gray-700"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-semibold text-blue-400 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-300">
              We believe learning is best achieved through hands-on experience. Our approach focuses on real-world projects, collaboration, and problem-solving to prepare students for industry challenges. By fostering an environment of continuous learning and knowledge sharing, we ensure that our members stay ahead in the ever-changing tech landscape.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-white/10 rounded-xl shadow-lg border border-gray-700"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-semibold text-purple-400 mb-4">Our Achievements</h2>
            <p className="text-lg text-gray-300">
              Our members have excelled in hackathons, open-source projects, and have secured placements in top companies, proving the effectiveness of our community-driven learning model. With a strong foundation in various technological domains such as AI, web development, and cybersecurity, we continue to push the boundaries of innovation.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <motion.div
            className="p-6 bg-white/10 rounded-xl shadow-lg border border-gray-700"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-semibold text-green-400 mb-4">Community Engagement</h2>
            <p className="text-lg text-gray-300">
              We actively organize workshops, speaker sessions, and networking events to connect students with industry professionals. Through collaboration with renowned mentors and alumni, we create opportunities for students to gain real-world exposure.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-white/10 rounded-xl shadow-lg border border-gray-700"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Future Roadmap</h2>
            <p className="text-lg text-gray-300">
              Our goal is to expand our reach by launching more interactive programs, increasing industry collaborations, and fostering a strong alumni network. We envision a future where every member is equipped with the necessary skills and resources to thrive in the tech industry.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
