import React from 'react';

const CTAsectionsComponent: React.FC = () => {
    return (
    //     <section className="overflow-hidden bg-gray-50">
    //   <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    //     <div className="grid grid-row-1 lg:grid-row-2 lg:gap-x-16 gap-y-12">
    //       <div
    //         className="max-w-md pt-12 mx-auto text-center md:max-w-lg lg:max-w-none lg:mx-0 lg:text-left sm:pt-16 lg:py-40 md:self-center">
    //         <h2 className="font-title text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
    //           What are you waiting for, get the app now!
    //         </h2>
    //         <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
    //           Clarity gives you the blocks & components you need to create a truly professional website, landing page or
    //           admin panel
    //           for your SaaS and gives the blocks.
    //         </p>

    //         <ul className="mt-8 space-y-4 text-lg font-semibold text-left text-gray-800 sm:space-y-6 lg:text-xl sm:mt-12">
    //           <li className="flex items-center justify-center lg:justify-start">
    //             <svg className="w-6 h-6 mr-3 text-primary shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none"
    //               viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    //               <path stroke-linecap="round" stroke-linejoin="round"
    //                 d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    //             </svg>
    //             Suitable for use on any device
    //           </li>

    //           <li className="flex items-center justify-center lg:justify-start">
    //             <svg className="w-6 h-6 mr-3 text-primary shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none"
    //               viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    //               <path stroke-linecap="round" stroke-linejoin="round"
    //                 d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    //             </svg>
    //             Meetings can be started freely
    //           </li>
    //         </ul>

    //         <div className="mt-8 sm:mt-12">
    //           <a href="#" title=""
    //             className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-all duration-200 bg-primary border border-transparent rounded-full shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-700"
    //             role="button">
    //             Download Application
    //           </a>
    //         </div>
    //       </div>

    //       {/* <div className="-mb-72 md:self-end md:-mb-64 lg:-mb-48 xl:-mb-64">
    //         <img className="w-full max-w-md mx-auto" src="/placeholder-image.svg" alt="" //>
    //       </div> */}
    //       <div className="grid overflow-hidden bg-primary-100 lg:col-span-3 rounded-3xl place-items-end">
    //         <img className="w-full -mb-8" src="/placeholder-image.svg" alt=""//>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="py-12 bg-white sm:py-16 lg:py-20 xl:py-20">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">
        <div className="lg:order-2">
          <div className="grid gap-4 px-8 pt-12 bg-gray-200 rounded-3xl place-items-end sm:px-16 sm:pt-20">
            <img className="w-full" src="/placeholder-image.svg" alt=""/>
          </div>
        </div>

        <div className="lg:order-1">
          <h2 className="font-title text-3xl font-title font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            What are you waiting for, get the app now!
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
            Clarity gives you the blocks & components you need to create a truly professional website, landing page or
            panel for
            your SaaS and gives the blocks.
          </p>

          <div className="inline-grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 sm:mt-12">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-primary-600 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              <span className="text-lg font-medium text-gray-800 ml-2.5">
                Easy transactions
              </span>
            </div>

            <div className="flex items-center">
              <svg className="w-6 h-6 text-primary-600 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              <span className="text-lg font-medium text-gray-800 ml-2.5">
                Received money
              </span>
            </div>

            <div className="flex items-center">
              <svg className="w-6 h-6 text-primary-600 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              <span className="text-lg font-medium text-gray-800 ml-2.5">
                Flexible for use
              </span>
            </div>

            <div className="flex items-center">
              <svg className="w-6 h-6 text-primary-600 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              <span className="text-lg font-medium text-gray-800 ml-2.5">
                Record documents
              </span>
            </div>
          </div>

          {/* <div className="flex flex-col mt-8 space-y-5 sm:mt-12 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <a href="#" title="" className="transition-all duration-200 hover:-translate-y-1" target="_blank"
              rel="noopener">
              <img className="object-cover w-auto h-16" src="/placeholder-image.svg" alt=""/>
            </a>

            <a href="#" title="" className="transition-all duration-200 hover:-translate-y-1" target="_blank"
              rel="noopener">
              <img className="object-cover w-auto h-16" src="/placeholder-image.svg" alt=""/>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  </section>
    );
};

export default CTAsectionsComponent;
