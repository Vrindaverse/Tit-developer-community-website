import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AIDocs = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = `Welcome to TIT Dev Docs - AI/ML Section!

Your gateway to mastering Artificial Intelligence and Machine Learning.
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
      title: "Artificial Intelligence and Machine Learning",
      path: "/docs/ai-ml",
      description:
        "Dive deep into the world of AI and ML, covering fundamental concepts, algorithms, and practical applications.",
      whyLearn:
        "AI and ML are transforming industries, enabling automation, predictive analytics, and intelligent systems.",
      benefits:
        "High demand in job market, versatile applications, and the ability to solve complex problems.",
      futureScope:
        "Advancements in AI and ML will drive innovation in healthcare, finance, autonomous vehicles, and more.",
      roadmap: {
        beginner: [
          {
            title: "Introduction to AI and ML",
            description: "Understand the basics of AI and ML.",
            resources: [
              { type: "Documentation", name: "AI/ML Glossary", url: "https://developers.google.com/machine-learning/glossary" },
              { type: "Book", name: "Artificial Intelligence: A Guide for Thinking Humans", author: "Melanie Mitchell", url: "https://www.amazon.com/Artificial-Intelligence-Guide-Thinking-Humans/dp/0393635938" },
              { type: "YouTube Channel", name: "3Blue1Brown", url: "https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw" },
              { type: "Platform", name: "Coursera", url: "https://www.coursera.org/specializations/artificial-intelligence" }
            ]
          },
          {
            title: "Mathematics for AI/ML",
            description: "Linear Algebra, Calculus, Probability, and Statistics.",
            resources: [
              { type: "Documentation", name: "Khan Academy Math", url: "https://www.khanacademy.org/math" },
              { type: "Book", name: "Linear Algebra and Its Applications", author: "Gilbert Strang", url: "https://www.amazon.com/Linear-Algebra-Applications-Gilbert-Strang/dp/0030105676" },
              { type: "Book", name: "Calculus Volume 1", author: "Gilbert Strang", url: "https://ocw.mit.edu/resources/res-18-001-calculus-online-textbook-spring-2005/textbook/" },
              { type: "Platform", name: "edX", url: "https://www.edx.org/learn/math" }
            ]
          },
          {
            title: "Programming for AI/ML",
            description: "Python, R, or Julia.",
            resources: [
              { type: "Documentation", name: "Python Documentation", url: "https://docs.python.org/3/" },
              { type: "Book", name: "Automate the Boring Stuff with Python", author: "Al Sweigart", url: "https://automatetheboringstuff.com/" },
              { type: "YouTube Channel", name: "Corey Schafer", url: "https://www.youtube.com/user/schafer5" },
              { type: "Platform", name: "Codecademy", url: "https://www.codecademy.com/" }
            ]
          },
          {
            title: "Data Manipulation and Analysis",
            description: "Pandas, NumPy, Matplotlib.",
            resources: [
              { type: "Documentation", name: "Pandas Documentation", url: "https://pandas.pydata.org/pandas-docs/stable/" },
              { type: "Documentation", name: "NumPy Documentation", url: "https://numpy.org/doc/stable/" },
              { type: "Documentation", name: "Matplotlib Documentation", url: "https://matplotlib.org/stable/contents.html" },
              { type: "Book", name: "Python for Data Analysis", author: "Wes McKinney", url: "https://www.oreilly.com/library/view/python-for-data/9781491957653/" },
              { type: "Platform", name: "DataCamp", url: "https://www.datacamp.com/" }
            ]
          },
          {
            title: "Introduction to Machine Learning",
            description: "Supervised and Unsupervised Learning.",
            resources: [
              { type: "Documentation", name: "Scikit-learn Documentation", url: "https://scikit-learn.org/stable/" },
              { type: "Book", name: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow", author: "Aurélien Géron", url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/" },
              { type: "YouTube Channel", name: "StatQuest with Josh Starmer", url: "https://www.youtube.com/channel/UCtYLUTtgS3k1Fg4y5tAhLbw" },
              { type: "Platform", name: "Udemy", url: "https://www.udemy.com/" }
            ]
          }
        ],
        intermediate: [
          {
            title: "Deep Learning",
            description: "Neural Networks, Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNNs).",
            resources: [
              { type: "Documentation", name: "TensorFlow Documentation", url: "https://www.tensorflow.org/" },
              { type: "Documentation", name: "PyTorch Documentation", url: "https://pytorch.org/docs/stable/index.html" },
              { type: "Book", name: "Deep Learning", author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville", url: "https://www.deeplearningbook.org/" },
              { type: "YouTube Channel", name: "3Blue1Brown", url: "https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw" },
              { type: "Platform", name: "Fast.ai", url: "https://www.fast.ai/" }
            ]
          },
          {
            title: "Natural Language Processing (NLP)",
            description: "Text processing, sentiment analysis, language models.",
            resources: [
              { type: "Documentation", name: "NLTK Documentation", url: "https://www.nltk.org/" },
              { type: "Documentation", name: "spaCy Documentation", url: "https://spacy.io/usage" },
              { type: "Book", name: "Speech and Language Processing", author: "Daniel Jurafsky, James H. Martin", url: "https://web.stanford.edu/~jurafsky/slp3/" },
              { type: "YouTube Channel", name: "Sentdex", url: "https://www.youtube.com/user/sentdex" },
              { type: "Platform", name: "Coursera", url: "https://www.coursera.org/specializations/natural-language-processing" }
            ]
          },
          {
            title: "Computer Vision",
            description: "Image processing, object detection, image segmentation.",
            resources: [
              { type: "Documentation", name: "OpenCV Documentation", url: "https://docs.opencv.org/master/" },
              { type: "Documentation", name: "TensorFlow Object Detection API", url: "https://tensorflow-object-detection-api-tutorial.readthedocs.io/en/latest/" },
              { type: "Book", name: "Computer Vision: Algorithms and Applications", author: "Richard Szeliski", url: "https://szeliski.org/Book/" },
              { type: "YouTube Channel", name: "Computerphile", url: "https://www.youtube.com/user/Computerphile" },
              { type: "Platform", name: "Udacity", url: "https://www.udacity.com/" }
            ]
          },
          {
            title: "Reinforcement Learning",
            description: "Q-learning, Deep Q-Networks (DQN), Policy Gradients.",
            resources: [
              { type: "Documentation", name: "Stable Baselines3", url: "https://stable-baselines3.readthedocs.io/en/master/" },
              { type: "Book", name: "Reinforcement Learning: An Introduction", author: "Richard S. Sutton, Andrew G. Barto", url: "http://incompleteideas.net/book/the-book-2nd.html" },
              { type: "YouTube Channel", name: "Deep Reinforcement Learning", url: "https://www.youtube.com/channel/UCB7k56qOe0Jz50ZI3B9Tl4g" },
              { type: "Platform", name: "edX", url: "https://www.edx.org/learn/reinforcement-learning" }
            ]
          },
          {
            title: "Time Series Analysis",
            description: "Forecasting, ARIMA, LSTM.",
            resources: [
              { type: "Documentation", name: "Statsmodels Documentation", url: "https://www.statsmodels.org/stable/index.html" },
              { type: "Book", name: "Time Series Analysis and Its Applications", author: "Robert H. Shumway, David S. Stoffer", url: "https://www.springer.com/gp/book/9783319524517" },
              { type: "YouTube Channel", name: "StatQuest with Josh Starmer", url: "https://www.youtube.com/channel/UCtYLUTtgS3k1Fg4y5tAhLbw" },
              { type: "Platform", name: "Kaggle", url: "https://www.kaggle.com/" }
            ]
          }
        ],
        advanced: [
          {
            title: "Advanced Deep Learning",
            description: "Generative Adversarial Networks (GANs), Autoencoders, Transfer Learning.",
            resources: [
              { type: "Documentation", name: "TensorFlow Documentation", url: "https://www.tensorflow.org/" },
              { type: "Documentation", name: "PyTorch Documentation", url: "https://pytorch.org/docs/stable/index.html" },
              { type: "Book", name: "Deep Learning Generative Models", author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville", url: "https://www.deeplearningbook.org/" },
              { type: "YouTube Channel", name: "3Blue1Brown", url: "https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw" },
              { type: "Platform", name: "Fast.ai", url: "https://www.fast.ai/" }
            ]
          },
          {
            title: "Research Papers and Publications",
            description: "Stay updated with the latest research in AI/ML.",
            resources: [
              { type: "Publication", name: "arXiv", url: "https://arxiv.org/" },
              { type: "Publication", name: "IEEE Xplore", url: "https://ieeexplore.ieee.org/" },
              { type: "Publication", name: "Google Scholar", url: "https://scholar.google.com/" },
              { type: "Platform", name: "ResearchGate", url: "https://www.researchgate.net/" }
            ]
          },
          {
            title: "Ethical AI and Bias Mitigation",
            description: "Understand ethical considerations in AI/ML.",
            resources: [
              { type: "Documentation", name: "AI Ethics Guidelines", url: "https://www.ethicsguidelines.ai/" },
              { type: "Book", name: "Weapons of Math Destruction", author: "Cathy O'Neil", url: "https://www.amazon.com/Weapons-Math-Destruction-Increases-Inequality/dp/0553418815" },
              { type: "YouTube Channel", name: "The Ethical Algorithm", url: "https://www.youtube.com/watch?v=4w5X5H6Kxlc" },
              { type: "Platform", name: "Medium", url: "https://medium.com/ethics-in-ai" }
            ]
          },
          {
            title: "Deploying AI/ML Models",
            description: "Model deployment, containerization, orchestration.",
            resources: [
              { type: "Documentation", name: "TensorFlow Serving", url: "https://www.tensorflow.org/tfx/guide/serving" },
              { type: "Documentation", name: "AWS SageMaker", url: "https://aws.amazon.com/sagemaker/" },
              { type: "Book", name: "Deploying Machine Learning Models in Production", author: "Sandro Mancuso", url: "https://www.amazon.com/Deploying-Machine-Learning-Models-Production/dp/1492031897" },
              { type: "YouTube Channel", name: "Academind", url: "https://www.youtube.com/channel/UCSJbGtTlrDami-tDTPW9xAg" },
              { type: "Platform", name: "Udemy", url: "https://www.udemy.com/" }
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

export default AIDocs;