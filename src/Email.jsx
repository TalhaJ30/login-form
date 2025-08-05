import React from "react";

const Email = ({ emailinput, setemailinput, loginemailinput, logininput , borderColor}) => {
    return (
        <>
            {emailinput &&
                <div className="space-y-2">

                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                    </label>
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={logininput}
                            onChange={loginemailinput}
                            placeholder="Enter your email address"
                            className={`w-full px-4 py-3 outline-none border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300 placeholder-gray-400 text-gray-700 ${borderColor}`}
                            
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default Email;