import zensarkLogo from "@/assets/zensark.jpg";
import nvidiaLogo from "@/assets/nvidia(1).png";
import accionLogo from "@/assets/accion.svg";
import tekisticLogo from "@/assets/tekistic.webp";

const Clients = () => {
  const logos = [
    { src: nvidiaLogo, alt: "nvidiaLogo", className: "h-10 md:h-12 lg:h-16" },
    { src: tekisticLogo, alt: "tekisticLogo", className: "h-6 md:h-8 lg:h-10" },
    { src: accionLogo, alt: "accionLabsLogo", className: "h-4 md:h-6 lg:h-8" },
    { src: zensarkLogo, alt: "zensarkLogo", className: "h-8 md:h-10 lg:h-12" },
    {
      src: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/feature/images/Common%20Images/aequalis-logo.webp",
      alt: "aequalIsLogo",
      className: "h-9 md:h-10 lg:h-12",
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
            className="text-xl md:text-2xl"
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontStyle: 'normal',
              fontWeight: 800,
              color: '#1F2328',
              letterSpacing: '0.02em',
            }}
          >
            Trusted by Companies
          </h2>
        </div>

        {/* Scrolling Logos Container */}
        <div className="relative overflow-hidden max-w-4xl mx-auto">
          {/* Gradient masks for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-scroll gap-8 md:gap-12 lg:gap-16 items-center will-change-transform">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  className={`${logo.className} w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300`}
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
            animation: scroll 30s linear infinite;
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

