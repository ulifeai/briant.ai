import React from 'react';

const FeaturessectionsComponent: React.FC = () => {
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-x-20 gap-y-12">
          <div className="grid overflow-hidden bg-primary-100 lg:col-span-3 rounded-3xl place-items-end">
            <img className="w-full -mb-8" src="/placeholder-image.svg" alt=""/>
          </div>

          <div className="lg:col-span-4 xl:pr-24">
            <div className="max-w-lg lg:max-w-none">
              <p className="text-base font-semibold text-primary">
                Real-time Analytics
              </p>
              <h2
                className="font-title mt-6 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:mt-8 lg:text-5xl lg:pr-8">
                Understand your customers with better reports.
              </h2>
              <div className="mt-8">
                <a href="#" title=""
                   className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-all duration-200 bg-primary border border-transparent rounded-full shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-700"
                   role="button">
                  Start using LandingFolio
                </a>
              </div>
            </div>

            <div className="pt-8 mt-12 border-t border-gray-200 md:mt-16 xl:mt-24">
              <p className="text-base font-normal leading-7 text-gray-900 xl:pr-24">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis
                ipsum, facilisi
                odio pellentesque bibendum viverra tempus.”
              </p>
              <p className="mt-3 text-base font-semibold text-gray-900">
                Grandon Jones
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default FeaturessectionsComponent;
