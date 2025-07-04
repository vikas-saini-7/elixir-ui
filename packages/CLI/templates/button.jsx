import React from 'react';
import { clsx } from 'clsx';

const Button = React.forwardRef(({ 
  children, 
  variant = 'default', 
  size = 'md', 
  disabled = false, 
  className,
  ...props 
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
  };

  const sizes = {
    sm: 'h-9 rounded-md px-3 text-xs',
    md: 'h-10 px-4 py-2',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10',
  };

  return (
    <button
      className={clsx(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };
