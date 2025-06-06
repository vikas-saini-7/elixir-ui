import clsx from "clsx";
import { useState, useRef, useEffect } from "react";

const COMPONENT_NAME = ({ 
  trigger, 
  items, 
  className,
  dropdownClassName, 
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={clsx("relative inline-block", className)} ref={dropdownRef} {...props}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>

      {isOpen && (
        <div 
          className={clsx(
            "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5",
            dropdownClassName
          )}
        >
          <ul>
            {items.map((item, index) => (
              <li 
                key={index}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  item.onClick?.();
                  setIsOpen(false);
                }}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default COMPONENT_NAME;