import React from "react";

const Alert = ({ signupalertvalue}) => {
    return(
        <>
          
                <div className="mt-4 flex items-center justify-center">
                    <div className="w-full max-w-xs bg-gradient-to-r from-red-100 via-pink-100 to-yellow-100 border-2 border-red-400 rounded-lg shadow-lg p-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="flex items-center space-x-3">
                            
                            <div>
                                <h1 className="text-base font-semibold text-red-600">{signupalertvalue}</h1>
                               
                            </div>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default Alert;