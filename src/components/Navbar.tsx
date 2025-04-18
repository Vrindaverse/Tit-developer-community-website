import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import symbol from "../assets/symbol.png";
import {
  Home,
  Users,
  Calendar,
  Trophy,
  MessageSquare,
  FileText,
  HelpCircle,
} from "lucide-react";
import MobileOverlay from "./MobileOverlay";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: <Home size={24} className="text-white" />,
    },
    {
      name: "Mentors",
      path: "/mentors",
      icon: <Users size={24} className="text-white" />,
    },
    {
      name: "Events",
      path: "/events",
      icon: <Calendar size={24} className="text-white" />,
    },
    {
      name: "Hall of Fame",
      path: "/hall-of-fame",
      icon: <Trophy size={24} className="text-white" />,
    },
    {
      name: "Testimonials",
      path: "/testimonials",
      icon: <MessageSquare size={24} className="text-white" />,
    },
    {
      name: "FAQs",
      path: "/faqs",
      icon: <HelpCircle size={24} className="text-white" />,
    },
    {
      name: "Docs",
      path: "/docs",
      icon: <FileText size={24} className="text-white" />,
    },
  ];

  return (
    <nav className="fixed top-0 w-full px-6 py-4 bg-black/30 backdrop-blur-md border-b border-gray-700 z-40 shadow-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and TDC Text */}
        <Link to="/" className="flex items-center space-x-3 z-30">
          <img
            src={symbol}
            alt="TDC Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-white text-3xl font-orbitron font-extrabold tracking-widest">
            TDC
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative text-gray-300 group transition-all hover:text-blue-400"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-3 rounded-lg bg-gray-800 hover:scale-110 transition-transform shadow-lg relative z-50"
        >
          <motion.div
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-[3px] bg-white mb-1"
          />
          <motion.div
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-[3px] bg-white mb-1"
          />
          <motion.div
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-[3px] bg-white"
          />
        </motion.button>
      </div>

      {/* Mobile Sidebar using Portal */}
      <AnimatePresence>
        {isOpen && (
          <MobileOverlay onClick={() => setIsOpen(false)}>
            {/* Sidebar container: prevents click propagation */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 bottom-0 w-full flex flex-col items-center justify-center space-y-6 shadow-2xl rounded-l-3xl"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="w-full flex items-center space-x-4 px-6 py-3 rounded-lg transition-all hover:scale-105 hover:bg-gray-800 shadow-lg"
                >
                  {item.icon}
                  <Link
                    to={item.path}
                    className="text-2xl font-semibold text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute bottom-10 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg"
              >
                TIT <span className="text-white">DEVELOPER</span> COMMUNITY
              </motion.div>
            </motion.div>
          </MobileOverlay>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
