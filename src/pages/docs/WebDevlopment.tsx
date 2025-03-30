import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DocsHome = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = `Welcome to TIT Dev Docs!

Your gateway to mastering cutting-edge technologies.
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
      title: "Web Development",
      path: "/docs/web-dev",
      description:
        "Master front-end and back-end technologies. Web3, Progressive Web Apps (PWAs), and AI-powered automation are shaping the future of web development.",
      whyLearn:
        "Web development powers the internet, enabling businesses, applications, and global connectivity.",
      benefits:
        "Flexible career paths, freelancing opportunities, and the ability to build your own products.",
      futureScope:
        "The rise of Web3, AI-driven UX, and cloud-native apps will redefine the digital landscape.",
      roadmap: {
        beginner: [
          {
            title: "Learn HTML and CSS",
            description: "Structure and style web pages.",
            resources: [
              { type: "Documentation", name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
              { type: "Book", name: "HTML & CSS: Design and Build Websites", author: "Jon Duckett", url: "https://duckettlab.com/" },
              { type: "YouTube Channel", name: "The Net Ninja", url: "https://www.youtube.com/c/TheNetNinja" },
              { type: "Platform", name: "FreeCodeCamp", url: "https://www.freecodecamp.org/" }
            ]
          },
          {
            title: "Understand JavaScript Basics",
            description: "Add interactivity to web pages.",
            resources: [
              { type: "Documentation", name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
              { type: "Book", name: "Eloquent JavaScript", author: "Marijn Haverbeke", url: "https://eloquentjavascript.net/" },
              { type: "YouTube Channel", name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
              { type: "Platform", name: "Codecademy", url: "https://www.codecademy.com/" }
            ]
          },
          {
            title: "Get Familiar with Git & GitHub",
            description: "Version control and collaboration.",
            resources: [
              { type: "Documentation", name: "Git Documentation", url: "https://git-scm.com/doc" },
              { type: "Book", name: "Pro Git", author: "Scott Chacon & Ben Straub", url: "https://git-scm.com/book/en/v2" },
              { type: "YouTube Channel", name: "Academind", url: "https://www.youtube.com/channel/UCSJbGtTlrDami-tDTPW9xAg" },
              { type: "Platform", name: "GitHub Guides", url: "https://guides.github.com/" }
            ]
          },
          {
            title: "Build Small Projects",
            description: "Portfolio, blog, and simple applications.",
            resources: [
              { type: "Platform", name: "Scrimba", url: "https://scrimba.com/" },
              { type: "Platform", name: "Frontend Masters", url: "https://frontendmasters.com/" },
              { type: "Platform", name: "Udemy", url: "https://www.udemy.com/" },
              { type: "Platform", name: "Coursera", url: "https://www.coursera.org/" }
            ]
          },
          {
            title: "Learn Responsive Design with Flexbox & Grid",
            description: "Ensure your website looks good on all devices.",
            resources: [
              { type: "Documentation", name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox" },
              { type: "Book", name: "CSS Grid Layout", author: "Rachel Andrew", url: "https://gridbyexample.com/" },
              { type: "YouTube Channel", name: "Codevolution", url: "https://www.youtube.com/channel/UC8butISfWtWv7jRZz1e1trQ" },
              { type: "Platform", name: "CSS-Tricks", url: "https://css-tricks.com/" }
            ]
          }
        ],
        intermediate: [
          {
            title: "Master JavaScript Frameworks/Libraries",
            description: "React, Vue, or Angular.",
            resources: [
              { type: "Documentation", name: "React Docs", url: "https://reactjs.org/docs/getting-started.html" },
              { type: "Documentation", name: "Vue Docs", url: "https://vuejs.org/guide/introduction.html" },
              { type: "Documentation", name: "Angular Docs", url: "https://angular.io/docs" },
              { type: "YouTube Channel", name: "The Net Ninja", url: "https://www.youtube.com/c/TheNetNinja" },
              { type: "Platform", name: "Frontend Masters", url: "https://frontendmasters.com/" },
              { type: "Platform", name: "Udemy", url: "https://www.udemy.com/" }
            ]
          },
          {
            title: "Understand RESTful APIs and GraphQL",
            description: "Fetch and manage data.",
            resources: [
              { type: "Documentation", name: "REST API Tutorial", url: "https://restfulapi.net/" },
              { type: "Documentation", name: "GraphQL Docs", url: "https://graphql.org/learn/" },
              { type: "Book", name: "GraphQL in Action", author: "Andy McCullough, Elena Felder, Ari Lerner", url: "https://www.manning.com/books/graphql-in-action" },
              { type: "YouTube Channel", name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
              { type: "Platform", name: "FreeCodeCamp", url: "https://www.freecodecamp.org/" }
            ]
          },
          {
            title: "Learn Backend Technologies",
            description: "Node.js, Express, Django, Flask.",
            resources: [
              { type: "Documentation", name: "Node.js Docs", url: "https://nodejs.org/en/docs/" },
              { type: "Documentation", name: "Express Docs", url: "https://expressjs.com/en/starter/installing.html" },
              { type: "Documentation", name: "Django Docs", url: "https://docs.djangoproject.com/en/stable/" },
              { type: "Documentation", name: "Flask Docs", url: "https://flask.palletsprojects.com/en/2.0.x/" },
              { type: "Book", name: "Full Stack Web Development with Python and JavaScript", author: "Paul Barry", url: "https://www.packtpub.com/product/full-stack-web-development-with-python-and-javascript/9781788627379" },
              { type: "YouTube Channel", name: "Academind", url: "https://www.youtube.com/channel/UCSJbGtTlrDami-tDTPW9xAg" },
              { type: "Platform", name: "Udemy", url: "https://www.udemy.com/" }
            ]
          },
          {
            title: "Work with Databases",
            description: "MongoDB, PostgreSQL, Firebase.",
            resources: [
              { type: "Documentation", name: "MongoDB Docs", url: "https://www.mongodb.com/docs/" },
              { type: "Documentation", name: "PostgreSQL Docs", url: "https://www.postgresql.org/docs/" },
              { type: "Documentation", name: "Firebase Docs", url: "https://firebase.google.com/docs" },
              { type: "Book", name: "Learning MongoDB", author: "Eliot Horowitz, Jeff Yemin, Mike Dirolf", url: "https://www.oreilly.com/library/view/learning-mongodb/9781449396245/" },
              { type: "YouTube Channel", name: "Codevolution", url: "https://www.youtube.com/channel/UC8butISfWtWv7jRZz1e1trQ" },
              { type: "Platform", name: "FreeCodeCamp", url: "https://www.freecodecamp.org/" }
            ]
          },
          {
            title: "Understand Authentication and Authorization",
            description: "JWT, OAuth.",
            resources: [
              { type: "Documentation", name: "JWT.io", url: "https://jwt.io/introduction/" },
              { type: "Documentation", name: "OAuth 2.0 Specification", url: "https://tools.ietf.org/html/rfc6749" },
              { type: "Book", name: "Secure Your Node.js Web Application", author: "Nikolaos Dimopoulos", url: "https://www.packtpub.com/product/secure-your-node-js-web-application/9781788836482" },
              { type: "YouTube Channel", name: "Traversy Media", url: "https://www.youtube.com/user/TechGuyWeb" },
              { type: "Platform", name: "Udemy", url: "https://www.udemy.com/" }
            ]
          },
          {
            title: "Build Full-Stack Projects",
            description: "E-commerce, dashboard, social media platform.",
            resources: [
              { type: "Platform", name: "Scrimba", url: "https://scrimba.com/" },
              { type: "Platform", name: "Frontend Masters", url: "https://frontendmasters.com/" },
              { type: "Platform", name: "Udemy", url: "https://www.udemy.com/" },
              { type: "Platform", name: "Coursera", url: "https://www.coursera.org/" }
            ]
          }
        ],
        advanced: [
          {
            title: "Learn DevOps Practices",
            description: "CI/CD, Docker, Kubernetes.",
            resources: [
              { type: "Documentation", name: "Jenkins Documentation", url: "https://www.jenkins.io/doc/" },
              { type: "Documentation", name: "Docker Documentation", url: "https://docs.docker.com/" },
              { type: "Documentation", name: "Kubernetes Documentation", url: "https://kubernetes.io/docs/home/" },
              { type: "Book", name: "Continuous Delivery", author: "Jez Humble, David Farley", url: "https://www.amazon.com/Continuous-Delivery-Reliable-Software-Releases-Throughput/dp/0321601912" },
              { type: "YouTube Channel", name: "Academind", url: "https://www.youtube.com/channel/UCSJbGtTlrDami-tDTPW9xAg" },
              { type: "Platform", name: "Udemy", url: "https://www.udemy.com/" }
            ]
          },
          {
            title: "Explore Web3 and Blockchain Integration",
            description: "Smart contracts, decentralized applications.",
            resources: [
              { type: "Documentation", name: "Ethereum Documentation", url: "https://ethereum.org/en/developers/docs/" },
              { type: "Documentation", name: "Solidity Documentation", url: "https://docs.soliditylang.org/en/latest/" },
              { type: "Book", name: "Mastering Ethereum", author: "Andreas M. Antonopoulos, Gavin Wood", url: "https://github.com/ethereumbook/ethereumbook" },
              { type: "YouTube Channel", name: "ChainSafe Systems", url: "https://www.youtube.com/channel/UCnQX5ejXA656AIm1D8cHuGA" },
              { type: "Platform", name: "Coursera", url: "https://www.coursera.org/" }
            ]
          },
          {
            title: "Master Advanced Performance Optimization",
            description: "Caching, lazy loading, code splitting.",
            resources: [
              { type: "Documentation", name: "Google Developers Web Performance", url: "https://developers.google.com/web/fundamentals/performance" },
              { type: "Book", name: "High Performance Web Sites", author: "Steve Souders", url: "https://www.amazon.com/High-Performance-Web-Sites-Essential/dp/0596522304" },
              { type: "YouTube Channel", name: "The Net Ninja", url: "https://www.youtube.com/c/TheNetNinja" },
              { type: "Platform", name: "Frontend Masters", url: "https://frontendmasters.com/" }
            ]
          },
          {
            title: "Work on AI-Driven Web Applications",
            description: "Machine learning models, chatbots.",
            resources: [
              { type: "Documentation", name: "TensorFlow.js Documentation", url: "https://www.tensorflow.org/js" },
              { type: "Documentation", name: "ML5.js Documentation", url: "https://ml5js.org/" },
              { type: "Book", name: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow", author: "Aurélien Géron", url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/" },
              { type: "YouTube Channel", name: "Fireship", url: "https://www.youtube.com/c/Fireship" },
              { type: "Platform", name: "Coursera", url: "https://www.coursera.org/" }
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
          },
          {
            title: "Understand Cloud Deployment",
            description: "AWS, Azure, Vercel, Netlify.",
            resources: [
              { type: "Documentation", name: "AWS Documentation", url: "https://aws.amazon.com/documentation/" },
              { type: "Documentation", name: "Azure Documentation", url: "https://docs.microsoft.com/en-us/azure/" },
              { type: "Documentation", name: "Vercel Documentation", url: "https://vercel.com/docs" },
              { type: "Documentation", name: "Netlify Documentation", url: "https://docs.netlify.com/" },
              { type: "Book", name: "Serverless Architectures on AWS", author: "Sam Newman", url: "https://www.amazon.com/Serverless-Architectures-Design-Guide-Microservices-ebook/dp/B077Y76PQK" },
              { type: "YouTube Channel", name: "Academind", url: "https://www.youtube.com/channel/UCSJbGtTlrDami-tDTPW9xAg" },
              { type: "Platform", name: "Udemy", url: "https://www.udemy.com/" }
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

export default DocsHome;