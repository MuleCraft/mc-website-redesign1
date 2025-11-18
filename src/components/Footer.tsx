import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import whiteLogo from "@/assets/mulecraftwhitelogo.png";
import reviewImage from "@/assets/rimage.svg";

const Footer = () => {
  const footerSections = [
    {
      title: "MULESOFT",
      links: [
        "Mule 4 Migration",
        "Mule B2B Integration",
        "API-led Connectivity",
        "Custom Connector Development",
        "Unified Operations Monitoring",
      ],
    },
    {
      title: "SNAPLOGIC",
      links: [
        "AI-Powered Integrations",
        "Pipeline Orchestration",
        "No-Code iPaaS",
        "AutoSync & Migration Tools",
        "Embedded Integration for SaaS Platforms",
      ],
    },
    {
      title: "SALESFORCE",
      links: [
        "Real-time CRM Data Sync",
        "Third-party App Connect",
        "Lightning Flow Automation",
        "Salesforce Reports Integration",
        "Customer 360 Data Mapping",
      ],
    },
    {
      title: "APIGEE",
      links: [
        "API Proxy Deployment",
        "Traffic Management",
        "Threat Protection",
        "Developer Portal",
        "Analytics & Insights Engine",
      ],
    },
    {
      title: "WORKATO",
      links: [
        "Recipe-based Automation",
        "Workbot ChatOps",
        "Multi-app Transaction Sync",
        "Data Quality Automation",
        "On-demand Integration Maintenance",
      ],
    },
    {
      title: "DIGIBEE",
      links: [
        "Microservices Orchestration",
        "Agile Lifecycle Management",
        "AI-Driven Connector Import",
        "Cloud/Hybrid Integration",
        "Managed Integration Services",
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
            grid-template-columns: repeat(7, auto);
          }
        }
        @media (min-width: 1280px) {
          .footer-nav-grid {
            grid-template-columns: repeat(8, auto);
          }
        }
      `}</style>
      <footer
        className="w-full text-white"
        style={{ backgroundColor: "rgb(7, 43, 85)" }}
      >
        <div className="w-full max-w-[82rem] mx-auto pl-0 pr-4 lg:pr-6 xl:pr-8 py-6">
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
            <p className="text-gray-300 text-sm">
              Experts in integration and automation solutions.
            </p>
          </div>

          {/* Review Box */}
          <div className="flex items-center">
            <img
              src={reviewImage}
              alt="G2 Reviews"
              className="h-auto w-auto"
              style={{ maxHeight: '60px' }}
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div 
          className="grid mb-8 footer-nav-grid"
          style={{
            gridGap: '1.88rem',
            gridRowGap: '2rem',
            paddingLeft: 0,
            listStyle: 'none',
            width: '100%',
            maxWidth: '82rem'
          }}
        >
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 
                className="font-bold text-gray-400 uppercase mb-4"
                style={{
                  fontSize: '14px',
                  marginBottom: '1rem'
                }}
              >
                {section.title}
              </h3>
              <ul 
                className="space-y-2"
                style={{
                  padding: 0,
                  listStyle: 'none',
                  margin: 0
                }}
              >
                {section.links.map((link) => (
                  <li 
                    key={link}
                    style={{
                      marginBottom: '0.75rem'
                    }}
                  >
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                      style={{
                        fontSize: '13px',
                        lineHeight: '1.5',
                        fontFamily: '"Noto Sans", sans-serif'
                      }}
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
        <div className="border-t border-[#7C3AED] my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
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
            <a href="#" className="hover:text-white transition-colors">
              GDPR
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
