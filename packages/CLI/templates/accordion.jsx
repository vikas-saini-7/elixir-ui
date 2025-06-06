import clsx from "clsx";
import { useState } from "react";

const COMPONENT_NAME = ({ 
  items, 
  defaultOpen = [], 
  multiple = false,
  className, 
  ...props 
}) => {
  const [openItems, setOpenItems] = useState(defaultOpen);

  const toggleItem = (index) => {
    setOpenItems((current) => {
      if (multiple) {
        return current.includes(index)
          ? current.filter(i => i !== index)
          : [...current, index];
      }
      
      return current.includes(index) ? [] : [index];
    });
  };

  return (
    <div className={clsx("divide-y divide-gray-200", className)} {...props}>
      {items.map((item, index) => (
        <div key={index} className="py-3">
          <button
            className="flex w-full items-center justify-between text-left"
            onClick={() => toggleItem(index)}
          >
            <span className="text-sm font-medium">{item.title}</span>
            <span className={clsx(
              "ml-6 h-5 w-5 flex-shrink-0 transform transition-transform",
              openItems.includes(index) ? "rotate-180" : ""
            )}>
              ▼
            </span>
          </button>
          <div
            className={clsx(
              "mt-2 overflow-hidden text-sm transition-all duration-200",
              openItems.includes(index) ? "max-h-96" : "max-h-0"
            )}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default COMPONENT_NAME;