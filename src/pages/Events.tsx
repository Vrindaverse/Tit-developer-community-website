import React from 'react';
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const eventsData = [
  {
    title: "Android Development Workshop",
    description: "Learn how to create Android apps from scratch. A hands-on workshop for beginners and experts alike.",
    images: [
      "/src/assets/android.png",
      "/src/assets/android2.png",
      "/src/assets/android3.png",
    ],
  },
  {
    title: "Web Development Hackathon",
    description: "Build and showcase your web development skills in this exciting hackathon!",
    images: ["/src/assets/blue.png"],
  },
  {
    title: "Coding Quest",
    description: "A competitive programming event to challenge your problem-solving skills.",
    images: [
      "/src/assets/coding.png",
      "/src/assets/hall of fame/hall7.JPG",
    ],
  },
  {
    title: "Regular Classes (Google Classroom, Google Meet)",
    description: "Weekly classes covering various programming languages and tools. Stay up-to-date with the latest in tech.",
    images: ["/src/assets/1.png", "/src/assets/2.png"],
  },
]; // Existing data

// Update the props interface to make both properties optional.
interface CustomDotProps {
  onClick?: () => void;
  active?: boolean;
}

// Provide default values so that cloned elements receive valid props.
const CustomDot: React.FC<CustomDotProps> = ({ onClick = () => {}, active = false }) => {
  return (
    <button
      onClick={onClick}
      className={`${active ? 'bg-blue-500' : 'bg-gray-500'} w-3 h-3 rounded-full mx-1 transition-all duration-200 focus:outline-none`}
      style={{ transform: active ? 'scale(1.2)' : 'scale(1)' }}
    />
  );
};

const Events = () => {
  return (
    <section className="min-h-screen bg-gray-950 text-white px-4 sm:px-6 py-12 sm:py-24">
      {/* Responsive Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 mb-8 sm:mb-12 text-center tracking-wide"
      >
        Our Events
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl mx-auto">
        {eventsData.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-6 flex flex-col items-center transform transition-transform duration-300 ease-in-out active:scale-95"
            whileTap={{ scale: 0.95 }}
          >
            {/* Responsive Carousel */}
            <div className="w-full rounded-xl overflow-hidden shadow-md mb-4">
              <Carousel
                arrows
                autoPlay
                autoPlaySpeed={4000}
                draggable
                infinite
                keyBoardControl
                minimumTouchDrag={50}
                responsive={{
                  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
                  tablet: { breakpoint: { max: 1024, min: 641 }, items: 1 },
                  desktop: { breakpoint: { max: 3000, min: 1025 }, items: 1 },
                }}
                showDots
                customDot={<CustomDot />}  // Pass the CustomDot as a React element.
                className="rounded-xl"
              >
                {event.images.map((image, i) => (
                  <div key={i} className="p-2 sm:p-4">
                    <motion.img
                      src={image}
                      alt={`${event.title} Image ${i + 1}`}
                      className="w-full h-40 sm:h-48 object-cover rounded-xl shadow-lg transition-transform duration-300 ease-in-out"
                      whileTap={{ scale: 1.05 }}
                    />
                  </div>
                ))}
              </Carousel>
            </div>

            {/* Responsive Content */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg sm:text-xl font-semibold text-blue-400 mb-2 mt-4 px-2 text-center"
            >
              {event.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-gray-300 text-xs sm:text-sm leading-relaxed text-center px-2 mb-4"
            >
              {event.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Events;
