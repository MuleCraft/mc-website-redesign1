"use client";

import { useRef } from "react";
import { motion } from "motion/react";
// import Clients from "./Clients";
import hbg from "../assets/hbg6.png";

interface HeroProps {
  eyebrow?: string;
  headline?: string;
  description?: string;
  ctaText?: string;
  ctaUrl?: string;
}

const Hero = ({
  eyebrow = "Enterprise Integration Experts",
  headline = "Seamless Integration Solutions Powered by MuleSoft",
  description = "We are the dedicated specialists who connect your systems and automate your workflows. No platforms to manage—just custom integrations built by experts to drive your business forward.",
  ctaText = "Talk to an Expert",
  ctaUrl = "#",
}: HeroProps) => {
  const heroContainerRef = useRef<HTMLDivElement>(null);
  
  // Split headline into first 3 words and remaining words
  const headlineWords = headline.split(' ');
  const topLine = headlineWords.slice(0, 3).join(' ');
  const bottomLine = headlineWords.slice(3).join(' ');

  return (
    <div
      ref={heroContainerRef}
      className="w-full relative"
      style={{
        minHeight: '92vh',
        height: '92vh',
      }}
    >
      <div 
        className="absolute inset-0 hero-bg-image"
        style={{
          backgroundImage: `url(${hbg})`,
          zIndex: 0,
        }}
      />
      <div className="h-full min-h-[92vh] flex items-start justify-center w-full flex-col px-4 relative pt-0 pb-12 md:pt-2 md:pb-16 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
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
                    className="flex justify-center mb-2 md:mb-3"
                  >
                    <span className="text-sm font-semibold text-gray-600 uppercase tracking-[0.2em]">
                      {eyebrow}
                    </span>
                  </motion.div>
                )}

                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-3 md:mb-4"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: 1.1,
                    color: '#000000',
                  }}
                >
                  {topLine}
                  {bottomLine && (
                    <>
                      <br />
                      {bottomLine}
                    </>
                  )}
                </motion.h1>

                {/* Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mb-4 md:mb-5"
                  >
                  <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-normal">
                    {description}
                  </p>
                </motion.div>
              </header>

              {/* CTA Container */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col sm:flex-row sm:justify-center gap-4"
              >
                <a
                  href={ctaUrl}
                  className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-[#10b981] to-[#06b6d4] rounded-full hover:shadow-lg hover:opacity-90 transition-all duration-300 min-w-[160px] shadow-md"
                >
                  {ctaText}
                </a>
              </motion.div>
            </div>
          </article>

          {/* Clients Container */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-full flex flex-col items-center justify-center pt-4 md:pt-6 relative z-20"
          >
            <div className="h-12 w-px bg-gradient-to-b from-gray-400 to-transparent mx-auto mb-6"></div>
            <Clients />
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
