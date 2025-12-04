import React, { useState } from 'react';

export default function Input({
    label,
    type = "text",
    placeholder = "",
    value,
    onChange,
    name,
    rightLabel,
    onRightLabelClick,
    showPasswordToggle = false,
    className = ""
}) {
    const [showPassword, setShowPassword] = useState(false);
    const inputType = showPasswordToggle ? (showPassword ? "text" : "password") : type;

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <label className={`flex flex-col w-full ${className}`}>
            {(label || rightLabel) && (
                <div className="flex justify-between items-baseline pb-2">
                    {label && (
                        <p className="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal">
                            {label}
                        </p>
                    )}
                    {rightLabel && (
                        <p
                            className="text-primary text-sm font-medium leading-normal underline cursor-pointer hover:text-primary/80"
                            onClick={onRightLabelClick}
                        >
                            {rightLabel}
                        </p>
                    )}
                </div>
            )}

            {showPasswordToggle ? (
                <div className="flex w-full flex-1 items-stretch">
                    <input
                        type={inputType}
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:border-primary dark:focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-[12px] pr-2 text-sm font-normal leading-normal border-r-0"
                    />
                    <div
                        className="text-slate-400 dark:text-slate-500 flex border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 items-center justify-center px-4 rounded-r-lg border-l-0 cursor-pointer hover:text-slate-600 dark:hover:text-slate-300"
                        onClick={handleTogglePassword}
                    >
                        <span className="material-symbols-outlined">
                            {showPassword ? 'visibility_off' : 'visibility'}
                        </span>
                    </div>
                </div>
            ) : (
                <input
                    type={inputType}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:border-primary dark:focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-[12px] text-sm font-normal leading-normal"
                />
            )}
        </label>
    );
}
