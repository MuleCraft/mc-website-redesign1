"use client";

import { useRef } from "react";
import Clients from "./Clients";
import { motion } from "motion/react";
import { BackgroundBeams } from "./BackgroundBeams";

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
      {/* Modern Animated Background Beams */}
      <BackgroundBeams className="absolute inset-0 z-0" />

      <div className="min-h-[90vh] flex items-center justify-center w-full flex-col px-4 relative pt-20 pb-24 md:pb-32">
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
                    className="flex justify-center mb-6"
                  >
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-primary bg-primary/10 ring-1 ring-inset ring-primary/20 backdrop-blur-sm">
                      {eyebrow}
                    </span>
                  </motion.div>
                )}

                {/* Headline */}
                {headline && (
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 md:mb-8"
                    style={{
                      fontFamily: "'Google Sans', sans-serif",
                      lineHeight: 1.1,
                    }}
                  >
                    Build Smarter Integrations,
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 mt-2">
                      Deliver Faster Results
                    </span>
                  </motion.h1>
                )}

                {/* Description */}
                {description && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mb-10 md:mb-12"
                  >
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                      {description}
                    </p>
                  </motion.div>
                )}
              </header>

              {/* CTA Container */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col sm:flex-row sm:justify-center gap-4 mb-16 md:mb-20"
              >
                <a
                  href={ctaUrl}
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-primary rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 z-20 relative"
                >
                  {ctaText}
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-gray-900 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 z-20 relative"
                >
                  View Documentation
                </a>
              </motion.div>
            </div>
          </article>

          {/* Clients Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-full flex flex-col items-center justify-center border-t border-gray-100 pt-12 relative z-20"
          >
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
              Trusted by industry leaders
            </div>
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

