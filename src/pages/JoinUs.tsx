import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const JoinUs = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1e1e2f] to-[#121212] text-white px-6 py-20 overflow-hidden">
      <motion.div
        className="absolute w-96 h-96 bg-pink-500 rounded-full opacity-30 filter blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        style={{ top: "10%", left: "10%" }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-blue-500 rounded-full opacity-30 filter blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        style={{ bottom: "10%", right: "10%" }}
      />

      <motion.div
        initial={{ opacity: 0, y: -40, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text uppercase tracking-wide">
          Become a Technocrat!
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto"
        >
          Unlock exclusive mentorship, hands-on projects, and networking opportunities by joining our community.
        </motion.p>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {[
          { title: "Step 1: Register", desc: "Sign up for the Coding Quest to enter the selection process." },
          { title: "Step 2: Compete", desc: "Participate in coding rounds and prove your skills." },
          { title: "Step 3: Join Us", desc: "Become a part of the community and start learning!" },
        ].map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.5, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="p-6 rounded-lg bg-white/10 backdrop-blur-xl border border-gray-700 hover:bg-white/20 transition-all shadow-lg hover:shadow-blue-500/50"
          >
            <h3 className="text-2xl font-semibold text-blue-400">{step.title}</h3>
            <p className="text-gray-300 mt-2">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex space-x-6">
        <motion.button
          onClick={() => navigate("/register")}
          className="px-8 py-4 bg-purple-600 hover:bg-purple-500 rounded-lg text-xl font-semibold shadow-xl transform hover:scale-110 transition-all duration-300 hover:shadow-blue-500/50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          aria-label="Join Us Now"
        >
          Register
        </motion.button>

        <motion.button
          onClick={() => navigate("/faqs")}
          className="px-8 py-4 bg-gray-500 hover:bg-blue-400 rounded-lg text-xl font-semibold shadow-xl transform hover:scale-110 transition-all duration-300 hover:shadow-gray-500/50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          aria-label="Learn More"
        >
          FAQ's
        </motion.button>
      </div>
    </section>
  );
};

export default JoinUs;
