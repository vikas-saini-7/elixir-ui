"use client";
import { IconSun } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import GlobalSearch from "./GlobalSearch";

type HeaderProps = {
  showOnHome?: boolean;
};

const Header: React.FC<HeaderProps> = ({ showOnHome }) => {
  const pathname = usePathname();
  if (pathname === "/" && !showOnHome) return null;
  return (
    <div className="flex items-center justify-between py-4 px-8 border-b border-gray-500/30 z-50">
      <div className="flex items-center gap-8">
        <Link href="/">
          <h1 className="font-bold text-lg flex items-center text-nowrap">
            <img
              className="w-[30px] mr-3"
              src="/images/elixir-ui-transparent-svg.svg"
              alt="Not Found"
            />
            Elixir UI
          </h1>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-4 text-sm">
            <Link href="/docs">
              <li>Docs</li>
            </Link>
            <Link href="/docs/components">
              <li>Components</li>
            </Link>
            <Link href="/sections">
              <li>Sections</li>
            </Link>
            <Link href="/templates">
              <li>Templates</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <GlobalSearch />
        <IconSun />
      </div>
    </div>
  );
};

export default Header;
