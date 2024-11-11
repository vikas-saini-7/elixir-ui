"use client";

import { useEffect, useState } from "react";
import Header from "../common/Header";
import Link from "next/link";

export default function Hero() {
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

  return (
    <>
      <div className="relative min-h-[90vh] overflow-hidden">
        {/* Animated background elements */}
        <Header showOnHome={true} />
        <div className="bg-black">
          <div
            className="absolute inset-0 opacity-20 -z-10"
            style={{
              background: `radial-gradient(circle at ${
                mousePosition.x * 100
              }% ${
                mousePosition.y * 100
              }%, rgba(100, 100, 255, 0.3), transparent 50%)`,
            }}
          />
          <div className="absolute inset-0 -z-10">
            <div className="absolute h-[20rem] w-[20rem] rounded-full bg-purple-500/10 blur-3xl animate-blob" />
            <div className="absolute right-0 h-[25rem] w-[25rem] rounded-full bg-blue-500/10 blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/2 h-[15rem] w-[15rem] rounded-full bg-emerald-500/10 blur-3xl animate-blob animation-delay-4000" />
          </div>
        </div>

        {/* Content */}
        <div className="relative flex min-h-[90vh] flex-col items-center md:items-start px-4 pt-48 md:pl-32">
          <h1 className="animate-fade-up bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-6xl font-bold tracking-tight text-transparent sm:text-7xl">
            Elixir UI
          </h1>
          <p className="animate-fade-up animation-delay-150 mt-6 text-center text-gray-400 md:text-xl">
            Modern Components, super fast shipment.
          </p>
          <Link href="/docs/introduction">
            <button className="px-4 py-2 bg-white text-black font-bold rounded-md mt-12 hover:shadow-lg hover:shadow-white/10">
              Getting Started
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
