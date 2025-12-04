import React from 'react';

const Button = ({ children, type = 'button', onClick, className = '' }) => {
    return (
        <button
            className={`group relative flex w-full justify-center rounded-lg border border-transparent bg-primary py-3 px-4 text-base font-semibold text-white shadow-md shadow-primary/30 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark transition-colors duration-150 ease-in-out ${className}`}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
