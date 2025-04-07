import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaEnvelope, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showPopup, setShowPopup] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (field: "name" | "email" | "message", value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
    setIsModalOpen(false);
  };

  return (
    <footer className="footer">
      {/* Main Content */}
      <div className="footer-content">
        <div className="footer-info">
          <motion.h2 
            className="footer-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            TIT Developer Community
          </motion.h2>
          <motion.p 
            className="footer-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Empowering students with cutting-edge technology, mentorship, and hands-on experiences.
          </motion.p>
          <div className="footer-actions">
            <motion.div 
              className="footer-socials"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="#" className="social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className="social-icon" aria-label="Email">
                <FaEnvelope />
              </a>
            </motion.div>
            <motion.button 
              className="contact-button"
              onClick={() => setIsModalOpen(true)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button 
                className="close-button"
                onClick={() => setIsModalOpen(false)}
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes />
              </motion.button>
              <form onSubmit={handleSubmit} className="contact-form">
                <motion.h3 
                  className="form-title"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Get in Touch
                </motion.h3>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Your Name"
                  required
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                />
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="Your Email"
                  required
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                />
                <motion.textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Your Message"
                  required
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                ></motion.textarea>
                <motion.button 
                  type="submit" 
                  className="submit-button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="popup"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              ✓
            </motion.div>
            Thank you! Your message has been sent.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Styling */}
      <style >{`
        .footer {
          background: #0a192f;
          color: white;
          padding: 60px 20px;
          position: relative;
          overflow: hidden;
        }
        .footer:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 20% 50%, rgba(76, 154, 255, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .footer-info {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        .footer-title {
          font-size: 2.5rem;
          color: #4c9aff;
          margin-bottom: 15px;
          background: linear-gradient(90deg, #4c9aff, #b0c4de);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        .footer-description {
          color: #b0c4de;
          line-height: 1.6;
          margin-bottom: 40px;
          font-size: 1.1rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        .footer-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 25px;
        }
        .footer-socials {
          display: flex;
          gap: 20px;
        }
        .social-icon {
          font-size: 1.8rem;
          color: #b0c4de;
          transition: all 0.3s ease;
          position: relative;
        }
        .social-icon:hover {
          color: #4c9aff;
          transform: translateY(-3px);
        }
        .social-icon:after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #4c9aff;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .social-icon:hover:after {
          transform: scaleX(1);
        }
        .contact-button {
          background: linear-gradient(135deg, #4c9aff, #3b82f6);
          color: white;
          border: none;
          padding: 12px 35px;
          border-radius: 30px;
          cursor: pointer;
          font-size: 1.1rem;
          font-weight: 500;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(76, 154, 255, 0.3);
          position: relative;
          overflow: hidden;
        }
        .contact-button:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #3b82f6, #4c9aff);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .contact-button:hover:after {
          opacity: 1;
        }

        /* Modal Styles */
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }
        .modal-content {
          background: linear-gradient(145deg, #0a192f, #0f1b32);
          padding: 40px;
          border-radius: 15px;
          width: 90%;
          max-width: 500px;
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(76, 154, 255, 0.2);
        }
        .close-button {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(76, 154, 255, 0.1);
          border: none;
          color: #b0c4de;
          font-size: 1.2rem;
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .close-button:hover {
          background: rgba(76, 154, 255, 0.2);
          color: #4c9aff;
        }

        /* Contact Form Styles */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-title {
          font-size: 1.8rem;
          color: #4c9aff;
          margin-bottom: 10px;
          text-align: center;
        }
        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid rgba(76, 154, 255, 0.3);
          border-radius: 8px;
          background: rgba(11, 25, 51, 0.5);
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: #4c9aff;
          box-shadow: 0 0 0 2px rgba(76, 154, 255, 0.2);
        }
        .contact-form textarea {
          resize: vertical;
          min-height: 120px;
        }
        .submit-button {
          background: linear-gradient(135deg, #4c9aff, #3b82f6);
          color: white;
          border: none;
          padding: 14px 25px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.3s ease;
          margin-top: 10px;
          box-shadow: 0 4px 15px rgba(76, 154, 255, 0.3);
        }
        .submit-button:hover {
          background: linear-gradient(135deg, #3b82f6, #4c9aff);
          transform: translateY(-2px);
        }

        /* Popup Notification */
        .popup {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #4c9aff, #3b82f6);
          color: white;
          padding: 15px 25px;
          border-radius: 50px;
          box-shadow: 0 10px 25px rgba(76, 154, 255, 0.3);
          z-index: 1001;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1rem;
          font-weight: 500;
        }
        .popup div {
          font-size: 1.2rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .footer-title {
            font-size: 2rem;
          }
          .footer-description {
            font-size: 1rem;
          }
          .modal-content {
            padding: 30px 20px;
            width: 95%;
          }
          .popup {
            padding: 12px 20px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;