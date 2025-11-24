"use client";

import Clients from "./Clients";

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
  return (
    <div 
      className="w-full relative"
      style={{ backgroundColor: "rgb(7, 43, 85)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 pb-32 md:pb-40 lg:pb-52 max-w-[1280px]">
        <article className="flex flex-col items-center justify-center text-center">
          {/* Content Wrapper - Centered */}
          <div className="content__wrapper max-w-4xl mx-auto">
            <header className="marquee__blade-heading">
              {/* Eyebrow */}
              {eyebrow && (
                <div className="eyebrow eyebrow-display-1 mb-4">
                  <div className="eyebrow__label text-sm md:text-base font-semibold text-white uppercase tracking-wide">
                    {eyebrow}
                  </div>
                </div>
              )}

              {/* Headline */}
              {headline && (
                <h1 className="headline marquee__headline--standard text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-white">
                  {headline}
                </h1>
              )}

              {/* Description */}
              {description && (
                <div className="blade__description mb-8">
                  <p className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed">
                    {description}
                  </p>
                </div>
              )}
            </header>

            {/* CTA Container */}
            <div className="cta_container flex flex-col sm:flex-row sm:justify-center gap-4">
              <a
                href={ctaUrl}
                className="cta_button btn bg-white text-[#204066] hover:bg-gray-100 hover:border-gray-100 w-full sm:w-auto px-8 py-3 text-base font-semibold text-center"
                aria-label={`${ctaText}: ${headline}`}
              >
                {ctaText}
              </a>
            </div>
          </div>
        </article>
      </div>
      
      {/* Clients Container - Positioned above the curved border */}
      <div className="featured-logos absolute bottom-0 left-0 w-full flex justify-center z-10" style={{ bottom: "-40px" }}>
        <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <Clients />
        </div>
      </div>

      {/* Straight Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0" style={{ height: "2px", backgroundColor: "white" }}></div>
    </div>
  );
};

export default Hero;
