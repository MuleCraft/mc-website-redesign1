import zensarkLogo from "@/assets/zensark.jpg";
import nvidiaLogo from "@/assets/nvidia(1).png";
import accionLogo from "@/assets/accion.svg";
import tekisticLogo from "@/assets/tekistic.webp";

const Clients = () => {
  return (
    <div className="featured-logos-wrap">
      {/* <p className="h5 mb-4 md:mb-6 text-center text-gray-700 font-semibold text-base md:text-lg">
        The trusted platform for AI-driven automation
      </p> */}
      <div className="fl-wrapper flex items-center justify-center gap-8 md:gap-12 lg:gap-16 flex-wrap">
        <div className="fl-item">
          <img
            className="h-8 md:h-10 lg:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            src={nvidiaLogo}
            alt="nvidiaLogo"
            loading="lazy"
          />
        </div>
        <div className="fl-item">
          <img
            className="h-5 md:h-6 lg:h-7 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            src={tekisticLogo}
            alt="tekisticLogo"
            loading="lazy"
          />
        </div>
        <div className="fl-item">
          <img
            className="h-5 md:h-6 lg:h-7 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            src={accionLogo}
            alt="accionLabsLogo"
            loading="lazy"
          />
        </div>
        <div className="fl-item">
          <img
            className="h-8 md:h-10 lg:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            src={zensarkLogo}
            alt="zensarkLogo"
            loading="lazy"
          />
        </div>
        <div className="fl-item">
          <img
            className="h-10 md:h-12 lg:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            src="https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/feature/images/Common%20Images/aequalis-logo.webp"
            alt="aequalIsLogo"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;

