import {
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import salesforceLogo from "@/assets/Salesforcelogo.png";
import MuleCraftName from "./MuleCraftName";
import CTASection from "./CTASection";
import { getRoutePath } from "../utils/routes";

// Helper function to render text with MuleCraftName component
const renderTextWithMuleCraft = (text: string) => {
  const parts = text.split(/(Mule[Cc]raft|Mulecraft)/g);
  return parts.map((part, index) => {
    if (part.match(/^Mule[Cc]raft$/i)) {
      return <MuleCraftName key={index} />;
    }
    return part;
  });
};

const Footer = () => {
  const footerSections = [
    {
      title: "Why Mulecraft?",
      links: [
        "The Mulecraft Advantage",
        "What is Integration Excellence?",
        "Value Beyond Automation",
        "Mulecraft vs. Traditional IT",
        "Seamless Product Delivery",
        "Trusted Integration Partner",
      ],
    },
    {
      title: "Capabilities",
      links: [
        "Integration Architecture",

        "Workflow Automation",

        "Digital Solutions",

        "API Craftsmanship",

        "Experience Design",

        "Cloud Deployments",
      ],
    },
    {
      title: "Integrations",
      links: [
        "Platform Connectivity",
        "System Sync",
        "Data Flow Design",
        "Connector Solutions",
        "Seamless Interfacing",
        "Unified Data Exchange",
      ],
    },
    {
      title: "AI",
      links: [
        "Intelligent Automation",
        "Predictive Insights",
        "Process Optimization",
        "Data-Driven Decisions",
        "Smart Workflows",
        "AI-Powered Development",
      ],
    },
    {
      title: "PRODUCTS",
      links: [
        "SnapMapper",
        "MuleSoftLP",
        "Goose",
        "Cloudhib 2.0 migration",
        "Anypoint LP",
        "RAMLify Flow Agent",
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
    <div style={{ position: 'relative', width: '100%' }}>
      <style>{`
        .footer-nav-grid {
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
        }
        @media (min-width: 640px) {
          .footer-nav-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem;
          }
        }
        @media (min-width: 768px) {
          .footer-nav-grid {
            grid-template-columns: repeat(4, auto);
            gap: 3rem;
          }
        }
        @media (min-width: 1024px) {
          .footer-nav-grid {
            grid-template-columns: repeat(6, auto);
            gap: 3rem;
          }
        }
        @media (min-width: 1280px) {
          .footer-nav-grid {
            grid-template-columns: repeat(7, auto);
            gap: 3rem;
          }
        }
        .footer-subtitle {
          font-size: clamp(12px, 2.5vw, 14px) !important;
          line-height: 1.3 !important;
          margin-bottom: 12px !important;
          margin-top: 0 !important;
          padding-bottom: 0 !important;
          color: #ccc !important;
          letter-spacing: 0.5px !important;
        }
        @media (min-width: 768px) {
          .footer-subtitle {
            margin-bottom: 15px !important;
          }
        }
        .footer-link-item {
          margin-bottom: 8px !important;
          margin-top: 0 !important;
          padding: 0 !important;
        }
        @media (min-width: 768px) {
          .footer-link-item {
            margin-bottom: 10px !important;
          }
        }
        .footer-link-item:last-child {
          margin-bottom: 0 !important;
        }
        .footer-link {
          font-size: clamp(13px, 2.5vw, 14px) !important;
          line-height: 1.8 !important;
          font-family: "Noto Sans", sans-serif !important;
          font-weight: 400 !important;
          display: block !important;
        }
        @media (min-width: 768px) {
          .footer-link {
            line-height: 2.2 !important;
          }
        }
      `}</style>
      <footer
        className="w-full text-white"
        style={{ backgroundColor: "rgb(7, 43, 85)", position: 'relative', zIndex: 0 }}
      >
        <div className="w-full max-w-[1344px] mx-auto pt-[16rem] md:pt-[17rem] pb-4 px-4 sm:px-6 lg:px-0">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-6 md:mb-8 gap-6 md:gap-8">
            {/* Logo and Tagline */}
            <div className="flex-1 w-full md:w-auto">
              <div className="mb-3 md:mb-4">
                <span
                  className="font-bold inline-block"
                  style={{
                    fontFamily: '"Inter", "Noto Sans", sans-serif',
                    fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                    letterSpacing: "-0.02em",
                    fontWeight: 700,
                    lineHeight: "1",
                  }}
                >
                  <span style={{ color: "white" }}>Mulழ்cra</span>
                  <span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#06b6d4]"
                    style={{
                      backgroundSize: "200% auto",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    f
                  </span>
                  <span style={{ color: "white" }}>t</span>
                </span>
              </div>
              <p className="text-white" style={{ fontSize: 'clamp(12px, 2.5vw, 14px)' }}>
                From Integration to Innovation. Instantly.
              </p>
            </div>

            {/* Salesforce Partner Badge */}
            <div className="flex items-center gap-3 md:gap-4 mt-0 md:mt-[20px]">
              <img
                src={salesforceLogo}
                alt="Salesforce"
                style={{ height: "clamp(40px, 8vw, 50px)", width: "auto" }}
              />
              <span
                style={{
                  fontFamily: '"Noto Sans", sans-serif',
                  fontSize: "clamp(12px, 2.5vw, 16px)",
                  fontWeight: 600,
                  color: "white",
                }}
              >
                PARTNER
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div
            className="grid mb-6 md:mb-8 footer-nav-grid"
            style={{
              paddingLeft: 0,
              listStyle: "none",
              width: "100%",
            }}
          >
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-bold uppercase footer-subtitle">
                  {renderTextWithMuleCraft(section.title)}
                </h3>
                <ul
                  style={{
                    padding: 0,
                    listStyle: "none",
                    margin: 0,
                  }}
                >
                  {section.links.map((link) => {
                    // Special cases
                    if (link === "Contact us") {
                      return (
                        <li key={link} className="footer-link-item gap-8">
                          <Link
                            to="/contact"
                            className="text-white hover:text-white transition-colors footer-link"
                          >
                            {renderTextWithMuleCraft(link)}
                          </Link>
                        </li>
                      );
                    }
                    if (link === "Blog") {
                      return (
                        <li key={link} className="footer-link-item gap-8">
                          <a
                            href="https://blogs.mulecraft.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-white transition-colors footer-link"
                          >
                            {renderTextWithMuleCraft(link)}
                          </a>
                        </li>
                      );
                    }
                    if (link === "Training") {
                      return (
                        <li key={link} className="footer-link-item gap-8">
                          <a
                            href="https://training.mulecraft.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-white transition-colors footer-link"
                          >
                            {renderTextWithMuleCraft(link)}
                          </a>
                        </li>
                      );
                    }
                    if (link === "About") {
                      return (
                        <li key={link} className="footer-link-item gap-8">
                          <Link
                            to="/about"
                            className="text-white hover:text-white transition-colors footer-link"
                          >
                            {renderTextWithMuleCraft(link)}
                          </Link>
                        </li>
                      );
                    }
                    // Products section - use actual links from Navbar
                    if (section.title === "PRODUCTS") {
                      const productLinks: { [key: string]: string } = {
                        "SnapMapper": "https://snaplogic.playground.mulecraft.in/",
                        "MuleSoftLP": "https://MuleSoft.dev/",
                        "Goose": "https://goosed.in/",
                        "Cloudhib 2.0 migration": "https://mule-migration-nexus.lovable.app/",
                        "CloudHub 2.0 Migration": "https://mule-migration-nexus.lovable.app/",
                        "Anypoint LP": "https://anypointlp-secondary.lovable.app/",
                        "AnypointLP": "https://anypointlp-secondary.lovable.app/",
                        "RAMLify Flow Agent": "https://ramlify-flow-agent.lovable.app/",
                      };
                      
                      const productHref = productLinks[link];
                      if (productHref) {
                        return (
                          <li key={link} className="footer-link-item gap-8">
                            <a
                              href={productHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-white transition-colors footer-link"
                            >
                              {renderTextWithMuleCraft(link)}
                            </a>
                          </li>
                        );
                      }
                    }
                    // For all other links, generate route based on section title and link name
                    const routePath = getRoutePath(link, section.title.toLowerCase());
                    return (
                      <li key={link} className="footer-link-item gap-8">
                        <Link
                          to={routePath}
                          className="text-white hover:text-white transition-colors footer-link"
                        >
                          {renderTextWithMuleCraft(link)}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div
            className="mt-8 md:mt-12 mb-4 md:mb-6 h-[1px]"
            style={{ background: "linear-gradient(45deg, #10b981, #06b6d4)" }}
          ></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-[2rem] mb-4 md:mb-6 pb-4 md:pb-5 text-sm">
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-3 md:gap-8 text-white text-center md:text-left">
              <span style={{ fontSize: 'clamp(11px, 2.5vw, 14px)' }}>© 2025 Copyright <MuleCraftName />. All rights reserved.</span>
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                <a href="#" className="hover:text-white transition-colors" style={{ fontSize: 'clamp(11px, 2.5vw, 14px)' }}>
                  Privacy
                </a>
                <a href="#" className="hover:text-white transition-colors" style={{ fontSize: 'clamp(11px, 2.5vw, 14px)' }}>
                  Compliance
                </a>
                <a href="#" className="hover:text-white transition-colors" style={{ fontSize: 'clamp(11px, 2.5vw, 14px)' }}>
                  Terms
                </a>
                <a href="#" className="hover:text-white transition-colors" style={{ fontSize: 'clamp(11px, 2.5vw, 14px)' }}>
                  GDPR
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4 md:gap-6">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <FaFacebookF style={{ color: "white", fontSize: "clamp(18px, 3vw, 20px)" }} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <FaLinkedin style={{ color: "white", fontSize: "clamp(18px, 3vw, 20px)" }} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <FaYoutube style={{ color: "white", fontSize: "clamp(18px, 3vw, 20px)" }} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <FaInstagram style={{ color: "white", fontSize: "clamp(18px, 3vw, 20px)" }} />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <CTASection />
    </div>
  );
};

export default Footer;
