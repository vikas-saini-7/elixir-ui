import clsx from "clsx";

const COMPONENT_NAME = ({ children, className, ...props }) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default COMPONENT_NAME;
