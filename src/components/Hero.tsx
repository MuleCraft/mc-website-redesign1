"use client";

import { useRef } from "react";
import ThreeHeroScene from "./ThreeHeroScene";
// import Clients from "./Clients";

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
  headline = "Empowering Your Digital Connectivity",
  description = "Transform your business with seamless integrations, intelligent automation, and cutting-edge solutions. From integration to innovation, instantly.",
  ctaText = "Book Demo",
  ctaUrl = "#",
}: HeroProps) => {
  const heroContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={heroContainerRef}
      className="w-full relative overflow-hidden bg-white"
    >
      {/* Three.js Hero Scene (Icosahedron) */}
      <ThreeHeroScene heroContainerRef={heroContainerRef} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 pb-32 md:pb-40 lg:pb-52 max-w-[1280px] relative z-10">
        <article className="flex flex-col items-center justify-center text-center">
          {/* Content Wrapper - Centered */}
          <div className="content__wrapper max-w-4xl mx-auto">
            <header className="marquee__blade-heading">
              {/* Eyebrow */}
              {eyebrow && (
                <div className="eyebrow eyebrow-display-1 mb-6">
                  <div className="eyebrow__label text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-widest" style={{ letterSpacing: '0.1em' }}>
                    {eyebrow}
                  </div>
                </div>
              )}

              {/* Headline */}
              {headline && (
                <h1 className="headline font-space text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-8 text-slate-900">
                  {headline}
                </h1>
              )}

              {/* Description */}
              {description && (
                <div className="blade__description mb-10">
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-normal">
                    {description}
                  </p>
                </div>
              )}
            </header>

            {/* CTA Container */}
            <div className="cta_container flex flex-col sm:flex-row sm:justify-center gap-4 mb-12">
              <a
                href={ctaUrl}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm md:text-base font-semibold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-[#a03291] to-[#4b4fe2] hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/25"
                aria-label={`${ctaText}: ${headline}`}
              >
                <span className="mr-2">{ctaText}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>
      
      {/* Clients Container - Positioned above the curved border */}
      {/* <div className="featured-logos absolute bottom-0 left-0 w-full flex justify-center z-10" style={{ bottom: "-40px" }}>
        <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <Clients />
        </div>
      </div> */}

      {/* Straight Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0" style={{ height: "2px", backgroundColor: "white" }}></div>
    </div>
  );
};

export default Hero;
