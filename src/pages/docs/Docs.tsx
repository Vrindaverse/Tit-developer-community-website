import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DocsHome = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = `Welcome to TIT Dev Docs - Your Comprehensive Technology Resource Hub

Explore curated learning paths, expert resources, and industry insights to accelerate your development career.`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const learningPaths = [
    {
      title: "Data Structures & Algorithms",
      path: "/docs/dsa",
      icon: "🧠",
      description:
        "Master the foundation of efficient problem-solving with comprehensive DSA resources.",
      highlights: [
        "Algorithmic thinking patterns",
        "Complexity analysis",
        "Competitive programming techniques",
        "Real-world system design applications"
      ],
      careerPaths: [
        "Software Engineer",
        "Algorithm Specialist",
        "Quantitative Developer",
        "Systems Architect"
      ]
    },
    {
      title: "Web Development",
      path: "/docs/web-dev",
      icon: "🌐",
      description:
        "Full-stack development from fundamentals to advanced modern architectures.",
      highlights: [
        "React/Next.js frameworks",
        "Node.js & serverless backends",
        "Web performance optimization",
        "Progressive Web Apps & Web3"
      ],
      careerPaths: [
        "Frontend Developer",
        "Full Stack Engineer",
        "UX Engineer",
        "Web3 Developer"
      ]
    },
    {
      title: "Machine Learning & AI",
      path: "/docs/ai-ml",
      icon: "🤖",
      description:
        "From fundamentals to cutting-edge AI implementations and ethical considerations.",
      highlights: [
        "Deep learning architectures",
        "NLP & computer vision",
        "MLOps & production deployment",
        "AI ethics & governance"
      ],
      careerPaths: [
        "ML Engineer",
        "Data Scientist",
        "AI Researcher",
        "Computer Vision Specialist"
      ]
    },
    {
      title: "Mobile Development",
      path: "/docs/mobile",
      icon: "📱",
      description:
        "Cross-platform and native mobile development with modern toolchains.",
      highlights: [
        "Android with Kotlin/Jetpack",
        "iOS with SwiftUI",
        "React Native cross-platform",
        "Mobile CI/CD pipelines"
      ],
      careerPaths: [
        "Android Developer",
        "iOS Developer",
        "Mobile Architect",
        "UX Engineer"
      ]
    },
    {
      title: "DevOps & Cloud",
      path: "/docs/devops",
      icon: "☁️",
      description:
        "Infrastructure as code, cloud architectures, and deployment automation.",
      highlights: [
        "Docker & Kubernetes",
        "AWS/GCP/Azure services",
        "CI/CD pipelines",
        "Infrastructure automation"
      ],
      careerPaths: [
        "DevOps Engineer",
        "Cloud Architect",
        "Site Reliability Engineer",
        "Platform Engineer"
      ]
    },
    {
      title: "Cybersecurity",
      path: "/docs/security",
      icon: "🔒",
      description:
        "Offensive and defensive security practices for modern applications.",
      highlights: [
        "Ethical hacking techniques",
        "Secure coding practices",
        "Cryptography fundamentals",
        "Threat modeling"
      ],
      careerPaths: [
        "Security Engineer",
        "Penetration Tester",
        "Security Architect",
        "Security Analyst"
      ]
    }
  ];

  const roadmapStages = [
    {
      stage: "Foundation",
      duration: "3-6 months",
      focus: "Core programming concepts",
      topics: [
        "Programming fundamentals (variables, control structures)",
        "Basic data structures (arrays, strings, linked lists)",
        "Version control with Git",
        "Simple algorithms (searching, sorting)",
        "Basic command line usage"
      ]
    },
    {
      stage: "Intermediate",
      duration: "6-12 months",
      focus: "Specialization & depth",
      topics: [
        "Advanced data structures (trees, graphs)",
        "System design fundamentals",
        "Database design & optimization",
        "API development",
        "Testing methodologies"
      ]
    },
    {
      stage: "Advanced",
      duration: "12-18 months",
      focus: "Production-grade development",
      topics: [
        "Distributed systems",
        "Cloud architecture patterns",
        "Performance optimization",
        "Security best practices",
        "CI/CD pipelines"
      ]
    },
    {
      stage: "Expert",
      duration: "18-24+ months",
      focus: "Architecture & leadership",
      topics: [
        "Large-scale system design",
        "Technical leadership",
        "Emerging tech evaluation",
        "Mentorship & knowledge sharing",
        "Open source contributions"
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-gray-200 py-16 px-4 sm:px-6 flex flex-col items-center">
      {/* Custom styles */}
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #1E1E2E;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #4B5563;
            border-radius: 4px;
            border: 2px solid #1E1E2E;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background-color: #6366F1;
          }
          .terminal-header {
            background: linear-gradient(90deg, #111827 0%, #1F2937 100%);
          }
          .path-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(16, 185, 129, 0.2);
          }
        `}
      </style>

      <div className="w-full max-w-7xl mb-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-2 mb-6 rounded-full bg-gray-800 border border-gray-700 text-emerald-400 text-sm font-mono"
        >
          v2.1.0 - Updated: {new Date().toLocaleDateString()}
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          TIT Developer Documentation
        </motion.h1>
        
        <motion.div 
          className="max-w-3xl mx-auto text-lg text-gray-300 font-mono h-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {displayText}
          <span className="ml-1 animate-pulse">▌</span>
        </motion.div>
      </div>

      {/* Learning Paths Grid */}
      <div className="w-full max-w-7xl mb-20">
        <h2 className="text-2xl font-bold mb-8 text-emerald-400 flex items-center">
          <span className="mr-2">📚</span> Learning Paths
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningPaths.map((path, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="path-card bg-gray-800 rounded-xl border border-gray-700 overflow-hidden transition-all duration-300"
            >
              <Link to={path.path} className="block h-full">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-start mb-4">
                    <span className="text-3xl mr-3">{path.icon}</span>
                    <h3 className="text-xl font-bold text-gray-100">{path.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4 flex-grow">{path.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-emerald-400 mb-2">KEY TOPICS:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {path.highlights.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">CAREER PATHS:</h4>
                    <div className="flex flex-wrap gap-2">
                      {path.careerPaths.map((career, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Professional Roadmap */}
      <div className="w-full max-w-7xl">
        <h2 className="text-2xl font-bold mb-8 text-cyan-400 flex items-center">
          <span className="mr-2">🗺️</span> Professional Development Roadmap
        </h2>
        
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="terminal-header px-6 py-4 border-b border-gray-700">
            <div className="flex items-center">
              <div className="flex space-x-2 mr-4">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>
              <span className="font-mono text-sm text-gray-300">career_roadmap.sh</span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-emerald-500 to-cyan-500"></div>
              
              {roadmapStages.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="relative pl-12 pb-8 last:pb-0 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 w-8 h-8 rounded-full flex items-center justify-center bg-gray-700 border-2 border-emerald-400 group-hover:bg-emerald-400 transition-colors">
                    <span className="text-xs font-bold text-emerald-400 group-hover:text-gray-800">{index + 1}</span>
                  </div>
                  
                  <div className="bg-gray-700/50 rounded-lg p-5 border border-gray-600 group-hover:border-emerald-400/30 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-100">{stage.stage} Stage</h3>
                      <span className="text-sm text-emerald-400 bg-gray-800 px-3 py-1 rounded-full">{stage.duration}</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-4"><span className="font-semibold text-cyan-400">Focus:</span> {stage.focus}</p>
                    
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">KEY COMPETENCIES:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {stage.topics.map((topic, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-400">
                          <span className="text-emerald-400 mr-2">▹</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.div 
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-gray-100 mb-4">Ready to start your journey?</h3>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">Join thousands of developers who've accelerated their careers with our structured learning paths.</p>
        <Link 
          to="/docs/getting-started" 
          className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-medium hover:shadow-lg hover:shadow-emerald-500/20 transition-all"
        >
          Get Started Now
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
      </motion.div>
    </section>
  );
};

export default DocsHome;