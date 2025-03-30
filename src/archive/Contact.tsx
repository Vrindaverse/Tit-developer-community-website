import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-gray-900 to-black text-white px-6 py-24 relative overflow-hidden">
      {/* Background Glowing Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-500/20 blur-3xl opacity-40"></div>

      {/* Left: Contact Details */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-1/2 w-full p-10 space-y-8 text-center md:text-left"
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text uppercase tracking-wide">
          Let's Connect
        </h1>
        <p className="text-gray-300 text-lg">
          Have questions? Feel free to reach out. We’re here to help!
        </p>

        <div className="space-y-6">
          {[
            { icon: FaEnvelope, title: "Email", info: "developercommunity@tit.com" },
            { icon: FaPhone, title: "Phone", info: "+91 9876543210" },
            { icon: FaMapMarkerAlt, title: "Location", info: "Technocrats Institute of Technology, Bhopal" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex items-center space-x-4 p-4 rounded-lg bg-white/10 backdrop-blur-lg border border-gray-700 hover:bg-white/20 transition-all"
            >
              <item.icon className="text-blue-400 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-300">{item.info}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex space-x-6 justify-center md:justify-start mt-6"
        >
          <a href="#" className="text-blue-400 text-3xl hover:text-blue-500 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:developercommunity@tit.com" className="text-blue-400 text-3xl hover:text-blue-500 transition">
            <FaEnvelope />
          </a>
        </motion.div>
      </motion.div>

      {/* Right: Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-1/2 w-full p-10 rounded-xl shadow-lg bg-white/10 backdrop-blur-lg border border-gray-700"
      >
        <h2 className="text-3xl font-semibold text-center text-blue-400 mb-6">
          Send a Message
        </h2>
        <form className="flex flex-col space-y-6">
          {["Your Name", "Your Email"].map((placeholder, index) => (
            <motion.input
              key={index}
              type={index === 1 ? "email" : "text"}
              placeholder={placeholder}
              whileFocus={{ scale: 1.02, boxShadow: "0px 0px 10px rgba(0, 200, 255, 0.6)" }}
              className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            />
          ))}
          <motion.textarea
            placeholder="Your Message"
            rows={5}
            whileFocus={{ scale: 1.02, boxShadow: "0px 0px 10px rgba(255, 100, 255, 0.6)" }}
            className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          ></motion.textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-4 rounded-lg text-white font-medium transition-all shadow-md uppercase tracking-wide"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
