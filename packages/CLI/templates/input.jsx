import clsx from "clsx";

const COMPONENT_NAME = ({ className, ...props }) => {
  return (
    <input
      className={clsx(
        "px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500",
        className
      )}
      {...props}
    />
  );
};

export default COMPONENT_NAME;
