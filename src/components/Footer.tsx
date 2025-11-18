import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import whiteLogo from "@/assets/mulecraftwhitelogo.png";

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
    <footer
      className="w-full text-white"
      style={{ backgroundColor: "rgb(7, 43, 85)" }}
    >
      <div className="w-full max-w-7xl mx-auto pl-0 pr-4 lg:pr-6 xl:pr-8 py-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
          {/* Logo and Tagline */}
          <div className="flex-1">
            <div className="mb-4 -ml-2 lg:-ml-4">
              <img
                src={whiteLogo}
                alt="MuleCraft Logo"
                className="h-8 lg:h-11 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm">
              Experts in integration and automation solutions.
            </p>
          </div>

          {/* Review Box */}
          <div className="flex items-center gap-3">
            <div className="bg-white border-2 border-red-500 px-4 py-2 rounded flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-red-500 text-sm">
                    ★
                  </span>
                ))}
              </div>
              <span className="text-gray-700 text-xs font-medium">
                Read our reviews on
              </span>
            </div>
            <div className="bg-red-500 w-10 h-10 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">G2</span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-8 mb-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-sm mb-4 uppercase">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white text-sm transition-colors"
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
  );
};

export default Footer;
