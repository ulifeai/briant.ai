import React from 'react';




const BannersComponent: React.FC = () => {
    return ( 
        <div>
            

            <section className="pb-8 bg-white sm:pb-12 lg:pb-12">
            <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-40">
                <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
                <div className="lg:mt-16">
                    <div className="mx-auto text-center sm:max-w-lg lg:max-w-xl lg:text-left lg:mx-0">
                    <h1
                        className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl xl:text-7xl sm:tracking-tight">
                        Meet the New Landingfolio Kit
                    </h1>
                    <p className="mt-6 text-lg leading-7 text-gray-700 lg:leading-8 lg:text-xl">
                        Clarity gives you the blocks & components you need to create a truly professional website, landing
                        page or admin panel
                        for your SaaS.
                    </p>
                    </div>

                    <div
                    className="flex flex-col items-stretch justify-center gap-4 mt-8 sm:flex-row sm:items-center sm:mt-10 lg:justify-start sm:flex-wrap">
                    <a href="#" title=""
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-primary border border-transparent rounded-full shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-700"
                        role="button">
                        Start using LandingFolio
                    </a>

                    <a href="#" title=""
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 transition-all duration-200 border border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                        role="button">
                        <svg className="w-6 h-6 mr-3 -ml-1 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Watch 1 min intro
                    </a>
                    </div>
                </div>
                </div>

                <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
                <div className="py-12 mt-6 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <div className="relative pl-10 -mr-40 sm:max-w-3xl lg:max-w-none lg:h-full lg:pl-24">
                    <img
                        className="w-full shadow-2xl rounded-xl  lg:rounded-2xl ring-[24px] lg:ring-[48px] ring-primary-100 lg:h-full lg:w-auto lg:max-w-none"
                        src="/placeholder-image.svg" alt=""/>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
  );
};

export default BannersComponent;
