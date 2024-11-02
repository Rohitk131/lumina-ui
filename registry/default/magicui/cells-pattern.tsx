import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function CellsPattern() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-gradient-to-br from-gray-900 via-black to-gray-900">
            {/* Background grid effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
            
            {/* Main content */}
            <div className="relative z-10 w-full max-w-md p-8 animate-[fadeIn_0.5s_ease-out]">
                {/* Glow effect */}
                <div className="absolute -left-6 -top-6 w-72 h-72 bg-blue-500/80 rounded-full blur-3xl opacity-20" />
                <div className="absolute -right-6 -bottom-6 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl opacity-20" />
                
                {/* Content container */}
                <div className="relative overflow-hidden bg-gradient-to-b from-gray-900/20 to-gray-800/20 p-8 rounded-3xl border border-gray-700/20 shadow-2xl backdrop-blur hover:border-gray-600/50 transition-all duration-500">
                    {/* Animated highlight lines */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-shimmer" />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent animate-shimmer" />
                    
                    {/* Inner glow effects */}
                    
                    
                    <div className="relative space-y-8">
                        {/* Header section */}
                        <div className="space-y-2">
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent tracking-tight animate-[shine_6s_ease-in-out_infinite]">
                                Welcome back
                            </h1>
                            <p className="text-gray-400 text-lg transition-colors duration-300">
                                Sign in to continue to your account
                            </p>
                        </div>

                        {/* Auth buttons */}
                        <div className="space-y-4">
                            <button className="group relative flex items-center justify-center w-full px-6 py-4 bg-white hover:bg-gray-50 text-gray-900 rounded-2xl transition-all duration-300 overflow-hidden hover:scale-[1.02]">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer -z-10" />
                                <FcGoogle className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300" />
                                <span className="font-semibold">Continue with Google</span>
                            </button>

                            <button className="group relative flex items-center justify-center w-full px-6 py-4 bg-gray-800 text-white rounded-2xl transition-all duration-300 overflow-hidden border border-gray-700 hover:border-gray-600 hover:scale-[1.02]">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer -z-10" />
                                <FaGithub className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300" />
                                <span className="font-semibold">Continue with GitHub</span>
                            </button>
                        </div>

                        {/* Terms section */}
                        <div className="text-center">
                            <p className="text-sm text-gray-500">
                                By continuing, you agree to our{" "}
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors font-medium hover:underline">
                                    Terms of Service
                                </a>
                                {" "}and{" "}
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors font-medium hover:underline">
                                    Privacy Policy
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}