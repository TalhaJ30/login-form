import React from "react";

const Accountlink = ({ Uplinkparavalue, SignUpLink, Uplinkvalue, accountlinkTF }) => {
    return (
        <>
            {accountlinkTF &&

                < p className="mt-6 text-center text-sm text-gray-600 selection-none">
                    {Uplinkparavalue}{' '}
                    <a
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors transition-underline duration-500 cursor-pointer"
                        onClick={SignUpLink}
                    >
                        {Uplinkvalue}
                    </a>
                </p >
            }

        </>
    )
}

export default Accountlink;