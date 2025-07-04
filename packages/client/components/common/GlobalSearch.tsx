import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";

interface SearchResult {
  title: string;
  description: string;
  href: string;
  category: string;
}

const searchData: SearchResult[] = [
  // Getting Started
  {
    title: "Introduction",
    description: "Learn about Elixir UI and its features",
    href: "/docs/introduction",
    category: "Getting Started",
  },
  {
    title: "Installation",
    description: "Install Elixir UI in your project",
    href: "/docs/installation",
    category: "Getting Started",
  },
  {
    title: "Next.js Setup",
    description: "Configure Elixir UI with Next.js",
    href: "/docs/installation/nextjs",
    category: "Installation",
  },
  {
    title: "Vite Setup",
    description: "Configure Elixir UI with Vite",
    href: "/docs/installation/vite",
    category: "Installation",
  },
  {
    title: "React Setup",
    description: "Configure Elixir UI with Create React App",
    href: "/docs/installation/reactjs",
    category: "Installation",
  },
  // Components
  {
    title: "Button",
    description: "A versatile button component with multiple variants",
    href: "/docs/components/button",
    category: "Components",
  },
  {
    title: "Card",
    description: "Display content in a contained, elevated surface",
    href: "/docs/components/card",
    category: "Components",
  },
  {
    title: "Alert",
    description: "Display important messages and notifications",
    href: "/docs/components/alert",
    category: "Components",
  },
  {
    title: "Avatar",
    description: "Display user profile pictures and initials",
    href: "/docs/components/avatar",
    category: "Components",
  },
  {
    title: "Badge",
    description: "Display status, labels, or categories",
    href: "/docs/components/badge",
    category: "Components",
  },
  {
    title: "Input",
    description: "Text input field for forms",
    href: "/docs/components/input",
    category: "Components",
  },
];

const GlobalSearch = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleBackdropClick = () => {
    setIsSearchActive(false);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const filtered = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filtered);
  };

  const handleResultClick = () => {
    setIsSearchActive(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsSearchActive(false);
    }
  };

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchActive(true);
      }
    };

    document.addEventListener("keydown", handleGlobalKeyDown);
    return () => document.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  useEffect(() => {
    if (isSearchActive) {
      document.body.style.overflow = "hidden";
      inputRef.current?.focus();
    } else {
      document.body.style.overflow = "auto";
      setSearchQuery("");
      setSearchResults([]);
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSearchActive]);

  return (
    <div>
      <div
        onClick={handleSearchClick}
        className="hidden md:flex px-3 py-2 rounded-md bg-gray-500/20 text-sm items-center gap-4 cursor-text text-gray-500 hover:bg-gray-500/30 transition-colors"
      >
        Search Components...
        <div className="flex items-center gap-1">
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>
      </div>

      <div
        onClick={handleSearchClick}
        className="md:hidden p-2 rounded-md hover:bg-gray-500/50 transition-colors cursor-pointer"
      >
        <IconSearch size={20} className="text-gray-400" />
      </div>

      <AnimatePresence>
        {isSearchActive && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen z-50 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-screen"
              onClick={handleBackdropClick}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />
            <div className="relative flex items-start justify-center pt-16 px-4">
              <motion.div
                className="relative w-full max-w-2xl bg-[#171717] border border-gray-500/20 rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, y: -50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <IconSearch size={20} className="text-gray-400" />
                  </div>
                  <input
                    ref={inputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full pl-12 pr-4 py-4 bg-transparent border-0 text-white placeholder-gray-400 focus:outline-none text-lg"
                    placeholder="Search components, guides, and more..."
                  />
                </div>

                {searchResults.length > 0 && (
                  <div className="border-t border-gray-700 max-h-96 overflow-y-auto">
                    {Object.entries(
                      searchResults.reduce((acc, result) => {
                        if (!acc[result.category]) acc[result.category] = [];
                        acc[result.category].push(result);
                        return acc;
                      }, {} as Record<string, SearchResult[]>)
                    ).map(([category, results]) => (
                      <div key={category} className="p-2">
                        <div className="px-2 py-1 text-xs font-medium text-gray-400 uppercase tracking-wide">
                          {category}
                        </div>
                        {results.map((result, index) => (
                          <Link
                            key={index}
                            href={result.href}
                            onClick={handleResultClick}
                            className="block px-3 py-2 rounded-md hover:bg-gray-500/50 transition-colors"
                          >
                            <div className="font-medium text-white">
                              {result.title}
                            </div>
                            <div className="text-sm text-gray-400">
                              {result.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                {searchQuery && searchResults.length === 0 && (
                  <div className="border-t border-gray-700 p-6 text-center">
                    <div className="text-gray-400">
                      No results found for &quot;{searchQuery}&quot;
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Try searching for components, installation guides, or API
                      references
                    </div>
                  </div>
                )}

                {!searchQuery && (
                  <div className="border-t border-gray-700 p-4">
                    <div className="text-sm text-gray-400 mb-3">
                      Quick Links
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      <Link
                        href="/docs/introduction"
                        onClick={handleResultClick}
                        className="block px-3 py-2 rounded-md hover:bg-gray-500/20 transition-colors"
                      >
                        <div className="font-medium text-white">
                          Introduction
                        </div>
                        <div className="text-sm text-gray-400">
                          Get started with Elixir UI
                        </div>
                      </Link>
                      <Link
                        href="/docs/components/button"
                        onClick={handleResultClick}
                        className="block px-3 py-2 rounded-md hover:bg-gray-500/20 transition-colors"
                      >
                        <div className="font-medium text-white">
                          Button Component
                        </div>
                        <div className="text-sm text-gray-400">
                          Versatile button with multiple variants
                        </div>
                      </Link>
                      <Link
                        href="/docs/installation"
                        onClick={handleResultClick}
                        className="block px-3 py-2 rounded-md hover:bg-gray-500/20 transition-colors"
                      >
                        <div className="font-medium text-white">
                          Installation
                        </div>
                        <div className="text-sm text-gray-400">
                          Set up Elixir UI in your project
                        </div>
                      </Link>
                    </div>
                  </div>
                )}

                <div className="border-t border-gray-700 px-4 py-3 text-xs text-gray-500 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span>
                      Press{" "}
                      <kbd className="px-1 py-0.5 bg-gray-800 rounded text-gray-300">
                        ↵
                      </kbd>{" "}
                      to select
                    </span>
                    <span>
                      Press{" "}
                      <kbd className="px-1 py-0.5 bg-gray-800 rounded text-gray-300">
                        ESC
                      </kbd>{" "}
                      to close
                    </span>
                  </div>
                  {/* <span>Powered by Elixir UI</span> */}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GlobalSearch;
