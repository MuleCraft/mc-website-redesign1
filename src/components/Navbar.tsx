import { useState, useRef, useEffect } from "react";
import { Search, Globe, ChevronDown, X } from "lucide-react";
import { Button } from "./ui/button";
import mulecraftLogo from "../assets/mulecraftlogo.svg";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const navItemRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const navbarRef = useRef<HTMLElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const languageButtonRef = useRef<HTMLButtonElement | null>(null);

  const navItems = [
    { label: "Solutions", hasChevron: true, href: "#" },
    { label: "Products", hasChevron: true, href: "#" },
    {
      label: "Resources",
      hasChevron: false,
      href: "https://blogs.mulecraft.in/",
      openInNewTab: true,
    },
    { label: "About", hasChevron: false, href: "/about" },
    { label: "Contact Sales", hasChevron: false, href: "/contact-sales" },
  ];

  const handleDropdownToggle = (
    label: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    if (openDropdown === label) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(label);
    }
  };

  const getNavbarHeight = () => {
    if (navbarRef.current) {
      return navbarRef.current.offsetHeight;
    }
    return 80; // Default fallback
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        openDropdown &&
        navbarRef.current &&
        !navbarRef.current.contains(target)
      ) {
        // Check if click is outside the dropdown menu as well
        const dropdownElement = document.querySelector("[data-dropdown-menu]");
        if (dropdownElement && !dropdownElement.contains(target)) {
          setOpenDropdown(null);
        }
      }
    };

    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  // Focus search input when search opens and close language dropdown
  useEffect(() => {
    if (isSearchOpen) {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
      setIsLanguageOpen(false);
    }
  }, [isSearchOpen]);

  // Handle click outside for language dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        isLanguageOpen &&
        languageButtonRef.current &&
        !languageButtonRef.current.contains(target)
      ) {
        const languageDropdown = document.querySelector(
          "[data-language-dropdown]"
        );
        if (languageDropdown && !languageDropdown.contains(target)) {
          setIsLanguageOpen(false);
        }
      }
    };

    if (isLanguageOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLanguageOpen]);

  // Dropdown items for left sidebar - different content based on nav item
  const getDropdownItems = () => {
    if (openDropdown === "Solutions") {
      return [
        {
          label: "Mulesoft",
          isSelected: true,
          menuItems: [
            {
              title: "Mule 4 Migration",
              description: "Specialized migration from Mule 3 to Mule 4",
              icon: "refresh",
            },
            {
              title: "Mule B2B Integration",
              description: "EDI, partner API integration",
              icon: "network",
            },
            {
              title: "API-led Connectivity",
              description: "App and data integration using APIs",
              icon: "link",
            },
            {
              title: "Custom Connector Development",
              description: "Bespoke connectors via Mule SDK",
              icon: "code",
            },
            {
              title: "Unified Operations Monitoring",
              description: "Central Ops & maintenance dashboard",
              icon: "monitor",
            },
          ],
        },
        {
          label: "SnapLogic",
          isSelected: false,
          menuItems: [
            {
              title: "AI-Powered Integrations",
              description: "SnapGPT, generative integration design",
              icon: "sparkles",
            },
            {
              title: "Pipeline Orchestration",
              description: "ETL/ELT data pipelines",
              icon: "workflow",
            },
            {
              title: "No-Code iPaaS",
              description: "Visual workflow & drag-drop integration",
              icon: "layers",
            },
            {
              title: "AutoSync & Migration Tools",
              description: "Schema-based app/data migration",
              icon: "sync",
            },
            {
              title: "Embedded Integration for SaaS Platforms",
              description: "OEM white-label",
              icon: "package",
            },
          ],
        },
        {
          label: "Salesforce",
          isSelected: false,
          menuItems: [
            {
              title: "Real-time CRM Data Sync",
              description: "Live updates between Salesforce and other apps",
              icon: "sync",
            },
            {
              title: "Third-party App Connect",
              description: "DocuSign, Slack, Zoom integration",
              icon: "link",
            },
            {
              title: "Lightning Flow Automation",
              description: "Low-code process designer within SF",
              icon: "zap",
            },
            {
              title: "Salesforce Reports Integration",
              description: "Custom analytics pipelines",
              icon: "bar-chart",
            },
            {
              title: "Customer 360 Data Mapping",
              description: "Unified customer view across systems",
              icon: "users",
            },
          ],
        },
        {
          label: "Apigee",
          isSelected: false,
          menuItems: [
            {
              title: "API Proxy Deployment",
              description: "Secure API exposure",
              icon: "cloud",
            },
            {
              title: "Traffic Management",
              description: "Rate limiting, quota enforcement",
              icon: "gauge",
            },
            {
              title: "Threat Protection",
              description: "OAuth, JWT, security filtering on API level",
              icon: "lock",
            },
            {
              title: "Developer Portal",
              description: "API documentation and onboarding for external devs",
              icon: "book",
            },
            {
              title: "Analytics & Insights Engine",
              description: "Request-level tracking, analytics dashboard",
              icon: "chart",
            },
          ],
        },
        {
          label: "Workato",
          isSelected: false,
          menuItems: [
            {
              title: "Recipe-based Automation",
              description: "Reusable integration 'recipes'",
              icon: "book-open",
            },
            {
              title: "Workbot ChatOps",
              description: "Slack/MS Teams bots for workflow triggers",
              icon: "message-circle",
            },
            {
              title: "Multi-app Transaction Sync",
              description: "Cross-system process automation",
              icon: "refresh-cw",
            },
            {
              title: "Data Quality Automation",
              description: "Auto-cleansing and enrichment",
              icon: "check-circle",
            },
            {
              title: "On-demand Integration Maintenance",
              description: "Triggered syncs, error handling",
              icon: "settings",
            },
          ],
        },
        {
          label: "Digibee",
          isSelected: false,
          menuItems: [
            {
              title: "Microservices Orchestration",
              description: "Connect/distribute microservices workloads",
              icon: "git-branch",
            },
            {
              title: "Agile Lifecycle Management",
              description: "DevOps-native integration oversight",
              icon: "workflow",
            },
            {
              title: "AI-Driven Connector Import",
              description: "Auto-import existing integrations using AI",
              icon: "sparkles",
            },
            {
              title: "Cloud/Hybrid Integration",
              description: "Deploy to AWS, Azure, on-premises",
              icon: "cloud",
            },
            {
              title: "Managed Integration Services",
              description: "End-to-end implementation and support",
              icon: "headphones",
            },
          ],
        },
      ];
    }

    if (openDropdown === "Products") {
      return [
        {
          label: "RECENTLY LAUNCHED",
          isSelected: true,
          menuItems: [
            {
              title: "MuleSoftLP",
              description: "Sample description for MuleSoftLP product",
            },
            {
              title: "SnapMapper",
              description: "Sample description for SnapMapper product",
            },
            {
              title: "RAMLify Flow Agent",
              description: "Sample description for RAMLify Flow Agent product",
            },
            {
              title: "Goose",
              description: "Sample description for Goose product",
            },
          ],
        },
        {
          label: "MULESOFT",
          isSelected: false,
          menuItems: [
            {
              title: "Community Anypoint Platform",
              description: "Sample description for Community Anypoint Platform",
            },
            {
              title: "MuleSoftLP",
              description: "Sample description for MuleSoftLP product",
            },
            {
              title: "MuleCraft Academy",
              description: "Sample description for MuleCraft Academy",
            },
          ],
        },
        {
          label: "OTHER PRODUCTS",
          isSelected: false,
          menuItems: [
            {
              title: "SnapMapper",
              description: "Sample description for SnapMapper product",
            },
            {
              title: "RAMLify Flow Agent",
              description: "Sample description for RAMLify Flow Agent product",
            },
            {
              title: "AnypointLP",
              description: "Sample description for AnypointLP product",
            },
            {
              title: "Goose",
              description: "Sample description for Goose product",
            },
            {
              title: "Mule Migration Nexus",
              description: "Sample description for Mule Migration Nexus",
            },
            {
              title: "DataWeave Task Generator",
              description: "Sample description for DataWeave Task Generator",
            },
            {
              title: "Datadog Integration Automation",
              description:
                "Sample description for Datadog Integration Automation",
            },
          ],
        },
      ];
    }

    // Default for other nav items
    return [
      { label: "Platform Overview", isSelected: true },
      { label: "Integration & Automation", isSelected: false },
      { label: "Data Management", isSelected: false },
      { label: "API Management", isSelected: false },
      { label: "AI Agent Management", isSelected: false },
    ];
  };

  const getContentType = (): "grid" | "list" => {
    return "grid"; // Always use grid layout for consistent display
  };

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
  ];

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setIsLanguageOpen(false);
  };

  return (
    <header
      ref={navbarRef}
      className="w-full bg-white sticky top-0 z-50 border-b border-gray-200"
    >
      <nav className="w-full max-w-7xl mx-auto pl-0 pr-4 lg:pr-6 xl:pr-8 py-2 flex items-center justify-between min-h-[80px]">
        {isSearchOpen ? (
          /* Search Bar View */
          <div className="flex items-center w-full gap-4">
            {/* Logo - Left side */}
            <div className="flex items-center flex-shrink-0">
              <img
                src={mulecraftLogo}
                alt="Mulecraft Logo"
                className="h-8 lg:h-11 w-auto"
                style={{
                  fontFamily: '"Noto Sans", sans-serif',
                  fontStyle: "normal",
                  fontSize: "15px",
                  lineHeight: "28px",
                  fontWeight: 400,
                  color: "rgb(31, 31, 31)",
                }}
              />
            </div>

            {/* Search Input */}
            <div className="flex-1 relative">
              <div className="relative flex items-center">
                <Search
                  className="absolute left-3 w-5 h-5 text-gray-400"
                  style={{ strokeWidth: 2 }}
                />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 border border-[#204066] rounded-md focus:outline-none focus:ring-0 shadow-none"
                  style={{
                    fontFamily: '"Noto Sans", sans-serif',
                    fontSize: "15px",
                    boxShadow: "none",
                  }}
                />
              </div>
            </div>

            {/* Close Search Button */}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
              aria-label="Close search"
            >
              <X className="w-5 h-5 text-gray-800" />
            </button>

            {/* Right side icons */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="relative">
                <button
                  ref={languageButtonRef}
                  onClick={() => {
                    setIsLanguageOpen(!isLanguageOpen);
                    if (openDropdown) {
                      setOpenDropdown(null);
                    }
                  }}
                  className={`p-2 rounded-full transition-colors ${
                    isLanguageOpen ? "bg-gray-100" : "hover:bg-gray-100"
                  }`}
                  aria-label="Language"
                >
                  <Globe className="w-5 h-5 text-gray-800" />
                </button>
                {isLanguageOpen && (
                  <div
                    data-language-dropdown
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50"
                    style={{ top: "100%" }}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageSelect(lang.name)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-gray-100 transition-colors ${
                          selectedLanguage === lang.name ? "bg-gray-100" : ""
                        }`}
                      >
                        <span className="text-xl flex-shrink-0">
                          {lang.flag}
                        </span>
                        <span
                          className="text-sm flex-1"
                          style={{
                            fontFamily: '"Noto Sans", sans-serif',
                            color: "rgb(31, 31, 31)",
                            fontSize: "14px",
                          }}
                        >
                          {lang.name}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <Button 
                variant="default"
                style={{
                  background: 'linear-gradient(135deg, #204066 0%, #2d5a8a 50%, #204066 100%)',
                  color: '#ffffff',
                  border: 'none',
                }}
              >
                Schedule demo
              </Button>
            </div>
          </div>
        ) : (
          /* Normal Navbar View */
          <>
            {/* Logo and Navigation Links - Left side grouped together */}
            <div className="flex items-center gap-8 lg:gap-10 xl:gap-12 flex-shrink-0 -ml-2 lg:-ml-4">
              {/* Logo - Left side */}
              <div className="flex items-center">
                <img
                  src={mulecraftLogo}
                  alt="Mulecraft Logo"
                  className="h-8 lg:h-11 w-auto"
                  style={{
                    fontFamily: '"Noto Sans", sans-serif',
                    fontStyle: "normal",
                    fontSize: "15px",
                    lineHeight: "28px",
                    fontWeight: 400,
                    color: "rgb(31, 31, 31)",
                  }}
                />
              </div>

              {/* Navigation Links - Close to logo with small spacing */}
              <div className="hidden lg:flex items-center gap-6 xl:gap-8 relative">
                {navItems.map((item) => (
                  <div key={item.label} className="relative">
                    <a
                      ref={(el) => {
                        navItemRefs.current[item.label] = el;
                      }}
                      href={item.href}
                      target={item.openInNewTab ? "_blank" : undefined}
                      rel={
                        item.openInNewTab ? "noopener noreferrer" : undefined
                      }
                      onClick={(e) => {
                        if (item.hasChevron) {
                          e.preventDefault();
                          handleDropdownToggle(item.label, e);
                        }
                      }}
                      className="flex items-center gap-1.5 whitespace-nowrap transition-all rounded-md px-2 py-1 hover:bg-gray-100"
                      style={{
                        fontFamily: '"Noto Sans", sans-serif',
                        color: "#333",
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                        fontWeight: 500,
                        fontSize: ".9rem",
                        transition: "color .3s",
                        position: "relative",
                        lineHeight: 1,
                        userSelect: "none",
                        WebkitUserSelect: "none" as any,
                      }}
                    >
                      {item.label}
                      {item.hasChevron && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                          style={{ color: "rgb(31, 31, 31)", strokeWidth: 1.7 }}
                        />
                      )}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Icons and Buttons - Right side with more spacing */}
            <div className="flex items-center gap-4 lg:gap-6 flex-shrink-0">
              {/* Utility Icons */}
              <div className="hidden md:flex items-center gap-4 lg:gap-5">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Search"
                >
                  <Search
                    className="w-5 h-9 text-gray-800"
                    style={{ strokeWidth: 2.8 }}
                  />
                </button>
                <div className="relative">
                  <button
                    ref={languageButtonRef}
                    onClick={() => {
                      setIsLanguageOpen(!isLanguageOpen);
                      if (openDropdown) {
                        setOpenDropdown(null);
                      }
                    }}
                    className={`p-2 rounded-full transition-colors ${
                      isLanguageOpen ? "bg-gray-100" : "hover:bg-gray-100"
                    }`}
                    aria-label="Language"
                  >
                    <Globe className="w-5 h-5 text-gray-800" />
                  </button>
                  {isLanguageOpen && (
                    <div
                      data-language-dropdown
                      className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50"
                      style={{ top: "100%" }}
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageSelect(lang.name)}
                          className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
                            selectedLanguage === lang.name ? "bg-gray-100" : ""
                          }`}
                        >
                          <span className="text-xl">{lang.flag}</span>
                          <span
                            className="text-sm"
                            style={{
                              fontFamily: '"Noto Sans", sans-serif',
                              color: "rgb(31, 31, 31)",
                            }}
                          >
                            {lang.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="flex items-center">
                <Button 
                variant="default"
                style={{
                  background: 'linear-gradient(135deg, #204066 0%, #2d5a8a 50%, #204066 100%)',
                  color: '#ffffff',
                  border: 'none',
                }}
              >
                Schedule demo
              </Button>
              </div>
            </div>
          </>
        )}
      </nav>

      {/* Full-width Dropdown Menu - Rendered outside nav but inside header */}
      {openDropdown && (
        <DropdownMenu
          items={getDropdownItems()}
          isOpen={true}
          onClose={() => {
            setOpenDropdown(null);
          }}
          navbarHeight={getNavbarHeight()}
          contentType={getContentType()}
          navItem={openDropdown}
        />
      )}
    </header>
  );
};

export default Navbar;
