import zensarkLogo from "@/assets/zensark.jpg";
import nvidiaLogo from "@/assets/nvidia(1).png";
import accionLogo from "@/assets/accion.svg";
import tekisticLogo from "@/assets/tekistic.webp";

const Clients = () => {
  const logos = [
    { src: nvidiaLogo, alt: "nvidiaLogo", className: "h-8 md:h-10 lg:h-12" },
    { src: tekisticLogo, alt: "tekisticLogo", className: "h-5 md:h-6 lg:h-8" },
    { src: accionLogo, alt: "accionLabsLogo", className: "h-3 md:h-5 lg:h-6" },
    { src: zensarkLogo, alt: "zensarkLogo", className: "h-6 md:h-8 lg:h-10" },
    {
      src: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/feature/images/Common%20Images/aequalis-logo.webp",
      alt: "aequalIsLogo",
      className: "h-7 md:h-8 lg:h-10",
    },
  ];

  return (
    <div className="featured-logos-wrap w-full">
      <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8 flex-wrap">
        {logos.map((logo, index) => {
          // Use the logo's defined size class
          const sizeClass = logo.className;
          
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
  );
};

export default Clients;

