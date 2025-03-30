import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AndroidDocs = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = `Welcome to TIT Dev Docs - Android Development Section!

Your gateway to mastering Android app development.
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
      title: "Android Development",
      path: "/docs/android-dev",
      description:
        "Master Android app development using Kotlin and Java, covering fundamental concepts, UI/UX design, and practical applications.",
      whyLearn:
        "Android is one of the most widely used mobile operating systems, offering vast opportunities for developers.",
      benefits:
        "High demand in the job market, diverse applications, and the ability to create innovative mobile solutions.",
      futureScope:
        "Advancements in mobile technology will drive innovation in app development, IoT, and wearable devices.",
      roadmap: {
        beginner: [
          {
            title: "Introduction to Android Development",
            description: "Understand the basics of Android and its ecosystem.",
            resources: [
              { type: "Documentation", name: "Android Developer Documentation", url: "https://developer.android.com/docs" },
              { type: "Book", name: "Head First Android Development", author: "Dawn Griffiths, David Griffiths", url: "https://www.oreilly.com/library/view/head-first-android/9781449331828/" },
              { type: "YouTube Channel", name: "Android Authority", url: "https://www.youtube.com/user/androidauthority" },
              { type: "Platform", name: "Udacity", url: "https://www.udacity.com/course/new-android-fundamentals--ud851" }
            ]
          },
          {
            title: "Learn Java/Kotlin",
            description: "Master the primary programming languages for Android.",
            resources: [
              { type: "Documentation", name: "Java Documentation", url: "https://docs.oracle.com/javase/8/docs/api/" },
              { type: "Documentation", name: "Kotlin Documentation", url: "https://kotlinlang.org/docs/home.html" },
              { type: "Book", name: "Effective Java", author: "Joshua Bloch", url: "https://www.amazon.com/Effective-Java-Joshua-Bloch/dp/0134685997" },
              { type: "Book", name: "Kotlin for Android Developers", author: "Antonio Leiva", url: "https://antonioleiva.com/kotlin-for-android-developers/" },
              { type: "YouTube Channel", name: "Corey Schafer", url: "https://www.youtube.com/user/schafer5" },
              { type: "Platform", name: "Codecademy", url: "https://www.codecademy.com/" }
            ]
          },
          {
            title: "Understand Android Studio",
            description: "Learn to use the official IDE for Android development.",
            resources: [
              { type: "Documentation", name: "Android Studio Documentation", url: "https://developer.android.com/studio/intro" },
              { type: "Book", name: "Android Studio for Beginners", author: "Dawn Griffiths, David Griffiths", url: "https://www.oreilly.com/library/view/android-studio-for/9781491974047/" },
              { type: "YouTube Channel", name: "Academind", url: "https://www.youtube.com/channel/UCSJbGtTlrDami-tDTPW9xAg" },
              { type: "Platform", name: "Coursera", url: "https://www.coursera.org/learn/android-app-development-with-kotlin" }
            ]
          },
          {
            title: "UI/UX Design Basics",
            description: "Learn the fundamentals of designing user interfaces and experiences.",
            resources: [
              { type: "Documentation", name: "Material Design Guidelines", url: "https://material.io/design" },
              { type: "Book", name: "Don't Make Me Think", author: "Steve Krug", url: "https://www.sensible.com/dmmt.html" },
              { type: "YouTube Channel", name: "The Futur", url: "https://www.youtube.com/channel/UCFh8uf-EDPFK5WVaRpteqgg" },
              { type: "Platform", name: "Udemy", url: "https://www.udemy.com/course/user-experience-design-the-complete-guide/" }
            ]
          },
          {
            title: "Build Simple Android Apps",
            description: "Create basic applications to practice your skills.",
            resources: [
              { type: "Platform", name: "Scrimba", url: "https://scrimba.com/" },
              { type: "Platform", name: "FreeCodeCamp", url: "https://www.freecodecamp.org/" },
              { type: "Platform", name: "SoloLearn", url: "https://www.sololearn.com/" },
              { type: "Platform", name: "Kaggle", url: "https://www.kaggle.com/" }
            ]
          }
        ],
        intermediate: [
          {
            title: "Advanced UI/UX Design",
            description: "Explore advanced UI components and design patterns.",
            resources: [
              { type: "Documentation", name: "Android Jetpack Compose", url: "https://developer.android.com/jetpack/compose" },
              { type: "Book", name: "Android UI Patterns", author: "Joel Murphy", url: "https://androiduipatterns.com/" },
              { type: "YouTube Channel", name: "Android Authority", url: "https://www.youtube.com/user/androidauthority" },
              { type: "Platform", name: "Udemy", url: "https://www.udemy.com/course/android-ui-design-patterns/" }
            ]
          },
          {
            title: "Backend Development for Android",
            description: "Learn to integrate backend services with your apps.",
            resources: [
              { type: "Documentation", name: "Firebase Documentation", url: "https://firebase.google.com/docs" },
              { type: "Documentation", name: "Spring Boot Documentation", url: "https://spring.io/projects/spring-boot" },
              { type: "Book", name: "Building Microservices", author: "Sam Newman", url: "https://www.oreilly.com/library/view/building-microservices/9781491950357/" },
              { type: "YouTube Channel", name: "Academind", url: "https://www.youtube.com/channel/UCSJbGtTlrDami-tDTPW9xAg" },
              { type: "Platform", name: "Coursera", url: "https://www.coursera.org/specializations/full-stack-android" }
            ]
          },
          {
            title: "Networking and APIs",
            description: "Understand how to fetch and manage data from remote sources.",
            resources: [
              { type: "Documentation", name: "Retrofit Documentation", url: "https://square.github.io/retrofit/" },
              { type: "Documentation", name: "OkHttp Documentation", url: "https://square.github.io/okhttp/" },
              { type: "Book", name: "RESTful Web Services Cookbook", author: "Leonard Richardson, Sam Ruby", url: "https://www.oreilly.com/library/view/restful-web-services/9780596801687/" },
              { type: "YouTube Channel", name: "StatQuest with Josh Starmer", url: "https://www.youtube.com/channel/UCtYLUTtgS3k1Fg4y5tAhLbw" },
              { type: "Platform", name: "Udemy", url: "https://www.udemy.com/course/android-network-programming/" }
            ]
          },
          {
            title: "Testing Android Apps",
            description: "Learn to write unit tests and UI tests.",
            resources: [
              { type: "Documentation", name: "Android Testing Guide", url: "https://developer.android.com/training/testing" },
              { type: "Book", name: "Android Testing Patterns", author: "Matt Frisbie", url: "https://androidtestingpatterns.com/" },
              { type: "YouTube Channel", name: "The Futur", url: "https://www.youtube.com/channel/UCFh8uf-EDPFK5WVaRpteqgg" },
              { type: "Platform", name: "Coursera", url: "https://www.coursera.org/learn/android-testing" }
            ]
          },
          {
            title: "Build Intermediate Android Apps",
            description: "Create more complex applications with advanced features.",
            resources: [
              { type: "Platform", name: "Scrimba", url: "https://scrimba.com/" },
              { type: "Platform", name: "FreeCodeCamp", url: "https://www.freecodecamp.org/" },
              { type: "Platform", name: "SoloLearn", url: "https://www.sololearn.com/" },
              { type: "Platform", name: "Kaggle", url: "https://www.kaggle.com/" }
            ]
          }
        ],
        advanced: [
          {
            title: "Advanced Android Architecture",
            description: "Learn about MVVM, MVP, and other architectural patterns.",
            resources: [
              { type: "Documentation", name: "Android Jetpack Architecture Components", url: "https://developer.android.com/jetpack/arch" },
              { type: "Book", name: "Android Clean Architecture", author: "Mark Allison", url: "https://leanpub.com/androidcleanarchitecture" },
              { type: "YouTube Channel", name: "Academind", url: "https://www.youtube.com/channel/UCSJbGtTlrDami-tDTPW9xAg" },
              { type: "Platform", name: "Udemy", url: "https://www.udemy.com/course/android-architecture-components/" }
            ]
          },
          {
            title: "Performance Optimization",
            description: "Optimize app performance for better user experience.",
            resources: [
              { type: "Documentation", name: "Android Performance Tips", url: "https://developer.android.com/topic/performance" },
              { type: "Book", name: "Android Performance Patterns", author: "Reto Meier", url: "https://www.oreilly.com/library/view/android-performance-patterns/9781491927220/" },
              { type: "YouTube Channel", name: "The Futur", url: "https://www.youtube.com/channel/UCFh8uf-EDPFK5WVaRpteqgg" },
              { type: "Platform", name: "Coursera", url: "https://www.coursera.org/learn/android-performance" }
            ]
          },
          {
            title: "Security Best Practices",
            description: "Understand and implement security measures in Android apps.",
            resources: [
              { type: "Documentation", name: "Android Security", url: "https://developer.android.com/training/articles/security-tips" },
              { type: "Book", name: "Android Security Internals", author: "Nick Breese", url: "https://www.oreilly.com/library/view/android-security-internals/9781491926353/" },
              { type: "YouTube Channel", name: "Academind", url: "https://www.youtube.com/channel/UCSJbGtTlrDami-tDTPW9xAg" },
              { type: "Platform", name: "Udemy", url: "https://www.udemy.com/course/android-security/" }
            ]
          },
          {
            title: "Build Advanced Android Apps",
            description: "Create sophisticated applications with advanced features.",
            resources: [
              { type: "Platform", name: "Scrimba", url: "https://scrimba.com/" },
              { type: "Platform", name: "FreeCodeCamp", url: "https://www.freecodecamp.org/" },
              { type: "Platform", name: "SoloLearn", url: "https://www.sololearn.com/" },
              { type: "Platform", name: "Kaggle", url: "https://www.kaggle.com/" }
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

export default AndroidDocs;