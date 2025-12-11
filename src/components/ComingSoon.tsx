import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ComingSoon = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[120vh] flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[80px]">
        <section className="w-full py-32 md:py-48 lg:py-64 bg-gradient-to-b from-gray-50 to-white" style={{ minHeight: 'calc(100vh - 80px)' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: 'clamp(36px, 8vw, 64px)',
                  lineHeight: 'clamp(44px, 9vw, 72px)',
                  color: 'rgb(31, 31, 31)',
                  marginBottom: '4rem',
                }}
              >
                Coming Soon
              </h1>
              
              <Link
                to="/"
                className="transition-all duration-300 rounded-full text-white shadow-md hover:shadow-lg bg-gradient-to-r from-[#10b981] to-[#06b6d4] hover:opacity-90 border-none"
                style={{
                  display: 'inline-block',
                  padding: '0.875rem 2rem',
                  textDecoration: 'none',
                  fontFamily: '"Noto Sans", sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                }}
              >
                Go Back Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ComingSoon;

