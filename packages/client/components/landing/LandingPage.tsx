"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const LandingPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description:
        "Super fast shipment with optimized components that load instantly and perform flawlessly.",
    },
    {
      icon: "🎨",
      title: "Modern Design",
      description:
        "Beautiful, contemporary UI components that make your applications look professional and polished.",
    },
    {
      icon: "🔧",
      title: "Easy Integration",
      description:
        "Copy-paste ready components that integrate seamlessly with your existing React or Next.js projects.",
    },
    {
      icon: "📱",
      title: "Responsive",
      description:
        "All components are fully responsive and work perfectly across all devices and screen sizes.",
    },
    {
      icon: "🎭",
      title: "Customizable",
      description:
        "Highly customizable components with Tailwind CSS classes for complete design control.",
    },
    {
      icon: "🚀",
      title: "Production Ready",
      description:
        "Battle-tested components ready for production use with TypeScript support included.",
    },
  ];

  const stats = [
    { number: "50+", label: "Components" },
    { number: "100%", label: "Open Source" },
    { number: "0ms", label: "Setup Time" },
    { number: "∞", label: "Possibilities" },
  ];

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div
        className="absolute inset-0 opacity-10 -z-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
            mousePosition.y * 100
          }%, rgba(100, 255, 100, 0.3), transparent 50%)`,
        }}
      />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-[30rem] w-[30rem] rounded-full bg-purple-500/5 blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 h-[35rem] w-[35rem] rounded-full bg-blue-500/5 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 h-[25rem] w-[25rem] rounded-full bg-emerald-500/5 blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Main Content */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Why Choose Elixir UI Section */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="animate-fade-up text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4 sm:mb-6">
              Why Choose Elixir UI?
            </h2>
            <p className="animate-fade-up animation-delay-150 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Build beautiful, modern applications faster than ever with our
              carefully crafted component library.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="animate-fade-up bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300 hover:bg-gray-900/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="animate-fade-up text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-white">
              Built for Developers, By Developers
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Code Example Section */}
          <div className="mb-16 sm:mb-20">
            <h2 className="animate-fade-up text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white">
              Get Started in Seconds
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="animate-fade-up animation-delay-150 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm">Terminal</span>
                </div>
                <div className="space-y-3">
                  <div className="text-gray-300 font-mono text-sm">
                    <span className="text-purple-400">$</span> npx
                    @elixir-labs/ui init
                  </div>
                  <div className="text-gray-300 font-mono text-sm">
                    <span className="text-purple-400">$</span> npx
                    @elixir-labs/ui add button
                  </div>
                  <div className="text-gray-300 font-mono text-sm">
                    <span className="text-blue-400">import</span>{" "}
                    <span className="text-yellow-400">{"{ Button }"}</span>{" "}
                    <span className="text-blue-400">from</span>{" "}
                    <span className="text-green-400">'./ui/button'</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="animate-fade-up text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">
              Ready to Build Something Amazing?
            </h2>
            <p className="animate-fade-up animation-delay-150 text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">
              Join thousands of developers who are already using Elixir UI to
              create stunning applications.
            </p>
            <div className="animate-fade-up animation-delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/docs/introduction">
                <button className="w-full sm:w-auto px-6 py-3 bg-white text-black font-medium rounded-lg hover:shadow-lg hover:shadow-white/20 transition-all duration-300 hover:scale-105">
                  Get Started Now
                </button>
              </Link>
              <Link href="/docs/components">
                <button className="w-full sm:w-auto px-6 py-3 bg-transparent border border-gray-700 text-white font-medium rounded-lg hover:border-gray-600 hover:bg-gray-800/30 transition-all duration-300">
                  View Components
                </button>
              </Link>
            </div>
          </div>

          {/* Bottom decorative section */}
          <div className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-gray-800">
            <div className="text-center">
              <div className="animate-fade-up">
                <div className="inline-flex items-center space-x-2 text-gray-500 mb-4">
                  <span className="w-6 h-[1px] bg-gray-700"></span>
                  <span className="text-sm">
                    Modern Components, Super Fast Shipment
                  </span>
                  <span className="w-6 h-[1px] bg-gray-700"></span>
                </div>
              </div>
              <p className="animate-fade-up animation-delay-150 text-gray-600 text-sm">
                Built with ❤️ for the developer community
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
