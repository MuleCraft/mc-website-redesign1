import zensarkLogo from "@/assets/zensark.jpg";
import nvidiaLogo from "@/assets/nvidia(1).png";
import accionLogo from "@/assets/accion.svg";
import tekisticLogo from "@/assets/tekistic.webp";

const Clients = () => {
  const logos = [
    { src: nvidiaLogo, alt: "NVIDIA" },
    { src: tekisticLogo, alt: "Tekistic" },
    { src: accionLogo, alt: "Accion" },
    { src: zensarkLogo, alt: "Zensark" },
    {
      src: "https://gitlab.mulecraft.in/mc-public-group/mc-website-image-data/-/raw/feature/images/Common%20Images/aequalis-logo.webp",
      alt: "Aequalis",
    },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="cp cp--white signpost_block_image left" style={{ width: "100%", padding: "4rem 0" }}>
      <div className="container" style={{ maxWidth: "90rem", margin: "0 auto", padding: "0 1rem" }}>
        <div className="signpost_block_image__inner row" style={{ maxWidth: "57.75rem", margin: "0 auto" }}>
          {/* Title Section */}
          <div className="col__12 col__md__10 col__lg__8 text--center" style={{ width: "100%", marginBottom: "3rem" }}>
            <div className="text_header text--center">
              <h2 className="text_header__title" style={{ marginBottom: 0 }}>
                <div className="text_header__title_inner">
                  <span 
                    className="text--node" 
                    style={{ 
                      fontFamily: "'Articulat CF', Arial, sans-serif",
                      fontWeight: 600,
                      color: "#0F011B",
                      fontSize: "16px",
                      lineHeight: "24px"
                    }}
                  >
                    Trusted by companies
                  </span>
                </div>
              </h2>
            </div>
          </div>

          {/* Client Logos Scrolling Section */}
          <div className="col__12 text--center" style={{ width: "100%" }}>
            <div className="signpost_block_image__signposts">
              <div className="signpost_block_image__signposts_inner">
                <div 
                  className="signpost_block_image__signposts__content left"
                  style={{
                    '--slides-count': logos.length * 3,
                    '--duration': '20000ms'
                  } as React.CSSProperties}
                >
                  {duplicatedLogos.map((logo, index) => (
                    <div key={index} className="signpost_block_image__signpost_box">
                      <div className={`signpost_block_image__signpost inview inview__delay__${index % 17} inview-start inview-inside`}>
                        <picture className="signpost__asset">
                          <img
                            alt={logo.alt}
                            data-mime-type="image/png"
                            height="40"
                            loading="eager"
                            src={logo.src}
                            width="40"
                            className="client-logo"
                            style={{
                              height: "40px",
                              width: "auto",
                              objectFit: "contain",
                              display: "block"
                            }}
                          />
                        </picture>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

