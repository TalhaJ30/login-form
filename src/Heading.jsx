import React from "react";

const Heading = ({mainheading , headingpara}) => {
    return (
        <>
            <div className="text-center mb-4">
                <h1 className="text-4xl font-medium text-blue-500 mb-2">
                    {mainheading}
                </h1>
                <p className="text-gray-600 text-lg">
                    {headingpara}
                </p>
            </div>
        </>
    )
}
export default Heading;