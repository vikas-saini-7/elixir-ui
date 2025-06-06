import clsx from "clsx";
import { useEffect } from "react";

const COMPONENT_NAME = ({ 
  isOpen, 
  onClose, 
  children, 
  title,
  className, 
  ...props 
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      ></div>
      
      <div className="flex min-h-screen items-center justify-center p-4">
        <div 
          className={clsx(
            "relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl",
            className
          )}
          {...props}
        >
          <div className="mb-4 flex items-center justify-between">
            {title && <h3 className="text-lg font-medium">{title}</h3>}
            <button
              onClick={onClose}
              className="ml-auto rounded-md p-1 text-gray-400 hover:text-gray-500"
            >
              &times;
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default COMPONENT_NAME;