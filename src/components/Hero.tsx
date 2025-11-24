"use client";

import { motion } from "motion/react";
import zensarkLogo from "@/assets/zensark.jpg";
import nvidiaLogo from "@/assets/nvidia(1).png";
import accionLogo from "@/assets/accion.svg";
import tekisticLogo from "@/assets/tekistic.webp";

const Hero = () => {
  const clients = [
    { src: nvidiaLogo, alt: "Nvidia", className: "h-6 md:h-7 lg:h-8" },
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
      className="w-full relative flex flex-col overflow-visible min-h-[80vh]"
      style={{
        background: "linear-gradient(135deg, #ff8e53 0%, #ff6b9d 30%, #c44569 60%, #6c5ce7 85%, #4834d4 100%)",
      }}
    >
      {/* Main Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-0 max-w-5xl relative z-10 w-full">
        {/* Content - Center Aligned */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight mb-8 md:mb-10"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Empowering Your Digital</span>
            <br />
            <span className="text-white">
              Connectivity
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Transform your business with seamless integrations, intelligent automation, and cutting-edge solutions. From integration to innovation, instantly.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-0"
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
      </div>

      {/* Client Logos Section - At the bottom of hero, half in hero and half in next component */}
      <div className="w-[600px] bg-white border-t-2 border-white/20 py-4 md:py-5 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[45%] z-20 rounded-lg">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8 flex-wrap">
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
