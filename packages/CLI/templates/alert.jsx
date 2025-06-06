import clsx from "clsx";
import { useState } from "react";

const COMPONENT_NAME = ({ 
  children, 
  variant = "info", 
  dismissible = false,
  className, 
  ...props 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const variantStyles = {
    info: "bg-blue-50 text-blue-800 border-blue-200",
    success: "bg-green-50 text-green-800 border-green-200",
    warning: "bg-yellow-50 text-yellow-800 border-yellow-200",
    error: "bg-red-50 text-red-800 border-red-200",
  };

  return (
    <div
      className={clsx(
        "p-4 border rounded-md flex items-start justify-between",
        variantStyles[variant] || variantStyles.info,
        className
      )}
      {...props}
    >
      <div>{children}</div>
      {dismissible && (
        <button 
          onClick={() => setIsVisible(false)}
          className="ml-4 text-gray-500 hover:text-gray-700"
          aria-label="Dismiss"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default COMPONENT_NAME;