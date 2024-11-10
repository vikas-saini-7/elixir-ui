"use client";
import { IconSun } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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
          <h1 className="font-bold text-lg">Elixir UI</h1>
        </Link>
        <nav>
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
        <input
          className="px-3 py-1 rounded-md bg-gray-500/20"
          type="text"
          placeholder="Search (Ctrl + k)"
        />
        <IconSun />
      </div>
    </div>
  );
};

export default Header;
