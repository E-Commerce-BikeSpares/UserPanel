import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bike1 from "../../assets/HeroSection/Hero-Accessories.webp";
import bike2 from "../../assets/HeroSection/Hero-Wheel.jpg";
import bike3 from "../../assets/HeroSection/Hero-Head.jpg";
import bike4 from "../../assets/HeroSection/Hero-Light.jpg";
import { FaCog, FaTachometerAlt, FaTools, FaBolt } from "react-icons/fa"; 

const slides = [
  {
    image: bike1,
    title: "Upgrade Your Ride",
    description: "Find premium bike spares and accessories to enhance your performance.",
    buttonText: "Shop Now",
    icon: <FaCog className="text-blue-500 text-4xl" />
  },
  {
    image: bike2,
    title: "Precision Engineering",
    description: "Explore high-performance parts designed for durability and speed.",
    buttonText: "Discover More",
    icon: <FaTachometerAlt className="text-blue-500 text-4xl" />
  },
  {
    image: bike3,
    title: "Custom Builds",
    description: "Create your dream bike with our customizable parts and accessories.",
    buttonText: "Get Started",
    icon: <FaTools className="text-blue-500 text-4xl" />
  },
  {
    image: bike4,
    title: "Lightning Fast",
    description: "Experience unmatched speed with our lightweight, aerodynamic components.",
    buttonText: "Explore Now",
    icon: <FaBolt className="text-blue-500 text-4xl" />
  }
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[index];

  return (
    <div className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10"></div>
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={currentSlide.image}
            alt="Bike Spares and Accessories"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      <div className="relative z-20 w-full max-w-7xl px-6 text-center">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.div
            className="mb-3"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {currentSlide.icon}
          </motion.div>

          <h1 className="text-6xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-3">
            {currentSlide.title}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-3">
            {currentSlide.description}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            {currentSlide.buttonText}
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-20 left-20 z-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaCog className="text-white/30 text-6xl" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-20 z-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaBolt className="text-white/30 text-6xl" />
      </motion.div>
    </div>
  );
}