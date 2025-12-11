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
            '--BGcolor': '#4b4fe2',
            padding: '2rem 1.25rem',
            borderRadius: '0.63rem',
            backgroundColor: 'var(--BGcolor)',
            position: 'relative',
            width: '100%',
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
              gap: '1.5rem',
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
                  fontSize: '32px',
                  lineHeight: '40px',
                  color: 'rgb(255, 255, 255)',
                  margin: '0 0 1rem 0',
                  whiteSpace: 'nowrap',
                }}
              >
                Integrate everything. Accelerate anything.™
              </h2>
              <p
                style={{
                  fontFamily: '"Noto Sans", sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: 'rgb(255, 255, 255)',
                  margin: '0',
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
                <a
                  href="/company/contact/"
                  target="_self"
                  className="btn"
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    verticalAlign: 'top',
                    padding: '0.82rem 1.44rem',
                    paddingLeft: '128px',
                    color: '#072b55',
                    fontSize: '1rem',
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
                  }}
                >
                  {/* Avatar Group */}
                  <div
                    className="fwc-avatar-group"
                    style={{
                      position: 'absolute',
                      left: '1.44rem',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      className="fwc-avatar"
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        border: '2px solid #fff',
                        overflow: 'hidden',
                        backgroundColor: '#fff',
                        marginLeft: '-8px',
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
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        border: '2px solid #fff',
                        overflow: 'hidden',
                        backgroundColor: '#fff',
                        marginLeft: '-8px',
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
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        border: '2px solid #fff',
                        overflow: 'hidden',
                        backgroundColor: '#fff',
                        marginLeft: '-8px',
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
                  <span className="btn-text">Talk to an expert</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;

