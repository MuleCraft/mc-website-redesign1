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

  return (
    <div className="featured-logos-wrap w-full">
      <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 flex-wrap">
        {logos.map((logo, index) => (
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
  );
};

export default Clients;

