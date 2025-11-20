import { useState, useRef, useEffect } from "react";
import { Search, Globe, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import mulecraftLogo from "../assets/mulecraftlogo.png";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedTheme, setSelectedTheme] = useState("Light");
  const navItemRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const navbarRef = useRef<HTMLElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const languageButtonRef = useRef<HTMLButtonElement | null>(null);

  const navItems = [
    { label: "Products", hasChevron: true, href: "#" },
    { label: "Solutions", hasChevron: true, href: "#" },
    { label: "Case Studies", hasChevron: true, href: "#" },
    {
      label: "Resources",
      hasChevron: true,
      href: "#",
    },
    { label: "About", hasChevron: false, href: "/about" },
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

    // Close language dropdown when opening main dropdowns
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

    // Close language dropdown when opening main dropdowns
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
          label: "MuleSoft",
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
              description: "Seamless Salesforce integration",
              icon: "link",
            },
            {
              title: "Lightning Flow Automation",
              description: "Process automation and workflow",
              icon: "workflow",
            },
            {
              title: "Salesforce Reports Integration",
              description: "Data analytics and reporting",
              icon: "chart",
            },
          ],
        },
        {
          label: "n8n",
          isSelected: false,
          menuItems: [
            {
              title: "Workflow Automation",
              description: "Visual workflow builder and automation",
              icon: "workflow",
            },
            {
              title: "Self-Hosted Integration",
              description: "Deploy on your own infrastructure",
              icon: "server",
            },
            {
              title: "Custom Node Development",
              description: "Build custom integration nodes",
              icon: "code",
            },
            {
              title: "API Integration",
              description: "Connect any API with ease",
              icon: "link",
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
          ],
        },
      ];
    }

    if (openDropdown === "Products") {
      return [
        {
          label: "MuleSoft",
          isSelected: true,
          menuItems: [
            {
              title: "MuleSoftLP",
              description: "AI-Powered Integration Learning",
              image: "csi3.png",
              href: "https://MuleSoft.dev/",
            },
            {
              title: "Community Platform",
              description: "Open-source integration community hub",
              image: "csi8.png",
              href: "https://community.platform.mulecraft.in/",
            },
            {
              title: "AnypointLP",
              description: "Complete API lifecycle management",
              image: "csi6.png",
              href: "https://anypointlp-secondary.lovable.app/",
            },
          ],
        },
        {
          label: "SnapLogic",
          isSelected: false,
          menuItems: [
            {
              title: "SnapMapper",
              description: "Visual data mapping and transformation tool",
              image: "csi1.png",
              href: "https://snaplogic.playground.mulecraft.in/",
            },
            {
              title: "RAMLify Flow Agent",
              description: "API design and flow automation agent",
              image: "csi2.png",
              href: "https://ramlify-flow-agent.lovable.app/",
            },
          ],
        },
        {
          label: "Others",
          isSelected: false,
          menuItems: [
            {
              title: "CloudHub 2.0 Migration",
              description: "Migrate to CloudHub 2.0 with Confidence",
              image: "csi7.png",
              href: "https://mule-migration-nexus.lovable.app/",
            },
            {
              title: "DataWeave Task Generator",
              description: "AI-powered DataWeave code generation",
              image: "csi9.png",
              href: "https://mule-weave-wizard.lovable.app/",
            },
            {
              title: "Goose",
              description: "Deploy, Scale, Dominate",
              image: "csi4.png",
              href: "https://goosed.in/",
            },
            {
              title: "Training",
              description: "Learn Today, Lead Tomorrow!",
              image: "training.png",
              href: "https://training.mulecraft.in/",
            },
          ],
        },
      ];
    }

    if (openDropdown === "Case Studies") {
      return [
        {
          label: "HR Management",
          isSelected: true,
          menuItems: [
            {
              title: "Resource Management",
              description: "Employee record and performance analysis platform",
            },
            {
              title: "HR Management",
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
              description:
                "GraphQL is a modern, efficient query language for APIs that revolutionizes how we interact with data. Unlike traditional REST APIs, GraphQL enables clients to request only the data they need, minimizing unnecessary data transfer and improving performance.",
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
              description:
                "MuleCraft Academy offers comprehensive training programs to help you master integration technologies and advance your career.",
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

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setIsLanguageOpen(false);
  };

  const handleThemeSelect = (theme: string) => {
    setSelectedTheme(theme);
    // TODO: Implement theme switching logic here
  };

  return (
    <header
      ref={navbarRef}
      className="w-full fixed top-0 z-50 border-b border-gray-200 overflow-visible"
      style={{ backgroundColor: "#fff" }}
    >
      <nav className="w-full max-w-[1344px] mx-auto py-2 flex items-center justify-between min-h-[80px] overflow-visible">
        {/* Logo - Left side - Always visible */}
        <div className="flex items-center">
          <div
            className="flex items-center align-start overflow-hidden"
            style={{ maxWidth: "150px", maxHeight: "25px" }}
            overflow-visible
          >
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
                  className={`relative group ${
                    openDropdown === item.label ? "dropdown-active" : ""
                  }`}
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
                      (item as any).openInNewTab
                        ? "noopener noreferrer"
                        : undefined
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
                      padding: "0.35rem .75rem",
                    }}
                  >
                    {item.label}
                    {item.hasChevron && (
                      <ChevronDown
                        className="w-4 h-4"
                        style={{ color: "rgb(31, 31, 31)", strokeWidth: 1.6 }}
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
                    color: "#4b5563",
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
        <div className="flex items-center flex-shrink-0 overflow-visible">
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
                <div
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50"
                  style={{ marginBottom: "2px" }}
                >
                  <div
                    className="bg-black text-white px-1.5 py-0.5 rounded whitespace-nowrap relative"
                    style={{
                      fontFamily: '"Noto Sans", sans-serif',
                      fontSize: "10px",
                      lineHeight: "1.2",
                    }}
                  >
                    Search
                    {/* Tooltip arrow */}
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 -mt-px"
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: "3px solid transparent",
                        borderRight: "3px solid transparent",
                        borderTop: "3px solid #000000",
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
                <div
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50"
                  style={{ marginBottom: "2px" }}
                >
                  <div
                    className="bg-black text-white px-1.5 py-0.5 rounded whitespace-nowrap relative"
                    style={{
                      fontFamily: '"Noto Sans", sans-serif',
                      fontSize: "10px",
                      lineHeight: "1.2",
                    }}
                  >
                    Language
                    {/* Tooltip arrow */}
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 -mt-px"
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: "3px solid transparent",
                        borderRight: "3px solid transparent",
                        borderTop: "3px solid #000000",
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
                        marginBottom:
                          index < languages.length - 1 ? "0.25rem" : "0",
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
            {/* Theme Toggle Button */}
            <div className="relative group">
              <label className="inline-flex items-center relative cursor-pointer px-1.5 py-0.5 rounded-full transition-colors hover:bg-gray-100">
                <input
                  className="peer hidden"
                  id="toggle"
                  type="checkbox"
                  checked={selectedTheme === "Dark"}
                  onChange={() => {
                    const newTheme =
                      selectedTheme === "Light" ? "Dark" : "Light";
                    handleThemeSelect(newTheme);
                  }}
                />
                <div
                  className="relative rounded-full shadow-sm duration-300 after:absolute after:content-[''] after:rounded-full after:duration-300 after:shadow-md"
                  style={{
                    width: "58px",
                    height: "26px",
                    backgroundColor:
                      selectedTheme === "Dark" ? "#71717a" : "#ffffff",
                  }}
                >
                  <div
                    className="absolute rounded-full transition-all duration-300"
                    style={{
                      width: "20px",
                      height: "20px",
                      top: "3px",
                      left: selectedTheme === "Dark" ? "35px" : "3px",
                      background:
                        selectedTheme === "Dark"
                          ? "linear-gradient(to right, #18181b, #27272a)"
                          : "linear-gradient(to right, #f97316, #facc15)",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </div>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute pointer-events-none transition-opacity duration-300"
                  style={{
                    left: "11px",
                    width: "15px",
                    height: "15px",
                    fill: "white",
                    opacity: selectedTheme === "Dark" ? 0.6 : 1,
                  }}
                >
                  <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"></path>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute pointer-events-none transition-opacity duration-300"
                  style={{
                    right: "11px",
                    width: "15px",
                    height: "15px",
                    fill: selectedTheme === "Dark" ? "white" : "#3f3f46",
                    opacity: selectedTheme === "Dark" ? 0.7 : 0.6,
                  }}
                >
                  <path d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"></path>
                </svg>
              </label>
              {/* Tooltip */}
              <div
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50"
                style={{ marginBottom: "2px" }}
              >
                <div
                  className="bg-black text-white px-1.5 py-0.5 rounded whitespace-nowrap relative"
                  style={{
                    fontFamily: '"Noto Sans", sans-serif',
                    fontSize: "10px",
                    lineHeight: "1.2",
                  }}
                >
                  {selectedTheme === "Dark"
                    ? "Switch to Light"
                    : "Switch to Dark"}
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 -mt-px"
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "3px solid transparent",
                      borderRight: "3px solid transparent",
                      borderTop: "3px solid #000000",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex items-center" style={{ marginLeft: "1rem" }}>
            <Button
              variant="default"
              className="transition-colors duration-200"
              style={{
                backgroundColor: "#ffffff",
                color: "#059bd1",
                border: "1px solid #059bd1",
                padding: "0.675rem 1rem",
                fontSize: "0.875rem",
                height: "auto",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#059bd1";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.color = "#059bd1";
              }}
            >
              Community
            </Button>
          </div>
          <div className="flex items-center" style={{ marginLeft: "1rem" }}>
            <Button
              variant="default"
              className="transition-colors duration-200"
              style={{
                backgroundColor: "#059bd1",
                color: "#ffffff",
                border: "1px solid #059bd1",
                padding: "0.675rem 1rem",
                fontSize: "0.875rem",
                height: "auto",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#047ba8";
                e.currentTarget.style.borderColor = "#047ba8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#059bd1";
                e.currentTarget.style.borderColor = "#059bd1";
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
