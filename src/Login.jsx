import React from "react";

const Login = ({ forgotBTN , togglebtn}) => {
    return (
        <>
            {/* Password Input */}
            <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <div className="relative">
                    <input
                        type="password"
                        id="password"
                        name="password"

                        placeholder="Enter your password"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300 placeholder-gray-400 text-gray-700"
                        required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input
                        id="remember"
                        name="remember"
                        type="checkbox"
                        onClick={togglebtn}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-all duration-200 hover:border-blue-400"
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer" >
                        Remember me
                    </label>
                </div>
                <a className="text-sm text-blue-600 cursor-pointer hover:text-blue-800 transition-colors duration-200 font-medium"
                    onClick={forgotBTN}>
                    Forgot password?
                </a>
            </div>

        </>
    )
}
export default Login