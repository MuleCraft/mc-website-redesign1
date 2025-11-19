import { useState, useRef, useEffect } from "react";
import { Search, Globe, ChevronDown, Monitor, Sun, Moon, Contrast } from "lucide-react";
import { Button } from "./ui/button";
import mulecraftLogo from "../assets/mulecraftlogo.png";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedTheme, setSelectedTheme] = useState("System");
  const navItemRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const navbarRef = useRef<HTMLElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const languageButtonRef = useRef<HTMLButtonElement | null>(null);
  const themeButtonRef = useRef<HTMLButtonElement | null>(null);

  const navItems = [
    { label: "Products", hasChevron: true, href: "#" },
    { label: "Solutions", hasChevron: true, href: "#" },
    { label: "Case studies", hasChevron: true, href: "#" },
    {
      label: "Resources",
      hasChevron: true,
      href: "#",
    },
    { label: "About", hasChevron: false, href: "/about" },
    { label: "Careers", hasChevron: false, href: "/careers" },
    { label: "Contact Sales", hasChevron: false, href: "/contact-sales" },
  ];

  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleDropdownOpen = (label: string) => {
    // Clear any pending close timeout
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    
    setOpenDropdown(label);
    
    // Close theme and language dropdowns when opening main dropdowns
    if (isThemeOpen) {
      setIsThemeOpen(false);
    }
    if (isLanguageOpen) {
      setIsLanguageOpen(false);
    }
  };

  const handleDropdownClose = (delay: number = 300) => {
    // Clear any existing timeout
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    
    // Set a timeout to close the dropdown after delay
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      dropdownTimeoutRef.current = null;
    }, delay);
  };

  const handleDropdownCancelClose = () => {
    // Cancel any pending close
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    
    // Close theme and language dropdowns when opening main dropdowns
    if (isThemeOpen) {
      setIsThemeOpen(false);
    }
    if (isLanguageOpen) {
      setIsLanguageOpen(false);
    }
  };

  const getNavbarHeight = () => {
    if (navbarRef.current) {
      return navbarRef.current.offsetHeight;
    }
    return 80; // Default fallback
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

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

  // Focus search input when search opens and close language/theme dropdowns
  useEffect(() => {
    if (isSearchOpen) {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
      setIsLanguageOpen(false);
      setIsThemeOpen(false);
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

  // Handle click anywhere in navbar to close search
  useEffect(() => {
    const handleNavbarClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        isSearchOpen &&
        navbarRef.current &&
        navbarRef.current.contains(target)
      ) {
        // Don't close if clicking on the search input itself
        if (searchInputRef.current && searchInputRef.current.contains(target)) {
          return;
        }
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleNavbarClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleNavbarClick);
    };
  }, [isSearchOpen]);

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
              title: "Embedded Integration for SaaS",
              description: "OEM white-label",
              icon: "package",
            },
          ],
        },
        {
          label: "Others",
          isSelected: false,
          menuItems: [
            {
              title: "Real-time CRM Data Sync",
              description: "Live updates between Salesforce and other apps",
              icon: "sync",
            },
            {
              title: "API Proxy Deployment",
              description: "Secure API exposure",
              icon: "cloud",
            },
            {
              title: "Recipe-based Automation",
              description: "Reusable integration 'recipes'",
              icon: "book-open",
            },
            {
              title: "Microservices Orchestration",
              description: "Connect/distribute microservices workloads",
              icon: "git-branch",
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
            {
              title: "AnypointLP",
              description: "Sample description for AnypointLP product",
            },
          ],
        },
        {
          label: "OTHER PRODUCTS",
          isSelected: false,
          menuItems: [
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

    if (openDropdown === "Case studies") {
      return [
        {
          label: "HR Management",
          isSelected: true,
          menuItems: [
            {
              title: "Corvano Resource Mgmt",
              description: "Employee record and performance analysis platform",
            },
            {
              title: "Zive HR Management",
              description: "Automated HR workflows and employee engagement",
            },
            {
              title: "HR Systems Unification",
              description: "Unifying HR systems for improved efficiency",
            },
            {
              title: "Workday to SAP Sync",
              description: "SnapLogic iPaaS integration for employee data",
            },
          ],
        },
        {
          label: "Healthcare Solutions",
          isSelected: false,
          menuItems: [
            {
              title: "EDI File Processing",
              description: "HIPAA-compliant healthcare claims management",
            },
            {
              title: "Payment Workflows",
              description: "Healthcare payment processing for 2M patients",
            },
            {
              title: "Better Life Pharmacy",
              description: "HIPAA-compliant pharmacy communication platform",
            },
            {
              title: "Patient Self Scheduling",
              description: "IVR and AI-powered appointment booking",
            },
          ],
        },
        {
          label: "Digital Transformation",
          isSelected: false,
          menuItems: [
            {
              title: "Manufacturing Transformation",
              description: "Global manufacturing leader integration framework",
            },
            {
              title: "Equity Automation",
              description: "Stock purchase and compensation automation",
            },
            {
              title: "Real-Time Monitoring",
              description: "Financial client monitoring and optimization",
            },
            {
              title: "Dynamics 365 Integration",
              description: "Automated data processing with RabbitMQ",
            },
          ],
        },
        {
          label: "Automation & Platforms",
          isSelected: false,
          menuItems: [
            {
              title: "Community Anypoint Platform",
              description: "Open-source integration and deployment tool",
            },
            {
              title: "Email Management",
              description: "Email categorization and draft generation",
            },
            {
              title: "HeyDrive Driving School",
              description: "Automated scheduling and billing system",
            },
          ],
        },
      ];
    }

    if (openDropdown === "Resources") {
      return [
        {
          label: "Blog",
          isSelected: true,
          menuItems: [
            {
              title: "Understanding the Basics of GraphQL",
              description: "GraphQL is a modern, efficient query language for APIs that revolutionizes how we interact with data. Unlike traditional REST APIs, GraphQL enables clients to request only the data they need, minimizing unnecessary data transfer and improving performance.",
              href: "https://blogs.mulecraft.in/understanding-the-basics-of-graphql/",
            },
          ],
        },
        {
          label: "Training",
          isSelected: false,
          menuItems: [
            {
              title: "Learn Today, Lead Tomorrow!",
              description: "MuleCraft Academy offers comprehensive training programs to help you master integration technologies and advance your career.",
              href: "https://training.mulecraft.in/",
            },
          ],
        },
      ];
    }

    if (openDropdown === "About") {
      return [
        { label: "Our Story", isSelected: true },
        { label: "Team", isSelected: false },
        { label: "Partners", isSelected: false },
        { label: "News & Press", isSelected: false },
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

  const themes = [
    { name: "Light", icon: Sun },
    { name: "System", icon: Monitor },
    { name: "Dark", icon: Moon },
  ];

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setIsLanguageOpen(false);
  };

  const handleThemeSelect = (theme: string) => {
    setSelectedTheme(theme);
    setIsThemeOpen(false);
    // TODO: Implement theme switching logic here
  };

  return (
    <header
      ref={navbarRef}
      className="w-full sticky top-0 z-50 border-b border-gray-200 overflow-visible"
      style={{ backgroundColor: "#fff", position: "relative" }}
    >
      <nav className="w-full max-w-7xl mx-auto pl-4 lg:pl-6 xl:pl-5 pr-4 lg:pr-6 xl:pr-8 py-2 flex items-center justify-between min-h-[80px] overflow-visible">
        {/* Logo - Left side - Always visible */}
        <div className="flex items-center -ml-10 lg:-ml-12 xl:-ml-14" >
          <div className="flex items-center align-start overflow-hidden" style={{ maxWidth: "150px", maxHeight: "25px" }} overflow-visible>
            <img
              src={mulecraftLogo}
              alt="Mulecraft Logo"
              className="h-[24px] w-[130px] "
             
            />
          </div>

          {/* Navigation Links - Hidden when search is open */}
          {!isSearchOpen && (
            <div 
              className="hidden lg:flex items-center relative"
              style={{ padding: ".5rem 1rem" }}
            >
              {navItems.map((item) => (
                <div 
                  key={item.label} 
                  className={`relative group ${openDropdown === item.label ? 'dropdown-active' : ''}`}
                  onMouseEnter={() => {
                    if (item.hasChevron) {
                      handleDropdownOpen(item.label);
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.hasChevron) {
                      handleDropdownClose(300);
                    }
                  }}
                >
                  <a
                    ref={(el) => {
                      navItemRefs.current[item.label] = el;
                    }}
                    href={item.href}
                    target={(item as any).openInNewTab ? "_blank" : undefined}
                    rel={
                      (item as any).openInNewTab ? "noopener noreferrer" : undefined
                    }
                    onClick={(e) => {
                      if (item.hasChevron) {
                        e.preventDefault();
                      }
                    }}
                    className="flex items-center gap-1.5 whitespace-nowrap transition-all rounded-md nav-link"
                    style={{
                      fontFamily: '"Noto Sans", sans-serif',
                      color: "#333",
                      display: "flex",
                      alignItems: "center",
                      textDecoration: "none",
                      fontWeight: 500,
                      fontSize: ".9rem",
                      transition: "color .3s ease-in-out",
                      position: "relative",
                      lineHeight: 1,
                      userSelect: "none",
                      WebkitUserSelect: "none" as any,
                      padding: "0.25rem .5rem",
                    }}
                  >
                    {item.label}
                    {item.hasChevron && (
                      <ChevronDown
                        className="w-4 h-4"
                        style={{ color: "rgb(31, 31, 31)", strokeWidth: 1.7 }}
                      />
                    )}
                  </a>
                  {/* Animated underline at bottom of navbar */}
                  <span
                    className="nav-underline"
                    style={{
                      position: "absolute",
                      bottom: "-29px",
                      left: "0.5rem",
                      right: "0.5rem",
                      width: 0,
                      height: "3px",
                      backgroundColor: "rgb(7, 43, 85)",
                      transition: "width 0.3s ease-in-out",
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Middle section - Search or empty space */}
        <div className="flex-1 flex items-center justify-center px-4">
          {isSearchOpen ? (
            <div className="w-full relative" style={{ maxWidth: "700px" }}>
              <div className="relative flex items-center">
                <Search
                  className="absolute left-3 w-5 h-5"
                  style={{ 
                    strokeWidth: 2.5,
                    color: "#4b5563"
                  }}
                />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 border border-[#204066] rounded-md focus:outline-none focus:ring-0 shadow-none"
                  style={{
                    fontFamily: '"Noto Sans", sans-serif',
                    fontSize: "15px",
                    boxShadow: "none",
                    color: "#000000",
                    paddingTop: "0.375rem",
                    paddingBottom: "0.375rem",
                    height: "36px",
                  }}
                />
              </div>
            </div>
          ) : null}
        </div>

        {/* Right side icons and button - Always in same place */}
        <div className="flex items-center flex-shrink-0 overflow-visible -mr-10 lg:-mr-12 xl:-mr-14">
          {/* Utility Icons */}
          <div 
            className="hidden md:flex items-center overflow-visible"
            style={{ gap: "0.5rem" }}
          >
            {!isSearchOpen && (
              <div className="relative group">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="px-1.5 rounded-full transition-colors hover:bg-gray-100"
                  style={{ paddingTop: 0, paddingBottom: 0 }}
                  aria-label="Search"
                >
                  <Search
                    className="w-5 h-5 text-gray-800"
                    style={{ strokeWidth: 2.8 }}
                  />
                </button>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50" style={{ marginBottom: '2px' }}>
                  <div
                    className="bg-black text-white px-1.5 py-0.5 rounded whitespace-nowrap relative"
                    style={{
                      fontFamily: '"Noto Sans", sans-serif',
                      fontSize: '10px',
                      lineHeight: '1.2',
                    }}
                  >
                    Search
                    {/* Tooltip arrow */}
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 -mt-px"
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: '3px solid transparent',
                        borderRight: '3px solid transparent',
                        borderTop: '3px solid #000000',
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="relative group">
              <button
                ref={languageButtonRef}
                onClick={() => {
                  setIsLanguageOpen(!isLanguageOpen);
                  if (openDropdown) {
                    setOpenDropdown(null);
                  }
                  if (isThemeOpen) {
                    setIsThemeOpen(false);
                  }
                }}
                className={`px-1.5 py-0.5 rounded-full transition-colors ${
                  isLanguageOpen ? "bg-gray-100" : "hover:bg-gray-100"
                }`}
                aria-label="Language"
              >
                <Globe className="w-5 h-5 text-gray-800" />
              </button>
              {/* Tooltip */}
              {!isLanguageOpen && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50" style={{ marginBottom: '2px' }}>
                  <div
                    className="bg-black text-white px-1.5 py-0.5 rounded whitespace-nowrap relative"
                    style={{
                      fontFamily: '"Noto Sans", sans-serif',
                      fontSize: '10px',
                      lineHeight: '1.2',
                    }}
                  >
                    Language
                    {/* Tooltip arrow */}
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 -mt-px"
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: '3px solid transparent',
                        borderRight: '3px solid transparent',
                        borderTop: '3px solid #000000',
                      }}
                    />
                  </div>
                </div>
              )}
              {isLanguageOpen && (
                <div
                  data-language-dropdown
                  className="absolute left-0 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50"
                  style={{ top: "calc(100% + 43px)" }}
                >
                  {languages.map((lang, index) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang.name)}
                      className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
                        selectedLanguage === lang.name ? "bg-gray-100" : ""
                      }`}
                      style={{
                        marginTop: index > 0 ? "0.25rem" : "0",
                        marginBottom: index < languages.length - 1 ? "0.25rem" : "0",
                      }}
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
            {/* Theme icon - commented out for now
            <div className="relative group">
              <button
                ref={themeButtonRef}
                onClick={() => {
                  setIsThemeOpen(!isThemeOpen);
                  if (openDropdown) {
                    setOpenDropdown(null);
                  }
                  if (isLanguageOpen) {
                    setIsLanguageOpen(false);
                  }
                }}
                className={`px-1.5 py-0.5 rounded-full transition-colors ${
                  isThemeOpen ? "bg-gray-100" : "hover:bg-gray-100"
                }`}
                aria-label="Theme"
              >
                <Contrast className="w-5 h-5 text-gray-800" />
              </button>
              {!isThemeOpen && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50" style={{ marginBottom: '2px' }}>
                  <div
                    className="bg-black text-white px-1.5 py-0.5 rounded whitespace-nowrap relative"
                    style={{
                      fontFamily: '"Noto Sans", sans-serif',
                      fontSize: '10px',
                      lineHeight: '1.2',
                    }}
                  >
                    Theme
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 -mt-px"
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: '3px solid transparent',
                        borderRight: '3px solid transparent',
                        borderTop: '3px solid #000000',
                      }}
                    />
                  </div>
                </div>
              )}
              {isThemeOpen && (
                <div
                  data-theme-dropdown
                  className="absolute left-0 w-40 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50"
                  style={{ top: "calc(100% + 43px)" }}
                >
                  {themes.map((theme, index) => {
                    const IconComponent = theme.icon;
                    return (
                      <button
                        key={theme.name}
                        onClick={() => handleThemeSelect(theme.name)}
                        className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
                          selectedTheme === theme.name ? "bg-gray-100" : ""
                        }`}
                        style={{
                          marginTop: index > 0 ? "0.25rem" : "0",
                          marginBottom: index < themes.length - 1 ? "0.25rem" : "0",
                        }}
                      >
                        <IconComponent className="w-4 h-4 text-gray-800" />
                        <span
                          className="text-sm"
                          style={{
                            fontFamily: '"Noto Sans", sans-serif',
                            color: "rgb(31, 31, 31)",
                          }}
                        >
                          {theme.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
            */}
          </div>

          {/* Action Button */}
          <div className="flex items-center" style={{ marginLeft: "1rem" }}>
            <Button 
              variant="default"
              className="transition-colors duration-200"
              style={{
                backgroundColor: 'rgb(7, 43, 85)',
                color: '#ffffff',
                border: 'none',
                padding: '0.375rem 1rem',
                fontSize: '0.875rem',
                height: 'auto',
              }}
            >
              Schedule demo
            </Button>
          </div>
        </div>
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
          onMouseEnter={handleDropdownCancelClose}
          onMouseLeave={() => handleDropdownClose(300)}
        />
      )}
    </header>
  );
};

export default Navbar;
