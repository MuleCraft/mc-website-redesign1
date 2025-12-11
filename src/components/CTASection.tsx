import { Link } from "react-router-dom";
import MuleCraftName from "./MuleCraftName";

const CTASection = () => {
  return (
    <div 
      style={{ 
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        width: '100%',
        zIndex: 10,
        transform: 'translateY(-50%)',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="fwc-wrap"
          style={{
            '--BGcolor': '#0991B2',
            padding: 'clamp(1.5rem, 4vw, 2rem) clamp(1rem, 3vw, 1.25rem)',
            borderRadius: '0.63rem',
            backgroundColor: 'var(--BGcolor)',
            position: 'relative',
            maxWidth: '1000px',
            margin: '0 auto',
          } as React.CSSProperties}
        >
          <div
            className="d-flex align-items-center fwc-container"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: 'clamp(1rem, 3vw, 1.5rem)',
            }}
          >
            {/* Text Content */}
            <div
              className="fwc-text"
              style={{
                color: '#fff',
                width: '100%',
              }}
            >
              <h2
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: 'clamp(20px, 5vw, 32px)',
                  lineHeight: 'clamp(28px, 6vw, 40px)',
                  color: 'rgb(255, 255, 255)',
                  margin: '0 0 1rem 0',
                  whiteSpace: 'normal',
                }}
              >
                Integrate everything. Accelerate anything.™
              </h2>
              <p
                style={{
                  fontFamily: '"Noto Sans", sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: 'clamp(14px, 3.5vw, 16px)',
                  lineHeight: 'clamp(20px, 5vw, 24px)',
                  color: 'rgb(255, 255, 255)',
                  margin: '0',
                  padding: '0 0.5rem',
                }}
              >
                Empowering businesses with <MuleCraftName />.
              </p>
            </div>

            {/* CTA Button */}
            <div
              className="fwc-cta d-flex align-items-center"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                className="fwc-buttons-wrap d-flex align-items-center"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Link
                  to="/contact"
                  className="btn"
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    verticalAlign: 'top',
                    padding: 'clamp(0.75rem, 2vw, 0.82rem) clamp(1rem, 3vw, 1.44rem)',
                    paddingLeft: 'clamp(60px, 18vw, 128px)',
                    color: '#072b55',
                    fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
                    fontWeight: 600,
                    lineHeight: '1.5',
                    textAlign: 'center',
                    textDecoration: 'none',
                    border: '1px solid #fff',
                    borderRadius: '100vh',
                    backgroundColor: '#fff',
                    transition: 'background-color 0.3s ease 0s, color 0.3s ease 0s, border-color 0.3s ease 0s',
                    WebkitUserSelect: 'none',
                    userSelect: 'none',
                    cursor: 'pointer',
                    minWidth: 'fit-content',
                    maxWidth: '100%',
                    overflow: 'hidden',
                  }}
                >
                  {/* Avatar Group */}
                  <div
                    className="fwc-avatar-group"
                    style={{
                      position: 'absolute',
                      left: 'clamp(0.75rem, 2vw, 1.44rem)',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      className="fwc-avatar"
                      style={{
                        width: 'clamp(24px, 5vw, 32px)',
                        height: 'clamp(24px, 5vw, 32px)',
                        borderRadius: '50%',
                        border: '2px solid #fff',
                        overflow: 'hidden',
                        backgroundColor: '#fff',
                        marginLeft: 'clamp(-6px, -1.5vw, -8px)',
                        position: 'relative',
                        zIndex: 3,
                      }}
                    >
                      <img
                        src="https://boomi.com/wp-content/uploads/Sales-Profile-Image-3.jpg"
                        alt="Sales-Profile-Image-3"
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                    <div
                      className="fwc-avatar"
                      style={{
                        width: 'clamp(24px, 5vw, 32px)',
                        height: 'clamp(24px, 5vw, 32px)',
                        borderRadius: '50%',
                        border: '2px solid #fff',
                        overflow: 'hidden',
                        backgroundColor: '#fff',
                        marginLeft: 'clamp(-6px, -1.5vw, -8px)',
                        position: 'relative',
                        zIndex: 2,
                      }}
                    >
                      <img
                        src="https://boomi.com/wp-content/uploads/Sales-Profile-Image-1.jpg"
                        alt="Sales-Profile-Image-1"
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                    <div
                      className="fwc-avatar"
                      style={{
                        width: 'clamp(24px, 5vw, 32px)',
                        height: 'clamp(24px, 5vw, 32px)',
                        borderRadius: '50%',
                        border: '2px solid #fff',
                        overflow: 'hidden',
                        backgroundColor: '#fff',
                        marginLeft: 'clamp(-6px, -1.5vw, -8px)',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      <img
                        src="https://boomi.com/wp-content/uploads/Sales-Profile-Image-2.jpg"
                        alt="Sales-Profile-Image-2"
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                  </div>
                  <span className="btn-text-desktop hidden md:inline" style={{ whiteSpace: 'nowrap' }}>Talk to an expert</span>
                  <span className="btn-text-mobile md:hidden" style={{ whiteSpace: 'nowrap' }}></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .fwc-wrap {
            width: calc(100% - 1rem) !important;
            max-width: calc(100% - 1rem) !important;
          }
          .btn {
            width: 100% !important;
            max-width: 100% !important;
            padding-left: clamp(50px, 15vw, 60px) !important;
          }
          .btn-text-mobile,
          .btn-text-desktop {
            font-size: clamp(0.8rem, 2.5vw, 1rem) !important;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .fwc-avatar-group {
            left: clamp(0.5rem, 1.5vw, 0.75rem) !important;
          }
        }
        @media (min-width: 768px) {
          .btn-text-desktop {
            font-size: clamp(0.875rem, 2.5vw, 1rem) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CTASection;

