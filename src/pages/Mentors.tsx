import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import Anand_soni from "../assets/mentors/Anand_Soni.png";
import ankit_kumar from "../assets/mentors/ankit_kumar.jpg";
import ankit_patel from "../assets/mentors/ankit_patel.jpg";
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
    image: ankit_kumar,
    details:
      "Engineer Intern at Ramraj Technology Solutions | Python, Java, AWS, AI Fundamentals. Android developer specializing in hybrid mobile apps. Skilled in C++, Java, and DSA with multiple frontend projects. Passionate about transforming ideas into reality.",
  },
  {
    name: "Anand Soni",
    role: "AI & ML Expert",
    bio: "AI researcher with expertise in NLP and Computer Vision, guiding students in AI-driven careers.",
    linkedin: "https://www.linkedin.com/in/anandsoni992/",
    image: Anand_soni,
    details:
      "Placed in Capgemini, TCS(Digital), Accenture, and more. Microsoft & GitHub certified with AICTE internships. Former Government Intern at Bhopal Municipal Corporation, improving digital infrastructure. Passionate about networking and collaboration.",
  },
  {
    name: "Ankit Patel",
    role: "Cybersecurity Specialist",
    bio: "Ethical hacker and cybersecurity expert ensuring digital security and privacy.",
    linkedin: "https://www.linkedin.com/in/ankit-patel-563b9927b/",
    image: ankit_patel,
    details:
      "Engineering student passionate about problem-solving and innovation. Hands-on experience with Python ML projects. Eager to learn new technologies and implement them in real life.",
  },
];

const MentorCard = ({ mentor }: { mentor: Mentor }) => {
  const [flipped, setFlipped] = useState(false);

  // Only toggle the card flip on devices that don't support hover (i.e. mobile/touch devices)
  const handleCardClick = () => {
    if (window.matchMedia("(hover: none)").matches) {
      setFlipped((prev) => !prev);
    }
  };

  return (
    <div
      className="relative w-full perspective-1000 group"
      onClick={handleCardClick}
    >
      <div
        className={`relative w-full h-[400px] sm:h-[500px] transition-transform duration-700 transform ${
          flipped ? "rotate-y-180" : ""
        } group-hover:rotate-y-180`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Face */}
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg rounded-2xl flex flex-col items-center justify-between p-6 text-center border border-blue-500">
          <div className="flex flex-col items-center">
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-48 h-48 md:w-56 md:h-56 rounded-xl border-4 border-blue-400 shadow-lg mb-4"
            />
            <h2 className="text-xl md:text-2xl font-bold text-white">
              {mentor.name}
            </h2>
            <p className="text-blue-300 text-lg md:text-xl font-medium">
              {mentor.role}
            </p>
            <p className="text-gray-300 text-sm md:text-base mt-2 px-4">
              {mentor.bio}
            </p>
          </div>
          <a
            href={mentor.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 right-2 text-blue-500 hover:text-blue-600"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Back Face */}
        <div className="absolute w-full h-full backface-hidden bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 text-center rotate-y-180 border border-gray-600">
          <h3 className="text-lg md:text-xl font-bold text-white mb-4">
            Details
          </h3>
          <div className="text-gray-400 text-sm md:text-base leading-relaxed px-4 mb-6">
            {mentor.details.split(". ").map((sentence, i) => (
              <p key={i} className="mb-2 last:mb-0">
                {sentence.trim()}
                {i !== mentor.details.split(". ").length - 1 && "."}
              </p>
            ))}
          </div>
          <a
            href={mentor.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-500 text-white rounded-full text-sm md:text-base font-semibold flex items-center gap-2 shadow-md hover:bg-blue-600 transition"
          >
            <FaLinkedin /> Connect
          </a>
        </div>
      </div>
    </div>
  );
};

const Mentors = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white py-16 relative z-10">
      <h1 className="text-4xl font-extrabold text-blue-400 mb-10 uppercase tracking-wider text-center">
        Meet Our Mentors
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
        {mentors.map((mentor, index) => (
          <MentorCard key={index} mentor={mentor} />
        ))}
      </div>
    </section>
  );
};

export default Mentors;
