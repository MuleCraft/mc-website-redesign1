"use client";

import { useRef } from "react";
import ThreeHeroScene from "./ThreeHeroScene";
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
  const heroContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={heroContainerRef}
      className="w-full relative bg-white"
    >
      {/* Three.js Hero Scene (Icosahedron) - Animation */}
      <ThreeHeroScene heroContainerRef={heroContainerRef} />
      
      <div className="min-h-screen flex items-start justify-center w-full flex-col px-4 relative pt-0 pb-24 md:pb-32">
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
                    className="landing-main-header mb-6 md:mb-8"
                    style={{
                      fontFamily: "'Google Sans', sans-serif",
                      fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                      fontWeight: 450,
                      lineHeight: 1.1,
                      margin: 0,
                      textAlign: 'center',
                    }}
                  >
                    <span 
                      style={{
                        display: 'block',
                        color: '#000000',
                        letterSpacing: '-2.62px',
                      }}
                    >
                      Build Smarter Integrations,
                    </span>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '3.5rem',
                        color: '#45474D', // var(--theme-surface-on-surface-variant) which is #45474D
                        letterSpacing: '-2.62px',
                        marginBottom: '1.5rem', // Add margin bottom after "Deliver Faster Results"
                      }}
                    >
                      Deliver Faster Results
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
                    <p 
                      className="leading-relaxed max-w-3xl mx-auto font-normal"
                      style={{
                        fontFamily: "'Google Sans', sans-serif",
                        fontSize: '1rem',
                        color: '#9CA3AF', // Lighter grey color
                        lineHeight: '1.5',
                      }}
                    >
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
          className="featured-logos absolute bottom-20 md:bottom-24 lg:bottom-28 left-0 w-full flex flex-col items-center justify-center z-20"
        >
          {/* Trusted by text */}
          <div 
            className="mb-4 md:mb-5"
            style={{
              fontFamily: "'Google Sans', sans-serif",
              fontSize: '1rem',
              fontWeight: 700,
              color: '#2F3034',
              letterSpacing: '-0.02em',
            }}
          >
            Trusted by companies
          </div>
          <div 
            className="w-full max-w-[10000px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5"
          >
            <Clients />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
