import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-lg shadow-lg">
                            <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                            GPA Calculator <span className="text-xs font-normal text-gray-400 block sm:inline sm:ml-2">Anna University R2021</span>
                        </h1>
                    </div>
                    {/* Future: Theme toggle or other actions */}
                </div>
            </div>
        </nav>
    );
}
