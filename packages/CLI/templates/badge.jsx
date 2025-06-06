import clsx from "clsx";

const COMPONENT_NAME = ({ 
  children, 
  variant = "default", 
  size = "md",
  className, 
  ...props 
}) => {
  const variantStyles = {
    default: "bg-gray-100 text-gray-800",
    primary: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
  };

  const sizeStyles = {
    sm: "text-xs px-1.5 py-0.5",
    md: "text-xs px-2 py-1",
    lg: "text-sm px-2.5 py-1.5",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center justify-center font-medium rounded-full",
        variantStyles[variant] || variantStyles.default,
        sizeStyles[size] || sizeStyles.md,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default COMPONENT_NAME;