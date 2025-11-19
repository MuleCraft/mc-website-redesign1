import csi4Image from "@/assets/csi4.png";

interface DropdownItem {
  label: string;
  isSelected?: boolean;
  content?: string[];
  menuItems?: MenuGridItem[];
}

interface MenuGridItem {
  icon?: string;
  title: string;
  description: string;
  href?: string;
}

interface DropdownMenuProps {
  items: DropdownItem[];
  menuItems?: MenuGridItem[];
  isOpen: boolean;
  onClose: () => void;
  navbarHeight?: number;
  contentType?: "grid" | "list";
  navItem?: string;
}

const DropdownMenu = ({
  items,
  menuItems: _menuItems, // Keep for potential future use
  isOpen,
  onClose,
  navbarHeight = 80,
  navItem,
}: DropdownMenuProps) => {
  if (!isOpen) return null;

  // Get first 3 items for three columns
  const getColumns = () => {
    // Take first 3 items, or pad with empty items if less than 3
    const columnItems = items.slice(0, 3);
    while (columnItems.length < 3) {
      columnItems.push({ label: "", menuItems: [] });
    }
    return columnItems;
  };

  const columns = getColumns();

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/20"
        onClick={onClose}
        style={{ top: `${navbarHeight}px` }}
      />

      {/* Centered Dropdown Dialog */}
      <div
        data-dropdown-menu
        className="fixed left-1/2 -translate-x-1/2 z-50 bg-white shadow-2xl rounded-lg"
        style={{
          top: `${navbarHeight + 16}px`, // Add 16px top margin
          width: "70%",
          maxWidth: "900px",
          minHeight: "280px",
          maxHeight: "380px",
        }}
      >
        <div className="flex h-full w-full">
          {/* Three Column Layout */}
          {columns.map((columnItem, columnIndex) => {
            const isOtherProducts = navItem === "Products" && columnItem.label === "OTHER PRODUCTS";
            
            return (
              <div key={columnIndex} className="flex-1 flex flex-col relative">
                {/* Column Content */}
                <div
                  className="flex-1 overflow-y-auto flex flex-col"
                style={{
                    padding: "1.25rem 1.25rem",
                  fontFamily: '"Noto Sans", sans-serif',
                }}
              >
                  {/* Special layout for OTHER PRODUCTS in Products dropdown */}
                  {isOtherProducts ? (
                    <>
                      {/* Upper row - Image with description */}
                      <div style={{ marginLeft: "0.75rem", marginRight: "0.75rem", marginBottom: "1rem" }}>
                        <a
                          href="#"
                          style={{
                            display: "block",
                            textDecoration: "none",
                            color: "inherit",
                          }}
                        >
                          <img
                            src={csi4Image}
                            alt="GOOSE | Deploy, Scale, Dominate"
                            style={{
                              width: "100%",
                              height: "auto",
                              borderRadius: "8px",
                              objectFit: "cover",
                              marginBottom: "0.75rem",
                            }}
                          />
                          <div
                            style={{
                              fontFamily: '"Noto Sans", sans-serif',
                              fontSize: "14px",
                              lineHeight: "1.5",
                              color: "#1f1f1f",
                              fontWeight: 500,
                            }}
                          >
                            GOOSE | Deploy, Scale, Dominate
                          </div>
                          <div
                            style={{
                              fontFamily: '"Noto Sans", sans-serif',
                              fontSize: "12px",
                              lineHeight: "1.4",
                              color: "#707070",
                              marginTop: "0.25rem",
                            }}
                          >
                            The ultimate DevOps platform that transforms how you build, deploy, and scale applications.
                          </div>
                        </a>
                      </div>
                      
                      {/* Gray Separator Line - Full Width */}
                      <div
                        style={{
                          width: "calc(100% + 2.5rem)",
                          height: "1px",
                          backgroundColor: "#d1d5db",
                          marginBottom: "1rem",
                          marginLeft: "-1.25rem",
                          marginRight: "-1.25rem",
                        }}
                      />
                      
                      {/* Bottom row - Links */}
                      <div className="space-y-2.5 flex-1">
                        {(columnItem.menuItems || []).map((menuItem, index) => (
                          <a
                            key={index}
                            href={menuItem.href || "#"}
                            className="link-item block"
                            style={{
                              display: "block",
                              padding: "0.5rem 0.75rem",
                              color: "#1f1f1f",
                              transition: "color .3s ease 0s",
                              textDecoration: "none",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = "#204066";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = "#1f1f1f";
                            }}
                          >
                            {/* Content */}
                            <div className="item-content">
                              <div
                                className="item-title"
                                style={{
                                  fontFamily: '"Noto Sans", sans-serif',
                                  fontSize: "15px",
                                  lineHeight: "1.4",
                                  fontWeight: 500,
                                  color: "inherit",
                                }}
                              >
                                {menuItem.title}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Column Header */}
                      {columnItem.label && (
                        <div
                          className="mb-4"
                          style={{
                            fontFamily: '"Noto Sans", sans-serif',
                            fontSize: "13px",
                            fontWeight: 600,
                            color: "#6b7280",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                            paddingLeft: "0.75rem",
                          }}
                        >
                          {columnItem.label}
                        </div>
                      )}

                      {/* Menu Items */}
                      <div className="space-y-2.5">
                        {(columnItem.menuItems || []).map((menuItem, index) => (
                        <a
                          key={index}
                          href={menuItem.href || "#"}
                            className="link-item block"
                          style={{
                              display: "block",
                              padding: "0.5rem 0.75rem",
                            color: "#1f1f1f",
                              transition: "color .3s ease 0s",
                            textDecoration: "none",
                          }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = "#204066";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = "#1f1f1f";
                            }}
                          >
                          {/* Content */}
                            <div className="item-content">
                            <div
                              className="item-title"
                              style={{
                                fontFamily: '"Noto Sans", sans-serif',
                                  fontSize: "15px",
                                  lineHeight: "1.4",
                                  fontWeight: 500,
                                  color: "inherit",
                              }}
                            >
                              {menuItem.title}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </>
                )}
            </div>

                {/* Grey Separator Line (except for last column) */}
                {columnIndex < columns.length - 1 && (
                  <div
                    className="absolute right-0 top-0 bottom-0 w-px"
                style={{
                      backgroundColor: "#d1d5db",
                      zIndex: 10,
                    }}
                  />
                )}
                </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DropdownMenu;
