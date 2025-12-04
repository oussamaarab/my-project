import React from 'react';

export default function Logo() {
    return (
        <div className="flex justify-center mb-3">
            <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-3xl">
                    checklist
                </span>
                <p className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    ProjectFlow
                </p>
            </div>
        </div>
    );
}
