import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DSADocs = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = `Welcome to TIT Dev Docs - DSA Section!

Your gateway to mastering Data Structures and Algorithms.
Explore in-depth resources curated by experts to accelerate your learning journey.`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const topics = [
    {
      title: "Data Structures and Algorithms",
      path: "/docs/dsa",
      description:
        "Master essential data structures and algorithms to solve complex problems efficiently.",
      whyLearn:
        "DSA is fundamental for software development, especially for roles like software engineer, system designer, and data scientist.",
      benefits:
        "Improved problem-solving skills, better interview preparation, and enhanced coding abilities.",
      futureScope:
        "Advancements in technology require efficient data handling and algorithmic solutions, making DSA highly relevant.",
      roadmap: {
        beginner: [
          {
            title: "Introduction to Data Structures and Algorithms",
            description: "Understand the basics of DSA.",
            resources: [
              { type: "Documentation", name: "GeeksforGeeks DSA Tutorials", url: "https://www.geeksforgeeks.org/data-structures/" },
              { type: "Book", name: "Introduction to Algorithms", author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein", url: "https://www.amazon.com/Introduction-Algorithms-3rd-Thomas-Cormen/dp/0262033844" },
              { type: "YouTube Channel", name: "mycodeschool", url: "https://www.youtube.com/channel/UC_iboZ8374PI2h4hyIJ-2kA" },
              { type: "Platform", name: "Coursera", url: "https://www.coursera.org/specializations/algorithms" }
            ]
          },
          {
            title: "Basic Data Structures",
            description: "Arrays, Linked Lists, Stacks, Queues.",
            resources: [
              { type: "Documentation", name: "GeeksforGeeks Data Structures", url: "https://www.geeksforgeeks.org/data-structures/" },
              { type: "Book", name: "Data Structures and Algorithms Made Easy in Java", author: "Narasimha Karumanchi", url: "https://www.amazon.com/Data-Structures-Algorithms-Made-Easy-Java/dp/8193247346" },
              { type: "YouTube Channel", name: "freeCodeCamp.org", url: "https://www.youtube.com/channel/UC8butISfWtWv7jRZz1e1trQ" },
              { type: "Platform", name: "Udemy", url: "https://www.udemy.com/course/data-structures-algorithms-java/" }
            ]
          },
          {
            title: "Basic Algorithms",
            description: "Sorting and Searching Algorithms.",
            resources: [
              { type: "Documentation", name: "GeeksforGeeks Algorithms", url: "https://www.geeksforgeeks.org/algorithms/" },
              { type: "Book", name: "Algorithm Design Manual", author: "Steven S. Skiena", url: "https://www.amazon.com/Algorithm-Design-Manual-Steven-Skiena/dp/1848000693" },
              { type: "YouTube Channel", name: "Back To Back SWE", url: "https://www.youtube.com/channel/UCF_a-h5X0jjIc41IYi00sOA" },
              { type: "Platform", name: "edX", url: "https://www.edx.org/learn/algorithms" }
            ]
          },
          {
            title: "Recursion and Backtracking",
            description: "Recursive functions and backtracking algorithms.",
            resources: [
              { type: "Documentation", name: "GeeksforGeeks Recursion", url: "https://www.geeksforgeeks.org/recursion/" },
              { type: "Book", name: "The Algorithm Design Manual", author: "Steven S. Skiena", url: "https://www.amazon.com/Algorithm-Design-Manual-Steven-Skiena/dp/1848000693" },
              { type: "YouTube Channel", name: "mycodeschool", url: "https://www.youtube.com/channel/UC_iboZ8374PI2h4hyIJ-2kA" },
              { type: "Platform", name: "Udemy", url: "https://www.udemy.com/course/recursion-and-backtracking/" }
            ]
          },
          {
            title: "Practice Problems",
            description: "Solve basic problems to reinforce learning.",
            resources: [
              { type: "Platform", name: "LeetCode", url: "https://leetcode.com/" },
              { type: "Platform", name: "HackerRank", url: "https://www.hackerrank.com/domains/tutorials/10-days-of-statistics" },
              { type: "Platform", name: "CodeSignal", url: "https://codesignal.com/" },
              { type: "Platform", name: "CodeChef", url: "https://www.codechef.com/" }
            ]
          }
        ],
        intermediate: [
          {
            title: "Advanced Data Structures",
            description: "Trees, Graphs, Hash Tables, Heaps.",
            resources: [
              { type: "Documentation", name: "GeeksforGeeks Data Structures", url: "https://www.geeksforgeeks.org/data-structures/" },
              { type: "Book", name: "Data Structures and Algorithm Analysis in Java", author: "Mark Allen Weiss", url: "https://www.amazon.com/Data-Structures-Algorithm-Analysis-Java/dp/0132847366" },
              { type: "YouTube Channel", name: "freeCodeCamp.org", url: "https://www.youtube.com/channel/UC8butISfWtWv7jRZz1e1trQ" },
              { type: "Platform", name: "Udemy", url: "https://www.udemy.com/course/data-structures-and-algorithms/" }
            ]
          },
          {
            title: "Advanced Algorithms",
            description: "Dynamic Programming, Greedy Algorithms, Divide and Conquer.",
            resources: [
              { type: "Documentation", name: "GeeksforGeeks Algorithms", url: "https://www.geeksforgeeks.org/algorithms/" },
              { type: "Book", name: "Introduction to Algorithms", author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein", url: "https://www.amazon.com/Introduction-Algorithms-3rd-Thomas-Cormen/dp/0262033844" },
              { type: "YouTube Channel", name: "Back To Back SWE", url: "https://www.youtube.com/channel/UCF_a-h5X0jjIc41IYi00sOA" },
              { type: "Platform", name: "Coursera", url: "https://www.coursera.org/specializations/algorithms" }
            ]
          },
          {
            title: "Graph Algorithms",
            description: "BFS, DFS, Shortest Path Algorithms, MST.",
            resources: [
              { type: "Documentation", name: "GeeksforGeeks Graph Algorithms", url: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/" },
              { type: "Book", name: "Algorithm Design Manual", author: "Steven S. Skiena", url: "https://www.amazon.com/Algorithm-Design-Manual-Steven-Skiena/dp/1848000693" },
              { type: "YouTube Channel", name: "mycodeschool", url: "https://www.youtube.com/channel/UC_iboZ8374PI2h4hyIJ-2kA" },
              { type: "Platform", name: "Udemy", url: "https://www.udemy.com/course/graph-theory-algorithms/" }
            ]
          },
          {
            title: "System Design",
            description: "Design scalable systems and architectures.",
            resources: [
              { type: "Documentation", name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
              { type: "Book", name: "Designing Data-Intensive Applications", author: "Martin Kleppmann", url: "https://www.amazon.com/Designing-Data-Intensive-Applications-Real-Time/dp/1449373301" },
              { type: "YouTube Channel", name: "System Design Interview", url: "https://www.youtube.com/channel/UCnQX5ejXA656AIm1D8cHuGA" },
              { type: "Platform", name: "Coursera", url: "https://www.coursera.org/specializations/system-design" }
            ]
          },
          {
            title: "Practice Problems",
            description: "Solve intermediate-level problems to reinforce learning.",
            resources: [
              { type: "Platform", name: "LeetCode", url: "https://leetcode.com/" },
              { type: "Platform", name: "HackerRank", url: "https://www.hackerrank.com/domains/tutorials/10-days-of-statistics" },
              { type: "Platform", name: "CodeSignal", url: "https://codesignal.com/" },
              { type: "Platform", name: "CodeChef", url: "https://www.codechef.com/" }
            ]
          }
        ],
        advanced: [
          {
            title: "Advanced Topics",
            description: "Advanced Data Structures and Algorithms.",
            resources: [
              { type: "Documentation", name: "GeeksforGeeks Advanced DSA", url: "https://www.geeksforgeeks.org/advanced-data-structures/" },
              { type: "Book", name: "Competitive Programming", author: "Steven Halim", url: "https://cpbook.net/" },
              { type: "YouTube Channel", name: "Back To Back SWE", url: "https://www.youtube.com/channel/UCF_a-h5X0jjIc41IYi00sOA" },
              { type: "Platform", name: "Udemy", url: "https://www.udemy.com/course/advanced-algorithms/" }
            ]
          },
          {
            title: "Competitive Programming",
            description: "Participate in competitive programming contests.",
            resources: [
              { type: "Platform", name: "Codeforces", url: "https://codeforces.com/" },
              { type: "Platform", name: "AtCoder", url: "https://atcoder.jp/" },
              { type: "Platform", name: "TopCoder", url: "https://www.topcoder.com/" },
              { type: "Platform", name: "CodeChef", url: "https://www.codechef.com/" }
            ]
          },
          {
            title: "Research Papers and Publications",
            description: "Stay updated with the latest research in DSA.",
            resources: [
              { type: "Publication", name: "arXiv", url: "https://arxiv.org/" },
              { type: "Publication", name: "IEEE Xplore", url: "https://ieeexplore.ieee.org/" },
              { type: "Publication", name: "Google Scholar", url: "https://scholar.google.com/" },
              { type: "Platform", name: "ResearchGate", url: "https://www.researchgate.net/" }
            ]
          },
          {
            title: "Interview Preparation",
            description: "Prepare for technical interviews.",
            resources: [
              { type: "Book", name: "Cracking the Coding Interview", author: "Gayle Laakmann McDowell", url: "https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0134685531" },
              { type: "YouTube Channel", name: "Tech Lead", url: "https://www.youtube.com/channel/UCFb7XukZd5KtcNMH29P6Tgg" },
              { type: "Platform", name: "HackerRank", url: "https://www.hackerrank.com/" },
              { type: "Platform", name: "LeetCode", url: "https://leetcode.com/" }
            ]
          },
          {
            title: "Contribute to Open-Source Projects",
            description: "Gain experience and collaborate with the community.",
            resources: [
              { type: "Platform", name: "GitHub", url: "https://github.com/" },
              { type: "Platform", name: "Open Source Guide", url: "https://opensource.guide/" },
              { type: "Platform", name: "First Timers Only", url: "https://www.firsttimersonly.com/" }
            ]
          }
        ]
      }
    }
  ];

  return (
    <section className="min-h-screen bg-[#0a0f1a] text-green-400 py-20 px-6 flex flex-col items-center">
      <div className="w-full max-w-6xl h-[85vh] bg-[#1E1E2E] border border-[#A6ADC8] rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-[#181825] px-6 py-3 flex items-center justify-between text-gray-300 border-b border-[#A6ADC8]">
          <span className="text-green-300 font-mono text-sm">TIT Dev Docs Terminal</span>
        </div>

        <div className="p-8 font-mono text-lg bg-[#1E1E2E] text-[#A6ADC8] h-[75vh] overflow-y-auto custom-scrollbar">
          <motion.pre className="mb-6 text-green-300 whitespace-pre-line" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            {displayText}
            <span className="animate-blink">|</span>
          </motion.pre>

          <div className="space-y-6">
            {topics.map((topic, index) => (
              <motion.div key={index} className="border-l-4 border-green-400 pl-4" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
                <span className="text-green-500">user@docs:</span>
                <span className="text-white">~$ </span>
                <Link to={topic.path} className="text-blue-400 hover:text-blue-500 transition-all">{topic.title}</Link>
                <p className="text-gray-400 text-sm mt-2">{topic.description}</p>
                <p className="text-yellow-400 text-sm mt-1"><strong>Why Learn?</strong> {topic.whyLearn}</p>
                <p className="text-green-300 text-sm mt-1"><strong>Benefits:</strong> {topic.benefits}</p>
                <p className="text-blue-400 text-sm mt-1"><strong>Future Scope:</strong> {topic.futureScope}</p>

                <h3 className="text-green-400 mt-4">Beginner Roadmap</h3>
                <div className="space-y-4">
                  {topic.roadmap.beginner.map((step, idx) => (
                    <div key={idx} className="border-l-4 border-green-400 pl-4">
                      <h4 className="text-green-500">{step.title}</h4>
                      <p className="text-gray-400 text-sm">{step.description}</p>
                      <div className="mt-2">
                        <strong>Resources:</strong>
                        <ul className="list-disc list-inside text-gray-400 text-sm">
                          {step.resources.map((resource, resIdx) => (
                            <li key={resIdx}>
                              <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition-all">
                                {resource.type}: {resource.name}
                              </a>
                              {resource.author && ` by ${resource.author}`}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-green-400 mt-4">Intermediate Roadmap</h3>
                <div className="space-y-4">
                  {topic.roadmap.intermediate.map((step, idx) => (
                    <div key={idx} className="border-l-4 border-green-400 pl-4">
                      <h4 className="text-green-500">{step.title}</h4>
                      <p className="text-gray-400 text-sm">{step.description}</p>
                      <div className="mt-2">
                        <strong>Resources:</strong>
                        <ul className="list-disc list-inside text-gray-400 text-sm">
                          {step.resources.map((resource, resIdx) => (
                            <li key={resIdx}>
                              <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition-all">
                                {resource.type}: {resource.name}
                              </a>
                              {resource.author && ` by ${resource.author}`}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-green-400 mt-4">Advanced Roadmap</h3>
                <div className="space-y-4">
                  {topic.roadmap.advanced.map((step, idx) => (
                    <div key={idx} className="border-l-4 border-green-400 pl-4">
                      <h4 className="text-green-500">{step.title}</h4>
                      <p className="text-gray-400 text-sm">{step.description}</p>
                      <div className="mt-2">
                        <strong>Resources:</strong>
                        <ul className="list-disc list-inside text-gray-400 text-sm">
                          {step.resources.map((resource, resIdx) => (
                            <li key={resIdx}>
                              <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition-all">
                                {resource.type}: {resource.name}
                              </a>
                              {resource.author && ` by ${resource.author}`}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
const styles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #1E1E2E;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #A6ADC8;
    border-radius: 4px;
    border: 2px solid #1E1E2E;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #828BBB;
  }
`;

// Inject custom styles
const styleTag = document.createElement("style");
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);

export default DSADocs;