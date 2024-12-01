import clsx from "clsx";

const COMPONENT_NAME = ({ children, className, ...props }) => {
  return (
    <div
      className={clsx("p-4 border border-gray-200 rounded-md", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default COMPONENT_NAME;
