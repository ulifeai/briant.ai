import React from 'react';

const CareerssectionsComponent: React.FC = () => {
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="overflow-hidden bg-gray-100 rounded-3xl">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              <div className="col-span-2 px-8 py-12 text-center xl:px-12 xl:pr-24 lg:text-left lg:order-1">
                <h2 className="font-title text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  Meet the brain
                </h2>
                <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
                  Clarity gives you the blocks & components you need to create a truly professional website, landing page
                  or
                  admin panel
                  for your SaaS.
                </p>
              </div>
  
              <div className="relative overflow-hidden lg:order-2 group">
                <img className="object-cover w-full h-full transition-all duration-200 group-hover:scale-110"
                  src="https://landingfoliocom.imgix.net/store/collection/saasui/images/team/5/team-member-1.png" alt=""/>
                <div
                  className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80">
                </div>
                <div className="absolute bottom-0 left-0 w-full p-3 sm:py-5 sm:px-6">
                  <div className="scale-90 sm:scale-100">
                    <p className="text-base font-semibold text-white">
                      Albert Flores
                    </p>
                    <p className="mt-1 text-sm font-normal text-gray-300">
                      VP of Sales
                    </p>
                  </div>
                </div>
              </div>
  
              <div className="relative overflow-hidden lg:order-3 group">
                <img className="object-cover w-full h-full transition-all duration-200 group-hover:scale-110"
                  src="https://landingfoliocom.imgix.net/store/collection/saasui/images/team/5/team-member-2.png" alt=""/>
                <div
                  className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80">
                </div>
                <div className="absolute bottom-0 left-0 w-full p-3 sm:py-5 sm:px-6">
                  <div className="scale-90 sm:scale-100">
                    <p className="text-base font-semibold text-white">
                      Theresa Webb
                    </p>
                    <p className="mt-1 text-sm font-normal text-gray-300">
                      Business Development Manager
                    </p>
                  </div>
                </div>
              </div>
  
              <div className="relative overflow-hidden lg:order-5 group">
                <img className="object-cover w-full h-full transition-all duration-200 group-hover:scale-110"
                  src="https://landingfoliocom.imgix.net/store/collection/saasui/images/team/5/team-member-3.png" alt=""/>
                <div
                  className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80">
                </div>
                <div className="absolute bottom-0 left-0 w-full p-3 sm:py-5 sm:px-6">
                  <div className="scale-90 sm:scale-100">
                    <p className="text-base font-semibold text-white">
                      Savannah Nguyen
                    </p>
                    <p className="mt-1 text-sm font-normal text-gray-300">
                      Director of Product
                    </p>
                  </div>
                </div>
              </div>
  
              <div className="relative overflow-hidden lg:order-6 group">
                <img className="object-cover w-full h-full transition-all duration-200 group-hover:scale-110"
                  src="https://landingfoliocom.imgix.net/store/collection/saasui/images/team/5/team-member-4.png" alt=""/>
                <div
                  className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80">
                </div>
                <div className="absolute bottom-0 left-0 w-full p-3 sm:py-5 sm:px-6">
                  <div className="scale-90 sm:scale-100">
                    <p className="text-base font-semibold text-white">
                      Daniel Murphy
                    </p>
                    <p className="mt-1 text-sm font-normal text-gray-300">
                      Business Analyst
                    </p>
                  </div>
                </div>
              </div>
  
              <div className="relative overflow-hidden lg:order-7 group">
                <img className="object-cover w-full h-full transition-all duration-200 group-hover:scale-110"
                  src="https://landingfoliocom.imgix.net/store/collection/saasui/images/team/5/team-member-5.png" alt=""/>
                <div
                  className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80">
                </div>
                <div className="absolute bottom-0 left-0 w-full p-3 sm:py-5 sm:px-6">
                  <div className="scale-90 sm:scale-100">
                    <p className="text-base font-semibold text-white">
                      Darrell Steward
                    </p>
                    <p className="mt-1 text-sm font-normal text-gray-300">
                      Director of Sales
                    </p>
                  </div>
                </div>
              </div>
  
              <div className="flex items-end justify-start px-8 py-8 xl:px-12 lg:order-4">
                <a href="#" title=""
                  className="inline-flex items-center text-sm font-semibold text-gray-900 transition-all duration-200 group hover:text-gray-700 hover:underline">
                  See All Members
                  <svg
                    className="w-5 h-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"
                    stroke-linejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default CareerssectionsComponent;
