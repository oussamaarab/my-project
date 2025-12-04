import React from 'react';
import LoginIllustration from './LoginIllustration';
import LoginForm from './LoginForm';

export default function Login() {
    return (
        <div
            className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark group/design-root"
            style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
        >
            <div className="w-full max-w-4xl p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Illustration */}
                    <LoginIllustration />

                    {/* Right Column: Login Form */}
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}
