"use client";

import { motion } from "motion/react";
import muleImage from "@/assets/mule.webp";
import zensarkLogo from "@/assets/zensark.jpg";
import nvidiaLogo from "@/assets/nvidia(1).png";
import accionLogo from "@/assets/accion.svg";
import tekisticLogo from "@/assets/tekistic.webp";

const Hero = () => {
  const clients = [
    { src: nvidiaLogo, alt: "Nvidia", className: "h-5 md:h-6 lg:h-7" },
    { src: tekisticLogo, alt: "Tekistic", className: "h-4 md:h-5 lg:h-6" },
    { src: accionLogo, alt: "Accion Labs", className: "h-4 md:h-5 lg:h-6" },
    { src: zensarkLogo, alt: "Zensark", className: "h-5 md:h-6 lg:h-7" },
    {
      src: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/feature/images/Common%20Images/aequalis-logo.webp",
      alt: "Aequalis",
      className: "h-5 md:h-6 lg:h-7",
    },
  ];

  return (
    <div 
      className="w-full relative flex flex-col overflow-visible"
      style={{
        background: "linear-gradient(135deg, #ff8e53 0%, #ff6b9d 30%, #c44569 60%, #6c5ce7 85%, #4834d4 100%)",
      }}
    >
      {/* Main Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 pb-24 md:pb-28 max-w-7xl relative z-10 flex-1 flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center flex-1">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-white leading-tight mb-6"
            >
              <span className="text-white">Empowering Your Digital</span>
              <br />
              <span style={{ color: "rgb(58, 58, 58)" }}>
                Connectivity
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
            >
              Transform your business with seamless integrations, intelligent automation, and cutting-edge solutions. From integration to innovation, instantly.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                className="px-8 py-3 rounded-full font-semibold transition-all duration-200 text-base md:text-lg"
                style={{
                  background: "#ffffff",
                  color: "#000000",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#f5f5f5";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#ffffff";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Book Demo
              </button>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative w-full max-w-lg"
            >
              <img
                src={muleImage}
                alt="MuleCraft Integration Platform"
                className="w-full h-auto rounded-lg shadow-2xl"
                style={{
                  filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Client Logos Section - At the bottom of hero, half in hero and half in next component */}
      <div className="w-[600px] bg-white border-t-2 border-white/20 py-4 md:py-5 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 rounded-lg">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 md:gap-5 lg:gap-6 flex-wrap">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                className="flex items-center justify-center"
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className={`${client.className} w-auto object-contain opacity-70 hover:opacity-100 transition-opacity`}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
