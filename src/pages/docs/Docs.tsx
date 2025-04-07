import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const DocsHome = () => {
  const [displayText, setDisplayText] = useState("");
  const [activeTab, setActiveTab] = useState("home");
  const [commandHistory, setCommandHistory] = useState<
    { cmd: string; user?: string; host?: string; time?: string; output?: string; ai: boolean }[]
  >([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [aiThinking, setAiThinking] = useState(false);
  const [user] = useState("dev");
  const [host] = useState("knowledge-base");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  // MacBook Terminal color scheme
  const colors = {
    primary: "#0ff",
    secondary: "#f0f",
    accent: "#ff0",
    text: "#e0e0ff",
    bg: "#0a0a12",
    highlight: "rgba(0, 255, 255, 0.1)",
    error: "#f55",
    success: "#5f5"
  };

  const fullText = `DevTerminal v3.2.0 - Developer Knowledge Base
[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}]
> Booting documentation engine...
> Mounting knowledge partitions...
> Syncing with remote repositories...
> Initializing AI assistance...
System ready. Type 'help' for commands`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setCommandHistory(prev => [...prev, 
            { 
              cmd: "welcome", 
              output: `Welcome to DevTerminal. Authenticated as ${user}@${host}`,
              ai: true 
            }
          ]);
        }, 300);
      }
    }, 5); // Faster typing speed
    return () => clearInterval(interval);
  }, []);

  // Auto-focus input
  useEffect(() => {
    const handleClick = () => inputRef.current?.focus();
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  const simulateAIResponse = (cmd: string) => {
    setAiThinking(true);
    return new Promise<string>(resolve => {
      setTimeout(() => {
        let output = "";
        let newTab = activeTab;
        switch(cmd.toLowerCase()) {
          case "help":
          case "?":
            output = `Available commands:
help/?          Show this help
docs/ls         List documentation modules
roadmap         Show learning roadmap
search <query>  Search documentation
clear/cls       Clear terminal
about           System information
exit            Terminal session cannot be exited`;
            break;
          case "docs":
          case "ls":
            output = "Available documentation modules:";
            newTab = "docs";
            break;
          case "roadmap":
            output = "Loading learning roadmap...";
            newTab = "roadmap";
            break;
          case "about":
            output = `DevTerminal v3.2.0
Developer Knowledge Base - Part of the Developer Community
Welcome to the DevTerminal, your go-to resource for comprehensive developer documentation and learning materials. This terminal is designed to provide developers with easy access to a wide range of documentation modules, learning roadmaps, and recommended resources.
Key Features:
• Modular Documentation: Access detailed guides on various topics such as Web Development, Android Development, AI/ML, Data Structures, and Git & VCS.
• Learning Roadmaps: Track your progress through structured learning paths tailored to different technologies and domains.
• AI Assistance: Get real-time assistance and answers to your queries directly within the terminal.
• Interactive Modules: Click on modules to navigate to detailed documentation pages.
Join our community of developers and stay updated with the latest knowledge and best practices in software development.`;
            break;
          case "exit":
            output = "Terminal session cannot be exited. Type 'help' for available commands.";
            break;
          case "open --module web":
            output = `Opening Web Development module...`;
            navigate("/docs/web-dev");
            break;
          case "open --module android":
            output = `Opening Android Development module...`;
            navigate("/docs/android");
            break;
          case "open --module ai-ml":
            output = `Opening AI/ML module...`;
            navigate("/docs/ai-ml");
            break;
          case "open --module dsa":
            output = `Opening Data Structures module...`;
            navigate("/docs/dsa");
            break;
          case "open --module git":
            output = `Opening Git & VCS module...`;
            navigate("/docs/git");
            break;
          case "clear":
          case "cls":
            output = "";
            setCommandHistory([]);
            break;
          case "back":
            if (activeTab !== "home") {
              output = "Returning to documentation modules...";
              setActiveTab("docs");
            } else {
              output = "Already in home directory.";
            }
            break;
          default:
            if (cmd.startsWith("search ")) {
              const query = cmd.substring(7).trim();
              if (!query) {
                output = `Please provide a search query. Usage: search <query>`;
              } else {
                output = `Search results for "${query}":
• 15 relevant documentation files
• 3 code examples available
• 2 related projects found`;
              }
            } else {
              output = `Command not found: ${cmd}. Type 'help' for available commands`;
            }
        }
        if (newTab !== activeTab) setActiveTab(newTab);
        resolve(output);
        setAiThinking(false);
      }, 500 + Math.random() * 1000);
    });
  };

  const handleCommand = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const cmd = currentCommand.trim();
      if (!cmd) return;
      // Add user command to history
      setCommandHistory(prev => [...prev, { 
        cmd, 
        user, 
        host, 
        time: new Date().toLocaleTimeString(),
        ai: false 
      }]);
      if (cmd.toLowerCase() === "clear" || cmd.toLowerCase() === "cls") {
        setCommandHistory([]);
        setCurrentCommand("");
        return;
      }
      // Get AI response
      const output = await simulateAIResponse(cmd);
      // Add AI response to history with all required fields
      setCommandHistory(prev => [...prev, { 
        cmd: "", // You can set this to a specific command if needed
        user: undefined,
        host: undefined,
        time: new Date().toLocaleTimeString(),
        output, 
        ai: true 
      }]);
      setCurrentCommand("");
      // Auto-scroll to bottom
      setTimeout(() => {
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      }, 50);
    }
  };

  const documentationModules = [
    {
      id: "web",
      title: "Web Development",
      path: "/docs/web-dev",
      icon: "🌐",
      description: "Modern web frameworks, tools, and best practices",
      progress: 85,
      commands: [
        "start --react-app",
        "build --production",
        "test --coverage"
      ],
      tags: ["React", "Node.js", "CSS", "APIs"]
    },
    {
      id: "android",
      title: "Android Development",
      path: "/docs/android",
      icon: "📱",
      description: "Native Android app development with Kotlin/Java",
      progress: 70,
      commands: [
        "run --emulator",
        "build --release",
        "test --instrumentation"
      ],
      tags: ["Kotlin", "Jetpack", "Compose", "Room"]
    },
    {
      id: "ai-ml",
      title: "AI/ML",
      path: "/docs/ai-ml",
      icon: "🧠",
      description: "Machine learning models and neural networks",
      progress: 60,
      commands: [
        "train --model",
        "evaluate --metrics",
        "predict --input"
      ],
      tags: ["TensorFlow", "PyTorch", "NLP", "CV"]
    },
    {
      id: "dsa",
      title: "Data Structures",
      path: "/docs/dsa",
      icon: "∑",
      description: "Algorithms and problem solving techniques",
      progress: 75,
      commands: [
        "solve --leetcode",
        "optimize --complexity",
        "visualize --algorithm"
      ],
      tags: ["Arrays", "Graphs", "DP", "Sorting"]
    },
    {
      id: "git",
      title: "Git & VCS",
      path: "/docs/git",
      icon: "⎇",
      description: "Version control and collaborative workflows",
      progress: 95,
      commands: [
        "commit --message",
        "rebase --interactive",
        "merge --conflict"
      ],
      tags: ["GitHub", "CI/CD", "Rebase", "Hooks"]
    }
  ];

  const learningRoadmap = {
    tracks: [
      {
        name: "Web Development",
        stages: [
          {
            name: "Fundamentals",
            topics: ["HTML5", "CSS3", "JavaScript ES6+"],
            status: "complete"
          },
          {
            name: "Frontend",
            topics: ["React", "State Management", "Component Design"],
            status: "complete"
          },
          {
            name: "Backend",
            topics: ["Node.js", "Express", "REST APIs"],
            status: "complete"
          },
          {
            name: "Advanced",
            topics: ["GraphQL", "WebSockets", "WebAssembly"],
            status: "in-progress"
          }
        ]
      },
      {
        name: "Android",
        stages: [
          {
            name: "Basics",
            topics: ["Kotlin", "Android Studio", "UI Components"],
            status: "complete"
          },
          {
            name: "Architecture",
            topics: ["MVVM", "Jetpack", "Navigation"],
            status: "in-progress"
          },
          {
            name: "Advanced",
            topics: ["Compose", "Coroutines", "DI"],
            status: "pending"
          },
          {
            name: "Publishing",
            topics: ["Play Store", "Monetization", "Analytics"],
            status: "pending"
          }
        ]
      },
      {
        name: "Computer Science",
        stages: [
          {
            name: "DSA",
            topics: ["Arrays", "Trees", "Graphs", "DP"],
            status: "in-progress"
          },
          {
            name: "System Design",
            topics: ["Scalability", "DB Design", "Caching"],
            status: "pending"
          },
          {
            name: "OS/Networking",
            topics: ["Processes", "Threads", "TCP/IP"],
            status: "pending"
          },
          {
            name: "Security",
            topics: ["Cryptography", "OWASP", "Auth"],
            status: "pending"
          }
        ]
      }
    ],
    resources: [
      { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
      { name: "Android Developers", url: "https://developer.android.com" },
      { name: "LeetCode", url: "https://leetcode.com" },
      { name: "freeCodeCamp", url: "https://freecodecamp.org" }
    ]
  };

  const renderPrompt = () => (
    <div className="flex items-baseline">
      <span style={{ color: colors.primary }} className="mr-1">{user}@</span>
      <span style={{ color: colors.secondary }} className="mr-1">{host}</span>
      <span style={{ color: colors.accent }} className="mr-1">:~$</span>
    </div>
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bg, color: colors.text }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap');
        body {
          font-family: 'Ubuntu Mono', monospace;
          background: ${colors.bg};
          color: ${colors.text};
          line-height: 1.5;
        }
        .terminal-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .terminal-scrollbar::-webkit-scrollbar-track {
          background: ${colors.bg};
        }
        .terminal-scrollbar::-webkit-scrollbar-thumb {
          background: ${colors.primary};
          border-radius: 4px;
        }
        .glow-text {
          text-shadow: 0 0 4px ${colors.primary}, 0 0 8px rgba(0, 255, 255, 0.2);
        }
        .module-card {
          border: 1px solid ${colors.primary}30;
          background: rgba(10, 20, 30, 0.5);
          transition: all 0.3s ease;
          margin-bottom: 1rem;
        }
        .module-card:hover {
          border-color: ${colors.primary};
          box-shadow: 0 0 15px ${colors.primary}40;
          transform: translateY(-2px);
          background: rgba(0, 10, 20, 0.7);
        }
        .module-card h4 {
          margin-bottom: 0.5rem;
        }
        .module-card p {
          margin-bottom: 0.5rem;
        }
        .module-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .module-card li {
          margin-bottom: 0.25rem;
        }
        .command-line {
          background: rgba(0, 10, 20, 0.7);
          border-left: 3px solid ${colors.primary};
          padding: 0.5rem;
          margin-bottom: 1rem;
        }
        .ai-response {
          border-left: 3px solid ${colors.secondary};
          background: rgba(0, 10, 20, 0.3);
          padding: 0.5rem;
          margin-bottom: 1rem;
        }
        .cursor-blink {
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .code-editor-terminal {
          background: #1e1e2f;
          border: 1px solid #333;
          border-radius: 8px;
          padding: 16px;
          font-family: 'Ubuntu Mono', monospace;
          color: #e0e0ff;
          line-height: 1.5;
        }
        .code-editor-terminal pre {
          margin: 0;
        }
        .code-editor-terminal .prompt {
          color: #0ff;
        }
        .code-editor-terminal .command {
          color: #fff;
        }
        .code-editor-terminal .output {
          color: #f0f;
        }
        .code-editor-terminal .ai-response {
          background: rgba(0, 10, 20, 0.3);
        }
        .code-editor-terminal .ai-thinking {
          color: #f0f;
        }
        .code-editor-terminal .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 16px;
          font-size: 12px;
          color: #0ff;
        }
        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 16px;
          font-size: 12px;
          color: #0ff;
        }
        .footer span {
          margin-right: 8px;
        }
        .progress-bar {
          background: rgba(0, 0, 0, 0.5);
          border-radius: 8px;
          overflow: hidden;
          margin-top: 0.5rem;
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, ${colors.primary}, ${colors.secondary});
        }
        .command-input {
          border: none;
          outline: none;
          background: transparent;
          color: inherit;
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
          padding: 0;
          width: 100%;
        }
        .mobile-terminal {
          display: none;
        }
        @media (max-width: 768px) {
          .desktop-terminal {
            display: none;
          }
          .mobile-terminal {
            display: block;
          }
          .container {
            padding-top: 64px; /* Adjust this value based on your navbar height */
          }
        }
        .roadmap-track {
          border-left: 2px solid ${colors.primary}50;
          padding-left: 16px;
        }
        .roadmap-track h4 {
          margin-bottom: 16px;
        }
        .roadmap-stage {
          position: relative;
          margin-bottom: 16px;
        }
        .roadmap-stage:before {
          content: '';
          position: absolute;
          left: -21px;
          top: 8px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 2px solid ${colors.primary};
        }
        .roadmap-stage.complete:before {
          background: ${colors.success};
          border-color: ${colors.success};
        }
        .roadmap-stage.in-progress:before {
          background: ${colors.accent};
          border-color: ${colors.accent};
        }
        .roadmap-stage.pending:before {
          background: transparent;
          border-color: ${colors.secondary};
        }
        .roadmap-resources {
          margin-top: 24px;
        }
        .roadmap-resources h4 {
          margin-bottom: 16px;
        }
        .roadmap-resources ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .roadmap-resources li {
          margin-bottom: 8px;
        }
        .roadmap-resources a {
          display: block;
          padding: 8px 12px;
          border: 1px solid ${colors.primary}30;
          border-radius: 8px;
          transition: background 0.3s ease;
        }
        .roadmap-resources a:hover {
          background: ${colors.highlight};
        }
        .roadmap-resources a span {
          display: block;
        }
        .roadmap-resources a .url {
          font-size: 0.875rem;
          color: ${colors.secondary};
        }
      `}</style>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Desktop Terminal */}
        <div className="desktop-terminal">
          <div 
            ref={terminalRef}
            className="terminal-scrollbar code-editor-terminal h-[75vh] overflow-y-auto mb-4"
            style={{ marginTop: "64px" }} // Position terminal below navbar
          >
            <pre className="whitespace-pre-wrap mb-4" style={{ color: colors.accent }}>
              {displayText}
              {displayText.length === fullText.length && (
                <span className="ml-1 inline-block w-2 h-4 bg-white cursor-blink"></span>
              )}
            </pre>
            {commandHistory.map((item, idx) => (
              <div key={idx} className={`mb-4 pl-4 py-2 rounded ${item.ai ? 'ai-response' : 'command-line'}`}>
                {!item.output ? (
                  <div className="flex items-baseline">
                    {renderPrompt()}
                    <span className="ml-2 command">{item.cmd}</span>
                  </div>
                ) : (
                  <>
                    {item.cmd !== "welcome" && (
                      <div className="flex items-baseline">
                        {renderPrompt()}
                        <span className="ml-2 command">{item.cmd}</span>
                      </div>
                    )}
                    <pre className="whitespace-pre-wrap mt-2 output" style={{ 
                      color: item.ai ? colors.secondary : colors.text,
                      fontFamily: "'Ubuntu Mono', monospace"
                    }}>
                      {item.output}
                    </pre>
                  </>
                )}
              </div>
            ))}
            {aiThinking && (
              <div className="flex items-center mb-4 pl-4 py-2 text-sm ai-thinking">
                <div className="mr-2 flex items-center">
                  <span className="mr-2">Processing</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-current pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-current pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-current pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <AnimatePresence>
              {activeTab === "docs" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6"
                >
                  <h3 className="text-xl mb-6 glow-text" style={{ color: colors.accent }}>
                    <span className="mr-2">📦</span> Available Documentation Modules
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {documentationModules.map((module, idx) => (
                      <div 
                        key={idx}
                        className="module-card p-4 rounded-lg"
                        onClick={() => navigate(module.path)}
                      >
                        <div className="flex items-start mb-3">
                          <span className="text-2xl mr-3" style={{ color: colors.primary }}>{module.icon}</span>
                          <div>
                            <h4 className="text-lg font-bold" style={{ color: colors.accent }}>{module.title}</h4>
                            <p className="text-sm" style={{ color: colors.text }}>{module.description}</p>
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Documentation:</span>
                            <span>{module.progress}% complete</span>
                          </div>
                          <div className="progress-bar h-2 w-full rounded overflow-hidden">
                            <div 
                              className="progress-fill h-full rounded" 
                              style={{ width: `${module.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-1">
                            {module.tags.map((tag, i) => (
                              <span 
                                key={i} 
                                className="text-xs px-2 py-1 rounded"
                                style={{ 
                                  background: 'rgba(0, 0, 0, 0.5)', 
                                  color: colors.primary 
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="text-xs mb-2" style={{ color: colors.primary }}>COMMANDS:</h5>
                          <ul className="space-y-1 text-xs">
                            {module.commands.map((cmd, i) => (
                              <li key={i} style={{ color: colors.secondary }}>
                                <span style={{ color: colors.primary }}>$</span> {cmd}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-sm" style={{ color: colors.accent }}>
                    <p>To view a module: <span style={{ color: colors.primary }}>open --module [id]</span></p>
                  </div>
                </motion.div>
              )}
              {activeTab === "roadmap" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6"
                >
                  <h3 className="text-xl mb-6 glow-text" style={{ color: colors.accent }}>
                    <span className="mr-2">🧭</span> Learning Roadmap
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {learningRoadmap.tracks.map((track, i) => (
                      <div key={i} className="roadmap-track pl-5">
                        <h4 className="text-lg font-bold mb-4 flex items-center" style={{ color: colors.primary }}>
                          <span className="mr-2">{["🌐", "📱", "💻"][i]}</span>
                          {track.name}
                        </h4>
                        <div className="space-y-6">
                          {track.stages.map((stage, j) => (
                            <div 
                              key={j} 
                              className={`roadmap-stage ${stage.status.replace('-', '')}`}
                            >
                              <h5 className="font-bold mb-2" style={{ color: colors.accent }}>{stage.name}</h5>
                              <ul className="space-y-1 text-sm">
                                {stage.topics.map((topic, k) => (
                                  <li key={k} className="flex items-center">
                                    <span className="mr-2">•</span>
                                    {topic}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <h4 className="text-lg font-bold mb-4" style={{ color: colors.primary }}>
                      <span className="mr-2">📚</span> Recommended Resources
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {learningRoadmap.resources.map((resource, i) => (
                        <li key={i}>
                          <a 
                            href={resource.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block p-3 rounded hover:bg-blue-900/10 transition-colors"
                            style={{ border: `1px solid ${colors.primary}30` }}
                          >
                            <span className="text-cyan-300">{resource.name}</span>
                            <div className="text-xs text-cyan-500/70 mt-1 truncate">{resource.url}</div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 text-sm" style={{ color: colors.accent }}>
                    <p>To track progress: <span style={{ color: colors.primary }}>progress --update [topic]</span></p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="flex items-baseline mt-6">
              {renderPrompt()}
              <input
                ref={inputRef}
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                onKeyDown={handleCommand}
                className="command-input flex-grow"
                style={{ color: colors.text }}
                autoFocus
              />
            </div>
          </div>
          <div className="footer">
            <span>System: <span style={{ color: colors.success }}>ONLINE</span></span>
            <span>Docs: <span style={{ color: colors.success }}>SYNCED</span></span>
            <span>Session: <span style={{ color: colors.accent }}>ACTIVE</span></span>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="mobile-terminal">
          <div className="mt-6">
            <h3 className="text-xl mb-6 glow-text" style={{ color: colors.accent }}>
              <span className="mr-2">📦</span> Available Documentation Modules
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {documentationModules.map((module, idx) => (
                <motion.div
                  key={idx}
                  className="module-card p-4 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => navigate(module.path)}
                >
                  <div className="flex items-start mb-3">
                    <span className="text-2xl mr-3" style={{ color: colors.primary }}>{module.icon}</span>
                    <div>
                      <h4 className="text-lg font-bold" style={{ color: colors.accent }}>{module.title}</h4>
                      <p className="text-sm" style={{ color: colors.text }}>{module.description}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Documentation:</span>
                      <span>{module.progress}% complete</span>
                    </div>
                    <div className="progress-bar h-2 w-full rounded overflow-hidden">
                      <div 
                        className="progress-fill h-full rounded" 
                        style={{ width: `${module.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      {module.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="text-xs px-2 py-1 rounded"
                          style={{ 
                            background: 'rgba(0, 0, 0, 0.5)', 
                            color: colors.primary 
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-xs mb-2" style={{ color: colors.primary }}>COMMANDS:</h5>
                    <ul className="space-y-1 text-xs">
                      {module.commands.map((cmd, i) => (
                        <li key={i} style={{ color: colors.secondary }}>
                          <span style={{ color: colors.primary }}>$</span> {cmd}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 text-sm" style={{ color: colors.accent }}>
              <p>To view a module: <span style={{ color: colors.primary }}>open --module [id]</span></p>
            </div>

            {/* Mobile Roadmap Section */}
            <div className="mt-12">
              <h3 className="text-xl mb-6 glow-text" style={{ color: colors.accent }}>
                <span className="mr-2">🧭</span> Learning Roadmap
              </h3>
              {learningRoadmap.tracks.map((track, i) => (
                <div key={i} className="roadmap-track">
                  <h4 className="text-lg font-bold mb-4 flex items-center" style={{ color: colors.primary }}>
                    <span className="mr-2">{["🌐", "📱", "💻"][i]}</span>
                    {track.name}
                  </h4>
                  <div className="space-y-6">
                    {track.stages.map((stage, j) => (
                      <div 
                        key={j} 
                        className={`roadmap-stage ${stage.status.replace('-', '')}`}
                      >
                        <h5 className="font-bold mb-2" style={{ color: colors.accent }}>{stage.name}</h5>
                        <ul className="space-y-1 text-sm">
                          {stage.topics.map((topic, k) => (
                            <li key={k} className="flex items-center">
                              <span className="mr-2">•</span>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Resources Section */}
            <div className="roadmap-resources">
              <h4 className="text-lg font-bold mb-4" style={{ color: colors.primary }}>
                <span className="mr-2">📚</span> Recommended Resources
              </h4>
              <ul>
                {learningRoadmap.resources.map((resource, i) => (
                  <li key={i}>
                    <a 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block p-3 rounded hover:bg-blue-900/10 transition-colors"
                      style={{ border: `1px solid ${colors.primary}30` }}
                    >
                      <span className="text-cyan-300">{resource.name}</span>
                      <div className="url text-xs text-cyan-500/70 mt-1 truncate">{resource.url}</div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsHome;