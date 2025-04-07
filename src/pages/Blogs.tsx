import React from 'react';
import { motion } from 'framer-motion';
import hljs from 'highlight.js';
import 'highlight.js/styles/base16/dracula.css'; // Use a dark theme for syntax highlighting

// Initialize highlight.js
hljs.highlightAll();

const Blogs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center relative">
      <motion.div
        className="container mx-auto px-4 text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <section id="coming-soon" className="mb-12">
          <motion.pre
            className="text-2xl font-mono bg-gray-800 p-6 rounded-lg shadow-md mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <code className="language-javascript">
              {`/**
 * Welcome to the Developer Community Blog
 * 
 * This section is currently under development and will be available soon!
 */`}
            </code>
          </motion.pre>

          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <h2 className="text-3xl font-bold mb-4">What We're Working On</h2>
            <ul className="list-disc pl-6 text-gray-300 text-lg mb-8">
              <li>✅ **Discussion Center** – A place where members can share their ideas, projects, and seek help from peers and mentors.</li>
              <li>✅ **Ask for Help** – Post questions and get assistance from the community.</li>
              <li>✅ **Share Projects** – Showcase your projects and get feedback.</li>
              <li>✅ **Engage in Discussions** – Participate in meaningful tech conversations.</li>
              <li>✅ **Collaborate** – Connect with like-minded developers.</li>
            </ul>
            <h2 className="text-3xl font-bold mb-4">Current Status</h2>
            <p className="text-gray-300 text-lg mb-8">
              We are working on a discussion center where members can post their work, ask for help, and engage in meaningful discussions. Stay tuned for more updates!
            </p>
            <h2 className="text-3xl font-bold mb-4">Code Snippet Example</h2>
            <pre className="bg-gray-700 p-4 rounded-lg shadow-md mb-8">
              <code className="language-javascript">
                {`const welcomeMessage = "Welcome to the Developer Community Blog!";
console.log(welcomeMessage);`}
              </code>
            </pre>
            <p className="text-gray-300 text-lg">
              #TITDeveloperCommunity #ComingSoon #CodeCollaborateCreate
            </p>
          </motion.div>
        </section>
      </motion.div>
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black"
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "loop", ease: "linear" }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Blogs;