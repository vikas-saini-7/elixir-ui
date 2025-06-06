import clsx from "clsx";

const COMPONENT_NAME = ({ 
  id,
  label,
  checked,
  onChange,
  disabled = false,
  className, 
  ...props 
}) => {
  return (
    <div className={clsx("flex items-center", className)}>
      <input
        id={id}
        type="checkbox"
        className={clsx(
          "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500",
          disabled && "cursor-not-allowed opacity-60"
        )}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      {label && (
        <label
          htmlFor={id}
          className={clsx(
            "ml-2 block text-sm",
            disabled ? "text-gray-400" : "text-gray-700"
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default COMPONENT_NAME;