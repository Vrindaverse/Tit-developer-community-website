import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const GitDocs = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = `Welcome to TIT Dev Docs - Git Section!

Your gateway to mastering version control with Git.
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
      title: "Git",
      path: "/docs/git",
      description:
        "Master version control with Git to manage your code effectively and collaborate with others.",
      whyLearn:
        "Git is essential for tracking changes, collaborating on projects, and maintaining a history of your work.",
      benefits:
        "Improved collaboration, better project management, and the ability to revert changes easily.",
      futureScope:
        "Git is widely used in modern software development, making it a valuable skill for any developer.",
      roadmap: {
        beginner: [
          {
            title: "Introduction to Git",
            description: "Understand the basics of Git and version control.",
            resources: [
              { type: "Documentation", name: "Git Documentation", url: "https://git-scm.com/doc" },
              { type: "Book", name: "Pro Git", author: "Scott Chacon & Ben Straub", url: "https://git-scm.com/book/en/v2" },
              { type: "YouTube Channel", name: "The Net Ninja", url: "https://www.youtube.com/c/TheNetNinja" },
              { type: "Platform", name: "GitHub Guides", url: "https://guides.github.com/" }
            ]
          },
          {
            title: "Setting Up Git",
            description: "Install Git and configure your username and email.",
            resources: [
              { type: "Documentation", name: "Git Installation", url: "https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" },
              { type: "Tutorial", name: "Git Setup Tutorial", url: "https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup" },
              { type: "YouTube Channel", name: "Academind", url: "https://www.youtube.com/channel/UCSJbGtTlrDami-tDTPW9xAg" },
              { type: "Platform", name: "Atlassian Git Tutorial", url: "https://www.atlassian.com/git/tutorials/install-git" }
            ]
          },
          {
            title: "Basic Git Commands",
            description: "Learn essential commands like init, clone, add, commit, push, pull.",
            resources: [
              { type: "Documentation", name: "Git Basic Commands", url: "https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository" },
              { type: "Book", name: "Git Pocket Guide", author: "Richard E. Silverman", url: "https://www.oreilly.com/library/view/git-pocket-guide/9781449325862/" },
              { type: "YouTube Channel", name: "Corey Schafer", url: "https://www.youtube.com/user/schafer5" },
              { type: "Platform", name: "Codecademy", url: "https://www.codecademy.com/learn/learn-git" }
            ]
          },
          {
            title: "Branching and Merging",
            description: "Create branches and merge changes.",
            resources: [
              { type: "Documentation", name: "Git Branching", url: "https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell" },
              { type: "Book", name: "Git Workflows", author: "Vincent Driessen", url: "https://nvie.com/posts/a-successful-git-branching-model/" },
              { type: "YouTube Channel", name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
              { type: "Platform", name: "Coursera", url: "https://www.coursera.org/learn/git-for-data-science" }
            ]
          },
          {
            title: "Collaborating with Git",
            description: "Work with others using Git.",
            resources: [
              { type: "Documentation", name: "Git Collaboration", url: "https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes" },
              { type: "Book", name: "Version Control with Git", author: "Jon Loeliger, Matthew McCullough", url: "https://www.oreilly.com/library/view/version-control-with/9780596520133/" },
              { type: "YouTube Channel", name: "The Net Ninja", url: "https://www.youtube.com/c/TheNetNinja" },
              { type: "Platform", name: "Udemy", url: "https://www.udemy.com/course/git-and-github-bootcamp/" }
            ]
          }
        ],
        intermediate: [
          {
            title: "Advanced Git Commands",
            description: "Learn advanced commands like rebase, cherry-pick, stash.",
            resources: [
              { type: "Documentation", name: "Git Advanced Commands", url: "https://git-scm.com/book/en/v2/Git-Tools-Advanced-Merging" },
              { type: "Book", name: "Git Internals", author: "Scott Chacon & Ben Straub", url: "https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain" },
              { type: "YouTube Channel", name: "Academind", url: "https://www.youtube.com/channel/UCSJbGtTlrDami-tDTPW9xAg" },
              { type: "Platform", name: "Pluralsight", url: "https://www.pluralsight.com/courses/git-intermediate" }
            ]
          },
          {
            title: "Git Hooks",
            description: "Automate Git processes with hooks.",
            resources: [
              { type: "Documentation", name: "Git Hooks", url: "https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks" },
              { type: "Book", name: "Pro Git", author: "Scott Chacon & Ben Straub", url: "https://git-scm.com/book/en/v2" },
              { type: "YouTube Channel", name: "Corey Schafer", url: "https://www.youtube.com/user/schafer5" },
              { type: "Platform", name: "Atlassian Git Hooks", url: "https://www.atlassian.com/git/tutorials/git-hooks" }
            ]
          },
          {
            title: "Git for Team Collaboration",
            description: "Best practices for team collaboration using Git.",
            resources: [
              { type: "Documentation", name: "Git for Teams", url: "https://git-scm.com/book/en/v2/Distributed-Git-Distributed-Workflows" },
              { type: "Book", name: "Git Workflows", author: "Vincent Driessen", url: "https://nvie.com/posts/a-successful-git-branching-model/" },
              { type: "YouTube Channel", name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
              { type: "Platform", name: "Coursera", url: "https://www.coursera.org/learn/git-for-data-science" }
            ]
          },
          {
            title: "Resolving Merge Conflicts",
            description: "Handle merge conflicts effectively.",
            resources: [
              { type: "Documentation", name: "Git Merge Conflicts", url: "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging" },
              { type: "Book", name: "Git Pocket Guide", author: "Richard E. Silverman", url: "https://www.oreilly.com/library/view/git-pocket-guide/9781449325862/" },
              { type: "YouTube Channel", name: "The Net Ninja", url: "https://www.youtube.com/c/TheNetNinja" },
              { type: "Platform", name: "Udemy", url: "https://www.udemy.com/course/git-and-github-bootcamp/" }
            ]
          },
          {
            title: "Git Best Practices",
            description: "Follow best practices for effective Git usage.",
            resources: [
              { type: "Documentation", name: "Git Best Practices", url: "https://git-scm.com/book/en/v2/Git-Tools-Submodules" },
              { type: "Book", name: "Version Control with Git", author: "Jon Loeliger, Matthew McCullough", url: "https://www.oreilly.com/library/view/version-control-with/9780596520133/" },
              { type: "YouTube Channel", name: "Academind", url: "https://www.youtube.com/channel/UCSJbGtTlrDami-tDTPW9xAg" },
              { type: "Platform", name: "Pluralsight", url: "https://www.pluralsight.com/courses/git-best-practices" }
            ]
          }
        ],
        advanced: [
          {
            title: "Advanced Git Features",
            description: "Explore advanced features like submodules, subtrees, and grafts.",
            resources: [
              { type: "Documentation", name: "Git Advanced Features", url: "https://git-scm.com/book/en/v2/Git-Tools-Submodules" },
              { type: "Book", name: "Git Internals", author: "Scott Chacon & Ben Straub", url: "https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain" },
              { type: "YouTube Channel", name: "Corey Schafer", url: "https://www.youtube.com/user/schafer5" },
              { type: "Platform", name: "Pluralsight", url: "https://www.pluralsight.com/courses/git-intermediate" }
            ]
          },
          {
            title: "Git Performance Optimization",
            description: "Optimize Git performance for large repositories.",
            resources: [
              { type: "Documentation", name: "Git Performance", url: "https://git-scm.com/book/en/v2/Git-Internals-Maintenance" },
              { type: "Book", name: "Pro Git", author: "Scott Chacon & Ben Straub", url: "https://git-scm.com/book/en/v2" },
              { type: "YouTube Channel", name: "The Net Ninja", url: "https://www.youtube.com/c/TheNetNinja" },
              { type: "Platform", name: "Atlassian Git Performance", url: "https://www.atlassian.com/git/tutorials/git-performance" }
            ]
          },
          {
            title: "Git Security",
            description: "Understand and implement security measures in Git.",
            resources: [
              { type: "Documentation", name: "Git Security", url: "https://git-scm.com/book/en/v2/Git-Tools-Submodules" },
              { type: "Book", name: "Version Control with Git", author: "Jon Loeliger, Matthew McCullough", url: "https://www.oreilly.com/library/view/version-control-with/9780596520133/" },
              { type: "YouTube Channel", name: "Academind", url: "https://www.youtube.com/channel/UCSJbGtTlrDami-tDTPW9xAg" },
              { type: "Platform", name: "Pluralsight", url: "https://www.pluralsight.com/courses/git-security" }
            ]
          },
          {
            title: "Git for Large Projects",
            description: "Manage large projects with Git.",
            resources: [
              { type: "Documentation", name: "Git for Large Projects", url: "https://git-scm.com/book/en/v2/Git-Tools-Submodules" },
              { type: "Book", name: "Git Internals", author: "Scott Chacon & Ben Straub", url: "https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain" },
              { type: "YouTube Channel", name: "Corey Schafer", url: "https://www.youtube.com/user/schafer5" },
              { type: "Platform", name: "Pluralsight", url: "https://www.pluralsight.com/courses/git-large-repositories" }
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

const styleTag = document.createElement("style");
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);
export default GitDocs;