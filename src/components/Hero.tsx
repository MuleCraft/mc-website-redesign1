"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { ThreeJSBackground } from "./ThreeJSBackground";
import Clients from "./Clients";

interface HeroProps {
  eyebrow?: string;
  headline?: string;
  description?: string;
  ctaText?: string;
  ctaUrl?: string;
}

const Hero = ({
  eyebrow = "Enterprise Integration Experts",
  headline = "Seamless Integrations, Expertly Delivered",
  description = "We are the dedicated specialists who connect your systems and automate your workflows. No platforms to manage—just custom integrations built by experts to drive your business forward.",
  ctaText = "Talk to an Expert",
  ctaUrl = "#",
}: HeroProps) => {
  const heroContainerRef = useRef<HTMLDivElement>(null);

  // Split headline for styling if needed, or just apply gradient to the second half
  // For "Build Smarter Integrations, Deliver Faster Results", we can highlight the second part.
  const headlineParts = headline.split(", ");
  const mainHeadline = headlineParts[0] + (headlineParts.length > 1 ? "," : "");
  const highlightHeadline = headlineParts.length > 1 ? headlineParts.slice(1).join(", ") : "";

  return (
    <div
      ref={heroContainerRef}
      className="w-full relative bg-white overflow-hidden"
    >
      {/* Three.js Background Animation */}
      <ThreeJSBackground className="absolute inset-0 z-0" />

      <div className="min-h-[60vh] flex items-center justify-center w-full flex-col px-4 relative pt-16 pb-12 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <article className="flex flex-col items-center justify-center text-center w-full">
            {/* Content Wrapper - Centered */}
            <div className="content__wrapper max-w-5xl mx-auto w-full">
              <header>
                 {/* Eyebrow - Restored */}
                 {eyebrow && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="flex justify-center mb-6"
                  >
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-[0.2em]">
                      {eyebrow}
                    </span>
                  </motion.div>
                )}

                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black mb-6 md:mb-8"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: 1.1,
                  }}
                >
                  {mainHeadline}
                  {highlightHeadline && (
                    <>
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28] bg-[length:200%_auto] animate-gradient">
                        {highlightHeadline}
                      </span>
                    </>
                  )}
                </motion.h1>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mb-6 md:mb-8"
                >
                  <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-normal">
                    {description}
                  </p>
                </motion.div>
              </header>

              {/* CTA Container */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col sm:flex-row sm:justify-center gap-4 mb-10 md:mb-12"
              >
                <a
                  href={ctaUrl}
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28] rounded-full hover:shadow-lg hover:opacity-90 transition-all duration-300 min-w-[160px]"
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
            <div className="h-12 w-px bg-gradient-to-b from-gray-200 to-transparent mx-auto mb-6"></div>
            <Clients />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

