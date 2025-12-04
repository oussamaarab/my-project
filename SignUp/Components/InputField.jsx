import React, { useState } from 'react';

const InputField = ({
    label,
    type,
    id,
    name,
    placeholder,
    icon,
    showToggle = false,
    autoComplete
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputType = showToggle ? (showPassword ? 'text' : 'password') : type;

    return (
        <div>
            <label
                className="text-sm font-medium text-[#2D3748] dark:text-gray-300"
                htmlFor={id}
            >
                {label}
            </label>
            <div className="relative mt-2">
                <span className="material-symbols-outlined pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-[#A0AEC0]">
                    {icon}
                </span>
                <input
                    className="form-input block w-full rounded-lg border-gray-200 bg-[#F7F8FA] dark:bg-gray-800 dark:border-gray-700 dark:text-slate-50 dark:placeholder:text-gray-500 py-3 pl-12 pr-12 text-base placeholder:text-[#A0AEC0] focus:border-primary focus:ring-primary focus:ring-opacity-50 transition duration-150 ease-in-out"
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    required
                    type={inputType}
                    autoComplete={autoComplete}
                />
                {showToggle && (
                    <button
                        className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#A0AEC0] hover:text-[#2D3748] dark:hover:text-slate-50"
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        <span className="material-symbols-outlined">
                            {showPassword ? 'visibility' : 'visibility_off'}
                        </span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default InputField;
