import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react"
import { Button } from "./ui/button"

const Footer = () => {
  const footerSections = [
    {
      title: "WHY BOOMI",
      links: [
        "The Boomi Difference",
        "What is iPaaS?",
        "Pricing & Editions",
        "Boomi vs Mulesoft",
        "Boomi vs Workato",
        "Migrate from TIBCO to Boomi",
      ],
    },
    {
      title: "CAPABILITIES",
      links: [
        "Boomi Platform Overview",
        "Integration & Automation",
        "AI Management",
        "Data Management",
        "API Management",
        "Product Updates",
      ],
    },
    {
      title: "CONNECTORS",
      links: [
        "SAP",
        "Salesforce",
        "NetSuite",
        "ServiceNow",
        "AWS",
        "All Connectors",
      ],
    },
    {
      title: "RESOURCES",
      links: [
        "Resource Center",
        "Our Customers",
        "Blog",
        "Events & Webinars",
        "Training",
        "Community",
      ],
    },
    {
      title: "SUPPORT",
      links: [
        "Help Docs",
        "Submit a Ticket",
        "System Status",
        "Developer Docs",
      ],
    },
    {
      title: "COMPANY",
      links: [
        "About",
        "Careers",
        "Team",
        "Newsroom",
        "Innovation",
        "Contact us",
      ],
    },
    {
      title: "GET STARTED",
      links: [
        "Start Free Trial",
        "Watch Demo",
        "Request a Demo",
        "Explore Marketplace",
      ],
    },
  ]

  return (
    <footer className="w-full bg-[#204066] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
          {/* Logo and Tagline */}
          <div className="flex-1">
            <div className="mb-4">
              <span className="text-3xl font-bold relative">
                boomi
                <span className="absolute -top-1 right-[-10px] w-2.5 h-2.5 bg-orange-500 rounded-full"></span>
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              The #1 intelligent iPaaS for digital transformation.
            </p>
          </div>

          {/* Review Box */}
          <div className="flex items-center gap-3">
            <div className="bg-white border-2 border-red-500 px-4 py-2 rounded flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-red-500 text-sm">★</span>
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 mb-8">
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
            <span>© 2025 Copyright Boomi, LP. All rights reserved.</span>
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
  )
}

export default Footer

