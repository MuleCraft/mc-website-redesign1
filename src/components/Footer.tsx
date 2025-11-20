import {
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import whiteLogo from "@/assets/NewMulecraftWhiteLogo.png";
import reviewImage from "@/assets/mulesoft-partner.webp";

const Footer = () => {
  const footerSections = [
    {
      title: "Why Mulecraft?",
      links: [
        "Mule 4 Migration",
        "B2B Integration",
        "API Connectivity",
        "Connector Dev",
        "Ops Monitoring",
        "Platform Consulting",
      ],
    },
    {
      title: "Capabilities",
      links: [
        "AI Integrations",
        "Pipeline Control",
        "No-Code iPaaS",
        "Sync & Migration",
        "SaaS Integration",
      ],
    },
    {
      title: "Integrations",
      links: [
        "Live CRM Sync",
        "3rd-Party Connect",
        "Flow Automation",
        "Report Integration",
        "360 Data Mapping",
      ],
    },
    {
      title: "AI",
      links: [
        "Proxy Deployment",
        "Traffic Control",
        "Threat Defense",
        "Dev Portal",
        "Analytics Engine",
      ],
    },
    {
      title: "WORKATO",
      links: [
        "Recipe Automation",
        "ChatOps Workbot",
        "Multi-app Sync",
        "Data Automation",
        "Integration Support",
      ],
    },
    {
      title: "RESOURCES",
      links: ["Blog", "Training"],
    },
    {
      title: "COMPANY",
      links: ["About", "Careers", "Team", "Contact us"],
    },
  ];

  return (
    <>
      <style>{`
        .footer-nav-grid {
          grid-template-columns: repeat(2, auto);
        }
        @media (min-width: 768px) {
          .footer-nav-grid {
            grid-template-columns: repeat(4, auto);
          }
        }
        @media (min-width: 1024px) {
          .footer-nav-grid {
            grid-template-columns: repeat(6, auto);
          }
        }
        @media (min-width: 1280px) {
          .footer-nav-grid {
            grid-template-columns: repeat(7, auto);
          }
        }
        .footer-subtitle {
          font-size: 14px !important;
          line-height: 1.3 !important;
          margin-bottom: 24px !important;
          margin-top: 0 !important;
          padding-bottom: 0 !important;
          color: #ccc !important;
          letter-spacing: 0.5px !important;
        }
        .footer-link-item {
          margin-bottom: 10px !important;
          margin-top: 0 !important;
          padding: 0 !important;
        }
        .footer-link-item:last-child {
          margin-bottom: 0 !important;
        }
        .footer-link {
          font-size: 14px !important;
          line-height: 2.2 !important;
          font-family: "Noto Sans", sans-serif !important;
          font-weight: 400 !important;
          display: block !important;
        }
      `}</style>
      <footer
        className="w-full text-white"
        style={{ backgroundColor: "rgb(7, 43, 85)" }}
      >
        <div className="w-full max-w-[1344px] mx-auto  pt-[5rem] pb-4 ">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-8">
            {/* Logo and Tagline */}
            <div className="flex-1">
              <div className="mb-4 ">
                <img
                  src={whiteLogo}
                  alt="MuleCraft Logo"
                  className="h-10 lg:h-15 w-auto"
                />
              </div>
              <p className="text-white text-sm">
                Trusted experts in integration and workflow automation.
              </p>
            </div>

            {/* Review Box */}
            <div className="flex items-center">
              <img
                src={reviewImage}
                alt="G2 Reviews"
                className="h-12 w-auto mt-[20px]"
                style={{ maxHeight: "60px" }}
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div
            className="grid mb-8 footer-nav-grid"
            style={{
              gap: "3rem",
              rowGap: "3rem",
              columnGap: "3rem",
              paddingLeft: 0,
              listStyle: "none",
              width: "100%",
            }}
          >
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-bold uppercase footer-subtitle">
                  {section.title}
                </h3>
                <ul
                  style={{
                    padding: 0,
                    listStyle: "none",
                    margin: 0,
                  }}
                >
                  {section.links.map((link) => (
                    <li key={link} className="footer-link-item gap-8">
                      <a
                        href="#"
                        className="text-white hover:text-white transition-colors footer-link"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div
            className="mt-12 mb-6 h-[1px]"
            style={{ background: "linear-gradient(45deg, #a03291, #4b4fe2)" }}
          ></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-[2rem] mb-6 pb-5 text-sm ">
            <div className="flex flex-wrap items-center gap-8 text-white px-[4px py-[12px]">
              <span>© 2025 Copyright MuleCraft. All rights reserved.</span>
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Compliance
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-6">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <FaFacebookF style={{ color: "white", fontSize: "20px" }} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <FaLinkedin style={{ color: "white", fontSize: "20px" }} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <FaYoutube style={{ color: "white", fontSize: "20px" }} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <FaInstagram style={{ color: "white", fontSize: "20px" }} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
