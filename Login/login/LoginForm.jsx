import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Logo from './Logo';

export default function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login submitted:', formData);
        // Add your login logic here
    };

    const handleForgotPassword = () => {
        console.log('Forgot password clicked');
        // Add forgot password logic here
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-sm rounded-xl bg-white dark:bg-background-dark p-4 md:p-5 shadow-lg dark:border dark:border-slate-800">
                <Logo />

                {/* Page Heading */}
                <div className="flex flex-wrap justify-between gap-1 mb-4">
                    <div className="flex w-full flex-col gap-1 text-center">
                        <p className="text-slate-900 dark:text-white text-2xl font-black leading-tight tracking-[-0.033em]">
                            Sign in to your account
                        </p>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
                            Manage your school projects all in one place.
                        </p>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    {/* Email Field */}
                    <Input
                        label="Email address"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    {/* Password Field */}
                    <Input
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        rightLabel="Forgot your password?"
                        onRightLabelClick={handleForgotPassword}
                        showPasswordToggle={true}
                    />

                    {/* Login Button */}
                    <Button type="submit" className="mt-2">
                        Log In
                    </Button>

                    {/* Sign Up Link */}
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-normal text-center mt-2">
                        Don't have an account?{' '}
                        <a className="font-bold text-primary underline hover:text-primary/80" href="/signup">
                            Sign up
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}
