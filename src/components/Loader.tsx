import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [showCursor, setShowCursor] = useState(true);
  const [showAccessGranted, setShowAccessGranted] = useState(false);

  // Terminal commands to display
  const commands = [
    "> Initializing system...",
    "> Loading core modules...",
    "> Establishing secure connection...",
    "> Verifying credentials...",
    "> Compiling assets...",
    "> Optimizing performance...",
    "> Checking dependencies...",
    "> Building interface...",
  ];

  useEffect(() => {
    // Simulate network check
    const startTime = Date.now();
    fetch("https://www.google.com/favicon.ico", { cache: "no-store" })
      .then(() => {
        const loadTime = Date.now() - startTime;
        const baseTime = loadTime > 1000 ? 4000 : 2500;
        const totalTime = Math.min(baseTime + loadTime, 5000);
        
        // Start the loading sequence
        const interval = setInterval(() => {
          setProgress(prev => {
            if (prev >= 100) {
              clearInterval(interval);
              return 100;
            }
            return prev + 1;
          });
        }, totalTime / 100);

        return () => clearInterval(interval);
      })
      .catch(() => {
        // Fallback if offline
        const interval = setInterval(() => {
          setProgress(prev => {
            if (prev >= 100) {
              clearInterval(interval);
              return 100;
            }
            return prev + 1;
          });
        }, 30);
        return () => clearInterval(interval);
      });

    // Terminal typing effect
    const commandInterval = setInterval(() => {
      if (terminalLines.length < commands.length) {
        setTerminalLines(prev => [...prev, commands[prev.length]]);
      }
    }, 300);

    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(commandInterval);
      clearInterval(cursorInterval);
    };
  }, [terminalLines.length]);

  useEffect(() => {
    if (progress >= 100) {
      setShowAccessGranted(true);
      setTimeout(() => {
        onComplete();
      }, 1500);
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 bg-black text-green-400 font-mono flex flex-col items-center justify-center p-4 overflow-hidden z-50">
      {/* CRT Screen Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-black opacity-20" style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px)',
          backgroundSize: '100% 2px'
        }}></div>
        <div className="absolute inset-0 animate-scanline pointer-events-none" style={{
          background: 'linear-gradient(to bottom, transparent 95%, rgba(0, 255, 0, 0.3) 95%)',
          backgroundSize: '100% 8px'
        }}></div>
      </div>

      {/* Terminal Container */}
      <div className="w-full max-w-3xl border-2 border-green-500 rounded-lg p-6 bg-black bg-opacity-90 shadow-lg shadow-green-500/20 relative overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center mb-4">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-sm text-green-300">terminal — bash — 80×24</div>
        </div>

        {/* Terminal Content */}
        <div className="h-64 overflow-y-auto pr-2 terminal-scroll">
          {terminalLines.map((line, index) => (
            <div key={index} className="mb-1">
              {line}
              {index === terminalLines.length - 1 && showCursor && (
                <span className="ml-1 animate-pulse">▋</span>
              )}
            </div>
          ))}

          {showAccessGranted && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-4"
              >
                <div className="text-green-400 text-xl font-bold">
                  <span className="text-yellow-400">$</span> ACCESS GRANTED
                </div>
                <div className="text-green-300 text-sm mt-1">
                  Welcome to TIT Developer Community
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="flex justify-between text-xs text-green-300 mb-1">
            <span>SYSTEM BOOT [{progress}%]</span>
            <span>{progress < 100 ? "INITIALIZING" : "COMPLETE"}</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2.5">
            <motion.div
              className="bg-green-500 h-2.5 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Binary Rain Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          {Array.from({ length: 100 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-400 text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, 100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              {Math.random() > 0.5 ? "1" : "0"}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 text-green-300 text-sm text-center opacity-70">
        TIT Developer Community © {new Date().getFullYear()}
      </div>

      {/* CSS for animations */}
      <style >{`
        @keyframes scanline {
          0% { transform: translateY(0); }
          100% { transform: translateY(100vh); }
        }
        .animate-scanline {
          animation: scanline 8s linear infinite;
        }
        .terminal-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .terminal-scroll::-webkit-scrollbar-track {
          background: rgba(0, 80, 0, 0.2);
        }
        .terminal-scroll::-webkit-scrollbar-thumb {
          background: rgba(0, 255, 0, 0.3);
          border-radius: 3px;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-pulse {
          animation: blink 1s infinite;
        }
        /* Additional Enhancements */
        .terminal-header {
          border-bottom: 1px solid rgba(0, 255, 0, 0.2);
          padding-bottom: 0.5rem;
        }
        .terminal-content {
          color: #00ff00;
          font-family: 'Courier New', Courier, monospace;
        }
        .progress-bar-container {
          margin-top: 1rem;
        }
        .progress-bar {
          background-color: #1e1e1e;
          border: 1px solid #00ff00;
          border-radius: 5px;
          overflow: hidden;
        }
        .progress-bar-fill {
          height: 100%;
          background-color: #00ff00;
        }
        .footer {
          margin-top: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Loader;