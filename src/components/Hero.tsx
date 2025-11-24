"use client";

import { BackgroundLines } from "./ui/background-lines";
import Clients from "./Clients";
import { motion } from "motion/react";

interface HeroProps {
  eyebrow?: string;
  headline?: string;
  description?: string;
  ctaText?: string;
  ctaUrl?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const Hero = ({
  eyebrow = "",
  headline = "Build Smarter Integrations, Deliver Faster Results",
  description = "Connect your systems, automate workflows, and unlock new possibilities. We turn complex integrations into simple, powerful solutions that drive your business forward.",
  ctaText = "Book Demo",
  ctaUrl = "#",
}: HeroProps) => {
  return (
    <div className="w-full relative bg-white">
      <BackgroundLines className="min-h-screen flex items-start justify-center w-full flex-col px-4 relative pt-0 pb-24 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-12 md:pb-16 lg:pb-20 max-w-[1280px] relative z-10">
          <article className="flex flex-col items-center justify-center text-center w-full -mt-4 md:-mt-25">
            {/* Content Wrapper - Centered */}
            <div className="content__wrapper max-w-4xl mx-auto w-full">
              <header className="marquee__blade-heading">
                {/* Eyebrow */}
                {eyebrow && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="eyebrow eyebrow-display-1 mb-5 md:mb-6"
                  >
                    <div 
                      className="eyebrow__label text-sm md:text-base font-semibold text-gray-600 uppercase tracking-wider letter-spacing-1"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                      }}
                    >
                      {eyebrow}
                    </div>
                  </motion.div>
                )}

                {/* Headline */}
                {headline && (
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                    className="headline marquee__headline--standard text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold leading-[1.1] md:leading-[1.05] tracking-tight mb-6 md:mb-8"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    <span className="text-black">Build Smarter Integrations, Deliver Faster </span>
                    <span
                      style={{
                        background: "linear-gradient(45deg, #a03291, #4b4fe2)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Results
                    </span>
                  </motion.h1>
                )}

                {/* Description */}
                {description && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="blade__description mb-8 md:mb-10"
                  >
                    <p className="text-lg md:text-xl lg:text-1xl xl-text-1xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-normal">
                      {description}
                    </p>
                  </motion.div>
                )}
              </header>

              {/* CTA Container */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="cta_container flex flex-col sm:flex-row sm:justify-center gap-4 mb-10 md:mb-12"
              >
                <a
                  href={ctaUrl}
                  className="cta_button btn text-white w-full sm:w-auto px-6 py-2.5 md:px-7 md:py-3 text-sm md:text-base font-semibold text-center rounded-full transition-all duration-300 tracking-wide border-0"
                  style={{
                    background: "linear-gradient(45deg, #a03291, #4b4fe2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(45deg, #8a2a7f, #3d3fd1)";
                    e.currentTarget.style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "linear-gradient(45deg, #a03291, #4b4fe2)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                  aria-label={`${ctaText}: ${headline}`}
                >
                  {ctaText}
                </a>
              </motion.div>
            </div>
          </article>
        </div>
        {/* Clients Container - Positioned near Book Demo button, outside BackgroundLines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="featured-logos absolute bottom-20 md:bottom-24 lg:bottom-28 left-0 w-full flex justify-center z-20"
        >
          <div 
            className="w-full max-w-[650px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 rounded-lg bg-white/60 backdrop-blur-sm border border-blue-100/50"
            style={{
              boxShadow: "0 0 30px 10px rgba(147, 197, 253, 0.4), 0 0 15px 5px rgba(147, 197, 253, 0.2)"
            }}
          >
            <Clients />
          </div>
        </motion.div>
      </BackgroundLines>
    </div>
  );
};

export default Hero;
