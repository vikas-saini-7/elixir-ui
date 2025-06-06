import clsx from "clsx";
import { useState } from "react";

const TabsContext = React.createContext({});

const COMPONENT_NAME = ({ 
  children, 
  defaultTab, 
  className, 
  ...props 
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || 0);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={clsx("w-full", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

const TabList = ({ 
  children, 
  className, 
  ...props 
}) => {
  return (
    <div 
      className={clsx(
        "flex border-b border-gray-200", 
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
};

const Tab = ({ 
  children, 
  index, 
  className, 
  ...props 
}) => {
  const { activeTab, setActiveTab } = React.useContext(TabsContext);
  const isActive = activeTab === index;

  return (
    <button
      className={clsx(
        "px-4 py-2 text-sm font-medium",
        isActive 
          ? "border-b-2 border-blue-500 text-blue-600" 
          : "text-gray-500 hover:text-gray-700",
        className
      )}
      onClick={() => setActiveTab(index)}
      {...props}
    >
      {children}
    </button>
  );
};

const TabPanels = ({ 
  children, 
  className, 
  ...props 
}) => {
  return (
    <div className={clsx("mt-2", className)} {...props}>
      {children}
    </div>
  );
};

const TabPanel = ({ 
  children, 
  index, 
  className, 
  ...props 
}) => {
  const { activeTab } = React.useContext(TabsContext);
  
  if (activeTab !== index) return null;
  
  return (
    <div className={clsx("", className)} {...props}>
      {children}
    </div>
  );
};

COMPONENT_NAME.TabList = TabList;
COMPONENT_NAME.Tab = Tab;
COMPONENT_NAME.TabPanels = TabPanels;
COMPONENT_NAME.TabPanel = TabPanel;

export default COMPONENT_NAME;