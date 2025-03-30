import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";

type Mentor = {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  image: string;
  details: string;
};

const mentors: Mentor[] = [
  {
    name: "Ankit Kumar",
    role: "Full-Stack Developer",
    bio: "Expert in MERN stack and passionate about mentoring students in web development.",
    linkedin: "https://www.linkedin.com/in/ankitkumar0905/",
    image: "/src/assets/mentors/ankit kumar.jpg",
    details: "Engineer Intern at Ramraj Technology Solutions | Python, Java, AWS, AI Fundamentals. Android developer specializing in hybrid mobile apps. Skilled in C++, Java, and DSA with multiple frontend projects. Passionate about transforming ideas into reality."
  },
  {
    name: "Anand Soni",
    role: "AI & ML Expert",
    bio: "AI researcher with expertise in NLP and Computer Vision, guiding students in AI-driven careers.",
    linkedin: "https://www.linkedin.com/in/anandsoni992/",
    image: "/src/assets/mentors/Anand Soni.png",
    details: "Placed in Capgemini, TCS(Digital), Accenture, and more. Microsoft & GitHub certified with AICTE internships. Former Government Intern at Bhopal Municipal Corporation, improving digital infrastructure. Passionate about networking and collaboration."
  },
  {
    name: "Ankit Patel",
    role: "Cybersecurity Specialist",
    bio: "Ethical hacker and cybersecurity expert ensuring digital security and privacy.",
    linkedin: "https://www.linkedin.com/in/ankit-patel-563b9927b/",
    image: "/src/assets/mentors/ankit patel .jpg",
    details: "Engineering student passionate about problem-solving and innovation. Hands-on experience with Python ML projects. Eager to learn new technologies and implement them in real life."
  }
];

const Mentors = () => {
  const [flipped, setFlipped] = useState<boolean[]>(Array(mentors.length).fill(false));

  const handleFlip = (index: number) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white py-16">
      <h1 className="text-4xl font-extrabold text-blue-400 mb-10 uppercase tracking-wider text-center">
        Meet Our Mentors
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {mentors.map((mentor, index: number) => (
          <div key={index} className="relative w-full perspective-1000">
            <div
              className={`relative w-full h-[500px] transition-transform duration-700 transform ${
                flipped[index] ? "rotate-y-180" : ""
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >

              <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-blue-500">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-50 h-61 rounded-xl border-4 border-blue-400 shadow-lg"
                />
                <h2 className="mt-4 text-2xl font-bold text-white">{mentor.name}</h2>
                <p className="text-blue-300 text-lg font-medium">{mentor.role}</p>
                <p className="text-gray-300 text-sm mt-2 px-4">{mentor.bio}</p>
                <a
                  href={mentor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-semibold flex items-center gap-2 shadow-md hover:bg-blue-600 transition"
                >
                  <FaLinkedin /> Connect
                </a>
              </div>

              <div
                className="absolute w-full h-full backface-hidden bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 text-center rotate-y-180 border border-gray-600"
              >
                <p className="text-gray-300 text-sm px-4">{mentor.details}</p>
              </div>
            </div>

            <button
              onClick={() => handleFlip(index)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-semibold block mx-auto shadow-md hover:bg-blue-600 transition"
            >
              Flip
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mentors;
