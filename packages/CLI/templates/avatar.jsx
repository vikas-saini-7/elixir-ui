import clsx from "clsx";

const COMPONENT_NAME = ({ 
  src, 
  alt = "", 
  size = "md",
  fallback,
  className, 
  ...props 
}) => {
  const sizeStyles = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  };

  const getFallback = () => {
    if (fallback) return fallback;
    if (alt) return alt.charAt(0).toUpperCase();
    return "U";
  };

  return (
    <div
      className={clsx(
        "relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-200",
        sizeStyles[size] || sizeStyles.md,
        className
      )}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      ) : (
        <span className="text-gray-600 font-medium">{getFallback()}</span>
      )}
    </div>
  );
};

export default COMPONENT_NAME;