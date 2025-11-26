import zensarkLogo from "@/assets/zensark.jpg";
import nvidiaLogo from "@/assets/nvidia(1).png";
import accionLogo from "@/assets/accion.svg";
import tekisticLogo from "@/assets/tekistic.webp";

const Clients = () => {
  const logos = [
    { src: nvidiaLogo, alt: "nvidiaLogo", className: "h-6 md:h-7 lg:h-8" },
    { src: tekisticLogo, alt: "tekisticLogo", className: "h-4 md:h-5 lg:h-6" },
    { src: accionLogo, alt: "accionLabsLogo", className: "h-4 md:h-5 lg:h-6" },
    { src: zensarkLogo, alt: "zensarkLogo", className: "h-6 md:h-7 lg:h-8" },
    {
      src: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/feature/images/Common%20Images/aequalis-logo.webp",
      alt: "aequalIsLogo",
      className: "h-7 md:h-8 lg:h-9",
    },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="featured-logos-wrap w-full overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .fl-scroll {
          animation: scroll 25s linear infinite;
          will-change: transform;
        }
        .fl-scroll:hover {
          animation-play-state: paused;
        }
        .fl-wrapper {
          width: fit-content;
        }
      `}</style>
      <div className="fl-wrapper flex items-center">
        <div className="fl-scroll flex items-center gap-6 md:gap-8 lg:gap-12">
          {duplicatedLogos.map((logo, index) => {
            // Increase size for NVIDIA logo only
            const isNvidia = logo.alt === "nvidiaLogo";
            const sizeClass = isNvidia 
              ? "h-8 md:h-10 lg:h-12" // Larger size for NVIDIA
              : logo.className;
            
            return (
              <div key={index} className="fl-item flex-shrink-0 flex items-center justify-center">
                <img
                  className={`${sizeClass} w-auto object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300`}
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Clients;

