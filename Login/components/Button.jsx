import React from 'react';

export default function Button({
    children,
    onClick,
    type = "button",
    className = "",
    variant = "primary"
}) {
    const baseStyles = "flex items-center justify-center w-full h-12 px-6 rounded-lg text-sm font-bold leading-normal shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-background-dark transition-colors";

    const variantStyles = {
        primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary/50",
        secondary: "bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600 focus:ring-slate-400"
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
            {children}
        </button>
    );
}
