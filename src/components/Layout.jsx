import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-slate-900 text-white selection:bg-purple-500/30">
            {/* Background Gradients */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-600/20 rounded-full blur-[120px]" />
            </div>

            <Navbar />

            <main className="relative pt-24 px-4 sm:px-6 lg:px-8 pb-12 max-w-7xl mx-auto">
                {children}
            </main>
        </div>
    );
}
