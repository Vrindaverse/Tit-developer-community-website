import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const INITIAL_STARS = 100;
const MAX_STARS = 250;
const MAX_DISTANCE = 120;
const STAR_SPEED = 0.2;
const FLOAT_SPEED = -0.05;
const NEW_STAR_INTERVAL = 1500;
const CONSTELLATION_GROUP_SIZE = 6;

// Define Star type
type Star = {
  x: number;
  y: number;
  radius: number;
  dx: number;
  dy: number;
  connections: number[];
  isConstellation: boolean;
};

const Constellation = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const createStar = (isConstellation = false): Star => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
      connections: [],
      isConstellation,
    });

    let currentStars: Star[] = Array.from({ length: INITIAL_STARS }, () => createStar(Math.random() < 0.3));
    setStars(currentStars);

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      currentStars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.isConstellation ? "rgba(255, 200, 150, 0.9)" : "rgba(255, 255, 255, 0.8)";
        ctx.fill();
      });

      currentStars.forEach((star, i) => {
        star.connections = [];
        for (let j = i + 1; j < currentStars.length; j++) {
          const dx = star.x - currentStars[j].x;
          const dy = star.y - currentStars[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < MAX_DISTANCE || (star.isConstellation && currentStars[j].isConstellation && distance < MAX_DISTANCE * 1.5)) {
            star.connections.push(j);
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(currentStars[j].x, currentStars[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / MAX_DISTANCE})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      });
    };

    const updateStars = () => {
      currentStars.forEach((star) => {
        star.x += star.dx * STAR_SPEED;
        star.y += FLOAT_SPEED;

        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
      });

      drawStars();
      requestAnimationFrame(updateStars);
    };

    const addNewStar = () => {
      if (currentStars.length < MAX_STARS) {
        currentStars = [...currentStars, createStar(Math.random() < 0.3)];
        setStars(currentStars);
      }
    };

    const handleMouseClick = (e: MouseEvent) => {
      let newStars: Star[] = [...currentStars];
      let constellationCenter = { x: e.clientX, y: e.clientY };
      let newConstellation: Star[] = [];
      
      // Randomize shape patterns for constellations
      const randomShapeFactor = Math.random() * 80 + 20;
      const angleStep = (Math.PI * 2) / CONSTELLATION_GROUP_SIZE;
      
      for (let i = 0; i < CONSTELLATION_GROUP_SIZE; i++) {
        const angle = i * angleStep;
        newConstellation.push({
          x: constellationCenter.x + Math.cos(angle) * randomShapeFactor,
          y: constellationCenter.y + Math.sin(angle) * randomShapeFactor,
          radius: Math.random() * 2 + 1,
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 2,
          connections: [],
          isConstellation: true,
        });
      }
      
      newStars = [...newStars, ...newConstellation];
      setStars(newStars);
      currentStars = newStars;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawStars();
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    updateStars();
    const starInterval = setInterval(addNewStar, NEW_STAR_INTERVAL);

    window.addEventListener("resize", handleResize);
    window.addEventListener("click", handleMouseClick);

    return () => {
      clearInterval(starInterval);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", handleMouseClick);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};

export default Constellation;
