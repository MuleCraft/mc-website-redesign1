import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center gap-10 pb-[86px] pt-[196px]">
      {/* Gradient Background - Light Blue and White */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 25%, #ffffff 50%, #e0f2fe 75%, #bae6fd 100%)",
        }}
      />
      
      {/* Grid Pattern Background */}
      <div
        className={cn(
          "absolute inset-0 -z-10",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#bae6fd_1px,transparent_1px),linear-gradient(to_bottom,#bae6fd_1px,transparent_1px)]",
        )}
      />
      
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      <div className="w-full max-w-[1440px] min-w-0 px-[100px] max-md:px-6">
        {/* Main Content */}
        <div className="flex flex-col items-center gap-10 mb-10">
          <div className="main-content text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Empowering Your Digital Connectivity with{" "}
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #204066 0%, #2d5a8a 50%, #204066 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                MuleSoft Mastery!
              </span>
              </h1>
            <div className="desc text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive consulting services for integration strategies, optimization, and best practices.
            </div>
          </div>

          {/* CTA Section */}
          <div className="main-download w-full max-w-2xl mb-0">
            <div className="flex w-full items-center justify-center">
              <Button 
                className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow hover:opacity-90 text-base rounded-[16px] py-[16px] px-12"
                style={{
                  background: 'linear-gradient(135deg, #204066 0%, #2d5a8a 50%, #204066 100%)',
                  color: '#ffffff',
                  border: 'none',
                }}
              >
                Contact
                </Button>
              </div>
            </div>
            
          {/* Animated MuleSoft Flow SVG */}
          <div className="w-full max-w-4xl mx-auto mt-0">
            <svg
              viewBox="0 0 800 300"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#204066" stopOpacity="1" />
                  <stop offset="100%" stopColor="#2d5a8a" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#204066" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#2d5a8a" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#204066" stopOpacity="0.3" />
                </linearGradient>
                <style>{`
                  @keyframes dash {
                    to { stroke-dashoffset: -20; }
                  }
                  .flow-line {
                    stroke-dasharray: 8 4;
                    animation: dash 2s linear infinite;
                  }
                `}</style>
              </defs>

              {/* Connection Lines with Animation */}
              <path
                id="path1"
                d="M 100 150 Q 200 100 300 150"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                opacity="0.6"
                className="flow-line"
              />
              <path
                id="path2"
                d="M 300 150 Q 400 200 500 150"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                opacity="0.6"
                className="flow-line"
                style={{ animationDelay: '0.5s' }}
              />
              <path
                id="path3"
                d="M 500 150 Q 600 100 700 150"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                opacity="0.6"
                className="flow-line"
                style={{ animationDelay: '1s' }}
              />
              <path
                id="path4"
                d="M 200 200 L 400 200"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                opacity="0.4"
                className="flow-line"
                style={{ animationDelay: '0.3s' }}
              />
              <path
                id="path5"
                d="M 400 200 L 600 200"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                opacity="0.4"
                className="flow-line"
                style={{ animationDelay: '0.8s' }}
              />

              {/* Flowing Particles along paths */}
              <g>
                <circle r="5" fill="#204066" opacity="0.8">
                  <animateMotion dur="3s" repeatCount="indefinite">
                    <mpath href="#path1" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle r="5" fill="#2d5a8a" opacity="0.8">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="1s">
                    <mpath href="#path1" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" begin="1s" />
                </circle>
                <circle r="5" fill="#204066" opacity="0.8">
                  <animateMotion dur="3s" repeatCount="indefinite">
                    <mpath href="#path2" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle r="5" fill="#2d5a8a" opacity="0.8">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s">
                    <mpath href="#path2" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" begin="1.5s" />
                </circle>
                <circle r="5" fill="#204066" opacity="0.8">
                  <animateMotion dur="3s" repeatCount="indefinite">
                    <mpath href="#path3" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* Nodes/Applications - Static (No Animation) */}
              <g>
                {/* Node 1 */}
                <circle cx="100" cy="150" r="20" fill="url(#nodeGradient)" />
                <circle cx="100" cy="150" r="25" fill="none" stroke="#204066" strokeWidth="2" opacity="0.3" />
                <text x="100" y="155" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">App</text>
                
                {/* Node 2 */}
                <circle cx="300" cy="150" r="20" fill="url(#nodeGradient)" />
                <circle cx="300" cy="150" r="25" fill="none" stroke="#204066" strokeWidth="2" opacity="0.3" />
                <g transform="translate(300, 150)">
                  <circle r="8" fill="white" opacity="0.9" />
                  <path d="M -4 -4 L 4 0 L -4 4 Z" fill="#204066" />
                </g>
                
                {/* Node 3 */}
                <circle cx="500" cy="150" r="20" fill="url(#nodeGradient)" />
                <circle cx="500" cy="150" r="25" fill="none" stroke="#204066" strokeWidth="2" opacity="0.3" />
                <text x="500" y="155" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">API</text>
                
                {/* Node 4 */}
                <circle cx="700" cy="150" r="20" fill="url(#nodeGradient)" />
                <circle cx="700" cy="150" r="25" fill="none" stroke="#204066" strokeWidth="2" opacity="0.3" />
                <text x="700" y="155" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Data</text>
                
                {/* Secondary Nodes */}
                <circle cx="200" cy="200" r="15" fill="#bae6fd" opacity="0.8" />
                <circle cx="200" cy="200" r="18" fill="none" stroke="#204066" strokeWidth="1.5" opacity="0.4" />
                <text x="200" y="204" textAnchor="middle" fill="#204066" fontSize="9" fontWeight="600">Cloud</text>
                
                <circle cx="400" cy="200" r="15" fill="#bae6fd" opacity="0.8" />
                <circle cx="400" cy="200" r="18" fill="none" stroke="#204066" strokeWidth="1.5" opacity="0.4" />
                <text x="400" y="204" textAnchor="middle" fill="#204066" fontSize="9" fontWeight="600">Sync</text>
                
                <circle cx="600" cy="200" r="15" fill="#bae6fd" opacity="0.8" />
                <circle cx="600" cy="200" r="18" fill="none" stroke="#204066" strokeWidth="1.5" opacity="0.4" />
                <text x="600" y="204" textAnchor="middle" fill="#204066" fontSize="9" fontWeight="600">Hub</text>
              </g>
            </svg>
                    </div>
                  </div>
                  
        {/* Product Tabs Section */}
        <div className="flex flex-col items-center gap-4">
          <div className="main-product w-full">
            {/* Tabs */}
            {/* <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto pb-2">
              <div className="flex items-center gap-1 border-b-2 border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "product-tab inline-flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all relative",
                      activeTab === tab.id
                        ? "border-b-2 -mb-[2px]"
                        : "text-gray-600 hover:text-gray-900"
                    )}
                    style={
                      activeTab === tab.id
                        ? { color: 'hsl(var(--primary))', borderColor: 'hsl(var(--primary))' }
                        : undefined
                    }
                    role="tab"
                    aria-selected={activeTab === tab.id}
                  >
                    <span className="text-lg">{tab.icon}</span>
                    <span className="tab-label">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div> */}

            {/* Tab Panels */}
            {/* <div className="relative w-full">
              <div className="w-full flex items-center justify-center">
                <img
                  src={muImage}
                  alt="MuleCraft Hero"
                  className="w-full max-w-6xl rounded-[16px] object-cover"
                  style={{ height: 'auto', width: '100%' }}
                />
            </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
