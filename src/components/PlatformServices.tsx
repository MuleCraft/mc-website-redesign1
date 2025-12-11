import VerticalLine from "./VerticalLine";
import pi1Image from "@/assets/pi1.png";
import pi2Image from "@/assets/pi2.png";
import pi3Image from "@/assets/pi3.png";
import pi4Image from "@/assets/pi4.png";

const PlatformServices = () => {
  // Using MuleSoft solutions from the dropdown
  const services = [
    {
      icon: pi1Image,
      title: "Mule 4 Migration",
      description: "Specialized migration from Mule 3 to Mule 4",
      buttonText: "Explore Mule 4 Migration",
      href: "#",
    },
    {
      icon: pi2Image,
      title: "Mule B2B Integration",
      description: "EDI, API integration and seamless connectivity solutions.",
      buttonText: "Explore B2B Integration",
      href: "#",
    },
    {
      icon: pi3Image,
      title: "API-led Connectivity",
      description: "App and data integration using APIs",
      buttonText: "Explore API Connectivity",
      href: "#",
    },
    {
      icon: pi4Image,
      title: "Workflow Automation",
      description: "Visual workflow builder and automation",
      buttonText: "Explore Automation",
      href: "#",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Container */}
        <div className="heading-container text-center mb-12 md:mb-16 -mt-4 md:-mt-6">
          {/* Vertical Line */}
          <VerticalLine />
          <h2
            className="main-heading mb-4 md:mb-6"
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '32px',
              lineHeight: '40px',
              color: 'rgb(31, 31, 31)',
            }}
          >
            Connect. Integrate. Transform
          </h2>
          <div className="main-subheading max-w-3xl mx-auto">
            <p
              style={{
                fontFamily: '"Noto Sans", sans-serif',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                color: 'rgb(31, 31, 31)',
              }}
            >
              Turn complexity into seamless connectivity. Experts in connecting apps, APIs, data, and automation to streamline operations and unlock your systems' potential.
            </p>
          </div>
        </div>

        {/* Cards Container */}
        <div className="cards-container flex flex-wrap justify-center gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="single-card flex flex-col bg-white shadow-sm p-6"
              style={{ 
                minWidth: '280px', 
                maxWidth: '320px',
                width: '100%',
                flex: '1 1 280px',
                border: '1px solid #ccc',
                borderRadius: '10px',
              }}
            >
              {/* Media Icon */}
              <div className="media-icon mb-4">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    style={{
                      width: '36px',
                      height: '36px',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="card-content bg-white flex flex-col flex-grow">
                <h3 className="card-title mb-3"
                  style={{
                    fontFamily: '"Noto Sans", sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: 'rgb(31, 31, 31)',
                  }}
                >
                  {service.title}
                </h3>
                <div className="card-description mb-4">
                  <p
                    className="line-clamp-2"
                    style={{
                      fontFamily: '"Noto Sans", sans-serif',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: 'rgb(112, 112, 112)',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {service.description}
                  </p>
                </div>
                <a
                  className="button"
                  style={{
                    position: 'relative',
                    width: '100%',
                    display: 'inline-block',
                    verticalAlign: 'top',
                    padding: '.82rem 1.44rem',
                    marginTop: 'auto',
                    color: '#11b981',
                    fontSize: '.82rem',
                    fontWeight: 600,
                    lineHeight: '1.5',
                    textAlign: 'center',
                    textDecoration: 'none',
                    border: '1px solid #11b981',
                    borderRadius: '100vh',
                    transition: 'background-color .3s ease 0s, color .3s ease 0s, border-color .3s ease 0s',
                    WebkitUserSelect: 'none',
                    userSelect: 'none',
                  }}
                  href={service.href}
                >
                  {service.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformServices;

