import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconSearch } from "@tabler/icons-react";

const GlobalSearch = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  useEffect(() => {
    if (isSearchActive) {
      document.body.style.overflow = "hidden";
      inputRef.current?.focus();
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSearchActive]);

  return (
    <div>
      <div
        onClick={handleSearchClick}
        className="hidden md:flex px-3 py-2 rounded-md bg-gray-500/20 text-sm items-center gap-4 cursor-text text-gray-500"
      >
        Search Component
        <IconSearch size={16} />
      </div>
      <AnimatePresence>
        {isSearchActive && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen py-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-80 backdrop-blur-lg z-50"
              onClick={handleSearchClick}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className="relative h-full p-6 z-50 bg-black w-full max-w-[800px] mx-auto border border-white/20 rounded-lg"
              initial={{ opacity: 0, y: -50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="relative w-full">
                <input
                  ref={inputRef}
                  type="text"
                  className="w-full p-4 pl-10 pr-28 border-gray-300 bg-white/10 rounded-lg"
                  placeholder="Search..."
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <IconSearch size={20} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GlobalSearch;
