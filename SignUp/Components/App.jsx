import React from 'react';
import Header from './Header';
import SignupForm from './SignupForm';

const App = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden p-4 sm:p-6 lg:p-8">
            <Header />
            <SignupForm />
        </div>
    );
};

export default App;
