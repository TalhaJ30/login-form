import React from "react";

const AcceptBTN = ({ init, buttonvalue, backBTN, backbutton, setvalue }) => {
    return (
        <>
            <button
                onSubmit={init}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
                {buttonvalue}
            </button>
            {backBTN &&
                <button
                    type="button"
                    className="w-full bg-white py-3 px-4 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl border-2 border-blue-300"
                    onClick={backbutton}
                >
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Back to login
                    </span>
                </button>
            }

        </>
    )
}

export default AcceptBTN;