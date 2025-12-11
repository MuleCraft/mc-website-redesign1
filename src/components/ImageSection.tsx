import VerticalLine from "./VerticalLine";
import MuleCraftName from "./MuleCraftName";
import siImage from "@/assets/si.png";

const ImageSection = () => {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="w-full px-0">
        {/* Heading Container */}
        <div className="heading-container text-center mb-12 md:mb-16 -mt-4 md:-mt-6">
          {/* Vertical Line */}
          <VerticalLine />
        </div>

        {/* Full Width Image with Overlay Content */}
        <div
          style={{
            width: "100%",
            height: "600px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background Image */}
          <img
            src={siImage}
            alt="Integration Partners"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />

          {/* Overlay Content - Centered on Image */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              maxWidth: "1280px",
              padding: "0 1rem",
              zIndex: 10,
            }}
          >
            <div className="text-center mx-auto" style={{ maxWidth: "600px", width: "100%" }}>
              <h2
                className="mb-3"
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: 'clamp(28px, 5vw, 48px)',
                  lineHeight: '1.2',
                  color: 'rgb(31, 31, 31)',
                }}
              >
                Seamless Services Across All Platforms
              </h2>
              <p
                className="mb-0"
                style={{
                  fontFamily: '"Noto Sans", sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: 'clamp(16px, 2vw, 20px)',
                  lineHeight: '1.6',
                  color: 'rgba(31, 31, 31, 0.8)',
                  marginBottom: '0',
                }}
              >
                <MuleCraftName /> creates powerful integrations, AI agents, automations, and websites—unifying systems across MuleSoft, Salesforce, AWS, Azure, and more.
              </p>

              {/* Statistics */}
              <div className="flex flex-wrap justify-center gap-8 md:gap-12 pt-8 md:pt-12">
                <div className="text-center mb-4 flex-1 min-w-[120px]">
                  <p className="m-0">
                    <span
                      className="mb-1 block"
                      style={{
                        fontFamily: '"Poppins", sans-serif',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: 'clamp(32px, 4vw, 48px)',
                        lineHeight: '1.2',
                        color: 'rgb(31, 31, 31)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      500<span aria-hidden="true">+</span>
                      <span className="sr-only"> plus</span>
                    </span>
                    <span
                      className="no-wrap"
                      style={{
                        fontFamily: '"Noto Sans", sans-serif',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: 'clamp(14px, 1.5vw, 18px)',
                        lineHeight: '1.5',
                        color: 'rgba(31, 31, 31, 0.7)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Integrations
                    </span>
                  </p>
                </div>
                <div className="text-center mb-4 flex-1 min-w-[120px]">
                  <p className="m-0">
                    <span
                      className="mb-1 block"
                      style={{
                        fontFamily: '"Poppins", sans-serif',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: 'clamp(32px, 4vw, 48px)',
                        lineHeight: '1.2',
                        color: 'rgb(31, 31, 31)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      1000<span aria-hidden="true">+</span>
                      <span className="sr-only"> plus</span>
                    </span>
                    <span
                      className="no-wrap"
                      style={{
                        fontFamily: '"Noto Sans", sans-serif',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: 'clamp(14px, 1.5vw, 18px)',
                        lineHeight: '1.5',
                        color: 'rgba(31, 31, 31, 0.7)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Successful Projects
                    </span>
                  </p>
                </div>
                <div className="text-center mb-4 flex-1 min-w-[120px]">
                  <p className="m-0">
                    <span
                      className="mb-1 block"
                      style={{
                        fontFamily: '"Poppins", sans-serif',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: 'clamp(32px, 4vw, 48px)',
                        lineHeight: '1.2',
                        color: 'rgb(31, 31, 31)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      50<span aria-hidden="true">+</span>
                      <span className="sr-only"> plus</span>
                    </span>
                    <span
                      className="no-wrap"
                      style={{
                        fontFamily: '"Noto Sans", sans-serif',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: 'clamp(14px, 1.5vw, 18px)',
                        lineHeight: '1.5',
                        color: 'rgba(31, 31, 31, 0.7)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Platform Connectors
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;

