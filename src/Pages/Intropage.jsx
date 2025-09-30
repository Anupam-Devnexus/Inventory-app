import React from 'react';

const Intropage = () => {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            {/* Main content */}
            <div className="flex flex-col md:flex-row items-center gap-12 p-6 md:p-12">
                {/* Logo */}
                <img
                    src="https://res.cloudinary.com/dt4ohfuwc/image/upload/v1754378902/DevNexus_logo-2_gtgade.png"
                    alt="Logo"
                    className="w-64 md:w-80 h-64 md:h-80 object-contain"
                />

                {/* Text */}
                <div className="flex flex-col items-start gap-4 md:gap-6">
                    <div className=''>  
                        <span className="block text-5xl md:text-7xl font-bold">Devnexus</span>
                        <span className="block text-4xl md:text-7xl font-medium">Solutions</span>
                    </div>

                    {/* Tagline */}
                    <div className="flex  text-lg md:text-2xl gap-2 text-gray-200">
                        <span>Innovative :</span>
                        <span>Build :</span>
                        <span>Grow</span>
                    </div>

                    {/* Button */}
                    <button className="mt-6 cursor-pointer md:mt-8 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300">
                        Let's Start
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Intropage;
