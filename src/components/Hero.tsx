"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { LampContainer } from "./ui/lamp";
import muleImage from "@/assets/mule.webp";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Scale animation: increases as scrolling down, then decreases after passing
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 1.2, 1]
  );

  return (
    <div ref={containerRef}>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Empowering Your Digital <br /> Connectivity
        </motion.h1>
      </LampContainer>

      {/* Single Product Image Container */}
      <motion.div
        style={{
          scale,
        }}
        className="w-full flex items-center justify-center py-16 px-4"
      >
        <div className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            style={{
              width: "100%",
              height: "600px",
            }}
          >
            <img
              src={muleImage}
              alt="MuleCraft Product"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
