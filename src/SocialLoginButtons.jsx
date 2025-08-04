import React from "react";


const SocialLoginButtons = ({ SocialLogin, }) => {

    const items = [
        {
          icon : 'google-logo.png',
          name : 'Google',
        },
        {
            icon : 'facebook-logo.png',
            name : 'Facebook',
          },
          {
            icon : 'X-logo.png',
            name : 'X',
          },
    ]

  const button = (item) => {
    console.log(`{${item.name}} This the name of the soical account`);
    alert(`There is some issue in the ${item.name}`);
  }

    return (
        <>
            {SocialLogin &&
                <div>
                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or continue with</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 flex justify-center items-center  flex-wrap">
                        {items.map((item , index) => <div key={index}>
                            <button className="flex ml-2 cursor-pointer mr-2 mt-3 justify-center py-2 px-4 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 transform hover:scale-105" onClick={() => button(item)}>
                            <img src={item.icon} alt={'Edge'} className="h-6 w-6" />
                            <span className="ml-2 text-xl" style={{ fontSize: "17px" }}>{item.name}</span>
                        </button>
                        </div>)}
                       
                    </div>
                </div>
            }


        </>
    )
}

export default SocialLoginButtons;