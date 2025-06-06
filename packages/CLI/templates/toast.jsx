import clsx from "clsx";
import { useState, useEffect } from "react";

const COMPONENT_NAME = ({ 
  message, 
  type = "default",
  duration = 3000,
  position = "bottom-right",
  onClose,
  className, 
  ...props 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const typeStyles = {
    default: "bg-gray-800 text-white",
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-white",
    info: "bg-blue-500 text-white",
  };

  const positionStyles = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  };

  useEffect(() => {
    if (duration !== Infinity) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={clsx(
        "fixed z-50 px-4 py-3 rounded-md shadow-lg",
        "transform transition-opacity duration-300",
        typeStyles[type] || typeStyles.default,
        positionStyles[position] || positionStyles["bottom-right"],
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between gap-2">
        <div>{message}</div>
        <button 
          onClick={() => {
            setIsVisible(false);
            onClose?.();
          }}
          className="text-current opacity-70 hover:opacity-100"
          aria-label="Close"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default COMPONENT_NAME;