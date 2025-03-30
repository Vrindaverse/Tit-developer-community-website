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
    images: [
      "/src/assets/blue.png",
    ],
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
    images: [
      "/src/assets/1.png",
      "/src/assets/2.png",
    ],
  },
];

const Events = () => {
  return (
    <section className="min-h-screen bg-gray-950 text-white px-6 py-32">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-5xl font-extrabold text-blue-400 mb-20 text-center uppercase tracking-wide"
      >
        Our Events
      </motion.h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-full max-w-7xl mx-auto">
        {eventsData.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
            className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            
            <div className="w-full rounded-lg overflow-hidden shadow-lg mb-6">
              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={3000}
                className="mt-4"
                containerClass="carousel-container"
                draggable
                infinite
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                responsive={{
                  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
                  tablet: { breakpoint: { max: 1024, min: 768 }, items: 1 },
                  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
                }}
                showDots={true}
                slidesToSlide={1}
                swipeable
              >
                {event.images.map((image, i) => (
                  <div key={i} className="p-4">
                    <motion.img
                      src={image}
                      alt={`Event ${index + 1} - Image ${i + 1}`}
                      className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>
                ))}
              </Carousel>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-xl font-bold text-blue-400 mb-4"
            >
              {event.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-gray-300 mt-4 text-sm leading-relaxed text-center"
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