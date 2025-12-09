"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import Clients from "./Clients";
import h1Img from "../assets/h1.png";
import h2Img from "../assets/h2.png";

interface HeroProps {
  eyebrow?: string;
  headline?: string;
  description?: string;
  ctaText?: string;
  ctaUrl?: string;
}

const Hero = ({
  eyebrow = "MULECRAFT INTEGRATION PLATFORM",
  headline = "Open the doors to seamless integrations for your customers",
  description = "Enable your customers to integrate anywhere in the world—right from your product. Use MuleCraft's powerful APIs and low-code solutions to expand into a new category in days. Transform the world of integrations with us.",
  ctaText = "Contact Us",
  ctaUrl = "#",
}: HeroProps) => {
  const heroContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={heroContainerRef}
      className="w-full relative bg-[#f8f9fa]"
      style={{ minHeight: "100vh", overflow: "visible" }}
    >
      {/* Left Dotted Animation - h2.png (swapped) */}
      <div
  className="absolute left-0 z-20 pointer-events-none"
  style={{
    top: "2vh",        // move down a bit
    height: "97vh",    // slightly smaller than hero
    overflow: "hidden"
  }}
>
  <img
    src={h2Img}
    alt="Left decoration"
    style={{
      height: "80vh",  // a little taller than container → looks longer
      maxWidth: "180px",
      width: "auto",
      objectFit: "cover",
      objectPosition: "center"
    }}
  />
</div>

      {/* Right Dotted Animation - h1.png (swapped) */}
      <div className="absolute right-0 z-20 pointer-events-none" 
     style={{
      top: "2vh",        // move down a bit
      height: "99vh",    // slightly smaller than hero
      overflow: "hidden"
    }}
  >
    <img
      src={h1Img}
      alt="Left decoration"
      style={{
        height: "98vh",  // a little taller than container → looks longer
        maxWidth: "195px",
        width: "auto",
        objectFit: "cover",
        objectPosition: "center"
      }}
    />
  </div>


      <div className="min-h-[75vh] flex items-center justify-center w-full flex-col px-4 relative py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <article className="flex flex-col items-center justify-center text-center w-full">
            {/* Content Wrapper - Centered */}
            <div className="content__wrapper max-w-5xl mx-auto w-full">
              <header>
                {/* Eyebrow */}
                {eyebrow && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="flex justify-center mb-6 md:mb-8"
                  >
                    <span 
                      className="text-[10px] md:text-xs font-semibold text-gray-900 uppercase tracking-[0.25em]"
                      style={{
                        fontFamily: "'Freigeist Con', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                      }}
                    >
                      {eyebrow}
                    </span>
                  </motion.div>
                )}

                {/* Headline - Properly Sized */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1]"
                  style={{
                    fontFamily: "'Freigeist Con', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  }}
                >
                  <span className="text-gray-900">Open the doors to </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#06b6d4]">
                    seamless integrations
                  </span>
                  <span className="text-gray-900"> for your customers</span>
                </motion.h1>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mb-6 md:mb-8"
                >
                  <p 
                    className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-normal"
                    style={{
                      fontFamily: "'Freigeist Con', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    }}
                  >
                    {description}
                  </p>
                </motion.div>
              </header>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex justify-center mb-12 md:mb-16"
              >
                <a
                  href={ctaUrl}
                  className="inline-flex items-center justify-center transition-all duration-300 rounded-full bg-white shadow-md hover:shadow-lg border-2 hover:opacity-90"
                  style={{
                    padding: "0.675rem 1rem",
                    fontSize: "0.875rem",
                    borderColor: "#10b981",
                    color: "transparent",
                    backgroundImage: "linear-gradient(to right, #10b981, #06b6d4)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "'Freigeist Con', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  }}
                >
                  {ctaText}
                </a>
              </motion.div>
            </div>
          </article>

          {/* Clients Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-full flex flex-col items-center justify-center pt-4 md:pt-6 relative z-20"
          >
            <Clients />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
