import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

// Gallery Images
const galleryImages = [
  { src: "/src/assets/1.png",  },
  { src: "/src/assets/2.png", },
  { src: "/src/assets/3.png",  },
  { src: "/src/assets/4.png",  },
  { src: "/src/assets/5.png",  },
  { src: "/src/assets/6.png",  },
  { src: "/src/assets/7.png",  },
  { src: "/src/assets/8.jpg",  },
];

const Gallery = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="w-full py-24 bg-[#020c1b] text-white relative overflow-hidden">
      {/* Floating Stars & Planets */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-70"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-extrabold uppercase tracking-wide mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Capturing Moments, Creating Memories
          </span>
          <span className="ml-2">📸</span>
        </h2>

        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          At <span className="text-blue-400 font-semibold">Technocrats Developer Community</span>, we don’t just learn—we **build, innovate, and inspire**.
          Every event, every challenge, and every late-night coding session **shapes our journey**.
          **From hackathons to workshops, from failures to breakthroughs—these are our moments of growth.**
          Here’s a glimpse of the passion, energy, and collaboration that define us. 🚀
        </p>

        <div className="relative">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 z-10 hidden md:block"
          >
            <FaArrowLeft className="text-2xl" />
          </button>

          <Slider {...settings} ref={sliderRef} className="px-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="px-4">
                <div
                  className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-lg font-semibold text-white bg-black/50 px-3 py-1 rounded-md transition-transform duration-300 group-hover:translate-y-[-10px]">
                    
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 z-10 hidden md:block"
          >
            <FaArrowRight className="text-2xl" />
          </button>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative p-4">
            <button
              className="absolute top-2 right-2 text-white text-2xl hover:text-gray-300 transition"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>
            <img
              src={selectedImage}
              alt="Zoomed"
              className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
