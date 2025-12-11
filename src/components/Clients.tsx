import zensarkLogo from "@/assets/zensark.jpg";
import nvidiaLogo from "@/assets/nvidia(1).png";
import tekisticLogo from "@/assets/tekistic.webp";
import innovationsSolved from "@/assets/innovationssolved.png";
import astrazenecaLogo from "@/assets/astrazeneca.png";
const Clients = () => {
  const logos = [
    {
      src: nvidiaLogo,
      alt: "nvidiaLogo",
      className: "max-h-10 md:max-h-12 lg:max-h-16 w-auto",
    },
    {
      src: tekisticLogo,
      alt: "tekisticLogo",
      className: "max-h-10 md:max-h-12 lg:max-h-16 w-auto",
    },
    {
      src: zensarkLogo,
      alt: "zensarkLogo",
      className: "max-h-10 md:max-h-12 lg:max-h-16 w-auto",
    },
    {
      src: innovationsSolved,
      alt: "innovationsSolved",
      className: "max-h-10 md:max-h-12 lg:max-h-16 w-auto",
    },
    {
      src: astrazenecaLogo,
      alt: "astrazenecaLogo",
      className: "max-h-10 md:max-h-12 lg:max-h-16 w-auto",
    },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trusted by Companies Text */}
        <div className="text-center mb-8 md:mb-12">
          <h2
            className="text-xl md:text-2xl px-4"
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontStyle: "normal",
              fontWeight: 800,
              color: "#1F2328",
              letterSpacing: "0.02em",
              fontSize: "clamp(18px, 4.5vw, 24px)",
            }}
          >
            Trusted by Companies
          </h2>
        </div>

        {/* Scrolling Logos Container - Desktop */}
        <div className="hidden lg:block relative overflow-hidden max-w-4xl mx-auto">
          {/* Gradient masks for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-scroll gap-4 md:gap-8 lg:gap-12 xl:gap-16 items-end will-change-transform h-20 md:h-24 lg:h-28">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className={`flex-shrink-0 flex justify-center h-20 md:h-24 lg:h-28 ${
                  logo.alt === "astrazenecaLogo" ? "items-center" : "items-end"
                }`}
              >
                <img
                  className={`${logo.className} object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300`}
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Static Grid - Mobile/Tablet */}
        <div className="lg:hidden max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-6 items-end justify-items-center">
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`flex justify-center h-20 md:h-24 ${
                  index === 4 ? "col-span-2" : ""
                } ${
                  logo.alt === "astrazenecaLogo" ? "items-center" : "items-end"
                }`}
              >
                <img
                  className={`${logo.className} object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300`}
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CSS for scrolling animation */}
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 15s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Clients;
