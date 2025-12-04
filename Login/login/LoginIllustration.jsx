import React from 'react';

export default function LoginIllustration() {
    return (
        <div className="hidden md:flex flex-col items-center justify-center p-4">
            <div className="w-full max-h-80 rounded-xl flex items-center justify-center">
                <div
                    className="w-full h-80 bg-center bg-no-repeat bg-cover rounded-none"
                    style={{
                        backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAeUdhXUZCngPuwsYg_Zf3Z5tAS0PPHIIrmfisx3GYATS4iqf3WSAEWbXQ7MI5pbbOmLPdW2FTgJ5MSDpeE3ll6k3HadvVyQQLE5z7NYm8T8vxS-zPG57OQbs3wLvhGuOTcyqQ1VzcXtSQ7W83u5tOGsuxKbpfP0CCnDi1_6dqIJnoSix0U_iwj85oQQftprVol1VRNBry_Ohit6eEcZnYy5oNYYw_FyKvxrusN6sRq7tGthyqjzXCnkUWsQeHPWfCDXFnZbp4571g")',
                        backgroundSize: 'contain'
                    }}
                    role="img"
                    aria-label="An abstract illustration of people collaborating around a computer screen with charts and graphs, representing teamwork and project management."
                />
            </div>
            <div className="text-center mt-6">
                <p className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    Simplify Your School Projects
                </p>
                <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">
                    Organize, collaborate, and succeed together.
                </p>
            </div>
        </div>
    );
}
