import clsx from "clsx";

const COMPONENT_NAME = ({ 
  width, 
  height,
  variant = "rectangular",
  className, 
  ...props 
}) => {
  const variantStyles = {
    rectangular: "rounded",
    circular: "rounded-full",
    text: "rounded h-4 w-2/3",
  };

  return (
    <div
      className={clsx(
        "animate-pulse bg-gray-200",
        variantStyles[variant] || variantStyles.rectangular,
        className
      )}
      style={{
        width: width || "100%",
        height: height || (variant === "text" ? "1rem" : "100px"),
      }}
      {...props}
    />
  );
};

export default COMPONENT_NAME;