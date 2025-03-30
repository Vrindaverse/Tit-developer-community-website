import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showPopup, setShowPopup] = useState(false);
  const typingSpeed = 50;

  const handleChange = (field: "name" | "email" | "message", value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="footer-title">TIT Developer Community</h2>
          <p className="footer-description">
            Empowering students with cutting-edge technology, mentorship, and hands-on experiences.
          </p>
          <div className="footer-icons">
            <a href="#" className="footer-icon"><FaInstagram /></a>
            <a href="#" className="footer-icon"><FaLinkedin /></a>
            <a href="#" className="footer-icon"><FaEnvelope /></a>
          </div>
        </motion.div>

        {/* Modern Code Editor Style Contact Form */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="code-editor">
          <div className="editor-header">
            <div className="buttons">
              <span className="red"></span>
              <span className="yellow"></span>
              <span className="green"></span>
            </div>
            <span className="editor-title">Contact.jsx</span>
          </div>
          <form onSubmit={handleSubmit} className="editor-body">
            <label className="editor-label">const name = "</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="editor-input"
              placeholder="Your Name"
              required
            />
            <label className="editor-label">const email = "</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="editor-input"
              placeholder="Your Email"
              required
            />
            <label className="editor-label">const message = "</label>
            <textarea
              name="message"
              rows={2}
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="editor-input"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </motion.div>
      </div>

      {/* Wave Animation */}
      <div className="wave-container">
        <div className="wave"></div>
      </div>

      {/* Popup */}
      {showPopup && <div className="popup">Thank you! Your message has been sent.</div>}

      <style>{`
        .footer-container {
          position: relative;
          background: #0a192f;
          color: white;
          padding: 50px 20px 30px;
          overflow: hidden;
        }
        .footer-content {
          max-width: 1100px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .footer-title {
          font-size: 1.8rem;
          color: #4c9aff;
        }
        .footer-description {
          color: #b0c4de;
          margin-top: 10px;
        }
        .footer-icons {
          display: flex;
          gap: 10px;
          font-size: 1.5rem;
          margin-top: 10px;
        }
        .footer-icon:hover {
          color: #4c9aff;
        }
        .code-editor {
          background: #1e293b;
          padding: 15px;
          border-radius: 8px;
          width: 350px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        }
        .editor-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .buttons span {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          display: inline-block;
        }
        .red { background: #ff5f56; }
        .yellow { background: #ffbd2e; }
        .green { background: #27c93f; }
        .editor-title {
          color: #b0c4de;
        }
        .editor-body {
          margin-top: 10px;
        }
        .editor-label {
          color: #87ceeb;
          display: block;
        }
        .editor-input {
          width: 100%;
          background: transparent;
          border: none;
          color: white;
          font-size: 1rem;
          outline: none;
        }
        .submit-button {
          background: #4c9aff;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          margin-top: 10px;
          transition: transform 0.2s, background 0.3s;
        }
        .submit-button:hover {
          transform: scale(1.05);
          background: #3b82f6;
        }
        .wave-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
        }
        .wave {
          width: 100%;
          height: 50px;
          background: linear-gradient(to right, #0a192f, #1e293b);
        }
        .popup {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: #4c9aff;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
