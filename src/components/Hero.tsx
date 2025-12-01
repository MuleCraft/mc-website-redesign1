"use client";

import { useRef } from "react";
import Clients from "./Clients";
import { motion } from "motion/react";
import { HeroAnimation } from "./HeroAnimation";

interface HeroProps {
  eyebrow?: string;
  headline?: string;
  description?: string;
  ctaText?: string;
  ctaUrl?: string;
}

const Hero = ({
  eyebrow = "Enterprise Integration Platform",
  headline = "Build Smarter Integrations, Deliver Faster Results",
  description = "Connect your systems, automate workflows, and unlock new possibilities. We turn complex integrations into simple, powerful solutions that drive your business forward.",
  ctaText = "Book Demo",
  ctaUrl = "#",
}: HeroProps) => {
  const heroContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={heroContainerRef}
      className="w-full relative bg-white overflow-hidden"
    >
      <div className="min-h-[90vh] flex items-center justify-center w-full px-4 relative pt-20 pb-24 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-start text-left"
            >
              {/* Eyebrow */}
              {eyebrow && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mb-6"
                >
                  <span className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-primary bg-gradient-to-r from-primary/10 to-blue-600/10 ring-1 ring-inset ring-primary/20">
                    {eyebrow}
                  </span>
                </motion.div>
              )}

              {/* Headline */}
              {headline && (
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
                  style={{
                    fontFamily: "'Google Sans', sans-serif",
                    lineHeight: 1.1,
                  }}
                >
                  <span className="block text-gray-900">Build Smarter Integrations,</span>
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-purple-600">
                    Deliver Faster Results
                  </span>
                </motion.h1>
              )}

              {/* Description */}
              {description && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="mb-8"
                >
                  <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                    {description}
                  </p>
                </motion.div>
              )}

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <a
                  href={ctaUrl}
                  className="group inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 relative overflow-hidden"
                  style={{
                    background: "#7C3AEC",
                  }}
                >
                  <span className="relative z-10">{ctaText}</span>
                  <div className="absolute inset-0 bg-[#6D28D9] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Three.js Animation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative h-[400px] lg:h-[500px] flex items-center justify-center"
            >
              <HeroAnimation />
            </motion.div>
          </div>

          {/* Clients Container - Below both columns */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="w-full flex flex-col items-center justify-center mt-8 relative z-20"
          >
            <div className="w-full max-w-6xl mx-auto">
              <Clients />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
