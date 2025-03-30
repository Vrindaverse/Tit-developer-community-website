import { motion } from "framer-motion";
import { FaMedal } from "react-icons/fa";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const hallOfFameData = [
  {
    category: "Android Development",
    students: [
      { name: "Dipu Kumar", year: "2nd Year", achievements: ["5+ projects", "4+ certifications", "App deployed on Play Store"] },
      { name: "Aryan Sharma", year: "3rd Year", achievements: ["10+ projects", "5+ hackathons", "Play Store deployments", "Developed successful apps"] },
    ],
  },
  {
    category: "Machine Learning",
    students: [
      { name: "Aman Mishra", year: "2nd Year", achievements: ["5+ major projects", "SIH 2024 Finalist", "Implemented deep learning algorithms"] },
      { name: "Deepika Deshmukh", year: "3rd Year", achievements: ["10+ projects", "5+ hackathons", "AI-based solutions deployed"] },
    ],
  },
  {
    category: "Web Development",
    students: [
      { name: "Prakhar", year: "2nd Year", achievements: ["10+ projects", "SIH 2024 Finalist", "Full-stack projects deployed"] },
      { name: "Naman Kumar", year: "3rd Year", achievements: ["5+ projects", "Secured internship", "Created robust web applications"] },
    ],
  },
  {
    category: "Cybersecurity",
    students: [
      { name: "Akash Kumar", year: "2nd Year", achievements: ["3+ projects", "ATS-optimized resume", "Ethical hacking expertise"] },
      { name: "Mohd Meraaz", year: "3rd Year", achievements: ["Successfully completed cybersecurity training", "Certified Ethical Hacker"] },
    ],
  },
];

const galleryImages = [
  "/src/assets/hall of fame/hall1.JPG",
  "/src/assets/hall of fame/hall2.JPG",
"/src/assets/hall of fame/hall3.JPG",
 "/src/assets/hall of fame/hall4.JPG",
  "/src/assets/hall of fame/hall5.JPG",
  "/src/assets/hall of fame/hall6.JPG",
  "/src/assets/hall of fame/hall7.JPG",
  "/src/assets/hall of fame/hall8.JPG",
];

const HallOfFame = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 px-10 lg:px-40 bg-[#020c1b] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-blue-400">Gallery</h2>
          <p className="text-gray-400 mt-2">A glimpse of our Hall of Fame moments and memories.</p>

          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={2500}
            className="mt-6"
            containerClass="carousel-container"
            draggable
            infinite
            itemClass="carousel-item"
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            responsive={{
              desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
              tablet: { breakpoint: { max: 1024, min: 768 }, items: 1 },
              mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
            }}
            showDots={true}
            slidesToSlide={1}
            swipeable
          >
            {galleryImages.map((image, i) => (
              <motion.div
                key={i}
                className="p-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image}
                  alt={`Hall of Fame ${i + 1}`}
                  className="rounded-lg shadow-lg w-full h-[500px] object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                  onClick={() => setSelectedImage(image)}
                />
              </motion.div>
            ))}
          </Carousel>
          
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
              <div className="relative max-w-5xl w-full px-6">
                <button
                  className="absolute top-3 right-3 bg-white text-black px-4 py-2 rounded-full font-bold text-lg"
                  onClick={() => setSelectedImage(null)}
                >
                  ✖
                </button>
                <motion.img
                  src={selectedImage}
                  alt="Fullscreen Preview"
                  className="w-full h-[80vh] object-contain rounded-lg shadow-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-wide text-blue-400 mt-16"
        >
          Hall of Fame
        </motion.h1>
        <p className="mt-3 text-lg text-gray-300">
          Celebrating excellence and innovation in our community. These achievers have set remarkable milestones in their respective fields. They inspire us with their determination and passion.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {hallOfFameData.map((domain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="w-full bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-700 hover:scale-105 transform transition-transform duration-500"
            >
              <h2 className="text-2xl font-bold text-blue-400">{domain.category}</h2>
              <p className="text-gray-400 text-sm mt-1">Recognizing outstanding individuals in {domain.category}. These students have gone above and beyond, contributing to the growth of the community and excelling in their field.</p>

              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                {domain.students.map((student, studentIndex) => (
                  <motion.div
                    key={studentIndex}
                    className="flip-card w-full h-56 relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                  >
                    <div className="flip-card-inner">
                      {/* Front Side */}
                      <div className="flip-card-front flex items-center justify-center bg-gray-700 text-white rounded-lg shadow-md border border-gray-600">
                        <h3 className="text-lg font-semibold">{student.name}</h3>
                      </div>

                      {/* Back Side */}
                      <div className="flip-card-back flex flex-col items-center justify-center bg-blue-500 text-white shadow-md border border-blue-400">
                        <FaMedal className="text-yellow-300 text-3xl mb-2" />
                        <h4 className="text-lg font-semibold">{student.year}</h4>
                        <ul className="mt-2 text-gray-200 text-sm space-y-1 text-center">
                          {student.achievements.map((achievement, i) => (
                            <li key={i}>• {achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: hallOfFameData.length * 0.2, duration: 0.8 }}
  className="w-full bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-700 mt-8 text-center"
>
  <motion.h2
    className="text-3xl font-semibold text-blue-400"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
  >
    Ready to Make Your Mark?
  </motion.h2>
  <motion.p
    className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
  >
    Excellence is achieved by those who continuously push the boundaries of what’s possible. The Hall of Fame showcases those who have made an extraordinary impact, but your journey is just beginning. Keep striving, and your name could be next.
  </motion.p>

  <motion.p
    className="text-lg text-gray-400 mt-6 font-medium"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.6 }}
  >
    So, why are you waiting? Join us and be part of the revolution.
  </motion.p>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default HallOfFame;
