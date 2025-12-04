import React from 'react';
import InputField from './InputField';
import Button from './Button';

const SignupForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form validation and submission logic here
        console.log('Form submitted');
    };

    return (
        <main className="w-full max-w-md">
            <div className="bg-white dark:bg-background-dark/80 backdrop-blur-sm rounded-xl shadow-lg p-8 md:p-10 border border-gray-200 dark:border-gray-800">
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-[#2D3748] dark:text-slate-50">
                        Create Your Account
                    </h1>
                    <p className="mt-2 text-base text-[#A0AEC0] dark:text-gray-400">
                        Manage your school projects efficiently.
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <InputField
                            label="Full Name"
                            type="text"
                            id="full-name"
                            name="full-name"
                            placeholder="Enter your full name"
                            icon="person"
                        />

                        <InputField
                            label="Email Address"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email address"
                            icon="mail"
                            autoComplete="email"
                        />

                        <InputField
                            label="Password"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            icon="lock"
                            showToggle={true}
                            autoComplete="new-password"
                        />

                        <InputField
                            label="Confirm Password"
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            placeholder="Confirm your password"
                            icon="lock"
                            showToggle={true}
                            autoComplete="new-password"
                        />
                    </div>

                    <div>
                        <Button type="submit">
                            Create Account
                        </Button>
                    </div>
                </form>

                <p className="mt-8 text-center text-sm text-[#A0AEC0] dark:text-gray-400">
                    Already have an account?{' '}
                    <a
                        className="font-medium text-primary hover:text-primary/80"
                        href="/login"
                    >
                        Log In
                    </a>
                </p>
            </div>
        </main>
    );
};

export default SignupForm;
